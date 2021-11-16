/**
 * 读取本地存储
 * @param {String} key
 */
export const get = (key) => {
  const value = localStorage.getItem(key)
  if (!value) return null
  try {
    return JSON.parse(value)
  } catch (error) {
    console.log(`localStorage[${key}] is wrong`)
    return null
  }
}

/**
 * 本地存储
 * @param {String} key
 * @param {any} value
 */
export const save = (key, value) => {
  try {
    const data = typeof value === 'object' ? JSON.stringify(value) : value
    localStorage.setItem(key, data)
  } catch (error) {
    console.log('setItem error', error)
  }
}

/**
 * 删除本地存储
 * @param {String} key
 */
export const remove = (key) => {
  localStorage.removeItem(key)
}

export const clear = () => {
  localStorage.clear()
}
