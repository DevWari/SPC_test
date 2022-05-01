const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.video = require("./video.model.js")(sequelize, Sequelize);
db.metadata = require("./metadata.model.js")(sequelize, Sequelize);

db.metadata.hasMany(db.video, { as: 'video', foreignKey: "id"});
db.video.belongsTo(db.metadata, {
  foreignKey: "video_id",    
  as: 'metadata'
});

db.user.hasMany(db.video, { as: 'video', foreignKey: "id"});
db.video.belongsTo(db.user, {
  foreignKey: "user_id",    
  as: 'user'
});

module.exports = db;
