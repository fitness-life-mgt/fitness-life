const express = require('express');
const Router = express.Router();

// Upload Endpoint
Router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const randString = Math.random().toString(36).substring(2,7);

  file.mv(`${__dirname}/../../dashboard/public/uploads/products/${randString + file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/products/${randString + file.name}` });
  });
});

Router.post('/upload/workout', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const randString = Math.random().toString(36).substring(2,7);

  file.mv(`${__dirname}/../../dashboard/public/uploads/workouts/${randString + file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/workouts/${randString + file.name}` });
  });
});

Router.post('/upload/program', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const randString = Math.random().toString(36).substring(2,7);

  file.mv(`${__dirname}/../../dashboard/public/uploads/programs/${randString + file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/programs/${randString + file.name}` });
  });
});

Router.get('/dir', (req, res) => {
 res.json({ path: `${__dirname}` });
});

module.exports = Router;