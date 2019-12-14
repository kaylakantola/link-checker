const getHtmlFromPage = require("../../lib/get-html-from-page");

const getHTMLFromPage = pageURL =>
  fetch(pageURL)
    .then(res => res.text())
    .catch(err => err);

module.exports = getHTMLFromPage;
