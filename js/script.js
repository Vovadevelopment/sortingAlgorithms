var arrayOfObj = [
    {
        name: "Vova",
        weight: 90,
        age: 26
    },
    {
        name: "Kuzya",
        weight: 7,
        age: 5
    },
    {
        name: "Anna",
        weight: 49,
        age: 21
    },
    {
        name: "Chipa",
        weight: 3,
        age: 4
    }
];

function compileElements(array) {
    for (var i = 0; i <array.length; i++){

        $(".table-bordered tbody").append('<tr> <th scope="row">1</th> <td>'+ array[i].name +'</td> <td>'+ array[i].weight +'</td> <td>'+ array[i].age +'</td> </tr>');

        console.log(array[i].name, array[i].weight, array[i].age);
    }

}
compileElements(arrayOfObj);

$(".btn-generate").click (function () {
    alert("hello")
});
$('.btn-age').click(function () {

    arrayOfObj.sort(sortByKey);
    $(".table-bordered tbody").html("");
    compileElements(arrayOfObj);
    
});
$('.btn-weight').click(function () {
    alert("weight")

});


function sortByKey(key) {
    function compareNumeric(a, b) {
        return a[key] - b[key];
    }
    return compareNumeric;
}




console.log();
