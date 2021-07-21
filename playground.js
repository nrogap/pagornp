const { generateAccessToken } = require('./services/auths');
const usersService = require('./services/users')
const passwordsService = require('./services/passwords')

const user = usersService.findByCredential('nrogapp', 'Samp1e-password')

console.log(generateAccessToken(user, 'user'))
// console.log(passwordsService.hash('Samp1e-password'))
