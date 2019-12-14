require("isomorphic-fetch");
const getLinksFromHTML = require("../get-links-from-html");
const { map } = require("ramda");

const getLinksFromHTMLs = htmls =>
  map(({ parentPage, html }) => getLinksFromHTML({ parentPage, html }), htmls);

module.exports = getLinksFromHTMLs;
