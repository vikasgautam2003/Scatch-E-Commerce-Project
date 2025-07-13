const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');

const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

const db = require('./config/mongoose-connections');

app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || 'your_default_secret',
})
);

app.use(flash());

app.use('/users', require('./routes/index'));
app.use('/owners', require('./routes/ownersRouter'));
app.use("/owner", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});