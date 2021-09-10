//Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}
function calcularPerimetroCuadrado() { 
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function areaCuadrado(lado) {
    return lado**2;
}
function calcularAreaCuadrado() { 
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

console.groupEnd();

//Triangulo Isosceles
console.group("Triangulo");

const lado1Isos = document.getElementById("inputIsosLado1");
const lado2Isos = document.getElementById("inputIsosLado2");
const baseIsos = document.getElementById("inputIsosBase");

function alturaTrianguloIsosceles(lado1, lado2, base) {
    if(lado1 == lado2) {
        console.log("Si es un triangulo isosceles");
        var altura = lado1**2 - ((base  **2) / 4);
        altura = Math.sqrt(altura);
    } else {
        alert("Los datos insertados no pertenecen a un triangulo isosceles");
        altura = 0;
    }
    return altura.toFixed(2)
}
function alturaTrianguloIsosceles2(lado1, lado2, base) {
    if(lado1 == lado2) {
        console.log("Si es un triangulo isosceles");
        var altura = (lado1**2) - ((base/2)**2);
        altura = Math.sqrt(altura); 
    } else {
        alert("Los datos insertados no pertenecen a un triangulo isosceles");
        altura = 0;
    }
    return altura.toFixed(2)
}
function calcularAlturaTrianguloIsosceles() {
    const altura = alturaTrianguloIsosceles(lado1Isos.value, lado2Isos.value, baseIsos.value);
    alert("La altura es: "+altura);
}

function areaTrianguloIsosceles(altura, base) {
    return base * altura / 2;
}
function calcularAreaTrianguloIsosceles() {
    const altura = alturaTrianguloIsosceles(lado1Isos.value, lado2Isos.value, baseIsos.value)
    const area = areaTrianguloIsosceles(altura, baseIsos.value)    
    alert("El area es: "+area)
}

function perimetroTriangulo(lado1, lado2, base) {
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    base = parseInt(base);
    return lado1 + lado2 + base;
}
function calcularPerimetroTriangulo() {
    const perimetro = perimetroTriangulo(lado1Isos.value, lado2Isos.value, baseIsos.value);
    alert("El perimetro es: "+perimetro);
}

console.groupEnd();

//Triangulo
const lado1 = document.getElementById("inputLado1");
const lado2 = document.getElementById("inputLado2");
const base = document.getElementById("inputBase");

function areaTriangulo(lado1, lado2, base) {
    const perimetro = perimetroTriangulo(lado1, lado1, base);
    const semiP = perimetro / 2;
    return Math.sqrt(semiP*(semiP-lado1)*(semiP-lado2)*(semiP-base));
}
function calcularAreaTriangulo() {
    const area = areaTriangulo(lado1.value, lado2.value, base.value);
    alert(area.toFixed(2));
}

function alturaTriangulo(lado1, lado2, base) {
    const area = areaTriangulo(lado1, lado2, base);
    const altura = area * 2 / base;
    return altura.toFixed(2);
}
function calcularAlturaTriangulo() {
    const altura = alturaTriangulo(lado1.value, lado2.value, base.value);
    alert("La altura es: "+altura);
}


//Circulo
console.group("Circulo");
const radio = document.getElementById("inputCirculo");
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return PI * diametro;
}
function areaCirculo(radio) {
    return PI * radio**2;
};

function calcularDiametroCirculo() {
    const diametro = diametroCirculo(radio.value);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const perimetro = perimetroCirculo(radio.value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const area = areaCirculo(radio.value);
    alert(area);
}


console.groupEnd();