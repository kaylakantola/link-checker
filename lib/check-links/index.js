require("isomorphic-fetch");
const getLinkStatus = require("../get-link-status");
const { forEach } = require("ramda");

const checkLinks = links =>
  forEach(
    link =>
      getLinkStatus(link)
        .then(status => ({ status, link }))
        .catch(e => e),
    links
  );

module.exports = checkLinks;
