const Player = require('../models/Player')

module.exports = {
  addPlayer: (req, res, next) => {
      new Player(req.body).save((err, newPlayer) => {
          if (err)
              res.send(err)
          else if (!newPlayer)
              res.send(400)
          else
              res.send(newPlayer)
          next()
      });
  },
  getPlayer: (req, res, next) => {
    Player.find().then
      /*populate('following').exec*/((err, player)=> {
          if (err)
              res.send(err)
          else if (!player)
              res.send(404)
          else
          console.log({ PLPLPLL: player})
              res.send(player)
          next()            
      })
  }
}