const { parse } = require("node-html-parser");
const getHTMLFromPage = require("../get-html-from-page");
const { map } = require("ramda");

const getLinksFromHTML = html =>
  parse(html)
    .then(root => root.querySelectorAll("a"))
    .then(links => map(link => link.attributes.href, links))
    .catch(err => err);

module.exports = getLinksFromHTML;
