function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
  var array = [1,2,3,4,5,6,7,8];
  array.push(100);
  array.pop();
  array.pop();
  return array;


  }console.log(devolverPrimerElemento());



 


  function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
  var array =[1,2,3,4,5,6,7];
  for(var i=0 ; i< array.length; i++){
  array[i]=array[i]+1;}
  return array;
  }console.log(incrementarPorUno());

  
  function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:

  array.push(elemento);
  return array;
  
  }console.log(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94],9));
 
  function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
  }console.log(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94],9));

  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
  for(i=0 ; i<palabras.length ; i++){
  var concatenado = palabras[i];
  concatenado=concatenado+palabras[i+1];
  }return concatenado;
  
  } console.log(dePalabrasAFrase(["jorge","valencia","Martinez"]));



function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
  for (i=0 ; i<array.length ; i++){
    if(array[i]===elemento){return "true";}
    else{return "false";};
  }
  
  }console.log(arrayContiene([1,2,3],3));


  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var suma=0;
    for(var i=0 ; i<numeros.length ; i++){
      suma=suma+numeros[i];   
    }
    return suma;
  }console.log(agregarNumeros([2,3,4,5]));



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0;
  var promedio=0;
  for(var i=0 ; i<resultadosTest.length ; i++){
    suma=suma+resultadosTest[i];
    promedio=suma/resultadosTest.length;
  }
  return promedio;
}console.log(promedioResultadosTest([2,3,4,5]));


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var conteo=0;
  for(var i=0 ; i<arreglo.length ; i++){
    if(arreglo[i]===18){conteo=conteo+1}
  }
return conteo;
}console.log(cuentoElementos([18,1,2,18,18]));
  




function todosIguales(arreglo) {
for( var i=0; i<arreglo.length ; i++ ){
  if(arreglo[i]!==arreglo[i+1]){return false;}

}
return true;
}console.log(todosIguales([1,1,1,1,3]));



  function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevosvalores=[];
  for(i=0;i<10;i++){
    if(i===5)continue;
    numero+=2;
    nuevosvalores.push(numero);
  }
  return nuevosvalores;
  }console.log(continueStatement(1));