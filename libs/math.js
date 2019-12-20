export function sq (x) {
  return x * x
}

export function add () {
  let args = Array.prototype.slice.apply(arguments)
  return args.reduce((x, y) => x + y)
}