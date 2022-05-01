module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tbl_user", {      
      name: {
        type: Sequelize.STRING
      },
      total_size: {
        type: Sequelize.INTEGER
      }
    });

    User.sync().then(() => {
      User.create({
        name: 'Michael',
        total_size: 40
      });
      User.create({
        name: 'Genny',
        total_size: 20
      });
      User.create({
        name: 'Kan',
        total_size: 20
      });
    });   
  
    return User;
  };
  