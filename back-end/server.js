'use strict'

const Hapi = require('hapi')

const server = Hapi.server({ 
    host: 'localhost', 
    port: 3001
})

server.route({
    method: 'GET',
    path:'/cars', 
    handler: (request, h) => {
        return { cars: [{
            make: "Toyata",
            model: "Tacoma",
            year: "2009",
            mileage: 100000
        },{
            make: "Jeep",
            model: "JKU",
            year: "2015",
            mileage: "25088"
        }]

        }
    },
    config: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['cache-controle', 'x-requested-with']
        }
    }
})

async function start() {

    try {
        await server.start()
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }

    console.log('Server running at:', server.info.uri)
}

start()