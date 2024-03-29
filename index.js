const getHtmlFromPages = require("./lib/get-html-from-pages");
const getLinksFromHTMLs = require("./lib/get-links-from-htmls");
const getLinkStatuses = require("./lib/get-link-statuses");
const findBadLinks = require("./lib/find-bad-links");
const { map, unnest } = require("ramda");

const linkChecker = links =>
  getHtmlFromPages(links)
    .then(res => getLinksFromHTMLs(res))
    .then(res => Promise.all(map(r => getLinkStatuses(r), res)))
    .then(res => unnest(res))
    .then(res => findBadLinks(res))
    .then(res => console.log(res))
    .catch(e => console.log(e));

// const fakelinks = ["https://www.facebook.com", "https://www.google.com"];
//
// linkChecker(fakelinks);
