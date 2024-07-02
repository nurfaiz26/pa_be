// imports
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const multer = require('multer');

// routes
const usersRoutes = require('./routes/users');
const patientsRoutes = require('./routes/patients');
const classResultRoutes = require('./routes/class-results');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const adminRoutes = require('./routes/admin')

// middleware
const middlewareLogRequest = require('./middleware/logs');
// const fileUploadRequest = require('./middleware/multer');
// const upload = require('./middleware/multer');

// express config
const app = express();
app.use(middlewareLogRequest);
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use('/users', usersRoutes);
app.use('/patients', patientsRoutes);
app.use('/class-results', classResultRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);
app.use('/admin', adminRoutes);
app.use('/assets', express.static('public/images'));
// app.use('upload', fileUploadRequest)

// file/image upload
let imageName = "";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const timeStamp = new Date().getTime();
        imageName = `${timeStamp}-${originalName}`

        cb(null, imageName);
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000
    }
});
app.use('/upload', upload.any(), (req, res) => {
    res.json({
        message: 'Gambar terupload!',
        url: `http://localhost:${PORT}/assets/${imageName}`,
        // url: `https://api.ichwunden.my.id/assets/${imageName}`,
    });
});
app.use((err, req, res, next) => {
    res.status(400).json({
        message: err.message
    });
});

// port
app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`);
})

// app.listen(() => {})