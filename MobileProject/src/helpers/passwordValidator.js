export function passwordValidator(password) {
    if (!password) return "Password can't be empty."
    if (password.length < 6) return 'Password must be at least 6 characters long.'
    return ''
  }