var express = require('express');
var router = express.Router();
const auth = require('../init/firebase-auth')
/* GET home page. */
router.post('/login', async (req, res) => {
  try {
    const customToken = await auth.createCustomToken(uid);
    res.json({ status: 'success', data: { customToken } })
  } catch (err) {
    res.json({ status: "error", data: err })
  }
});

module.exports = router;
