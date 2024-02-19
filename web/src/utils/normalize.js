const normalize = {
  formatDate: (date) => {
    if (date != null) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = ("0" + (d.getMonth() + 1)).slice(-2);
      const day = ("0" + d.getDate()).slice(-2);
      const hours = ("0" + d.getHours()).slice(-2);
      const minutes = ("0" + d.getMinutes()).slice(-2);
      return `${day}/${month}/${year} as ${hours}:${minutes}`;
    }
    return 'User not log in yet'
  },
  formatCpf: (cpf) => {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
      return "Invalid CPF. Must have 11 digits.";
    }
    let formattedCPF = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);

    return formattedCPF;
  }
}

export default normalize;
