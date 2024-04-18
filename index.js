/* Crear encuestas 
votar encuesta 
contar votos 
mostrar resultados */

class Encuesta {
    constructor(question, options, persona) {
        this.question = question;
        this.options = options;
        this.persona = persona;
        //this.votantes = votantes;
        this.answers = new Array(options.length).fill(0); //Inicio answers en 0


    }

    mostrarQuestion() {
        console.log(this.question);
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }

    
    mostrarResult() {
        console.log(" Resultado de la votación: ");
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}: ${this.answers[index]} votos`);
        })
    }
    realizarEncuesta(n) {
        for (let i = 0; i < n; i++) {
            console.log(`\nPersona ${i+1}`);
            this.mostrarQuestion();
            this.votar();
            
        }
    }
    
    votar() {
        alert("Luego de revisar la consola " );
        for (let i = 0; i < person.length; i++){
        let answer = prompt(` Ingrese el número de la opción que se desea votar ${person[i]} ` );
        answer = parseInt(answer);
        if (isNaN(answer) || answer < 1 || answer > this.options.length) {
            console.log(" Opcion no validad. Debe ingresar un número entre 1 y " + this.options.length);
            return this.votar(); // volver  asolicitar respuesta 
        }
        // Incrementar voto 
        this.answers[answer - 1]++;
        console.log("Voto registrado");
    }
    
    }
}

// Creando preguntas y alternativas

let votantes = parseInt(prompt(" Ingrese el número de votantes ")); //encuestar a más personas
let person = []
for (let i = 0; i < votantes; i++){
    let persona = prompt(`Ingrese el nombre del participante ${i+1}: `);
    person.push(persona);
}
console.log(person)

let n = parseInt(prompt(" Ingrese el número de preguntas ")); //Numero de preguntas 
let questions = []


for (let i = 0; i < n; i++) {
    let question = prompt(`Ingrese la pregunta ${i + 1}:`);
    let numOptions;
    while (true) {
        numOptions = parseInt(prompt("Ingrese el número de alternativas (debe ser mayor a 2):"));
        if (numOptions >= 2) {
            break; // Salir del bucle si numOptions es mayor o igual a 2
        }
        alert("Debe ingresar un número mayor a 2 para las alternativas.");
    }
    
    let options = [];
    for (let j = 0; j < numOptions; j++) {
        options.push(prompt(`Ingrese la alternativa ${j + 1}:`));
    }
    questions.push(new Encuesta(question, options));
}






// Votar

questions.forEach((question, index) => {
    console.log(`\nPregunta ${index + 1}`);
    //document.write(`\nPregunta ${index + 1}`);
    question.realizarEncuesta(votantes);

});

// Mostrar resultados 

questions.forEach((question, index) => {
    console.log(`\nResultado de la pregunta ${index + 1}:`);
    //document.write(`\nResultado de la pregunta ${index + 1}:`);
    question.mostrarResult();

});

