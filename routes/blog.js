const express = require('express')
const Article = require('./../models/article')
const router = express.Router()

router.get('/all', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.send({message:'Success', articles: articles})
})

router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.send({message:'Failure'});
    res.send({message:'Success', data: { article: article }})
})

module.exports = router;
