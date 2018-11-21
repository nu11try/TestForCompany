$(document).ready(function () {
    GetAllUsers();

    $("select").change(function() {
        switch($(".filter").val()) {
            case "ИМЯ в алфавитном порядке":
                GetSortedUsers("name", "ASC");
                break;
            case "ИМЯ в обратном порядке":
                GetSortedUsers("name", "DESC");
                break;
            case "ФАМИЛИЯ в алфавитном порядке":
                GetSortedUsers("surname", "ASC");
                break;
            case "ФАМИЛИЯ в обратном порядке":
                GetSortedUsers("surname", "DESC");
                break;
            case "ОТЧЕСТВО в обратном порядке":
                GetSortedUsers("trname", "ASC");
                break;
            case "ОТЧЕСТВО в алфавитном порядке":
                GetSortedUsers("trname", "DESC");
                break;
            case "СТАТУС в обратном порядке":
                GetSortedUsers("status", "DESC");
                break;
            case "СТАТУС в алфавитном порядке":
                GetSortedUsers("status", "ASC");
                break;
        }
    })

    $("#reset").click(function(){
        GetAllUsers();
        $("input[type='text']").val("");
    })

    $("#search_status").click(function(){
        SearchStatusUsers($(".search_status_input").val());
    })

    $("#search_name").click(function(){
        SearchNameUsers($(".search_name_input").val());
    })
});

function GetAllUsers() {
    $.ajax({
    url: '../db_controller.php',
    data: {action: "sel"},
    })
    .success(function(data) {
        result = $.parseJSON(data);
    })
    .done(function(data) {

        $(".users").empty();

        for (var i = 0; i < result.length; i++) {
            $(".users").append("<div class='user' id='id" + i + "'></div>");
            $("#id" + i).append("<label class='info_name'>Пользователь(id) № </label><label id='id_user' class='user_info'>"+ result[i]["id"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Фамилия </label><label id='surname_user' class='user_info'>"+ result[i]["surname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Имя </label><label id='name_user' class='user_info'>"+ result[i]["name"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Отчество </label><label id='trname_user' class='user_info'>"+ result[i]["trname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Статус </label><label id='status_user' class='user_info'>"+ result[i]["status"] +"</label><br>");
        }
    });
}

// type - тип сортирвки ASC или DESC
// param - по какому параметру идет сортировка
function GetSortedUsers(param, type) {
    $.ajax({
    url: '../db_controller.php',
    data: {param: param, type: type, action: "sort"},
    })
    .success(function(data) {
        result = $.parseJSON(data);
    })
    .done(function(data) {

        $(".users").empty();

        for (var i = 0; i < result.length; i++) {
            $(".users").append("<div class='user' id='id" + i + "'></div>");
            $("#id" + i).append("<label class='info_name'>Пользователь(id) № </label><label id='id_user' class='user_info'>"+ result[i]["id"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Фамилия </label><label id='surname_user' class='user_info'>"+ result[i]["surname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Имя </label><label id='name_user' class='user_info'>"+ result[i]["name"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Отчество </label><label id='trname_user' class='user_info'>"+ result[i]["trname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Статус </label><label id='status_user' class='user_info'>"+ result[i]["status"] +"</label><br>");
        }
    });
}

function SearchStatusUsers(param) {
    if (param == "") {
            alert("Поиск не дал результатов")
            return 0;
    }
    $.ajax({
    url: '../db_controller.php',
    data: {param: param, action: "search"},
    })
    .success(function(data) {
        result = $.parseJSON(data);
    })
    .done(function(data) {

        $(".users").empty();

        for (var i = 0; i < result.length; i++) {
            $(".users").append("<div class='user' id='id" + i + "'></div>");
            $("#id" + i).append("<label class='info_name'>Пользователь(id) № </label><label id='id_user' class='user_info'>"+ result[i]["id"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Фамилия </label><label id='surname_user' class='user_info'>"+ result[i]["surname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Имя </label><label id='name_user' class='user_info'>"+ result[i]["name"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Отчество </label><label id='trname_user' class='user_info'>"+ result[i]["trname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Статус </label><label id='status_user' class='user_info'>"+ result[i]["status"] +"</label><br>");
        }
    });
}

function SearchNameUsers(param) {
    if (param == "") {
            alert("Поиск не дал результатов")
            return 0;
    }
    $.ajax({
    url: '../db_controller.php',
    data: {param: param, action: "search_name"},
    })
    .success(function(data) {
        if (data == "NO") {
            alert("Поиск не дал результатов")
            return 0;
        }
        result = $.parseJSON(data);
    })
    .done(function(data) {

        $(".users").empty();

        for (var i = 0; i < result.length; i++) {
            $(".users").append("<div class='user' id='id" + i + "'></div>");
            $("#id" + i).append("<label class='info_name'>Пользователь(id) № </label><label id='id_user' class='user_info'>"+ result[i]["id"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Фамилия </label><label id='surname_user' class='user_info'>"+ result[i]["surname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Имя </label><label id='name_user' class='user_info'>"+ result[i]["name"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Отчество </label><label id='trname_user' class='user_info'>"+ result[i]["trname"] +"</label><br>");
            $("#id" + i).append("<label class='info_name'>Статус </label><label id='status_user' class='user_info'>"+ result[i]["status"] +"</label><br>");
        }
    });
}