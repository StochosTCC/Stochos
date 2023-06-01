$path_db = "./"
$path_model = "C:\Users\Aluno\TCC-Stochos\stochos\src\main\java\br\com\tcc\stochos\model"
$i = 0


ls $path_model | ForEach-Object {
    $classes = $($_ -split ' ', 1)
    $classes = $classes.replace(".", " ")
    $classes = $classes -split ' ', 1
    $classes = $classes.replace("java", '')   
    $classes = $classes.replace(" ", '')
    $i = $i + 1
    if($i -lt 10){
        $sql_file = "V00$($i)__creating_table_$($classes.toLower()).sql"
        echo $sql_file
        New-Item $sql_file
        echo "create table $($classes.ToLower())(
   id int not null auto_increment primary key
);" > $sql_file
    }
} 