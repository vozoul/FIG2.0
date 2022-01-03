import express from 'express'
import bodyParser from 'body-parser'
import bcrypt from 'bcrypt'
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))

app.get('/', async (req,res) => {
  res.render('pages/home', {title: "Accueil"})
})

app.get('/login', (req,res) => {
  res.render('pages/login', {
    title: 'Login',
    login: true
  })
})

app.get('/register', (req,res) => {
  res.render('pages/login', {
    title: 'Inscription',
    login: false
  })
})

app.post('/login', (req,res) => {
  // TODO try/catch
  console.log(req.body)
})

app.post('/register', async (req,res) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.pwd, 10)
    req.body.pwd = hashedPwd;
    // TODO db connexion && (return from db check if exists, is Unic if ok: save user)
    res.redirect('/login')
  } catch (err) {
    console.log(err)
    res.redirect('/register')
  }
})

app.listen(8080)