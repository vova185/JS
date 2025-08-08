function validate(str) {
  const vowels = 'aeiouаеёиоуыэюя';
  return [...str].filter(char => !vowels.includes(char.toLowerCase())).join('');
  };
console.log(validate('LfyteaaoiвмвеаоEFAAfцbkftE'))