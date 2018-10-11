const router = require('express').Router();
module.exports = router;
const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('../secrets');
const apiKey = process.env.API_KEY;
const XLSX = require('xlsx');
let spreadsheet, spreadsheetForAnalysis, data, worksheet;
let apiInput = [];

//formats api call
const keywordlinkGenerator = (key, name) => {
 return `https://api.trade.gov/consolidated_screening_list/search?api_key=${key}&q=${name}`;
};

let finalKeywordResults = [];


router.delete('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {


});

