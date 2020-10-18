const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //Inserir dados na tabela
    // await saveOrphanage(db,{
    //     id: 1,
    //     lat: "-27.222633",
    //     lng: "-49.6555874",
    //     name: "Lar dos Meninos",
    //     about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae deserunt ad eveniet iste numquam mollitia assumenda ratione saepe impedit quaerat ducimus rem ipsa facere, neque aliquam, vitae placeat sit.",
    //     whatsapp: "11912345678",
    //     images: [
    //         "https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1598802586325-849b09477776?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //     ],
    //     instructions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure at numquam corporis odit accusamus, dolor, maiores saepe ad perspiciatis expedita, sit adipisci laudantium consequuntur! Ullam, nobis. Nisi dolores sit quia.",
    //     opening_hours: "Horários de visitas das 8h as 18h",
    //     open_on_weekends: "0"
    // })

    //Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar somente um Orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})