const controllerHome = require('../../controllers/home-controller')

module.exports = (routeV1) => {
    routeV1.route('/')
        .get(controllerHome.getHome)
}