const { User } = require('../models/User');

let auth = (req, res, next) => {

    //인증 처리를 하는 곳

    //클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;

    //토큰을 복호화 한 후 유저를 찾는다.
    User.findByToken()

    //유저 확인 and 인증

    //유저 미확인 and no인증
}

module.exports = { auth };