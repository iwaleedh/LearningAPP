let pdfJsPromise = null;

function ensurePdfJsPolyfills() {
  if (typeof Map !== 'undefined' && !Map.prototype.getOrInsertComputed) {
    Map.prototype.getOrInsertComputed = function (key, callbackfn) {
      if (!this.has(key)) this.set(key, callbackfn(key));
      return this.get(key);
    };
  }
}

const PDF_WORKER_SRC = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export async function loadPdfJs() {
  ensurePdfJsPolyfills();

  if (!pdfJsPromise) {
    pdfJsPromise = import('pdfjs-dist').then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_WORKER_SRC;
      return pdfjsLib;
    });
  }

  return pdfJsPromise;
}
