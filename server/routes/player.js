const playercontroller = require('../controllers/player.ctrl')

module.exports = (router) => {

    /**
     * get a player
     */
    router
        .route('/player')
        .get(playercontroller.getPlayer)

    /**
     * adds a player
     */
    router
        .route('/player')
        .post(playercontroller.addPlayer)
}