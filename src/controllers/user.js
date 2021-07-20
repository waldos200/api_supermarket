const { userService } = require('../services');

const UserCreate = (req, res) => {
    userService.createUser(req.body)
        .then( (User) => res.status(201).json(User))
        .catch( (error) => res.status(400).json(error));
};

module.exports = {
    UserCreate
};