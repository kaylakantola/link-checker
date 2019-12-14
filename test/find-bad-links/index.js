const findBadLinks = require("../../lib/find-bad-links");
const test = require("tape");

const happyLinks = [{ status: 200 }, { status: 300 }];
const mixedLinks = [{ status: 200 }, { status: 400 }];
const sadLinks = [{ status: 400 }, { status: 400 }];

test("findBadLinks() :^)", t => {
  t.plan(3);

  const happyres = findBadLinks(happyLinks);
  t.equal(happyres.length, 0);

  const mixedres = findBadLinks(mixedLinks);
  t.equal(mixedres.length, 1);

  const sadres = findBadLinks(sadLinks);
  t.equal(sadres.length, 2);
});
