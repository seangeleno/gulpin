var express = require('express')
,    app    = express()
,    logger = require('morgan')
,    path   = require('path')
,    ejs    = require('ejs')

app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req,res){
    res.render('index')
})

app.listen(3000, function(err){
    if(err) throw err
    console.log('Server running on 3000. Love is in the air.')
})
