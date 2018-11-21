<?
	require_once "config/config.default.php";

	$connect = mysqli_connect($DB_HOST, $DB_LOGIN, $DB_PASSWORD, $DB_NAME);

	function AddUser($connect) {
		$query = "INSERT INTO users (surname, name, trname) VALUES ('".trim($_GET["surname"])."','".trim($_GET["name"])."','".trim($_GET["trname"])."')";
		mysqli_query($connect, $query);
	}

	function SelectUser($connect) {
		$query = "SELECT * FROM users";
		$result = mysqli_query($connect, $query);
		$resultArray = array();
		while($row = mysqli_fetch_assoc($result)) {
			$resultArray[] = array("id" => $row["id"], "name" => $row["name"],
				"surname" => $row["surname"], "trname" => $row["trname"], 
				"status" => $row["status"]); 
		}
		echo json_encode($resultArray);
	}

	function DeleteUser($connect) {
		$query = "DELETE FROM users WHERE id = '". $_GET["id_user"] ."'";
		$result = mysqli_query($connect, $query);
	}

	function RenameUser($connect) {
		$query = "UPDATE users SET surname = '".$_GET["surname"]."', name = '".$_GET["name"]."', trname = '".$_GET["trname"]."', status = '".$_GET["status"]."' WHERE id = ". $_GET["id_user"];
		$result = mysqli_query($connect, $query);

		echo "Query = ". $query . "   Result = " . $result;
	}

	function SelectSortedUser($connect, $type, $param) {
		$query = "SELECT * FROM users ORDER BY ".$param." ".$type;
		$result = mysqli_query($connect, $query);
		$resultArray = array();
		while($row = mysqli_fetch_assoc($result)) {
			$resultArray[] = array("id" => $row["id"], "name" => $row["name"],
				"surname" => $row["surname"], "trname" => $row["trname"], 
				"status" => $row["status"]); 
		}
		echo json_encode($resultArray);
	}

	function SearchStatusUser($connect, $param) {
		$query = "SELECT * FROM users WHERE status = '".$param."'";
		$result = mysqli_query($connect, $query);
		$resultArray = array();
		while($row = mysqli_fetch_assoc($result)) {
			$resultArray[] = array("id" => $row["id"], "name" => $row["name"],
				"surname" => $row["surname"], "trname" => $row["trname"], 
				"status" => $row["status"]); 
		}
		echo json_encode($resultArray);
	}

	function SearchNameUser($connect, $param) {
		$param_array = preg_split("/\s/", $param);
		if (count($param_array) == 1)
			$query = "SELECT * FROM users WHERE surname LIKE '".$param_array[0]."%' OR name LIKE '".$param_array[0]."%' OR trname LIKE '".$param_array[0]."%'";
		if (count($param_array) == 2)
			$query = "SELECT * FROM users WHERE surname LIKE '".$param_array[0]."%' AND name LIKE '".$param_array[1]."%' UNION
				SELECT * FROM users WHERE surname LIKE '".$param_array[0]."%' AND trname LIKE '".$param_array[1]."%' UNION
				SELECT * FROM users WHERE surname LIKE '".$param_array[1]."%' AND name LIKE '".$param_array[0]."%' UNION
				SELECT * FROM users WHERE surname LIKE '".$param_array[1]."%' AND trname LIKE '".$param_array[0]."%' UNION
				SELECT * FROM users WHERE name LIKE '".$param_array[0]."%' AND trname LIKE '".$param_array[1]."%' UNION
				SELECT * FROM users WHERE name LIKE '".$param_array[1]."%' AND trname LIKE '".$param_array[0]."%'";
		if (count($param_array) == 3)
			$query = "SELECT * FROM users WHERE surname LIKE '".$param_array[0]."%' AND name LIKE '".$param_array[1]."%' AND trname LIKE '".$param_array[2]."%'";
		$result = mysqli_query($connect, $query);
		$resultArray = array();
		while($row = mysqli_fetch_assoc($result)) {
			$resultArray[] = array("id" => $row["id"], "name" => $row["name"],
				"surname" => $row["surname"], "trname" => $row["trname"], 
				"status" => $row["status"]); 
		}
		echo json_encode($resultArray);
	}

	switch (trim($_GET["action"])) {
		case 'reg':
			AddUser($connect);
			break;
		case 'sel':
			SelectUser($connect);
			break;
		case 'del':
			DeleteUser($connect);
			break;
		case 'ren':
			RenameUser($connect);
			break;
		case 'sort':
			SelectSortedUser($connect, $_GET["type"], $_GET["param"]);
			break;
		case 'search':
			SearchStatusUser($connect, $_GET["param"]);
			break;
		case 'search_name':
			SearchNameUser($connect, $_GET["param"]);
			break;
	}

	mysqli_close($connect);
?>