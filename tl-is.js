function IS(obj) {
  if (!obj) throw new Error(JSON.stringify(obj) + " ISN'T")
}
IS.NT=function(obj) {
  if (obj) throw new Error(JSON.stringify(obj) + " IS")
}
