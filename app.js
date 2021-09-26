const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const GameRoute = require('./routes/game');

const app = express();

const PORT = process.env.PORT || 9000;

//ejs engine
app.set('view engine', 'ejs');

//middleware
app.use(expressLayouts);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
}

//Route
app.use('/', GameRoute);

app.listen(PORT, () => console.log(`Server running on port, http://localhost:${PORT}`));