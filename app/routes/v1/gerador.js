const controllerGerador = require('../../controllers/gerador-controller')
const middlewareValidaDTO = require('../../utils/dto-validate')

module.exports = (routeV1) => {
    routeV1.route('/gerador')
        .get(controllerGerador.getGerador)
        .post(middlewareValidaDTO("body", controllerGerador.postGeradorSchema), controllerGerador.postGerador)    
            
}