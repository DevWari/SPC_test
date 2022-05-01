# SPC BACKEND ENGINEER TEST
## Project setup
```
npm install
```

### Run
```
node server.js
```

## End points
- API_URL: http://localhost:8080/api/
- Retrieve total Videos Size created by a user
    - /get-video-total-size (GET): 
        - param: 
           - name: user name
- Retrieve video metadata for video id
    - /get-video-metadata (GET): 
        - param: 
           - video_id: video id
- Retrieve video metadata for video id
    - /update-size-count (PUT): 
        - param: 
           - video_id: video id
           - video_size: video size
           - viewer_count: viewers count
    