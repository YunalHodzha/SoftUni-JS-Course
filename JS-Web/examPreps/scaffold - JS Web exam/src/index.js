const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const routes = require('./routes');

const PORT = 3000;

const app = express();

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connected successfully!'))
    .catch((err) => {
        console.log("DB error: ", err);
    });

app.use(routes);

app.get('/*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}...`) });
