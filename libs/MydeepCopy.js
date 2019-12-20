const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'

function getType(target) {
  return Object.prototype.toString.call(target)
}

function forEach(array, callback) {
  let index = -1
  const length = array.length
  while (++index < length) {
    callback(array[index], index)
  }
}

export function clone (target, map = new WeakMap()) {
  console.log(getType(target))
  if (typeof target === 'object') {
    const isArray = Array.isArray(target)
    let cloneTarge = isArray ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarge)
    let keys = isArray ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarge[key] = clone(target[key], map)
    })
    return cloneTarge
  } else {
    return target
  }
}