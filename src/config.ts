export const matrixId = (() => {
    const element = document.querySelector('script[data-matrix-id]');
    return element ? element.getAttribute('data-matrix-id') : '1';
  })();
  
  export const apiUrl = (() => {
    const element = document.querySelector('script[data-api-url]');
    return element ? element.getAttribute('data-api-url') || "" : "";
  })();