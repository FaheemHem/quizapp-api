module.exports = app => {

  const userModel = require('../models/user/user.model.server');


  createUser = (req, res) =>
    userModel
      .createUser(req.body)
      .then(
        user => res.json(user),
        error => res.send(error)
      )

  findAllUsers = (req, res) =>
    userModel.findAllUsers()
      .then(users => {
        res.send(users);
      });

  deleteUser = (req, res) => {
    userModel.deleteUser({})
        .then(status => res.send(status))
      }

  login = (req, res) => {
    const user = req.body;
    userModel.findUserByCredentials(user.username, user.password)
      .then(user => {
        req.session['currentUser'] = user;
        res.send(req.session['currentUser']);
      });
  };

  currentUser = (req, res) => {
    const currentUser = req.session['currentUser'];
    if(currentUser) {
      userModel.findUserByIdExpanded(currentUser._id)
        .then(user => res.send(user))
    } else {
      res.sendStatus(403)
    }
  }

  app.post ('/api/user', createUser);
  app.delete ('/api/user', deleteUser);
  app.get ('/currentUser', currentUser);
  app.get ('/api/user', findAllUsers);
  app.post('/login', login);
};