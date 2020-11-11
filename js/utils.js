Object.valFromPath = function(object, array){
    val = object
    array.forEach(path=>{
        val = val[path]
    });
    return val;
};
function async_requestAnimationFrame() {
    return new Promise(function (res, rej) {
        requestAnimationFrame(res);
    });
}
function async_setTimeout(time) {
    return new Promise(function (res, rej) {
        setTimeout(res, time);
    });
}