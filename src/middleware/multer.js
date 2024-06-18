const multer = require('multer');
// const express = require('express')
const path = require('path');

// const app = express()
let imageName = "";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const timeStamp = new Date().getTime();
        const imageName = `${timeStamp}-${originalName}`

        cb(null, imageName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000
    }
});
// }).single('photo');

// const imageUpload = app.post("/upload", (req, res) => {
//     upload(req, res, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         return res.status(201)
//         .json({
//             message: 'Gambar terupload!',
//             url: `"http://localhost:${PORT}/image/${imageName}`
//         });
//       }
//     });
//   });

module.exports = upload;
// module.exports = imageUpload;