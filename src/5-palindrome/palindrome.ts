export const isPalindrome = (str: string[]): string[] => {
  textoReverso = str.split('').reverse().join('');
  if (str === textoReverso) {
    return true;
  } else {
    return false;
  }
};
