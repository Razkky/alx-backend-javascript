export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === 'string') {
    const newSet = [];
    set.forEach((element) => {
      if (element.startsWith(startString) && startString !== '') {
        newSet.push(element.slice(startString.length));
      }
    });
    return newSet.join('-');
  }
  return '';
}
