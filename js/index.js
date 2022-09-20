console.log("I'm ready!");


// Iteration 1: Names and Input

let hacker1 = "Pedro";
console.log("The driver´s name is " + hacker1)

let hacker2 = "Edge";
console.log("The navigator´s name is " + hacker2)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else { console.log(`Wow, you both have equally long names, XX characters!`)}

// Iteration 3: Loops

// 3.1
let newHacker1 = ""

for (let i = 0; i < hacker1.length; i++){
    newHacker1 = newHacker1 + hacker1[i].toUpperCase() + " ";
}

console.log(newHacker1)

// 3.2
let reverseHacker1 = ""

for (let i = hacker1.length -1; i >= 0; i--){
    reverseHacker1 = reverseHacker1 + hacker1[i];
}

console.log(reverseHacker1)


// 3.3

if (hacker1[0] < hacker2[0]){
    console.log("The driver's name goes first.")
} else if (hacker1[0] > hacker2[0]){
    console.log("Yo, the navigator goes first definitely.")
} else { console.log("What?! You both have the same name?")}



// BONUS 1 -> Declarar e inicializar variable lorem

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mi ac tellus pulvinar, at vehicula purus lacinia. Mauris a ante pharetra, pharetra felis ac, consequat nisl. Aenean elit ligula, volutpat et ex vitae, facilisis euismod ligula. Fusce leo lorem, euismod et maximus sed, convallis eget magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a diam et turpis tristique sodales id id tellus. Nulla at leo sed diam gravida eleifend sed in libero. Praesent cursus maximus nisl ut tristique. Ut et aliquam neque. Ut sagittis erat sit amet odio blandit, nec congue lorem laoreet. Sed scelerisque dui in leo mattis maximus. Curabitur tempor lobortis tellus pulvinar cursus. Sed pretium ligula in quam maximus imperdiet in at mauris. Maecenas nec finibus mi. In eu ex cursus velit interdum tempus vitae non augue. Nulla vitae mattis lorem, eu volutpat odio. Etiam mattis ullamcorper pharetra. Phasellus id tempor libero, at gravida orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique sapien id tortor tempus dictum. Quisque laoreet nibh elementum est rhoncus euismod. In lacus nibh, vulputate in aliquam a, volutpat a neque. Curabitur et erat nunc. Suspendisse potenti. Cras pulvinar, libero eu porta pharetra, augue magna tempor nulla, id convallis magna diam eu lorem. Duis hendrerit hendrerit erat, in bibendum urna imperdiet vitae. Sed ut porta lacus. Mauris commodo dolor non elit viverra mollis. Fusce scelerisque at orci in finibus. ";

// BONUS 1 -> Contar el número de palabras
// Como no se me ocurría otra cosa, he contado el número de espacios en blanco, que coincide con el número de palabras

let counter = 0;

for (let i = 0; i < lorem.length; i++){
    console.log(lorem[i]);
    if(lorem[i] === " "){
        counter++
    }
}

console.log(`El número de palabras totales son: ${counter}`)


// BONUS 1 -> Número de veces que aparece "et"

let counterEt = 0;

for (let i = 0; i < lorem.length; i++) {
    if(lorem[i] + lorem[i+1] === "et") {
        counterEt++
    }
}

console.log(`El número de veces que sale "et" es: ${counterEt}`)
