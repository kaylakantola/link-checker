require("isomorphic-fetch");
const getHtmlFromPage = require("../get-html-from-page");
const { map } = require("ramda");

const getHtmlFromPages = links =>
  Promise.all(
    map(
      link =>
        getHtmlFromPage(link)
          .then(html => ({ html, link }))
          .catch(e => e),
      links
    )
  );

module.exports = getHtmlFromPages;
