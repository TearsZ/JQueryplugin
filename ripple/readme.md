# 这是仿照谷歌的水波按钮效果。

使用方法：
首先引入ripple库中的css样式 ripple.css，
再引入ripple.jquery.js

在页面中给选择的元素增加一个属性 data-ripple="可以忽略/自己喜欢的按钮波纹颜色值"

在js中调用：
$("对象").ripple();

即可。

例如：
<code>
<link href="ripple.css" rel="stylesheet">

<button class="btn" data-ripple="#f6f6f6">Button</button>

<script src="jquery.js"></script>
<script src="ripple.jquery.js"></script>

<script>
    $('.btn').ripple();
</script>
</code>
