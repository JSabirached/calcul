let calculadora = {
    sumar : function (numA, numB) {
        return numA + numB
    },
    restar: function (numA, numB){
        return numA - numB
    },
    multiplicar: function (numA, numB){
        return numA * numB
    },
    dividir: function (numA, numB){
        if(numA !== 0 && numB !== 0){
        return numA / numB
        }else{
            let mensaje = 'Error';
            return mensaje
        }
    }
}

console.log (calculadora.sumar(5, 2))
console.log (calculadora.restar(5, 1))
console.log (calculadora.multiplicar(9,3))
console.log (calculadora.dividir(100, 20))