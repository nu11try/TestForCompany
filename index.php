<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/user.js"></script>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<h3><a href="admin.php">Admin Panel</a></h3><br>
	<h2>Список пользователей</h2>
	<div class="filter_users">
		<br>
		<h4>ФИЛЬТРЫ</h4>
		<label>Сортировка по</label>
		<select class="filter">
			<option>ИМЯ в алфавитном порядке</option>
			<option>ИМЯ в обратном порядке</option>
			<option>ФАМИЛИЯ в алфавитном порядке</option>
			<option>ФАМИЛИЯ в обратном порядке</option>
			<option>ОТЧЕСТВО в алфавитном порядке</option>
			<option>ОТЧЕСТВО в обратном порядке</option>
			<option>СТАТУС в алфавитном порядке</option>
			<option>СТАТУС в обратном порядке</option>
		</select>
	</div>

	<br>
	<div class="search_user">
		<label>Поиск по ФИО</label>
		<div class="search_name">
			<input type="text" name="search_name" class="search_name_input">
			<input type="button" name="go" value="--->" id="search_name">
		</div>
					
		<label>Поиск по статусу</label>
		<div class="search_status">
			<input type="text" name="search_status" class="search_status_input">
			<input type="button" name="go" value="--->" id="search_status">
		</div>
	</div>
	<input type="button" name="reset" value="Сброс" class="reset" id="reset">
	<br>
	<hr>
	<div class="users"></div>
</body>
</html>