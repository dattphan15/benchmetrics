const db = require("..");

const getAnalyticsData = function () {
  const text = `
  SELECT * FROM analytics
  `;

  console.log("QUERYING GET ANALYTICS DATA")
  return db
    .query(text)
    .then((data) => data.rows)
    .catch((err) => console.error(this, "query failed", err.stack));
};


module.exports = {
  getAnalyticsData,
};