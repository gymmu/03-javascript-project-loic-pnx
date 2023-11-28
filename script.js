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

export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    
  }
  return false
}

export function aufgabe06 (args) {
  const input = args

  if (input.length <= 0) return false
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)

    if(0 <= ascii && ascii <=31) return true
    else if ( 33<= ascii && ascii <= 47) return true
    else if (58 <= ascii && ascii <= 64) return true
    else if (91 <= ascii && ascii <= 96) return true
    else if (123 <= ascii && ascii <= 127) return true
  
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
  let switch = false

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    
    if (currentElement == "$") {
      const switch = true
    }

    if (switch = false) {
      result1.push(currentElement)
    }

    if (switch = true) {
      result2.push(currentElement)
    }
  }
  return(result1.join(""), result2.join(""))
}

export function aufgabe27 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt(0)
    
    if (input.length == 0) return false
    if (47 >= currentElement || currentElement >= 58) return false
  }
  return true
}