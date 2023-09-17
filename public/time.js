window.onload=()=>
{

    let second = 0;
    var money = document.querySelector('#money');
    var user = document.querySelector('#user');
    var pay = document.querySelector('#pay');
    function timer()
    {
        if(second > 10)
        {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "/logout", true);
            xhr.onreadystatechange = function ()
            {
                if (xhr.readyState === 4 && xhr.status === 200)
                {
                    alert("閒置過久，自動登出")
                    second = 0;
                    window.location.href = "/gmail";
                }
            };
            xhr.send();
        }
        second += 1;
        console.log(second);
    }
    money.onclick = () =>
    {
        second = 0;
    }
    money.onblur = () =>
    {
        second = 0;
    }
    user.onclick = () =>
    {
        second = 0;
    }
    user.onblur = () =>
    {
        second = 0;
    }
    pay.onclick = () =>
    {
        second = 0;
    }
    pay.onblur = () =>
    {
        second = 0;
    }
    setInterval(timer, 1000);
}