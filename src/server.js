//Importando bibliotecas
const express = require('express')
const path = require('path')

//Importando arquivos
const pages = require('./pages')

//Iniciando o Express
const server = express()

server
    .use(express.urlencoded({ extended: true }))    //Permitir pegar informações do Form pelo Req.Body
    .use(express.static('public'))                  //Utilizando arquivos estáticos
    .set('views', path.join(__dirname, 'views'))    //Configurar Template Engine
    .set('view engine', 'hbs')

//Criando uma rota
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)

//Iniciado o servidor
server.listen(5500)