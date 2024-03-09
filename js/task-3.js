function checkForSpam(message) {
  if (message.toLowerCase().includes('spam')) {
    return true;
  } else if (message.toLowerCase().includes('sale')) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam('Trust me, this is not a spam message'));
console.log(checkForSpam('Latest technology news'));
