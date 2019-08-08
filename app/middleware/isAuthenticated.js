const user = require('../model/User');
const jwt = require('jwt-simple');
const SECRET_KEY = require('../config');

const tokenPrefix = 'JWT';

const verifyToken = (token) => {
  if(!token) {
    throw new Error('No token provided');
}
const [prefx, receivedToken] = token.split(' ');
if (!receivedToken) {
  throw new Error('No token provided');
};
if (prefx != tokenPrefix) {
  throw new Error('Invalid header format');
};

const payload = jwt.verify(recivedToken, SECRET_KEY);

return user.findById(payload._id);
};

module.exports = async(req, resp, next) => {
  try {
    const { authorization } = req.headers;

    const user = await verifyToken(authorization);

    if (!user) {
      return resp.status(400).send({message: 'Token invalid'});
    };

    req.user = user;

    next();
  } catch (error) {
    const message = error.message;
    return resp.status(400).send({message});
  };
};
