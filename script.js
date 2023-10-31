export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e" || currentElement === "E") {

    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())
  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []

  const inputArray = input.split('');
  const eCount = inputArray.filter(char => char === 'e' || char === 'E').length;

  if (eCount >= 4) {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      result.push(currentElement)
    }
  }
    return result.join("")

}
