//Criando Mapa
const map = L.map('mapid').setView([-27.2216106,-49.6468375], 15)

//Criando e e add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//Criando Ícone
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68]
})

let marker

//Criando e add Maker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)

})

/* add o campo de fotos */
function addPhotoField(){

    //pegar o container de fotos #images
    const container = document.querySelector('#images')

    //pegar o contaier para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar a duplicada da última imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio
    const input = newFieldContainer.children[0]
        if(input.value == ""){
            return 
        }

    //limpando o campo antes de add
    input.value = ""
    
    //add a imagem duplicada ao container de imagens
    container.appendChild(newFieldContainer)

}

/* remove o campo de fotos */
function deleteField(event){

    //pegando o elemento que desparou a função
    const span = event.currentTarget

    //pegar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    //apagar o campo
    span.parentNode.remove()

}

/* mudar a classe active dos botões */
function toggleSelect(event){

    //retirar a classe dos btns
    document.querySelectorAll('.button-select button')
        .forEach( button => button.classList.remove('active') )

    //colocar a classe active
    const button = event.currentTarget  //pegar o btn clicado
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]')

    //verificar se Sim ou Não
    input.value = button.dataset.value
    
}