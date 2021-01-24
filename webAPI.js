const https = require('https');

//関数にして一定時間ごとにWebAPIを叩いて更新するようにした。
function GetDog(){
//ここからwebAPI 叩いて表示　API https://dog.ceo/dog-api/
    const req = https.request("https://dog.ceo/api/breeds/image/random",(res)=>{
        res.on('data',(chunk)=>{
            //JSON形式で受けとりparseする    
            obj = JSON.parse(chunk);
            //受け取ったJSONの中の画像の部分messageを<img>タグで直にhtmlを書き換え
            document.getElementById("webAPI").innerHTML = "<img src="+ obj.message+"></img>";
        });
    res.on('end',()=>{   
        });
    })
    req.on('error', (e)=>{
        console.error(e.message);
    })
    req.end();

}
//このスクリプトのなかの関数を10000ミリ秒ごとに叩く
setInterval(GetDog, 10000);
//参考にしたサイト https://qiita.com/r-yanyo/items/3ef153dac12e69a2c46c