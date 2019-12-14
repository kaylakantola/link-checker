const getHtmlFromPages = require("./lib/get-html-from-pages");
const getLinksFromHTMLs = require("./lib/get-links-from-htmls");
const checkLinks = require("./lib/check-links");
const { map } = require("ramda");

const linkChecker = links =>
  getHtmlFromPages(links)
    .then(res => getLinksFromHTMLs(res))
    .then(res => console.log(res))
    .catch(e => console.log(e));

const fakelinks = ["https://www.facebook.com", "https://www.google.com"];

linkChecker(fakelinks);
