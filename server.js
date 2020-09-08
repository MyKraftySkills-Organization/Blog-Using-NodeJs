const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const apiRouter = require('./routes/blog');
const methodOverride = require('method-override')
const app = express()
if(process.env.NODE_ENV !== 'production')
  var URI = require('./config')
// connect database
const connectDB = async (URI) => {
  await mongoose.connect(URI, { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
  });
  console.log('db connected...');
}
connectDB(process.env.URI || URI);

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles });
})

app.use('/articles', articleRouter);
app.use('/', apiRouter);

app.listen( process.env.PORT || 3030);