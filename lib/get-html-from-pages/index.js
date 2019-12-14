require("isomorphic-fetch");
const getHtmlFromPage = require("../get-html-from-page");
const { map } = require("ramda");

const getHtmlFromPages = links =>
  Promise.all(
    map(
      parentPage =>
        getHtmlFromPage(parentPage)
          .then(html => ({ parentPage, html }))
          .catch(e => e),
      links
    )
  );

module.exports = getHtmlFromPages;
