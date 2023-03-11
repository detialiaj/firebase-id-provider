const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true, removeAdditional: false });

module.exports = ajv;