const tratarcpf = (cpfcnpj) => {
    const tamanho = cpfcnpj.length
    if (cpfcnpj[3]==".") {
        return "Digitar apenas números"
    } else {
    switch (tamanho) {
        case 11:
            tratado = cpfcnpj[0]+cpfcnpj[1]+cpfcnpj[2]+"."+cpfcnpj[3]+cpfcnpj[4]+cpfcnpj[5]+"."+cpfcnpj[6]+cpfcnpj[7]+cpfcnpj[8]+"-"+cpfcnpj[9]+cpfcnpj[10]
            break;
        case 14:
            tratado = cpfcnpj[0]+cpfcnpj[1]+"."+cpfcnpj[2]+cpfcnpj[3]+cpfcnpj[4]+"."+cpfcnpj[5]+cpfcnpj[6]+cpfcnpj[7]+"/"+cpfcnpj[8]+cpfcnpj[9]+cpfcnpj[10]+cpfcnpj[11]+"-"+cpfcnpj[12]+cpfcnpj[13]
            break;
        default:
            tratado = "CPF ou CNPJ inválido"
            break;
    }
    return tratado
}
}

module.exports = {
    tratarcpf
}