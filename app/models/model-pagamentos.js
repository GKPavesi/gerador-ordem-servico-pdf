const statusPagamentoDB = [
    {
        id: 1,
        status: "Pago a vista"
    },
    {
        id: 2,
        status: "Pago parcelado"
    },
    {
        id: 3,
        status: "Irá pagar a vista na retirada"
    },
    {
        id: 4,
        status: "Irá pagar parcelado na retirada"
    }
]

const listaTodos = () => {
    return statusPagamentoDB
}

const buscarPorId = (id) => {
    const result = statusPagamentoDB.filter((item) => {
        return item.id === Number(id)
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}