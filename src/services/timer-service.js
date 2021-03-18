export class TimeService {
  static formatDate(date) {
    let formatDate = new Intl.DateTimeFormat("es-ES", {
      dateStyle: "short",
    });
    return formatDate.format(new Date(date));
  }
}
