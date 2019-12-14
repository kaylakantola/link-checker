const getLinkStatuses = require("../../lib/get-link-statuses");
require("isomorphic-fetch");
const getLinkStatus = require("../get-link-status");
const { map } = require("ramda");

const getLinkStatuses = ({ parentPage, links }) =>
  Promise.all(
    map(
      link =>
        getLinkStatus(link)
          .then(status => ({ status, link, parentPage }))
          .catch(e => e),
      links
    )
  );

module.exports = getLinkStatuses;
