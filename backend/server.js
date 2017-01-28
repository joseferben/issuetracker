const app = require('connect')();
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');

const serverPort = 8081;
const path = require('path');
// swaggerRouter configuration
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development',
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
const spec = fs.readFileSync(path.join(__dirname, './api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());

  app.use(middleware.swaggerValidator());

  app.use(middleware.swaggerRouter(options));

  app.use(middleware.swaggerUi());

  http.createServer(app).listen(serverPort, () => {});
});
