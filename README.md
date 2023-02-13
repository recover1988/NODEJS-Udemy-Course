# NODEJS-Udemy-Course

Repaso general de NodeJS

```

Creacion de rutas en Express
res.status(number)
res.send(string)
res.json(object)
Uso de params y query
para usar params /:id -> `const { id } = req.params;`
para usar query /users?limit=10&offset=20 -> `const { limit, offset } = req.query;`

**limit** -> registro numerico positivo, numero maximo de registros que queremos retornar

**offset** -> el numero del primer registro a retornar empieza en 0

```

Hay q usar api y version para que el usuario no se quede sin info si estamos acutaliznaod o modificando la api.

Para crear rutas -> `const router = express.Router();`

## CORS
Cross-Origin Resource Sharing
Error por politica del mismo origen.

## Test

```
.\node_modules\.bin\mocha --> corre los test

  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "lint": "eslint",
    "test": "mocha" --> corre los test
  },
```
