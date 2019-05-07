export default function (ammount, symbol) {
  return `${symbol}${ammount.toFixed(2)}`;
}
