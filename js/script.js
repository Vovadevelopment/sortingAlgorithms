


$("#arrcreate").on("click", function () {
    var elementsNum = +($("#num").val());
    var minNum = +($("#min").val());
    var maxNum = + ($("#max").val());
    var arr = createArr(elementsNum, minNum, maxNum);
    for(var i = 0; i < arr.length; i++){
        $(".placeForLog").append("<span>"+ arr[i] +"</span>");
    }
});
$("#clear").on("click", function () {
    $(".placeForLog span").empty();

});
$("#change").on("click", function () {
    if($(".placeForLog").hasClass("inline")){
        $(".placeForLog").removeClass("inline")
    } else {
        $(".placeForLog").addClass("inline")
    }
});



function createArr(elementsNum, minNum, maxNum){
    var arr = [];
    for (var i = 0; i < elementsNum; i++){
        arr.push(minNum + Math.random()*(maxNum - minNum));
    }
    return arr
}
