export function covertISOToDate(value: string) {
  const year = new Date(value).getFullYear()
  const month = new Date(value).getMonth() + 1
  const date = new Date(value).getDate()
  return `${year}-${month}-${date}`
}

// Xóa dấu tiếng Việt
const removeVietnameseTones = (str: string) => {
  return str
    .normalize('NFD') // Tách các dấu ra khỏi chữ
    .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các dấu
    .replace(/đ/g, 'd') // Chuyển đ -> d
    .replace(/Đ/g, 'd') // Chuyển Đ -> d
}

// Xóa ký tự đặc biệt
const removeSpecialCharacter = (str: string) => str.replace(/[^a-zA-Z0-9\s]/g, '') // Chỉ giữ lại chữ, số và khoảng trắng

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  const noTone = removeVietnameseTones(name)
  const noSpecial = removeSpecialCharacter(noTone)
  const slug = noSpecial.trim().toLowerCase().replace(/\s+/g, '-') // thay khoảng trắng bằng dấu gạch ngang
  return `${slug}-p-${id}`
}

export const getIdFromNameId = (nameId: string) => {
  const nameArray = nameId.split('-p-')
  return nameArray[nameArray.length - 1]
}
