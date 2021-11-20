import { get } from '@/utils/storage'
// Tag COLOR_LIST
const COLOR_LIST = [
  'magenta',
  'blue',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'geekblue',
  'purple',
]

// =========  获取 JWT   =========
export function getToken() {
  let token = ''
  const userInfo = get('userInfo')
  if (userInfo && userInfo.token) {
    token = 'Bearer ' + userInfo.token
  }
  return token
}

// =========  获取数组长度范围内的随机数   =========
export const randomIndex = (arr) => Math.floor(Math.random() * arr.length)

// =========  随机获取tag颜色   =========
export function getTagColor() {
  return COLOR_LIST[randomIndex(COLOR_LIST)]
}

// =========  从对象中移除为“”的属性   =========
export function removeEmptyFromObj(obj) {
  for (let i in obj) {
    if (obj[i] === '') delete obj[i]
  }
  return obj
}

export const Default_Params = {
  keyword: '',
  page: 1,
  pageSize: 10,
  tag: '',
  catogery: '',
}
