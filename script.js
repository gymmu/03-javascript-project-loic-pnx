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
  
  if(input[0] === "U") {            //wenn das erste Element ein "U" ist, wird...
    if(input[1] === "n") {          //wenn das zweite Element ein "n" ist, wird...
      if(input[2] ==="d") {         //wenn das dritte Element ein "d" ist, wird...
        return true                  //... true zurückgegeben
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

    if (currentElement === "e") {       //wenn das aktuelle Element ein "e" ist, wird...
      result.push(3)                    //... 3 in den "result" Array gespeichert
    } else {                            //sonst wird...                     
      result.push(currentElement)       //... das aktuelle Element in den "result" Array gespeichert
    }
  }
  return result.join("")                                        
}


export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true          //wenn die Länge der Eingabe 6 ist, wird true zurückgegeben
  if(input.length <= 6 || 6 <= input.length) return false         //wenn die Länge der Eingabe kleiner oder grösser als 6 ist, wird false zurückgegeben

}

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false             //wenn die Länge der Eingabe nicht 7 ist, wird false zurückgegeben
  if(input[0] !== "#") return false               //wenn das erste Element nicht ein "#" ist, wird false übergegeben
  for (let i = 1; i < input.length; i++) {  
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if(48 <= ascii && ascii <=57) {               //wenn das aktuelle Element eine Ziffer ist (ascii Code zwischen 48 und 57), wird nichts gemacht
      
    } else if (65 <= ascii && ascii <= 70) {      //wenn das aktuelle Element ein Grossbuchstaben ist (ascii Code zwischen 65 und 70), wird nichts gemacht
      
    } else {
      return false                                //wenn das aktuelle Element nicht eine Ziffer oder ein Grossbuchstabe ist (vorherige Prüfung), wird false zurückgegeben
    }
  }

  return true
}

