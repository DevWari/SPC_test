module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("tbl_video", {      
      user_id: {
        type: Sequelize.INTEGER
      },
      video_id: {
        type: Sequelize.INTEGER
      }
    });

    // Video.sync().then(() => {
    //   Video.create({
    //     user_id: 1,
    //     video_id: 1
    //   });
    //   Video.create({
    //     user_id: 1,
    //     video_id: 2
    //   });
    //   Video.create({
    //     user_id: 2,
    //     video_id: 3
    //   });
    //   Video.create({
    //     user_id: 3,
    //     video_id: 4
    //   });
    // });
  
    return Video;
};
  