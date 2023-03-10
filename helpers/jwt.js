const { expressjwt } = require('express-jwt');

function authJwt () {
    const secret = process.env.SECRET;
    const api = process.env.API_URL;
    return expressjwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/public\/uploads(.*)/, methods: ['GET', 'OPTIONS']},
            `${api}/users/login`,
            `${api}/users/register`,
            // REMOVE LINE BELOW
            {url: "/api/v1/users/login", methods: ['GET', 'OPTIONS']},
        ]
    });
}

// async function isRevoked (req, payload, done) {
//     if (!payload.isAdmin) {
//         done(null, true)
//     }

//     done();
// }

async function isRevoked(req, payload) {
    if (payload.isAdmin == false) {
      console.log('Not Admin');
      return true;
    }
    console.log('Admin');
    return false;
}


module.exports = authJwt;