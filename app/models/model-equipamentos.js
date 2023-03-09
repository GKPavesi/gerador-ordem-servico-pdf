const equipamentosDB = [
    {
        equipamento: "Celular",
        id: 1
    },
    {
        equipamento: "Tablet",
        id: 2
    },
    {
        equipamento: "Smart Watch",
        id: 3
    }
]

const listaTodos = () => {
    return equipamentosDB
}

const buscarPorId = (id) => {
    const result = equipamentosDB.filter((item) => {
        return item.id === Number(id)
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}