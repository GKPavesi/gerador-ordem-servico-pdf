var contador = 0;

function pegarnumero() {
    contador++
    var tamanho = Math.ceil(Math.log10(contador + 1))
    if (tamanho==1) {
        var resultado = "";
        resultado = resultado + "000" + contador
        return resultado
    } else if (tamanho==2) {
        var resultado = "";
        resultado = resultado + "00" + contador
        return resultado
    } else if (tamanho==3) {
        var resultado = "";
        resultado = resultado + "0" + contador
        return resultado
    } else if (tamanho==4) {
        var resultado = "";
        resultado = resultado + contador
        return resultado
    } else {
        return "####"
    }
}


module.exports = {
    pegarnumero
}