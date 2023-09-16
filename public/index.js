window.onload=()=>
{
    document.querySelector('#user').onblur=()=>
    {
        if((document.querySelector('#user').value).length>10)
        {
            document.querySelector('#user').value="";
            alert('使用者名稱超出大小');
        }
    }
    document.querySelector('#pass').onblur=()=>
    {
        const list=["<",">","()"];
        for(var i=0;i<list.length;i++)
        {
            if((document.querySelector('#pass').value).indexOf(list[i]) !== -1)
            {
                document.querySelector('#pass').value="";
                alert('輸入內容格式錯誤');
            }
        }
    }
    document.querySelector('#register').onclick=()=>
    {
        document.querySelector('.put').style.display="none";
        document.querySelector('.put1').style.display="block";
    }
    document.querySelector('#return').onclick=()=>
    {
        document.querySelector('.put1').style.display="none";
        document.querySelector('.put').style.display="block";
    }
    document.querySelector('#name1').onblur=()=>
    {
        if((document.querySelector('#name1').value).length>10)
        {
            document.querySelector('#name1').value="";
            alert('使用者名稱超出大小');
        }
    }
    document.querySelector('#user1').onblur=()=>
    {
        if((document.querySelector('#user1').value).length>10)
        {
            document.querySelector('#user1').value="";
            alert('使用者名稱超出大小');
        }
    }
    document.querySelector('#pass1').onblur=()=>
    {
        const list=["<",">","()"];
        for(var i=0;i<list.length;i++)
        {
            if((document.querySelector('#pass').value).indexOf(list[i]) !== -1)
            {
                document.querySelector('#pass').value="";
                alert('輸入內容格式錯誤');
            }
        }
    }
    document.querySelector('#repass1').onblur=()=>
    {
        if(document.querySelector('#repass1').value !=
            document.querySelector('#pass1').value)
        {
            document.querySelector('#repass1').value ="";
            document.querySelector('#pass1').value="";
            alert('密碼不相同');
        }
    }
}