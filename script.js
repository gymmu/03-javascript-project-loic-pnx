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
  const result = []

  const inputArray = input.split('');                                             //teilt die Eingabe in eine eigene Liste - inputArray
  const eCount = inputArray.filter(char => char === 'e' || char === 'E').length;  //zählt die Anzahl E im inputArray

  if (eCount >= 4) {                                  //wenn die Anzahl an E grösser|gleich 4 ist...
    for (let i = 0; i < input.length; i++) {          
      const currentElement = input[i]
      result.push(currentElement)
    }
  }
    return result.join("")

}

export function aufgabe04 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}