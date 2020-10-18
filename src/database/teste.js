const Database = require('./db')

Database.then(async (db) => {
    //Inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.2216106",
            "-49.6468375",
            "Lar das Meninas",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quae deserunt ad eveniet iste numquam mollitia assumenda ratione saepe impedit quaerat ducimus rem ipsa facere, neque aliquam, vitae placeat sit.",
            "11912345678",
            "https://images.unsplash.com/photo-1601180964401-6e474136af83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure at numquam corporis odit accusamus, dolor, maiores saepe ad perspiciatis expedita, sit adipisci laudantium consequuntur! Ullam, nobis. Nisi dolores sit quia.",
            "Horários de visitas das 8h as 18h",
            "1"
        );
    `)

    //Consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //Consultar somente um Orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})