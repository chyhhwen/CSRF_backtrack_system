<?php
class router
{
    public function get($url)
    {
        if(@$this->check())
        {
            $temp = str_split($_SERVER['REQUEST_URI'],4);
            $use = "";
            for($i=1;$i<count($temp);$i++)
            {
                $use = $use.$temp[$i];
            }
            switch ($use)
            {
                case '/':
                    http_response_code(404);
                    return require "./views/error.php";
                    die();
                case '/register':
                    //header('Location: http://localhost/');
                    //exit();
                default:
                    http_response_code(404);
                    return require "./views/error.php";
                    die();
            }
        }
        else
        {
            switch($url)
            {
                case '/':
                    if(@$_SESSION['index'])
                    {
                        return require "./views/user.php";
                    }
                    else
                    {
                        return require "./views/index.php";
                    }
                case '/hack':
                    return require "./views/hack.php";
                case '/logout':
                    $sql = new sql( );
                    $sql -> config("root","","temp","token");
                    $sql -> del("user",@$_SESSION['user']);
                    session_destroy();
                    break;
                case '/login':
                    include "./defense/login.php";
                    $login = new login();
                    if(@$_POST['user']!=NULL && @$_POST['pass']!=NULL)
                    {
                        if($login ->check(@$_POST['user'],@$_POST['pass']))
                        {
                            $_SESSION['index'] = true;
                            $_SESSION['user'] = @$_POST['user'];
                            $sql = new sql( );
                            $http = new http();
                            $sql -> config("root","","temp","token");
                            $sql -> put_data(['',@$_SESSION['user'],md5($http->time()),$http->time()]);
                            $sql -> add("(?,?,?,?)");
                        }
                        header('Location: http://localhost/');
                        exit();
                    }
                    else
                    {
                        header('Location: http://localhost/');
                    }
                    break;
                case '/pay':
                    $http = new http();
                    $sql = new sql();
                    $data = [
                        "money" => $_POST['money'],
                        "user" => $_POST['user']
                    ];
                    $time = $http -> time();
                    $sql -> config("root","","temp","order");
                    $sql -> put_data(['',$data['money'],$data['user'],$time]);
                    $sql -> add("(?,?,?,?)");
                    header('Location: http://localhost/');
                    break;
                default:
                    http_response_code(404);
                    return require "./views/error.php";
                    die();
            }
        }

    }
    public function check()
    {
        $temp = str_split($_SERVER['REQUEST_URI'],5);
        if($temp[0] == "/api/")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
?>