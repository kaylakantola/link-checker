require("isomorphic-fetch");
const { filter } = require("ramda");

const findBadLinks = links => filter(link => link.status > 399, links);

module.exports = findBadLinks;
