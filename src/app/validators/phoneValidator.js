import PhoneFormatter from "../formatters/phoneFormatter";

export default class PhoneValidator {
  static #validPhoneRegexes = [
    /\(\d{2}\) \d{5}-\d{4}/,
    /\(\d{2}\) \d{4}-\d{4}/
  ];

  static make(event) {
    return (phone, currentEvent) => {
      const formattedPhone = PhoneFormatter.format(phone, currentEvent.nativeEvent.inputType);
      event.target.value = formattedPhone;
      return this.#validPhoneRegexes.some(regex => {
        return regex.test(formattedPhone) && formattedPhone.length >= 14 && formattedPhone.length <= 15;
      });
    };
  }
}