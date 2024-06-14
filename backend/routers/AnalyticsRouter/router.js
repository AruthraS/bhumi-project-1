const router = require('express').Router()

// Controllers
const ReportController = require('./Controllers/ReportController');
const RealTimeReport = require('./Controllers/RealTimeReport');
// 

router.post('/report',ReportController);
router.post('/realtime',RealTimeReport);

module.exports = router;