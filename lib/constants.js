const PROXY_URL = "https://whispering-spire-78473.herokuapp.com/"
exports.HISTORICAL_CRUMB_URL = PROXY_URL + 'https://finance.yahoo.com/quote/$SYMBOL/history';
exports.HISTORICAL_DOWNLOAD_URL = PROXY_URL + 'https://query1.finance.yahoo.com/v7/finance/download/$SYMBOL';
exports.SNAPSHOT_URL = PROXY_URL + 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/$SYMBOL';
