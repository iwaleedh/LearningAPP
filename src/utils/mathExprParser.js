/**
 * Safe math expression evaluator — recursive descent parser.
 * Supports: +, -, *, /, ^, unary -, parentheses, constants (pi, e),
 * functions: sin, cos, tan, sqrt, ln, log, abs, exp.
 *
 * Usage: evaluateMathExpr('2*x^2 + sin(x)', 3) → numeric result
 */

const FUNCS = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: Math.sqrt,
  ln: Math.log,
  log: Math.log10,
  abs: Math.abs,
  exp: Math.exp,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
};

const CONSTS = {
  pi: Math.PI,
  e: Math.E,
};

class Parser {
  constructor(expr, x) {
    this.expr = expr;
    this.x = x;
    this.pos = 0;
  }

  peek() {
    this.skipWhitespace();
    return this.expr[this.pos] || '';
  }

  consume(ch) {
    this.skipWhitespace();
    if (this.expr[this.pos] === ch) { this.pos++; return true; }
    return false;
  }

  skipWhitespace() {
    while (this.pos < this.expr.length && /\s/.test(this.expr[this.pos])) this.pos++;
  }

  // Grammar: expr = term (('+' | '-') term)*
  parseExpr() {
    let result = this.parseTerm();
    while (true) {
      if (this.consume('+')) result += this.parseTerm();
      else if (this.consume('-')) result -= this.parseTerm();
      else break;
    }
    return result;
  }

  // term = unary (('*' | '/') unary)* (implicit multiplication: 2x, 3sin(x))
  parseTerm() {
    let result = this.parseUnary();
    while (true) {
      if (this.consume('*')) result *= this.parseUnary();
      else if (this.consume('/')) {
        const d = this.parseUnary();
        // Preserve IEEE 754 signs and NaN; plotFunction filters nonfinite results.
        result /= d;
      }
      // Implicit multiplication: digit/variable followed by letter or '('
      else if (this.pos < this.expr.length) {
        const ch = this.expr[this.pos];
        if (ch === '(' || (ch >= 'a' && ch <= 'z')) {
          // Only if we just consumed a number/variable/close-paren
          result *= this.parseUnary();
        } else break;
      } else break;
    }
    return result;
  }

  // power = atom ('^' unary)? — right associative, above unary minus.
  parsePower() {
    let base = this.parseAtom();
    if (this.consume('^')) {
      const exp = this.parseUnary();
      base = Math.pow(base, exp);
    }
    return base;
  }

  // unary = ('-' | '+') unary | power
  parseUnary() {
    if (this.consume('-')) return -this.parseUnary();
    if (this.consume('+')) return this.parseUnary();
    return this.parsePower();
  }

  // atom = number | '(' expr ')' | function(expr) | variable | constant
  parseAtom() {
    this.skipWhitespace();

    // Parenthesized expression
    if (this.consume('(')) {
      const val = this.parseExpr();
      if (!this.consume(')')) throw new Error('Missing closing parenthesis');
      return val;
    }

    // Number literal
    if ((this.expr[this.pos] >= '0' && this.expr[this.pos] <= '9') || this.expr[this.pos] === '.') {
      const literal = this.expr.slice(this.pos).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/);
      if (!literal) throw new Error('Invalid number');
      this.pos += literal[0].length;
      return Number(literal[0]);
    }

    // Identifier: variable, constant, or function
    if (this.expr[this.pos] >= 'a' && this.expr[this.pos] <= 'z') {
      let name = '';
      while (this.pos < this.expr.length && this.expr[this.pos] >= 'a' && this.expr[this.pos] <= 'z') {
        name += this.expr[this.pos++];
      }

      // Variable x
      if (name === 'x') return this.x;

      // Known function
      if (Object.hasOwn(FUNCS, name)) {
        if (!this.consume('(')) throw new Error('Missing function parenthesis');
        const arg = this.parseExpr();
        if (!this.consume(')')) throw new Error('Missing closing parenthesis');
        return FUNCS[name](arg);
      }

      // Known constant
      if (Object.hasOwn(CONSTS, name)) return CONSTS[name];

      return NaN; // unknown identifier
    }

    return NaN;
  }
}

/**
 * Evaluate a math expression string for a given x value.
 * @param {string} expr — e.g. '2*x^2 + sin(x)'
 * @param {number} x
 * @returns {number}
 */
export function evaluateMathExpr(expr, x) {
  try {
    const parser = new Parser(expr.toLowerCase().trim(), x);
    const result = parser.parseExpr();
    return parser.peek() === '' ? result : NaN;
  } catch {
    return NaN;
  }
}

/**
 * Generate (x, y) data points for a function expression over a range.
 * @param {string} expr
 * @param {number} xMin
 * @param {number} xMax
 * @param {number} [steps=200]
 * @returns {{ x: number, y: number }[]}
 */
export function plotFunction(expr, xMin, xMax, steps = 200) {
  if (!Number.isFinite(xMin) || !Number.isFinite(xMax)
      || !Number.isSafeInteger(steps) || steps <= 0) return [];
  const points = [];
  const dx = (xMax - xMin) / steps;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + i * dx;
    const y = evaluateMathExpr(expr, x);
    if (Number.isFinite(y)) {
      points.push({ x, y });
    }
  }
  return points;
}
