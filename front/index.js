import express from 'express'
import Routes from './modules/Routes.js';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))
app.use(Routes)


app.use('*', (req,res) => {
  res.render('pages/404', {
    title: "Je ne comprends pas la demande",
    c404: true,
    message: "Une erreur est surevenue, veuillez réessayer ultérierement"
  })
})

app.listen(8080)




















// app.get('/login', (req,res) => {
//   res.render('pages/login', {
//     title: 'Login',
//     login: true
//   })
// })

// app.get('/register', (req,res) => {
//   res.render('pages/login', {
//     title: 'Inscription',
//     login: false
//   })
// })

// app.post('/login', (req,res) => {
//   console.log(req.body)
// })

// app.post('/register', async (req,res) => {
//   try {
//     const hashedPwd = await bcrypt.hash(req.body.pwd, 10)
//     req.body.pwd = hashedPwd;
//     // TODO db connexion && (return from db check if exists, is Unic if ok: save user)
//     res.redirect('/login')
//   } catch (err) {
//     console.log(err)
//     res.redirect('/register')
//   }
// })