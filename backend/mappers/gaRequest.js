function gaRequest(data){
    var param = {};
    for(let key in data){
        if(key != "dateRanges"){
            param[key] = data[key].map((item) => {
                return { name: item };
            });
        }
        else{
            param[key] = data[key].map((item)=>{
                return {
                    startDate: item[0],
                    endDate: item[1]
                }
            })
        }
    }
    return param;   
}

module.exports = gaRequest;