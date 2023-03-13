let auth = require("../init/firebase-auth");

module.exports.ensureCurrentUser = (req, res, next) => {
    let authToken = req.header("authorization");

    if (req.method === "OPTIONS") {
        return next();
    }

    /* Check for authorization Bearer JWT */
    if (!authToken || !authToken.toLowerCase().startsWith("bearer ")) {
        return res.status(401).send("Authentication required.");
    }

    let jwt = authToken.split(" ")[1];

    // Decode JWT
    auth
        .verifyIdToken(jwt)
        .then((decodedToken) => {
            req.currentUser = decodedToken;
            return next();
        })
        .catch((error) => {
            console.log(error);
            return res.status(401).send("Authentication required.");
        });
};