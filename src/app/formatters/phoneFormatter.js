export default class PhoneFormatter {
  static format(phone) {
    if (phone.length === 2) {
      return this.#addDDDtoPhone(phone);
    }
    if (phone.length === 9) {
      return this.#addDashToPhone(phone);
    }
    if (phone.length === 15) {
      return this.#replaceDashPositionForCellphone(phone);
    }
    return phone;
  }

  static #replaceDashPositionForCellphone(phone) {
    return phone.replace(/-(\d)/, "$1-");
  }

  static #addDashToPhone(phone) {
    return phone.replace(/(\(\d{2}\))\s(\d{4})/, "$1 $2-");
  }

  static #addDDDtoPhone(phone) {
    return phone.replace(/(\d{2})/, "($1) ");
  }
}
