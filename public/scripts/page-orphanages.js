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
    iconAnchor:[29,68],
    popupAnchor:[170,2]
})

//Criando uma função para criar o Pin/Maker
function addMarker({ id, name , lat, lng }){
    
    //Criando PopUp 
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"</a>`)

    //Criando e add Maker
    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)

}

const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})