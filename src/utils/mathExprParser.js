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
    while (this.pos < this.expr.length && this.expr[this.pos] === ' ') this.pos++;
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

  // term = power (('*' | '/') power)*   (implicit multiplication: 2x, 3sin(x))
  parseTerm() {
    let result = this.parsePower();
    while (true) {
      if (this.consume('*')) result *= this.parsePower();
      else if (this.consume('/')) {
        const d = this.parsePower();
        // Division by zero: return Infinity (IEEE 754) rather than NaN.
        // plotFunction already filters !isFinite(y) so Infinity is silently dropped.
        result = d === 0 ? Infinity : result / d;
      }
      // Implicit multiplication: digit/variable followed by letter or '('
      else if (this.pos < this.expr.length) {
        const ch = this.expr[this.pos];
        if (ch === '(' || (ch >= 'a' && ch <= 'z')) {
          // Only if we just consumed a number/variable/close-paren
          result *= this.parsePower();
        } else break;
      } else break;
    }
    return result;
  }

  // power = unary ('^' unary)*
  parsePower() {
    let base = this.parseUnary();
    if (this.consume('^')) {
      const exp = this.parseUnary();
      base = Math.pow(base, exp);
    }
    return base;
  }

  // unary = ('-')* atom
  parseUnary() {
    if (this.consume('-')) return -this.parseUnary();
    if (this.consume('+')) return this.parseUnary();
    return this.parseAtom();
  }

  // atom = number | '(' expr ')' | function(expr) | variable | constant
  parseAtom() {
    this.skipWhitespace();

    // Parenthesized expression
    if (this.consume('(')) {
      const val = this.parseExpr();
      this.consume(')');
      return val;
    }

    // Number literal
    if ((this.expr[this.pos] >= '0' && this.expr[this.pos] <= '9') || this.expr[this.pos] === '.') {
      let numStr = '';
      while (this.pos < this.expr.length &&
             ((this.expr[this.pos] >= '0' && this.expr[this.pos] <= '9') || this.expr[this.pos] === '.')) {
        numStr += this.expr[this.pos++];
      }
      return parseFloat(numStr);
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
      if (FUNCS[name]) {
        this.consume('(');
        const arg = this.parseExpr();
        this.consume(')');
        return FUNCS[name](arg);
      }

      // Known constant
      if (CONSTS[name] !== undefined) return CONSTS[name];

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
    return parser.parseExpr();
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
