function validateCreditCard(number) {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;
  const amexRegex = /^3[47][0-9]{13}$/;
  const dinersRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
  const enrouteRegex = /^(2014|2149)[0-9]{11}$/;
  const voyagerRegex = /^8699[0-9]{11}$/;
  const hipercardRegex = /^(606282\d{10}(\d{3})?)|(3841\d{15})$/;
  const auraRegex = /^50[0-9]{14,17}$/;

  if (visaRegex.test(number)) {
    return 'Visa';
  } else if (mastercardRegex.test(number)) {
    return 'Mastercard';
  } else if (amexRegex.test(number)) {
    return 'American Express';
  } else if (dinersRegex.test(number)) {
    return 'Diners Club';
  } else if (discoverRegex.test(number)) {
    return 'Discover';
  } else if (jcbRegex.test(number)) {
    return 'JCB';
  } else if (enrouteRegex.test(number)) {
    return 'Enroute';
  } else if (voyagerRegex.test(number)) {
    return 'Voyager';
  } else if (hipercardRegex.test(number)) {
    return 'Hipercard';
  } else if (auraRegex.test(number)) {
    return 'Aura';
  } else {
    return 'Invalid card number';
  }
}

// Example usage:
console.log(validateCreditCard('4532123456788888')); // Visa
console.log(validateCreditCard('5555555555554444')); // Mastercard
console.log(validateCreditCard('371449635398431')); // American Express
console.log(validateCreditCard('6011111111111117')); // Discover
console.log(validateCreditCard('30569309025904')); // Diners Club
console.log(validateCreditCard('3530111333300000')); // JCB
console.log(validateCreditCard('201412345678901')); // Enroute
console.log(validateCreditCard('869912345678901')); // Voyager
console.log(validateCreditCard('6062828888666688')); // Hipercard
console.log(validateCreditCard('5078601870000127')); // Aura
