const express = require('express');
const router = express.Router();
const Msg = require('../models/msg');

router.post('/send', async (req, res) => {
  const { name, email, sub, msg } = req.body;

  try {
    let newmsg = new Msg({
      name: name,
      email: email,
      sub: sub,
      msg: msg,
    });

    await newmsg.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
