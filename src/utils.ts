const generateCode = (): string => {
  const numbers = '0123456789'
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const chars = numbers + letters
  const codeLength = 5
  let newCode = ''

  for (let i = 0; i < codeLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    newCode += chars[randomIndex]
  }
  return newCode
}
export default generateCode
