const express = require('express')
const mongoose=require('mongoose')
const Article= require('./models/article')
const articleRouter= require('./routes/articles')

const app = express()

mongoose.connect('mongodb://localhost/blog')
app.set('view engine','ejs')

app.use(express.urlencoded({extended: false}))



app.get('/',(req,res) =>{

    const articles =Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles : articles})
})

app.use('/articles', articleRouter)

app.listen(5000)

