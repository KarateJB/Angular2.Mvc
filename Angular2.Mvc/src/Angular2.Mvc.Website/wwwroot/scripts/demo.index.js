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
    let a = $('#numA').val();
    let b = $('#numB').val();
    let rslt = 0;
    switch (handler) {
        case 'add':
            rslt = add(+a, +b);
            break;
        case 'minus':
            rslt = minus(+a, +b);
            break;
        default:
            break;
    }
    $('#result').text(rslt);
};

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}