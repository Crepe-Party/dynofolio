Object.valFromPath = function(object, array){
    console.log("obj", object, array)
    // val = Object.assign({}, object);
    val = object
    array.forEach(path=>{
        val = val[path]
    });
    return val;
};