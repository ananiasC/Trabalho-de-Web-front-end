// Arquivo JavaScript

$(document).ready(function(){
    $(".btn_menu").click(function(){
        $(".nav_menu").slideDown("slow")
    })
    $(".btn_close").click(function(){
        $(".nav_menu").slideUp("slow")
    })

    $("#maispratos").click(function(){
        $("#maispratos").hide()
        $("#outrospratos").show()
    })
})

$(document).ready(function(){

    // MASCARAS PARA TELEFONE E CELULAR

    $("#telefone").mask("(00) 0000-0000")

    $("#celular").mask("(00) 0000-00009")

    $("#data").datepicker()

    $("#celular").blur(function(event){
        if($(this).val().length == 15)
            $("#celular").mask("(00) 00000-0009")
        else
            $("#celular").mask("(00) 0000-00009")
    })

    // VALIDAÇÃO DO FORMULARIO
    
    $("#formularioDeMensagem").validate({
        rules:{
            nome:{
                required: true,
                maxlength: 100,
                minlength: 6,
                minWords: 2
            },
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            celular:{
                required: true
            },
            data:{
                required: true
            },
            mensagem:{
                required: true
            }
        },
        submitHandler: function(form){
            alert("Mensagem Enviada!")
        }
    })
})
