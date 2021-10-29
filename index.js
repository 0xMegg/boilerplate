const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require('./config/key');

//aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch((e) => console.log('MongoDB error: ', e));


app.get('/', (req, res) => {
  res.send('Hello World! Jaewon missyou')
})

app.post('/register', (req, res) => {
  //유저 정보를 client에서 가져와서 데이터베이스에 넣어준다
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})