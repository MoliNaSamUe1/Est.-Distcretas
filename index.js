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