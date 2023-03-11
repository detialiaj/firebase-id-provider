const firebaseApp = require('./firebase');
const { getAuth } = require('firebase-admin/auth');

module.exports = getAuth(firebaseApp);