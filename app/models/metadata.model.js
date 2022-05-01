module.exports = (sequelize, Sequelize) => {
    const MetaData = sequelize.define("tbl_metadata", {         
      size: {
        type: Sequelize.INTEGER            
      },
      count: {
        type: Sequelize.INTEGER
      }
    });
  
    return MetaData;
  };
  