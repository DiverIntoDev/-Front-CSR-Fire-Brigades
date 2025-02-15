export default class PhoneFormatter {
  static format(phone) {
    if (phone.length === 2) {
      return `(${phone}) `;
    }
    if (phone.length === 9) {
      return `${phone}-`;
    }
    if (phone.length === 15) {
      // replace (12) 1234-12345 to (12) 12345-1234
      return phone.replace(/(\(\d{2}\))\s(\d{4})-(\d{5})/, "$1 $3-$2");
    }
    return phone.replace(/(\d{2})(\d{4})-(\d{5})/, "($1) $2-$3");
  }
}