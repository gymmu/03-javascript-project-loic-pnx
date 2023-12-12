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
    result.push(currentElement.toUpperCase()) //schreibe das aktuell gewählte Zeichen als Grossbuchstaben ins Resultat
  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  let count = 0     //counter Variabel wird erstellt
                            
    for (let i = 0; i < input.length; i++) {          
      const currentElement = input[i]
      if (currentElement.toLowerCase() === "e" ) {      //wenn es sich beim currenElement um ein e oder E handelt 
        count++    //wird der zähler erhöht
      }
    }
    return count
}

export function aufgabe04(args) {
  let input = args.replace(/[^a-zA-Z0-9 ]/g, "");     //Im input wird alles was nicht ein Buchstabe oder eine Zahl ist gelöscht
  let count = 1;
  if (input.lastIndexOf(' ') == input.length - 1) count--     //wenn das letzte Zeichen ein Leerzeichen ist, wird der Startwert von counter eins niedriger gesetzt
  if (input[0] == " ") count--      //wenn das erste Zeichen ein Leerzeichen ist, wird der Startwert von counter eins niedriger gesetzt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    if (currentElement === " " && input[i-1] !== " ") {     //wenn das aktuelle Zeichen ein Leerzeichen ist, und das vorherige nicht ein Leerzeichen ist (weil dann schon ein Wort gezählt wurde) wird der Wortcounter erhöht
      count++
    }
  }
  return count;
}

export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)     //der ASCII code des aktuellen Elements wird gespeichert
   
    if (65 <= currentAscii && currentAscii <=90) return true    //wenn der ASCII code des aktuellen Elements zwischen 65 und 90 (Großbuchstaben) liegen, wird true zurückgegeben
    
  }
  return false
}

export function aufgabe06 (args) {
  const input = args

  if (input.length <= 0) return false
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)

    if(0 <= ascii && ascii <=31) return true   //wenn der ASCII Code zwischen 0 und 31 liegt, wird true zurückgegeben
    else if ( 127 <= ascii && ascii <= 159) return true   //wenn der ASCII Code zwischen 127 und 159 liegt, wird true zurückgegeben
    else if ( 33<= ascii && ascii <= 47) return true      //wenn der ASCII Code zwischen 33 und 47 liegt, wird true zurückgegeben 
    else if (58 <= ascii && ascii <= 64) return true      //wenn der ASCII Code zwischen 58 und 64 liegt, wird true zurückgegeben
    else if (91 <= ascii && ascii <= 96) return true      //wenn der ASCII Code zwischen 91 und 96 liegt, wird true zurückgegeben
    else if (123 <= ascii && ascii <= 127) return true      //wenn der ASCII Code zwischen 123 und 127 liegt, wird true zurückgegeben
  
  }
  return false
}



export function aufgabe07 (args) {
  const input = args
  const result = []
  
  if(input[0] === "U") {
    if(input[1] === "n") {
      if(input[2] ==="d") {
        return true
      }
    }
  }
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "u") {                 //wenn das aktuelle Element ein "u" ist, wird...
      if(input[i +1] === "n") {                  //wenn das nächste Element ein "n" ist, wird...
        if(input[i + 2] === "d") {               //wenn das dritte Element ein "d" ist, wird...
          return true                            //... true zurückgegeben
        }
      }
    }
  }
  return false
}


export function aufgabe08(args) {
  const input = args        
  const result = []                     

  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        

    if (currentElement === "e") {   
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)                             
    }
  }
  return result.join("")                                        
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

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      return i
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  let latestE = -1
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      latestE = i
    }
  }
  return latestE

}

export function aufgabe14 (args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement == "e") {
      count++
    }
  }
  if (count == input.length) return(2)
  else return(-1)
}

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
  } else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      } else {
        return result.join("")
      }
    }

  }

  return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const result1 = []
  const result2 = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "$" && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        result1.push(currentElement)
      }
      else if (readText === false) {
        result2.push(currentElement)
      }
    }
  }
  if (result2.join("") !== "") {
  return result1.join("") + "," + result2.join("")
  } else {
    return result1.join("")
  }
}

export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  result.push(currentElement)
  result.push(currentElement)
}

  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false
    else if(currentElement == "." && input[i+1] == " ") return true
  }

  return result.join("")
}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  result.push(currentElement)
}

  return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (input[i] !== "k" && input[i+1] !== "i" && input[i+2] !== "e" && input[i+3] !== "r") result.push("_")

  }

  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []

if (input.lenght === 1) return input

const firstELement = input[0]
const lastElement = input[input.length - 1]

  result.push(lastElement)
  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstELement)
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt(0)
    
    if (47 >= currentElement || currentElement >= 58) return false
  }
  if (input.length < 1) return false
  return true
}

export function aufgabe28 (args) {
  const input = args
  const inputFirst = []
  const inputSecond = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputFirst.push(currentElement)
      }
      else if (readText === false) {
        inputSecond.push(currentElement)
      }
    }
  }
  return inputFirst.join("") + inputSecond.join("")
}