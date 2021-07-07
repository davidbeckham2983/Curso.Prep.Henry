var nombre='Jorge';
var apellido='Valencia';

console.log(nombre);
console.log(apellido);

nombre='beto';

console.log(nombre);
console.log(apellido);
console.log(nombre+" "+apellido);
console.log(21%5===0);

function miFuncion(){
console.log("que lindo dia");
};
miFuncion();

function saluda(){
    console.log("hola"+" "+nombre);
};
saluda();

function suma(x,y) {
       return x+y;
      };

  console.log (suma(1,21));

  function sonIguales(x, y) {
   if (x===y)
   {return true;}
   else{return false;}
  
  }
  console.log(sonIguales(1,10));

  function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num<90){
      return true;}
      else{return false;}
    }
  console.log(menosQueNoventa(99));

  function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
  if(num>50)
  {return true;}
  else{return false;}
  }
  console.log("mayorQueCincuenta"+mayorQueCincuenta(55));

  function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    return x%y
  }

  console.log(obtenerResto(10,3));

  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    
    if(num%2===0){
      return true;
    }else{return false;}
  }
  console.log("esPar "+esPar(4));


  function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    if(num%2>0){
      return true;
    }else {return false;}
  }
  console.log(esImpar(4));



function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return num*num*num;
  }console.log(elevarAlCuadrado(5));


  function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num,exponent);
  }console.log(elevar(2,3));

  function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    return Math.floor(num);
  }console.log(redondearNumero(111.2));

  function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    return Math.random();
  }console.log(numeroRandom());


  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if(numero>0)
    {return "el numero es positivo";}
    else{return"el numero es negativo";}
  }console.log(esPositivo(-3));

  function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    return str+"!"
  }console.log(agregarSimboloExclamacion("hola"));

  function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    return nombre+" "+apellido
  }console.log (combinarNombres("Jorge","Valencia"));


function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    return "hola "+nombre;
  }console.log(obtenerSaludo("Jorge"));

  function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    return "El Area del Rectangulo es "+alto*ancho;
  }console.log(obtenerAreaRectangulo(2,5));


  function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    return "el perimetro del cuadrado es "+4*lado
  }console.log(retornarPerimetro(5));
  

  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    return "El Area del Triangulo es" + (base*altura/2);
  
  }console.log(areaDelTriangulo(10,2));

  function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    return "Se reciben "+euro+" que equivalen a "+euro*1.2+" dolares";
  }console.log(deEuroAdolar(2));


  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    if(letra=='a'||letra=='e'||letra=='i'||letra=='0'||letra=='u')
    {return "es Vocal";}else{return "no es Vocal";}
  }console.log(esVocal("b"));



function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
  if(str1.length===str2.length)
  {return true;}
  else{return false;}
  }console.log("tienenMismaLongitud"+tienenMismaLongitud("hola","hola"));
  

  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    if(letra.length>1)
    {return"Dato Incorrecto";}
    else{
    
    if(letra=='a'||letra=='e'||letra=='i'||letra=='0'||letra=='u')
    {return "es Vocal";}else{return "no es Vocal";}
    
    }
  
  }console.log(esVocal("asss"));