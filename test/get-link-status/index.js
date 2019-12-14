const getLinkStatus = require("../../lib/get-link-status");
const { propOr } = require("ramda");

const getLinkStatus = url =>
  fetch(url)
    .then(res => propOr(400, "status")(res))
    .catch(err => err);

module.exports = getLinkStatus;
