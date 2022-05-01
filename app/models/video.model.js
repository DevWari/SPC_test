module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("tbl_video", {      
      user_id: {
        type: Sequelize.BIGINT
      },
      video_id: {
        type: Sequelize.BIGINT
      }
    });
  
    return Video;
};
  