export function aufgabe01(args) {
  const input = args        
  const result = []                       //Konstanten definieren

  for (let i = 0; i < input.length; i++) {      //führt die schleife aus, solange bis die erstellte Variabel "i" nicht mehr kleiner ist als die Zeichenmenge des eingegebenen, und addiert vor dem Durchlaufen eins zu "i"
    const currentElement = input[i]             //wählt als Aktuelles Element das Element mit Index "i" im Array aus

    if (currentElement === "e" || currentElement === "E") {   //Wenn ein kleines oder grosses "e/E" enthalten ist...
                                                              //..passiert nichts 
    } else {                                                  //sonst...
      result.push(currentElement)                             //...sende aktuelles Element in den "result" Array
    }
  }
  return result.join("")                                      //gesamten "result" Array ausgeben.   
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())               //schreibe das aktuell gewählte Zeichen als Grossbuchstaben ins Resultat
  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  let count = 0
                            
    for (let i = 0; i < input.length; i++) {          
      const currentElement = input[i]
      if (currentElement.toLowerCase() === "e" ) {
        count++
      }
    }
    return count
}

export function aufgabe04(args) {
  const input = args
  let count = 1
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count++
    }
  }
  return count
}

export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true
  if(input.length <= 6 || 6 <= input.length) return false

}

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if(48 <= ascii && ascii <=57) {
      //Ist eine Ziffer
    } else if (65 <= ascii && ascii <= 70) {
      //Ist A-F
    } else {
      return false
    }
  }

  return true
}

export function aufgabe11 (args) {
  const input = args
  
  if(input.length !== 1) return null
  return input[0].charCodeAt(0)
}