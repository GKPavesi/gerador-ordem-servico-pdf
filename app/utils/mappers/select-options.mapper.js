const mapper = (labelAtribute, valueAtribute, itens) => {
    
    return itens.map(item => {
        return {
            label: item[labelAtribute],
            value: item[valueAtribute]
        }
    })

}

module.exports = {
    mapper
}