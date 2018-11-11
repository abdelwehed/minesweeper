export default class NumberFormat {
  format = (number) => {
    return number > 9 ? "" + number: "0" + number;
 }
}