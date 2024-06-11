function gaResponse(data){
    var response = {};
    var labels = [];
    var values = [];
    for(let itr of data.rows){
        labels.push(itr.dimensionValues[0].value);
        values.push(itr.metricValues[0].value);
    }
    response["labels"]=labels;
    response["values"]=values;
    return response;
}

module.exports = gaResponse;