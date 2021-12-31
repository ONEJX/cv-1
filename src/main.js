let html = document.querySelector('#demo')
let style = document.querySelector('#style')

let string = `/*你好，我叫黑睢
接下来我要演示一下我的前端功底
首先我要准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把div变成一个八卦图
注意看好了
首先，我把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
八卦是阴阳形成的
一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
然后加入两个神秘的小球
*/
#div1::before{
    width:100px;
    height:100px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let string2 = ''
let n = 0

let step = () => {
    setTimeout(() => {
        //判断是不是换行，如果是加<br>
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){//判断是不是空格，如果是加&nbsp;
            string2 += '&nbsp;'
        }else{
            string2 += string[n]//否则就照搬string
        }

        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n < string.length-1){
            n += 1
            step()
        }else{

        }
    },50)
}
step()