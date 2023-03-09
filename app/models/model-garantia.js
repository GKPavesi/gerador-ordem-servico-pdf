const garantiaDB = [
    {
        id: 1,
        tempo: "15 dias"
    },
    {
        id: 2,
        tempo: "1 mês"
    },
    {
        id: 3,
        tempo: "2 meses"
    },
    {
        id: 4,
        tempo: "3 meses"
    },
    {
        id: 5,
        tempo: "6 meses"
    },
    {
        id: 6,
        tempo: "1 ano"
    }
]

const listaTodos = () => {
    return garantiaDB
}

const buscarPorId = (id) => {
    const result = garantiaDB.filter((item) => {
        return item.id === Number(id)
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}