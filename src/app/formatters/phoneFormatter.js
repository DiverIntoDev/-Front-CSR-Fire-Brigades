export default class PhoneFormatter {
  static format(phone) {
    if (phone.length === 2) {
      return `(${phone}) `;
    }
    if (phone.length === 9) {
      return `${phone}-`;
    }
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
}