export function aufgabe11 (args) {
  const input = args
  
  if(input.length !== 1) return null            //wenn die Länge der Eingabe nicht 1 ist, wird null zurückgegeben (Test um die richtigkeit der Eingabe zu prüfen)
  return input[0].charCodeAt(0)                 //wenn die Länge der Eingabe 1 ist, wird der ASCII Code des ersten Elements zurückgegeben
}

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      return i                                //gibt die aktuelle Prüfungspoition "i" zurück wenn es sich dabei um ein e handelt
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  let latestE = -1                          //variabel um das letzt gefundene e zu speichern - ist -1 damit es bei Texten ohne "e" nicht den 0. Index als Lösung zeigt
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      latestE = i                          //speichert das letzt gefundene e in der variabel
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
      if (count === 3) return (i)               //sobald der Counter 3 erreicht hat, wird die aktuelle Prüfungspoition (i) zurückgegeben
    }
  }
  if (count == input.length) return(2)          //wenn der Counter der Eingabelänge entspricht (und somit nur e's vorkommen) wird 2 zurückgegeben
  if (count < 3) return(-1)                     //wenn der Counter kleiner als 3 ist, wird -1 zurückgegeben (zu wenige e's damit es überhaupt 3 haben kann)
  
}

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {     //wenn der letzte Ort an dem ein Leerzeichen vorkommt, das letzte Zeichen ist...
      for (let i = 0; i < input.length - 1; i++) {      //... wird die schleife einmal weniger ausgeführt als normal, damit dieses Leerzeichen ignoriert wird.
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
  let readText = true                   //variabel die als Schalter verwendet werden wird

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "$" && readText !== false) {     //wenn das aktuelle Element ein $ ist und der Schalter readText nicht false ist...
      readText = false                                      //... wird readText auf false gesetzt
    } else {
      if (readText === true) {                              //wenn das Schalter readText true ist...
        result1.push(currentElement)                        //... wird das aktuelle Element in result1 geschrieben
      }
      else if (readText === false) {                        //wenn das Schalter readText false ist...
        result2.push(currentElement)                        //... wird das aktuelle Element in result2 geschrieben
      }
    }
  }
  if (result2.join("") !== "") {                            //wenn result2 nicht leer ist...
  return result1.join("") + "," + result2.join("")          //... wird result1 und result2 zusammengesetzt
  } else {                                                  //sonst...
    return result1.join("")                                 //... wird nur result1 zurückgegeben
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
  //4 Unterschiedliche Fälle. Diese verhindern ein Problem, das es gab weil es laut Code zu viele Leerzeichen zwischen den Wörtern hat wenn eine Eingabe nicht vorhanden war
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
    if(currentElement == "." && input[i+1] !== " ") return false            //wenn das aktuelle Element ein "." ist und das nachfolgende Element kein Leerzeichen ist, wird false zurückgegeben
    else if(currentElement == "." && input[i+1] == " ") return true         //wenn das aktuelle Element ein "." ist und das nachfolgende Element ein Leerzeichen ist, wird true zurückgegeben
  }

  return result.join("")
}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
for (let i = input.length; i > -1; i--) {     //führt die standart for-schleife diesmal rückwärts aus, damit die Reihenfolge der Elemente umgekehrt wird
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

export function aufgabe23 (args) {
  const input = args
  const result = []
  
  if (input.length === 0) return input        //wenn das Eingabefeld leer ist, wird eine leere Eingabe zurückgegeben

  result.push(input[0])                       //das erste Element wird vorne am Resultat angehängt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(input[0])                       //am Ende wird das erste Element erneut anhehängt
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []

if (input.length === 1) return input            //wenn das Eingabefeld nur ein Element hat, wird das Element direkt zurückgegeben

const firstElement = input[0]                   //eine Constante für das erste Element wird erstellt
const lastElement = input[input.length - 1]     //eine Constante für das letzte Element wird erstellt

  result.push(lastElement)                        //zuerst wird das letzte Elemnet an erster result Position angehängt
  for (let i = 1; i < input.length - 1; i++) {    //normale for-schleife aber beginnend ab dem 2. Element und endend beim vorletzten Element
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(firstElement)                       //zum Schluss wird das erste Element an letzter result Position angehängt
  return result.join("")
}

export function aufgabe25 (args) {
  const input = args
  const result = []
  
  if (input.length <= 2) return ("")             
  if (input.length >= 3) {                        
    result.push(input[0])                         
    result.push(input[input.length - 1])          
  }
  return result.join("")
}



export function aufgabe26 (args) {      //gesammte Funktion wird unter 'function bubbleSort' genauer erläutert (Code identisch)
  const input = args
  const list = input.split("")              
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (nextElement.charCodeAt(0) < currentElement.charCodeAt(0)) {
      
      const temporary = list[i + 1]
      list[i + 1] = list[i]
      list[i] = temporary
      i = -1 
    }
  }
  const result = list.join("")
  console.log(result)
  return result
}

export function aufgabe27 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt(0)
    
    if (47 >= currentElement || currentElement >= 58) return false      //wenn im ganzen input ein Zeichen Vorkommt, das auserhalb des ascii bereichs von Zahlen liegt wird false zurückgegeben
  }
  if (input.length < 1) return false                                   //wenn kein Element als eingabe vorhanden ist wird false zurückgegeben
  return true                                                          //wenn der Code bis hier läuft muss es sich um eine Zahl handeln - return true
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

export function bubbleSort(args) {
  const input = args
  const list = input.split("")                                          //der ganze input wird in eine Liste mit einzelnen adressierbaren Elementen aufgeteilt
  for (let i = 0; i < list.length - 1; i++) {                           
    const currentElement = list[i]                                      //das aktuelle Element wird definiert
    const nextElement = list[i + 1]                                     //das nachfolgende Element wird definiert
    if (nextElement.charCodeAt(0) < currentElement.charCodeAt(0)) {     //wenn das nachfolgende Element kleiner als das aktuelle Element ist, wird...
      
      const temporary = list[i + 1]                                     //wird das nachfolgende Element temporär in der Konstanten temporary gespeichert
      list[i + 1] = list[i]                                             //das nachfolgende Element wird durch das aktuelle Element ersetzt
      list[i] = temporary                                               //das aktuelle Element wird durch das temporär gespeicherte Element ersetzt
      i = -1                                                            // durch das zurücksetzten von "i" auf -1 wird die Schleife wieder ab dem ersten Element durchgeführt
    }
  }
  //der Array wird wieder in einen String umgewandelt und ausgegeben
  const result = list.join("")                                          
  console.log(result)                                                   
  return result
}