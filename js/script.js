


$("#arrcreate").on("click", function () {
    var elementsNum = +($("#num").val());
    var minNum = +($("#min").val());
    var maxNum = + ($("#max").val());

    $(".placeForLog").append("<span>text</span>");
   console.log("elNum :", elementsNum, "min :", minNum, "max ", maxNum);
});