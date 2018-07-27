/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
export function formatGetUri (obj) {
  const params = []

  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined' || value === null) {
    } else {
      params.push([key, encodeURIComponent(value)].join('='))
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
  })

  return '?' + params.join('&')
}
/**
 * JSON转表单
 */
export function formatFormData (obj) {
  let formData = new FormData()

  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    // 如果值为undefined我们将其置空
    if (typeof value === 'undefined') {
      value = ''
    }

    formData.append(key, value)
  })

  return formData
}
/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
export function formatAreaData (arr) {
  let params = []

  arr.forEach((opt) => {
    let obj = {
      name: opt.name,
      value: opt.id + '',
      parent: opt.pid + ''
    }
    params.push(obj)
    if (opt.children !== 'undefined' && opt.children.length !== 0) {
      let data = formatAreaData(opt.children)
      params = [...params, ...data]
    }
  })

  return params
}
