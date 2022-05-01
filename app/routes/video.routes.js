module.exports = app => {
  const video = require("../controllers/video.controller.js");

  var router = require("express").Router(); 
  
  // Retrieve total Videos Size created by a user
  router.get("/get-video-total-size", video.getTotalVideoSize);

  // Retrieve video metadata for video id
  router.get("/get-video-metadata", video.getMetaData);

  // Retrieve video metadata for video id
  router.put("/update-size-count", video.updateMetaData);

  app.use('/api', router);
};
