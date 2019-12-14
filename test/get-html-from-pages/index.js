const getHtmlFromPages = require("../../lib/get-html-from-pages");

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
