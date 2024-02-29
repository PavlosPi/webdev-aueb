/* $(document).ready(function() {
    showHello();
})

function showHello(){
    $('#helloBtn').click(function(){
        $('#helloWorldText').text('Hello World!!');
    })
} */




$(document).ready(function() {
    showFullName();
})

function showFullName(){
    $('#fullNameBtn').click(function(){
        alert($('#fname').val() + ' ' + $('#lname').val() )
    })
}

//Pio geniki methodos (opos addevenlistener stin vanilla js
/* function showFullName(){
    $('#fullNameBtn').on('click',function(){
        alert($('#fname').val() + ' ' + $('#lname').val());
    })
} */
