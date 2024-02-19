const validator = {
  isRequired: (value) => {
    if (value) return true;
    return 'O preenchimento deste campo é obrigatório'
  },
  isEmail: (value) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(value) || 'Informe um e-mail válido'
  },
  isCpf: (value) => {
    console.log(value)
    let sum
    let rest;

    value = value.replace(/[^\d]/g, '');

    sum = 0;
    if (value == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(value.substring(9, 10))) return 'Informe um CPF válido';

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(value.substring(10, 11))) return 'Informe um CPF válido';
    return true;
  }
}

export default validator;
