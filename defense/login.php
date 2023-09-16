<?php
    class login
    {
        public $comment;
        public function check($u,$p)
        {
            $sql = new sql();
            $sql -> config("root","","temp","menber");
            $sql -> put_data(["id","name","user","pass","time"]);
            if(@$sql->login_check($u,$p))
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