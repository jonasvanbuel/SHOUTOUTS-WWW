export function addInvisibleClassToElement(element) {
  if (!element.classList.contains('invisible')) {
    element.classList.add('invisible');
  }
}
