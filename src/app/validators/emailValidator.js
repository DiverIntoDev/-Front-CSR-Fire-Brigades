export default class EmailValidator {
  static make() {
    return (email) => {
      return email.includes("@") && (email.endsWith(".com") || email.endsWith(".com.br"));
    }
  }
}