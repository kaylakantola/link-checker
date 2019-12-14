require("isomorphic-fetch");
const { propOr } = require("ramda");

const getLinkStatus = url =>
  fetch(url)
    .then(res => propOr(400, "status")(res))
    .catch(err => err);

module.exports = getLinkStatus;
