export function isValidURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

export function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}