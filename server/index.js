require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const session = require('express-session')
const {SERVER_PORT,SESSION_SECRET,CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    console.log('database set')
    console.log(db.listTables());
    app.listen(SERVER_PORT,()=>console.log('Listening on Port', SERVER_PORT))
}).catch(err=>console.log('err on massive',err))

app.get('/api/users',ctrl.getAllUsers)
app.post('/auth/register',ctrl.register)


