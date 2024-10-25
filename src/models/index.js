const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // or your preferred storage location
});

const db = {};

// Import models
db.User = require('./user')(sequelize, DataTypes);
db.Contact = require('./contact')(sequelize, DataTypes);

// Add sequelize instance to the db object
db.sequelize = sequelize;

module.exports = db;
