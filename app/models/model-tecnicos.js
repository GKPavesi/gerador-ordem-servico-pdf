const tecnicosDB = [
    {
        tecnico: "Guilherme",
        id: 1
    },
    {
        tecnico: "Victor",
        id: 2
    },
    {
        tecnico: "Mateus",
        id:3
    },
    {
        tecnico: "Marco",
        id: 4
    }
]

const listaTodos = () => {
    return tecnicosDB
}

const buscarPorId = (id) => {
    const result = tecnicosDB.filter((item) => {
        return item.id === Number(id)
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}