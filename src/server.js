//Servidor
const express = require('express')//requisita a função express 
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Importar nunjucks
const nunjucks = require('nunjucks')

//Configurar numjucks(template engine)
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//Iníco e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true }))
// configurar arquivos estáticos(css, scripts, images)
.use(express.static("public"))
// rotas da aplicação
.get("/", (pageLanding))
.get("/study", (pageStudy))
.get("/give-classes", (pageGiveClasses))
.post("/save-classes", saveClasses)

//start do servidor
.listen(5500)// coloca na porta ou rota 5500


