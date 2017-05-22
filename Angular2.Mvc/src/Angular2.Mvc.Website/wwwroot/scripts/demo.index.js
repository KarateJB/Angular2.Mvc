$(function () {

    $('#calculate').click(function () {
        let a = $('#numA').val();
        let b = $('#numB').val();
        $('#result').val(plus(+a,+b));
    })
})


function plus(a, b) {
    return a + b;
}