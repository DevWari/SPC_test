module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tbl_user", {      
      name: {
        type: Sequelize.STRING
      },
      total_size: {
        type: Sequelize.BIGINT
      }
    });
  
    return User;
  };
  