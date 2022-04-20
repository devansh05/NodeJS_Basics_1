//To export a function from module
exports.addExportName = function add(a, b){
    return a+b;
}

//to export a function another method
function sub(a, b){
    return a-b;
}
//subName is what we will use in the importing file
exports.subName = sub