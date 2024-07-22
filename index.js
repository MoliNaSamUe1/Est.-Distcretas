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

var buttonfact = document.getElementById('buttonfact');
var buttomcom = document.getElementById('buttomcom');
var buttonper = document.getElementById('buttonper');
var buttonperrep = document.getElementById('buttonperrep');
var primero = document.getElementById('primero')
var segundo = document.getElementById('segundo')
var tercero = document.getElementById('tercero')
var cuarto = document.getElementById('cuarto')
var fact = document.getElementById('fact');
var com = document.getElementById('com');
var per = document.getElementById('per');
var perrep = document.getElementById('perrep');

buttonfact.addEventListener('click', () => {
    primero.innerHTML = factorial(parseFloat(document.getElementById('numfact').value)) + " factorial"
})

buttomcom.addEventListener('click', () => {
    segundo.innerHTML = combinacion(parseFloat(document.getElementById('totalcom').value),parseFloat(document.getElementById('elegidoscom').value)) + " combinaciones"
})

buttonper.addEventListener('click', () => {
    tercero.innerHTML = permutacion(parseFloat(document.getElementById('totalper').value),parseFloat(document.getElementById('elegidosper').value)) + " permutaciones"
})

buttonperrep.addEventListener('click', () => {
    cuarto.innerHTML = permutacionRep(parseFloat(document.getElementById('totalperrep').value),[parseFloat(document.getElementById('elegidosperrep').value)]) + " permutaciones con repetición"
})

