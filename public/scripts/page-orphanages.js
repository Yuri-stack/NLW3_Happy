//Criando Mapa
const map = L.map('mapid').setView([-27.2216106,-49.6468375], 15)

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

//Criando PopUp 
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"</a>')

//Criando e add Maker
L.marker([-27.2216106,-49.6468375], { icon })
    .addTo(map)
    .bindPopup(popup)