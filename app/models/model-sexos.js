const sexosDB = [
    {
        sexo: "Masculino",
        id: 1
    },
    {
        sexo: "Feminino",
        id: 2
    },
    {
        sexo: "Não informado",
        id: 3
    }
]

const listaTodos = () => {
    return sexosDB
}

const buscarPorId = (id) => {
    const result = sexosDB.filter((item) => {
        return item.id === Number(id);
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}