function AddEjercicio(){
    const ejercicios = document.getElementById('ejercicios');
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 1</h5><p class="card-text">¿De cuántas maneras pueden sentarse 10 personas en un banco si hay 4 sitios disponibles?</p><p class="card-text">Respuesta: '+permutacion(10,4)+' maneras</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 2</h5><p class="card-text">En una clase de 21 alumnos, van a distribuirse tres premios. Averiguar como van a distribuirse si: los premios son diferentes o si los premios son iguales.</p><p class="card-text">Si los premios son diferentes son '+permutacion(21,3)+' maneras</p><p class="card-text">Si los premios son iguales son '+combinacion(21,3)+' maneras</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 3</h5><p class="card-text">Las diagonales de un polígono se obtienen uniendo pares de vértices no adyacentes.<br> 1) Obtener el número de diagonales del cuadrado, hexágono y decagono.</p><p class="card-text">Cuadrado: <br>-Primero se calculan las uniones posible: '+combinacion(4,2)+'<br>Diagonales: '+(combinacion(4,2)-4)+' diagonales</p><p class="card-text">Hexagono: <br>-Primero se calculan las uniones posible: '+combinacion(6,2)+'<br>Diagonales: '+(combinacion(6,2)-6)+' diagonales</p><p class="card-text">Decagono: <br>-Primero se calculan las uniones posible: '+combinacion(10,2)+'<br>Diagonales: '+(combinacion(10,2)-10)+' diagonales</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 4</h5><p class="card-text">Hay que colocar a 8 hombres y 7 mujeres en una fila de modo que las mujeres ocupen los lugares pares. De cuantas maneras pueden hacerse?</p><p class="card-text">Formas de colocarse los hombres: '+factorial(8)+'<br>Fomas de colocarse las mujeres: '+factorial(7)+'<br>Respuesta: '+(factorial(8)*factorial(7))+'</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 5</h5><p class="card-text">Cuantos números de 4 dígitos se pueden formar con las cifras 1,2,…9<br>1) Permitiendo repeticiones <br>2) Sin repeticiones <br>3) Si el ultimo digito ha de ser 1 y no se permiten repeticiones</p><p class="card-text">1) Respuesta: '+(9**4) + '<br>2) Respuesta: '+permutacion(9,4)+'<br> Respuesta: '+combinacion(8,3)+'</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 6</h5><p class="card-text">En un grupo de 15 amigos ¿Cuántas distribuciones de sus fechas de cumpleaños pueden darse?</p><p class="card-text">Respuesta: '+(365**15)+'</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 7</h5><p class="card-text">Cuantas letras de 5 signos con 3 rayas y 2 puntos podrían tener el alfabeto Morse?</p><p class="card-text">Respuesta: '+permutacionRep(5,[3,2])+' letras</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 8</h5><p class="card-text">Cuando se arrojan simultáneamente 4 monedas:<br>a) ¿Cuáles son los resultados posibles que se pueden obtener?<br>b) ¿Cuántos casos hay en que salgan 2 caras y 2 cruces?</p><p class="card-text">a) Respuesta (no importa el orden): '+combinacion(4+2-1,4)+'<br>b) Respuesta: '+combinacion(4,2)+'</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 9</h5><p class="card-text">5 libros de matemáticas, 7 de control de proyecto y 3 de interfaces han de ser colocados en una biblioteca. Cuántas colocaciones distintas admiten si:<br>a) Los libros de cada materia han de estar juntos.<br>b) Sólo los de matemáticas tienen que estar juntos.</p><p class="card-text">Ordenaciones posibles de las materias: '+factorial(3)+'<br>Permutaciones de los libros de matematica: '+permutacion(5,5)+'<br>Permutaciones de los libros de control de proyectos: '+permutacion(7,7)+'<br>Permutaciones de los libros de interfaz: '+permutacion(3,3)+'</p><p class="card-text">a) Respuesta (libros diferentes): '+(factorial(3)*permutacion(5,5)*permutacion(7,7)*permutacion(3,3))+'</p><p class="card-text">b) Como solo los de matematica han de estar solos tenemos 11 unidades (1 matematica,7 control de proyecto,3 interfaces) entonces tenemos: '+factorial(11)+' maneras de ordenarlas.<br>Ordenaciones posibles de los libros de matematica: '+factorial(5)+'<br>Respuesta: '+(factorial(11)*factorial(5))+' colocaciones</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 11</h5><p class="card-text">Un alumno tiene que elegir 7 de las 10 preguntas de un examen. ¿De cuantas maneras puede elegirlas? ¿Y si las 4 primeras son obligatorias?</p><p class="card-text">a) '+combinacion(10,7)+' maneras</p><p class="card-text">b) '+combinacion(6,3)+' maneras si las primeras 4 son obligatorias</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 12</h5><p class="card-text">Una línea de ferrocarril tiene 25 estaciones. ¿Cuántos billetes diferentes habrá que imprimir si cada billete lleva impresas las estaciones de origen y destino?</p><p class="card-text">Respuesta: '+permutacion(25,2)+' billetes diferentes</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 13</h5><p class="card-text">Tres atletas toman parte en una competición. ¿De cuántas maneras podrán llegar a la meta? (Pueden llegar juntos)</p><p class="card-text">Si llegan juntos: 1<br>Si llegan 2 juntos: 6<br>Si llegan separados: '+factorial(3)+'</p><p class="card-text">Respuesta: 13</p></div></div>';
    ejercicios.innerHTML += '<div class="card mt-4"><div class="card-body"><h5 class="card-title">Ejercicio 14</h5><p class="card-text">En un hospital se utilizan cinco símbolos para clasificar las historias clínicas de sus pacientes, de manera que los dos primeros son letras y los tres últimos son dígitos. Suponiendo que hay 25 letras, ¿cuántas historias clínicas podrían hacerse si: <br>1. No hay restricciones sobre letras y números; <br>2. Las dos letras no pueden ser iguales.</p><p class="card-text">1) '+(25**2)+' posibilidades para las letras y '+(10**3)+' posibilidades para los digitos<br>Respuesta: '+(25**2*10**3)+'<br>2) '+permutacion(25,2)+' posibilidades para las letras y '+(10**3)+' posibilidades para los digitos<br>Respuesta: '+(permutacion(25,2)*10**3)+'</p></div></div>';
}

AddEjercicio();

//Ejercicio 1
console.log("1. ¿De cuántas maneras pueden sentarse 10 personas en un banco si hay 4 sitios disponibles?")
console.log("Respuesta: "+permutacion(10,4)+" maneras")

console.log("2. En una clase de 21 alumnos, van a distribuirse tres premios. Averiguar como van a distribuirse si: los premios son diferentes o si los premios son iguales.")
console.log("Si los premios son diferentes son "+permutacion(21,3)+" maneras")
console.log("Si los premios son iguales son "+combinacion(21,3)+" maneras")

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