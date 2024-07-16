console.log("en una clase de 21 alumnos, van a distribuirse tres premios. Averiguar como van a distribuirse si: los premios son diferentes o si los premios son iguales.")

function factorial(n){
    var total =1;
    for(i=1;i<=n;i++){
        total=total * i;
    }
    return total;
}

function combinacion(alumnos,premios){
    return (
        factorial(alumnos)/(
            factorial(premios)*(
                factorial(alumnos-premios)
            )
        )
    )
}

function permutacion(alumnos,premios){
    return(
        factorial(alumnos)/(
            factorial(alumnos-premios)
        )
    )
}

function permutacionRep(numero,rep){
    let acum = 1;
    rep.forEach(function(rep) {
        acum *= factorial(rep)
    });
    return (
        factorial(numero)/(acum)
    )
}
//Ejercicio 2 (que hicimosd en clase)
console.log("A) "+combinacion(21,3))

console.log("B) "+permutacion(21,3))

var a1 = document.getElementById('A1');
var b1 = document.getElementById('B1');
var a1b = document.getElementById('A1B');
var b1b = document.getElementById('B1B');

a1.addEventListener('click', () => {
    a1b.innerHTML += '<p class="fw-bold pt-4 fs-4">' + combinacion(21,3) + " combinaciones</p>"
})

b1.addEventListener('click', () => {
    b1b.innerHTML += '<p class="fw-bold pt-4 fs-4">' + permutacion(21,3) + " permutaciones</p>"
})

//Ejercicio 1
console.log("1. ¿De cuántas maneras pueden sentarse 10 personas en un banco si hay 4 sitios disponibles?")
console.log("Respuesta: "+permutacion(10,4)+" maneras")

//Ejercicio 3
console.log("3. Las diagonales de un polígono se obtienen uniendo pares de vértices no adyacentes.\n 1) Obtener el número de diagonales del cuadrado, hexágono y decagono.")
console.log("Cuadrado: \n-Primero se calculan las uniones posible: "+combinacion(4,2)+"\nDiagonales: "+(combinacion(4,2)-4)+" diagonales")
console.log("Hexagono: \n-Primero se calculan las uniones posible: "+combinacion(6,2)+"\nDiagonales: "+(combinacion(6,2)-6)+" diagonales")
console.log("Decagono: \n-Primero se calculan las uniones posible: "+combinacion(10,2)+"\nDiagonales: "+(combinacion(10,2)-10)+" diagonales")

//Ejercicio 4
console.log("4. Hay que colocar a 8 hombres y 7 mujeres en una fila de modo que las mujeres ocupen los lugares pares. De cuantas maneras pueden hacerse?")
console.log("Formas de colocarse los hombres: "+factorial(8)+"\nFomas de colocarse las mujeres: "+factorial(7)+"\nRespuesta: "+(factorial(8)*factorial(7)))

//Ejercicio 5
console.log("5. Cuantos números de 4 dígitos se pueden formar con las cifras 1,2,…9\n1) Permitiendo repeticiones \n2) Sin repeticiones \n3) Si el ultimo digito ha de ser 1 y no se permiten repeticiones")
console.log("1) Respuesta: "+(9**4) + "\n2) Respuesta: "+permutacion(9,4)+"\n Respuesta: "+combinacion(8,3))

//Ejercicio 6
console.log("6. En un grupo de 15 amigos ¿Cuántas distribuciones de sus fechas de cumpleaños pueden darse?")
console.log("Respuesta: "+(365**15))

//Ejercicio 7
console.log("7. Cuantas letras de 5 signos con 3 rayas y 2 puntos podrían tener el alfabeto Morse?")
console.log("Respuesta: "+permutacionRep(5,[3,2])+" letras")

//Ejercicio 8: n=2 cara y cruz, numero de monedas k=4 
console.log("8. Cuando se arrojan simultáneamente 4 monedas:\na) ¿Cuáles son los resultados posibles que se pueden obtener?\nb) ¿Cuántos casos hay en que salgan 2 caras y 2 cruces?")
console.log("a) Respuesta (no importa el orden): "+combinacion(4+2-1,4)+"\nb) Respuesta: "+combinacion(4,2))

//Ejercicio 9
console.log("9. 5 libros de matemáticas, 7 de control de proyecto y 3 de interfaces han de ser colocados en una biblioteca. Cuántas colocaciones distintas admiten si:\na) Los libros de cada materia han de estar juntos.\nb) Sólo los de matemáticas tienen que estar juntos.")
console.log("Ordenaciones posibles de las materias: "+factorial(3)+"\nPermutaciones de los libros de matematica: "+permutacion(5,5)+"\nPermutaciones de los libros de control de proyectos: "+permutacion(7,7)+"\nPermutaciones de los libros de interfaz: "+permutacion(3,3))
console.log("a) Respuesta (libros diferentes): "+(factorial(3)*permutacion(5,5)*permutacion(7,7)*permutacion(3,3)))
console.log("b) Como solo los de matematica han de estar solos tenemos 11 unidades (1 matematica,7 control de proyecto,3 interfaces) entonces tenemos: "+factorial(11)+" maneras de ordenarlas.\nOrdenaciones posibles de los libros de matematica: "+factorial(5))
console.log("Respuesta: "+(factorial(11)*factorial(5))+" colocaciones")

//Ejercicio 11: el diez no dice que hay que hacer
console.log("11. Un alumno tiene que elegir 7 de las 10 preguntas de un examen. ¿De cuantas maneras puede elegirlas? ¿Y si las 4 primeras son obligatorias?")
console.log("a) "+combinacion(10,7)+" maneras")
console.log("b) "+combinacion(6,3)+" maneras si las primeras 4 son obligatorias")

//Ejercicio 12
console.log("12. Una línea de ferrocarril tiene 25 estaciones. ¿Cuántos billetes diferentes habrá que imprimir si cada billete lleva impresas las estaciones de origen y destino?")
console.log("Respuesta: "+permutacion(25,2)+" billetes diferentes")

//Ejercicio 13
console.log("13. Tres atletas toman parte en una competición. ¿De cuántas maneras podrán llegar a la meta? (Pueden llegar juntos)")
console.log("Si llegan juntos: 1\nSi llegan 2 juntos: 6\nSi llegan separados: "+factorial(3))
console.log("Respuesta: 13")

//Ejercicio 14
console.log("14. En un hospital se utilizan cinco símbolos para clasificar las historias clínicas de sus pacientes, de manera que los dos primeros son letras y los tres últimos son dígitos. Suponiendo que hay 25 letras, ¿cuántas historias clínicas podrían hacerse si: \n1. No hay restricciones sobre letras y números; \n2. Las dos letras no pueden ser iguales.")
console.log("1) "+(25**2)+" posibilidades para las letras y "+(10**3)+" posibilidades para los digitos")
console.log("Respuesta: "+(25**2*10**3))
console.log("2) "+permutacion(25,2)+" posibilidades para las letras y "+(10**3)+" posibilidades para los digitos")
console.log("Respuesta: "+(permutacion(25,2)*10**3))