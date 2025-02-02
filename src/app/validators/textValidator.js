export default class TextValidator {
  static make() {
    return (text) => {
      return text.length > 0;
    }
  }
}