const { initializeApp } = require("firebase-admin/app");
const admin = require("firebase-admin");
const serviceAccount = require('../firebase-admin-sa.json')

module.exports = initializeApp({
	credential: admin.credential.cert(serviceAccount),
});