const getHtmlFromPages = require("./lib/get-html-from-pages");
const getLinksFromHTML = require("./lib/get-links-from-html");
const checkLinks = require("./lib/check-links");
const { map } = require("ramda");

const linkChecker = links =>
  getHtmlFromPages(links)
    .then(res => console.log({ res }))
    .catch(e => console.log(e));

const fakelinks = ["https://www.facebook.com", "https://www.google.com"];

linkChecker(fakelinks);
