module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("tbl_video", {      
      user_id: {
        type: Sequelize.INTEGER
      },
      video_id: {
        type: Sequelize.INTEGER
      }
    });   
  
    return Video;
};
  