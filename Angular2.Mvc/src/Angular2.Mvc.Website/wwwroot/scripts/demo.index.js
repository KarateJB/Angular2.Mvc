'use strict';

$(function () {

    $('#add').click(function () {
        eventHandler(handler.add);
    });

    $('#minus').click(function () {
        eventHandler(handler.minus);
    });

})

let handler = {
    get add() {
        return "add";
    },
    get minus() {
        return "minus";
    }
    //...
};

function eventHandler(handler) {
    let a, b;
    switch (handler) {
        case 'add':
            a = $('#numA').val();
            b = $('#numB').val();
            $('#result').text(add(+a, +b));
            break;
        case 'minus':
            a = $('#numA').val();
            b = $('#numB').val();
            $('#result').text(minus(+a, +b));
            break;
        default:
            break;
    }
};

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}