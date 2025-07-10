export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  // Matches “123-456-7890” or “(123) 456-7890”
  const phoneRegex = /^($$\d{3}$$\s?|\d{3}[-\s])\d{3}[-\s]\d{4}$/
  return phoneRegex.test(phone)
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0
}

export function validateMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength
}
