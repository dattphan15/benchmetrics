const express = require('express');
const router = express.Router();
const {
  getAnalyticsData,
} = require("../db/helpers/analytics-data-queries");

// Show analytics data
router.get("/", (req, res) => {
  getAnalyticsData()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;