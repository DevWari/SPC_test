const db = require("../models");
const User = db.user;
const Video = db.video;
const MetaData = db.metadata;

exports.getTotalVideoSize = async (req, res) => {    
  const name = req.query.name
  // Validate request
  if (!name) {
    res.status(400).send({
      status: false,
      message: "user name can not be empty!"
    });
    return;
  }
  try {
    const data = await User.findOne({ where: { name: name} })
    if (data) {
      console.log ("datas...." + data.total_size)
      const response = {
        status: true,
        total_count: data.total_size
      }
      res.send(response);

    } else {
      const response = {
        status: false,
        message: `Cannot find User with name=${name}.`
      }
      res.status(404).send(response);
    }
  } catch (e) {
    const response = {
      status: false,
      message: `Error retrieving User with name = ${name}.`
    }
    res.status(500).send(response);
  }  
};

exports.getMetaData = async(req, res) => {  
  const videoId = req.query.video_id   

  // Validate request
  if (!videoId) {
    res.status(400).send({
      status: false,
      message: "video id can not be empty!"
    });
    return;
  }
  try {    
    const data = await Video.findOne({ where: { video_id: videoId}, include: ['user', 'metadata']})      
    if (data) {     
        const response = {
          status: true,
          createdBy: data.user.name,
          viewers: data.metadata.count,
          videoSize: data.metadata.size
        }      
        res.send(response);      
    } else {
      const response = {
        status: false,
        message: `Cannot find MetaData with id=${videoId}.`
      }
      res.status(404).send(response);
    }
  } catch (e) {    
    const response = {
      status: false,
      message: `Error retrieving MetaData with id = ${videoId}.`
    }
    res.status(500).send(response);
  }  
};

exports.updateMetaData = async(req, res) => {
  const videoId = req.query.video_id  
  const videoSize = req.query.video_size  
  const viewerCount = req.query.viewer_count   

  // Validate request
  if (!videoId || !videoSize || !viewerCount) {
    res.status(400).send({
      status: false,
      message: "video_id, video_size and viewer_count can not be empty!"
    });
    return;
  }
  
  try {    
    const videoData = await Video.findOne({ where: { video_id: videoId}, include: ['user', 'metadata']})
    if (videoData) {
      const oldTotalSize = videoData.user.total_size      
      const oldVideoSize = videoData.metadata.size      
      const newTotalSize = oldTotalSize + Number(videoSize) - oldVideoSize      

      const userNum = await User.update({ total_size: newTotalSize}, {
        where: {
          id: videoData.user_id
        }
      });

      if (userNum == 1) {
        const num = await MetaData.update({ size: videoSize, count: viewerCount }, {
          where: {
            id: videoId
          }
        });
        if (num == 1) {
            res.send({
              status: true,
              message: "MetaData was updated successfully."              
            });
          } else {
            res.status(404).send({
              status: false,
              message: `Cannot update MetaData with id=${videoId}. Maybe MetaData was not found or req.body is empty!`
          });
        }                 
      } else {
        res.status(404).send({
          status: false,
          message: `Cannot update MetaData with id=${videoId}. Maybe MetaData was not found or req.body is empty!`
        });
      }
    } else {
      res.status(404).send({
        status: false,  
        message: `Cannot update MetaData with id=${videoId}. Maybe MetaData was not found or req.body is empty!`
      });
    }    
  } catch (e) {    
    const response = {
      status: false,      
      message: `Error updating MetaData with id = ${videoId}.`
    }
    res.status(500).send(response);
  }  
};

