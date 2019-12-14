require("isomorphic-fetch");
const getLinkStatus = require("../get-link-status");
const { map } = require("ramda");

const checkLinks = links =>
  Promise.all(
    map(
      link =>
        getLinkStatus(link)
          .then(status => ({ status, link }))
          .catch(e => e),
      links
    )
  );

module.exports = checkLinks;
