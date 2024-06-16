const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const gaRequest = require("../../../mappers/gaRequest");
const gaResponse = require("../../../mappers/gaResponse");
const { property_id, auth } = require("../../../config/ga.config");
const path = require("path").resolve(__dirname, "../../../.env");
require("dotenv").config({
  path,
});

async function ReportController(req, res) {
  const ga4data = new BetaAnalyticsDataClient({ auth });

  var params = {
    property: `properties/${property_id}`,
  };

  if (!req.body) {
    return res.status(400).json({
      msg: "Missing required data",
    });
  }
  const mappedData = gaRequest(req.body);
  params = { ...params, ...mappedData };
  try {
    const [response] = await ga4data.runRealtimeReport(params);
    const data = gaResponse(response);
    res.status(200).json({
      msg: "Fetch Success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal Server Error",
      error
    });
  }
}

module.exports = ReportController;
