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
}