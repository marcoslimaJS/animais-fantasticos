export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function hundleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //  verifica se o elemento clicado foi fora do LI, caso sim ira remover
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, hundleOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, hundleOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
