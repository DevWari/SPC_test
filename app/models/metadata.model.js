module.exports = (sequelize, Sequelize) => {
    const MetaData = sequelize.define("tbl_metadata", {         
      size: {
        type: Sequelize.INTEGER            
      },
      count: {
        type: Sequelize.INTEGER
      }
    });

    MetaData.sync().then(() => {
      MetaData.create({
        size: 20,
        count: 100
      });
      MetaData.create({
        size: 20,
        count: 30
      });
      MetaData.create({
        size: 10,
        count: 20
      });
      MetaData.create({
        size: 10,
        count: 10
      });      
    });
  
    return MetaData;
  };
  