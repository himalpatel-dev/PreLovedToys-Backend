const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'PreLovedToys API',
        description: 'Automatically generated API documentation',
    },
    host: 'localhost:4000',
    schemes: ['http'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: 'Enter your bearer token in the format **Bearer &lt;token&gt;**'
        }
    },
    security: [
        {
            bearerAuth: []
        }
    ]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // Point to your main server file

/* NOTE: If you are using the express Router, you must pass in the 'endpointsFiles' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
});
