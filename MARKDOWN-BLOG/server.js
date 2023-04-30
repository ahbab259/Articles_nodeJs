const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles.js')
const app = express()

app.set('view engine', 'ejs')
  
app.use(express.urlencoded({extended: false }))

  
app.get('/', (req,res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description'
    }]
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


