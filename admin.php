<html>
<head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/action.js"></script>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<!-- Черный экран -->
<div class="mod_user_back"></div>
<!--  -->

<h3><a href="index.php">User Panel</a></h3><br>

<!-- Форма для регистрации нового пользователя -->
<div class="new_user">
    <h2> Добавление пользователя </h2>
    <form name="form_users" class="form_users">
        <label>Фамилия </label><input class="surname" type="text" placeholder="Иванов"><br>
        <label>Имя </label><input class="name" type="text" placeholder="Иван"><br>
        <label>Отчество </label><input class="trname" type="text" placeholder="Иванович"><br>
        <input type="button" class="btn_register" value="Зарегистрировать">
    </form>
</div>
<br>
<br>
<hr>
<!-- Форма для изменения пользователя -->
<h2 class="title_rename"> Изменение пользователя </h2>
<div class="rename_user"></div>
<div class="mod_user"></div>
</body>
</html>
