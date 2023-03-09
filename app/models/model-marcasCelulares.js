const marcasCelularesDB = [
    {
        marca: 'Alcatel',
        id: 1
    },
    {
        marca: 'Apple',
        id: 2
    },
    {
        marca: 'Asus',
        id: 3
    },
    {
        marca: 'Google',
        id: 4
    },
    {
        marca: 'HTC',
        id: 5
    },
    {
        marca: 'Huawei',
        id: 6
    },
    {
        marca: 'Lenovo',
        id: 7
    },
    {
        marca: 'LG',
        id: 8
    },
    {
        marca: 'Mobicel',
        id: 9
    },
    {
        marca: 'Motorola',
        id: 10
    },
    {
        marca: 'Nokia',
        id: 11
    },
    {
        marca: 'OPPO',
        id: 12
    },
    {
        marca: 'Panasonic',
        id: 13
    },
    {
        marca: 'Samsung',
        id: 14
    },
    {
        marca: 'Sony',
        id: 15
    },
    {
        marca: 'Vivo',
        id: 16
    },
    {
        marca: 'Xiaomi',
        id: 17
    },
    {
        marca: 'ZTE',
        id: 18
    },
    {
        marca: 'Outra marca (listar no modelo)',
        id: 19
    }
]

const listaTodos = () => {
    return marcasCelularesDB
}

const buscarPorId = (id) => {
    const result = marcasCelularesDB.filter((item) => {
        return item.id === Number(id)
    });
    return result.length > 0 ? result[0] : undefined;
}

module.exports = {
    listaTodos,
    buscarPorId
}