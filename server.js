const
    express = require('express'),
    app = express(),
    router = require('./router')
PORT = 4000;


// הרצת החיבור לדאטה בייס
require('./db');

app.use(express.json());
router(app);

app.listen(PORT, () => console.log(`Server is running: ${PORT}`))


