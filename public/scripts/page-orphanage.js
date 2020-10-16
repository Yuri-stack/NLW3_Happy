const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Criando Mapa
const map = L.map('mapid', options).setView([-27.2216106,-49.6468375], 15)

//Criando e e add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

//Criando Ícone
const icon = L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//Criando e add Maker
L.marker([-27.2216106,-49.6468375], { icon })
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
