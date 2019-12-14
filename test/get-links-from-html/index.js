const getLinksFromHTML = require("../../lib/get-links-from-html");

const { parse } = require("node-html-parser");
const { map, filter, includes, compose } = require("ramda");

const getLinksFromHTML = ({ parentPage, html }) => {
  const parsed = parse(html);
  const links = parsed.querySelectorAll("a");
  const properLinks = compose(
    filter(link => includes("http", link) && includes("://", link)),
    map(link => link.attributes.href)
  )(links);
  return { parentPage, links: properLinks };
};

module.exports = getLinksFromHTML;
