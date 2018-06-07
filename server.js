const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now());
    // cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`);
    cb(null, file.originalname);
  }
});

// const upload = multer({ dest: 'uploads/' });
const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
  (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.listen(3000, () => console.log('App na porta 3000'));
