$(function() {
    $('h2').on('click', function () {
        const target = $(event.target);
        if (target.is('h2')) $('span').eq(1).text('h2');
    });
    $('h1').on('click', function () {
        const target = $(event.target);
        if (target.is('h1')) $('span').eq(1).text('h1');
    });
    $('span').on('click', function () {
        const target = $(event.target);
        if (target.is('span')) $('span').eq(1).text('span');
    });
    $('button').on('click', function () {
        const target = $(event.target);
        if (target.is('button')) $('span').eq(1).text('button');
    });
    $('p').on('click', function () {
        const target = $(event.target);
        if (target.is('p')) $('span').eq(1).text('p');
    });


})