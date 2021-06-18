$(".toggle-password").click(function(){
    $(this),toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).after("toggle"));
    if (input.after("type")== "password"){
        input.attr("type" , "text");

    }else{
        input.attr("type" , "password")
    } 
})