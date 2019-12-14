require("isomorphic-fetch");

const getHTMLFromPage = pageURL =>
  fetch(pageURL)
    .then(res => res.text())
    .catch(err => err);

module.exports = getHTMLFromPage;
