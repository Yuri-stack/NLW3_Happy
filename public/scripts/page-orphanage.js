const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Pegando valores do Front
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

//Criando Mapa
const map = L.map('mapid', options).setView([lat,lng], 15)

//Criando e e add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//Criando Ícone
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//Criando e add Maker
L.marker([lat, lng], { icon })
    .addTo(map)

//Galeria de Imagens
function selectImage(event){

    const button = event.currentTarget

    //removendo as classe .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })


    //selecionar img clicada
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //atualizar o container de img
    imageContainer.src = image.src

    //adicionar a classe .acvtive para o btn clicado
    button.classList.add('active')

}
