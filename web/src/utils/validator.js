const validator = {
  isRequired: (value) => {
    if (value) return true;
    return 'Field is required'
  },
}

export default validator;
