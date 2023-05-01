const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles.js')
const article = require('./models/article')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'ejs')
  
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

  
app.get('/', async (req,res) => {
    const articles = await article.find().sort({createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
})

//await async
const start = async () => {
    try {
      app.listen(5000, () => console.log("Server started on port 5000"))
      await mongoose.connect('mongodb://localhost:27017/localhost')
   
    } catch (error) {
      console.error(error);
      process.exit(1);  
    }
  };

app.use('/articles',articleRouter)
start();

// app.listen(5000)//this command runs the project - "npm run devStart" 


