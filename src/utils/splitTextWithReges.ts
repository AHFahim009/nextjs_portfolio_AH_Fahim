const splitTextWithReges = (inputText: string) => {
  const characters: string[] = []
  const regex = /[\s\S]/gu;
  let match;
  while ((match = regex.exec(inputText)) !== null) {
    characters.push(match[0])
  }
  return characters
}

export default splitTextWithReges