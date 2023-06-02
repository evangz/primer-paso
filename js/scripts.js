function showAlert(){ alert('!Hola, esta es una alerta desde javascript!');

}
function imprimirEnConsola(){
    console.log('hasta aca funciona')
}

function pedirDatos(){
    prompt('ingrese su nombre'); 
}

function milisegundosDesde1970(){
    alert(Date() )

}
 function PodesManejar (){
    var edad = prompt('introduci tu edad')

    if(isNaN(edad)){
       alert("ingrese solo numeros")
        return;
    }

    if (edad < 18){
        alert("no podes manejar")
    }else alert("podes manejar");

 }
 function tipoDeNota(){
   do{  
        var nota = prompt('Ingresa tu nota')
      
        if(nota < 3 && nota >= 0){
            alert('Muy deficiente')
        }else if(nota > 3 && nota < 5){
            alert('Insuficiente')
        }else if(nota > 5 && nota < 7){
            alert('Bien')
        }else if(nota > 7 && nota < 9){
            alert('Notable')
        }else if(nota > 9 && nota <= 10){
            alert('Increible')
        } 
    } while (nota != undefined);
    
 }
function concatenarTexto(){
    var resultado = ""
    do {
    
        var cadena = prompt("Introduce una cadena");
    
        if (resultado == "") {
        
            resultado = resultado + cadena;
        }
    
        else {
        
            resultado = resultado + "-" + cadena;
        }

    } while (confirm("Desea seguir?"));

    alert(resultado)
}
function suma(){
    var suma = 0;
    do {
        var numero = prompt("Introduce un numero");
        if (Number(numero) == numero) {
            numero = Number(numero);
                suma = suma + numero;
        }
    
        else {
            if (numero != undefined) {
                alert(numero + " No es un numero");
            }
        }
    } while (numero != undefined);
    //   document.write(suma);
    alert(suma);
}