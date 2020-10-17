//Importando bibliotecas
const express = require('express')
const path = require('path')

//Importando arquivos
const pages = require('./pages')

//Iniciando o Express
const server = express()

server
    .use(express.static('public'))                  //Utilizando arquivos estáticos
    .set('views', path.join(__dirname, 'views'))    //Configurar Template Engine
    .set('view engine', 'hbs')

//Criando uma rota
server.get('/', pages.index)
server.get('/orphanage', pages.orphanage)
server.get('/orphanages', pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)

//Iniciado o servidor
server.listen(5500)