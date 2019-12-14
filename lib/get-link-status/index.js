require("isomorphic-fetch");
const { propOr } = require("ramda");

const getLinkStatus = link =>
  fetch(link)
    .then(res => {
      const status = propOr(400, "status")(res);
      return status;
    })
    .catch(err => console.log({ err }));
