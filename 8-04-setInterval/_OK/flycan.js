var bro = 0; //宣告變數 代表兄弟從0開始

function gogoBanner() {

    //先讓全部的 banner 圖片透明消失
    $("#box li").fadeOut();

    if (bro < 5) { //如果當 bro 兄弟的數字小於 5 的時候
        bro++ //就讓 bro 數字遞加 1
    } else { //否則（當兄弟的數字大於 5 時）
        bro = 0 //就讓 bro 數字變回 0 回到第一張圖片
    }

    //再讓下一個 banner 圖片出現
    $("#box li").eq(bro).fadeIn();

}

//設定 setInterval() 計時器
//讓上面的 gogoBanner 函式每間隔 2 秒就會再執行一次
setInterval(gogoBanner, 2000);


