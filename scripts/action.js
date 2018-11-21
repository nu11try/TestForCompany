$(document).ready(function () {

    GetUsers();

    $(".btn_register").click(function(){
        var user_register_data = {};
        user_register_data.name = $(".name").val();
        user_register_data.surname = $(".surname").val();
        user_register_data.trname = $(".trname").val();

        if (user_register_data.name == "" || user_register_data.name == " " || user_register_data.name == " ") {
            alert("Нельзя оставить поля пустыми");
            return 0;
        }
        if (user_register_data.surname == "" || user_register_data.surname == " " || user_register_data.surname == " ") {
            alert("Нельзя оставить поля пустыми");
            return 0;
        }
        if (user_register_data.trname == "" || user_register_data.trname == " " || user_register_data.trname == " ") {
            alert("Нельзя оставить поля пустыми");
            return 0;
        }

        $.ajax({
            url: '../db_controller.php',
            type: 'GET',
            data: {name: user_register_data.name, surname: user_register_data.surname, trname: user_register_data.trname, 
                action: "reg"},
        })
        .done(function() {
            $(".surname").val("");
            $(".name").val("");
            $(".trname").val("");

            alert("Пользователь успешно добавлен!")

            GetUsers();
        });
    });
})

$(document).on('click','.btn_delete', function(){
    var id = $("#" + $(this).parent().attr('id')).children("#id_user").text();
    $.ajax({
        url: '../db_controller.php',
        type: 'GET',
        data: {id_user: id, action: "del"},
    })
    .done(function(data) {
        alert("Пользователь успешно удален!")
        GetUsers();
    });
});

$(document).on('click','.btn_cansel', function(){
    CloseRenameForm ();
});

$(document).on('click','.btn_rename', function(){

    var user_rename_data = {};
    var parent = $(this).parent().attr('id');

    user_rename_data.id = $("#" + parent).children("#id_user").text();
    user_rename_data.surname = $("#" + parent).children("#surname_user").text();
    user_rename_data.name = $("#" + parent).children("#name_user").text();
    user_rename_data.trname = $("#" + parent).children("#trname_user").text();
    user_rename_data.status = $("#" + parent).children("#status_user").text();

    $(".mod_user").empty();

    $(".mod_user").append("<form name='mod_user_form' id='mod_user_form' class='mod_user_form'></div>");
    $(".mod_user_form").append("<label class='info_name'>Пользователь(id) № </label><label id='mod_user_id'>"+user_rename_data.id+"</label><br>");
    $(".mod_user_form").append("<label class='info_name'>Фамилия -- </label><label id='mod_user_surname'>"+user_rename_data.surname+"</label><input type='text' id='new_data_surname' name='surname_user_mod'><br>");
    $(".mod_user_form").append("<label class='info_name'>Имя --</label><label id='mod_user_name'>"+user_rename_data.name+"</label><input type='text' id='new_data_name' name='name_user_mod'><br>");
    $(".mod_user_form").append("<label class='info_name'>Отчество --</label><label id='mod_user_trname'>"+user_rename_data.trname+"</label><input type='text' id='new_data_trname' name='trname_user_mod'><br>");
    $(".mod_user_form").append("<label class='info_name'>Статус --</label><label id='mod_user_status'>"+user_rename_data.status+"</label>");
    $(".mod_user_form").append("<select id='new_data_status' class='mod_user_form_status'></select><br><br>");
    $(".mod_user_form_status").append("<option>Первый</option>");   
    $(".mod_user_form_status").append("<option>Второй</option>");   
    $(".mod_user_form_status").append("<option>Третий</option>");   
    $(".mod_user_form").append("<input type='button' class='btn_mod' value='OK' name='rename'>");
    $(".mod_user_form").append("<input type='button' class='btn_cansel' value='Отмена' name='cansel'>");
 

    $(".mod_user").css({
        visibility: 'visible',
        opacity: 1
    });
    $(".mod_user_back").css({
        visibility: 'visible',
        opacity: 1
    });
});

$(document).on('click','.btn_mod', function(){

    var user_rename_data = {};
    var user_new_data = {};
    var parent = $(this).parent().attr('id');

    user_rename_data.id = $("#" + parent).children("#mod_user_id").text();
    user_rename_data.surname = $("#" + parent).children("#mod_user_surname").text();
    user_rename_data.name = $("#" + parent).children("#mod_user_name").text();
    user_rename_data.trname = $("#" + parent).children("#mod_user_trname").text();
    user_rename_data.status = $("#" + parent).children("#mod_user_status").text();

    user_new_data.surname = $("#" + parent).children("#new_data_surname").val();
    user_new_data.name = $("#" + parent).children("#new_data_name").val();
    user_new_data.trname = $("#" + parent).children("#new_data_trname").val();
    user_new_data.status = $("#" + parent).children("#new_data_status").val();

    if (user_new_data.surname == "" || user_new_data.name == "" || user_new_data.trname == "") {
        alert("Нельзя оставить поля пустыми");
        // CloseRenameForm ();
        return 0;
    }

    console.log(user_rename_data);
    console.log(user_new_data);

    $.ajax({
        url: '../db_controller.php',
        type: 'GET',
        data: {id_user: user_rename_data.id, name: user_new_data.name, surname: user_new_data.surname, 
            trname: user_new_data.trname, status: user_new_data.status, action: "ren"},
    })
    .done(function(data) {
        alert("Пользователь успешно обновлен!");
        CloseRenameForm ();
        GetUsers();
    });
});


function GetUsers() {
    $.ajax({
    url: '../db_controller.php',
    data: {action: "sel"},
    })
    .success(function(data) {
        result = $.parseJSON(data);
    })
    .done(function(data) {

        $(".rename_user").empty();

        for (var i = 0; i < result.length; i++) {
            $(".rename_user").append("<div class='user' id='id" + i + "'></div>");
            $("#id" + i).append("<label class='info_name'>Пользователь(id) № </label><label id='id_user' class='user_info'>"+ result[i]["id"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Фамилия </label><label id='surname_user' class='user_info'>"+ result[i]["surname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Имя </label><label id='name_user' class='user_info'>"+ result[i]["name"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Отчество </label><label id='trname_user' class='user_info'>"+ result[i]["trname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Статус </label><label id='status_user' class='user_info'>"+ result[i]["status"] +"</label><br>");
            $("#id" + i).append("<input type='button' class='btn_delete' value='Удалить' name='delete'>");
            $("#id" + i).append("<input type='button' class='btn_rename' value='Изменить' name='rename'>");
        }
    });
}

function CloseRenameForm () {
    $(".mod_user").css({
        visibility: 'hidden',
        opacity: 0
    });
    $(".mod_user_back").css({
        visibility: 'hidden',
        opacity: 0
    });
}