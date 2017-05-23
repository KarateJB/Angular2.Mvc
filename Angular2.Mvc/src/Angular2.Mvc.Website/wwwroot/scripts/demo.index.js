'use strict';

$(function () {

    $('#calculate').click(function () {
        eventHandler(handler.add);
    })

})

let handler = {
    get add() {
        return "add";
    },
    get minus() {
        return "minus";
    }
};

function eventHandler(handler) {
    console.log('shit!');
    console.log($('#numA'));
    console.log(document.getElementById('numB'));


    switch (handler) {
        case 'add':
            let a = $('#numA').val();
            let b = $('#numB').val();
            $('#result').text(add(+a, +b));
            break;
        default:
            break;
    }
};

function add(a, b) {
    return a + b;
}