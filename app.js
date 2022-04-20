const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const methodOverride = require('method-override');
const flash = require('connect-flash');
const passport = require('passport');
const dotenv = require('dotenv');
const path = require('path');
const homeRouter = require('./routers/homeRoute');
const productRouter = require('./routers/productRoute');
const authRouter = require('./routers/auth');
const adminRouter = require('./routers/adminRoute');
const cartRouter = require('./routers/cartRouter');
const settingRouter = require('./routers/settingRoute');
const resetPasswordRouter = require('./routers/resetPasswordRoute');
const checkoutRouter = require('./routers/checkoutRoute');

const app = express();

dotenv.config({ path: './config.env' });
//create mongodb-session
const DB = process.env.DATABASE_URL.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);
const store = MongoStore({
  uri: DB,
  expires: 1000 * 60 * 60 * 24,
  collection: 'useSession',
});

//initialize app
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(flash());
//create session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
  }),
);

//initilize passport and connect it with session
require('./utilities/passport');
app.use(passport.initialize());
app.use(passport.session());

//set ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engin', 'ejs');
app.use('/auth', authRouter);
app.use(
  '/',
  homeRouter,
  productRouter,
  cartRouter,
  settingRouter,
  resetPasswordRouter,
  checkoutRouter,
);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.redirect('/home');
});

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
