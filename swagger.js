const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['../src/users/routes/users.route'];

swaggerAutogen(outputFile, endpointsFiles);
