!function(){
  var duration = 10
  function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.innerHTML = Prism.highlight(container.innerHTML,Prism.languages.css)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, duration)
      }else{
        fn && fn.call()
      }
    }, duration)
  }
  let code = `/*
 * 首先我们要开始花一个人物动漫画像
 * 左边我们准备开始写代码记录我们实现的过程
 * 右边是图形显示页面
 */
.preview {
  width: 720px;
  position: relative;
  overflow: hidden;
}

/*下面我们要开始头部了*/
.head {
  width: 395px;
  height: 489px;
  background: #f7d5a7;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-radius: 0 0 20px 20px;
  box-shadow: 1px 18px 0px -2px rgba(197, 166, 121, 1);
}
/* 
 *头部的代码布局结束，我们要开始对头发进行加工了 
 */
.hair {
  width: 435px;
  height: 35px;
  background: #8e8d8d;
  border-radius: 15px 15px 0 0;
  position: absolute;
  top: 0;
  left: -20px;
}
.hair::before {
  content: "";
  width: 45px;
  height: 112px;
  background: #8e8d8d;
  position: absolute;
  top: 35px;
  border-radius: 0 0 9px 9px;
}
.hair::after {
  content: "";
  width: 45px;
  height: 112px;
  background: #8e8d8d;
  position: absolute;
  top: 35px;
  right: 0;
  border-radius: 0 0 9px 9px;
}

/*
 * 头发也写完了，开始写眼镜
 */
.glasses {
  width: 207px;
  height: 162px;
  background: #fae1c2;
  border: 14px solid #282828;
  border-radius: 10px;
}
.glasses.left {
  position: absolute;
  left: -20px;
  top: 145px;
}
.glasses.right {
  position: absolute;
  right: -20px;
  top: 145px;
}
.glasses.right::after {
  content: "";
  width: 33px;
  height: 17px;
  background: #282828;
  position: absolute;
  top: 31px;
  left: -35px;
}

/*
 * 眼镜部分也完成了，我们开始着手鼻子部分
 */
.naris {
  width: 18px;
  height: 18px;
  background: #925200;
}
.naris.left {
  position: absolute;
  left: 175px;
  top: 314px;
  border-radius: 6px;
}
.naris.right {
  position: absolute;
  left: 205px;
  top: 314px;
  border-radius: 6px;
}

/* 鼻子部分也完成了，我们开始着手嘴巴部分 */
.mouth {
  background: #c6a77d;
  width: 147px;
  height: 8px;
  position: absolute;
  top: 412px;
  left: 125px;
  border-radius: 4px;
}

/*
 * 很快头部已经基本完成，接下来开始写身体部分
 */
.personal-body {
  width: 720px;
  height: 222px;
  background: #232e3c;
  border-top-left-radius: 250px 65px;
  border-top-right-radius: 250px 65px;
  position: relative;
  z-index: -1;
}
/*
 * 下面开始写衣服部分 
*/
.suit {
  position: absolute;
  width: 283px;
  height: 222px;
  background: #f5f2f3;
  top: 0;
  left: 218px;
}
.suit::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  border: 78px solid transparent;
  border-top-color: #fff;
  border-left-color: #fff;
}
.suit::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 0;
  border: 78px solid transparent;
  border-right-color: #fff;
  border-top-color: #fff;
}
.cloth {
  width: 0px;
  height: 0px;
  border: 96px solid transparent;
}
.cloth.left {
  position: absolute;
  left: 23px;
  border-right-color: #2D384D;
}
.cloth.left::after {
  content: '';
  position: absolute;
  top: 4px;
  left: -21px;
  width: 0;
  height: 0;
  border: 60px solid transparent;
  border-right-color: #2D384D;
}
.cloth.right {
  position: absolute;
  right: 27px;
  border-left-color: #2D384D;
}

.cloth.right::after {
  content: '';
  position: absolute;
  top: 6px;
  right: -24px;
  width: 0;
  height: 0;
  border: 60px solid transparent;
  border-left-color: #2D384D;
}
.vest {
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-left-color: #1C2632;
  border-bottom-color: #1C2632;
  position: absolute;
  left: 218px;
  top: 182px;
}
.vest::after {
  content: '';
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: #1C2632;
  border-bottom-color: #1C2632;
  position: absolute;
  top: -20px;
  right: -263px;
}
.tie {
  position: absolute;
  left: 280px;
  top: -2px;
  width: 50px;
  height: 50px;
  margin: 40px  80px 40px;
  transform-origin: 0 100%;
  transform:rotate(-45deg);
  background: #FD8298;
}
.tie-c {
  position: absolute;
  left: 335px;
  top: 30px;
  width: 60px;
  height: 0;
  border-bottom: 193px solid #FD8298;
  border-left: 20px solid transparent;
  border-right: 30px solid transparent;
  z-index: 0;
}


/*
 * Date: at 1:35am, Aug.10th, 2018 
 * Author：huangfl
 * Design：A Grey Fish
 * Contact: feelonewong#gmail.com ('#' replace '@')
 * beta: 2.0
 * 好了，我的动漫人物已经画好了。
 * 这个动漫看上去挺好玩实现起来非常简单，如果你想了解源码，请了解以下链接：
 * https://github.com/JackWong992/animate-person
 */
`
  writeCode('',code)

}.call()
