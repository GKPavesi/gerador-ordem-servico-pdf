const tratarData = (data) => {
    let dia = data[8]+data[9]
    let mes = data[5]+data[6]
    let ano = data[0]+data[1]+data[2]+data[3]
    let barra = "/"

    const dataTratada = dia+barra+mes+barra+ano;
    return dataTratada
    
}

module.exports = {
    tratarData
}