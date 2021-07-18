const { generateAccessToken } = require('./services/auths');
const usersService = require('./services/users')

const user = usersService.findByCredential('nrogapp', 'Samp1e-password')

console.log(generateAccessToken(user, 'user'))