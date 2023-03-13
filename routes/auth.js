var express = require('express');
var router = express.Router();
const auth = require('../init/firebase-auth')
const { ensureCurrentUser } = require('../middleware/auth')
/* GET home page. */
router.use(ensureCurrentUser)
router.post('/requestCustomToken', async (req, res) => {
  const { currentUser: { uid } } = req;
  try {
    const customToken = await auth.createCustomToken(uid);
    res.json({ status: 'success', data: { customToken } })
  } catch (err) {
    res.status(401).json({ status: "error", data: err })
  }
});

module.exports = router;
