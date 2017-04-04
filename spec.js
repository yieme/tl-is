function IS(r){if(!r)throw Error(JSON.stringify(r)+" ISN'T")}IS.NT=function(r){if(r)throw Error(JSON.stringify(r)+" IS")};

IS(true)
IS('hello')
IS(1)
IS(1.2)
IS(IS)
IS([])
IS({})

IS.NT(false)
IS.NT(0)
IS.NT(0.0)
IS.NT(undefined)
IS.NT(null)
IS.NT()
