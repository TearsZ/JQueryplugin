/**
 * Created by wsgj on 2016-9-29 12:00.
 * Author: Titor foolsecret@163.com
 */
(function ($) {
    $.fn.extend({
        rippling : function () {
            return this.each(function () {

                var me = $(this),
                    contents = me.html(),
                    rippleColor = me.data('ripple');


                /* *************************************************** */
                /* ******************  初始化操作开始 ******************* */
                var bearBox = $("<span class='ripple-content-box'>"+contents+"</span>").css({
                    'position' : 'relative',
                    'z-index' : 3
                });

                // 清空原有数据
                me.css({
                    'position' : 'relative',
                    "overflow" : 'hidden'
                }).html('');

                // 把用容器包含的内容放到原来的内容位置中：
                me.append(bearBox);

                /* ******************  初始化操作完成 ******************* */
                /* *************************************************** */



                me.on('mousedown', function (e) {
                    // 获取鼠标点击的位置
                    var x = e.pageX,
                        y = e.pageY;

                    // 获取当前点击的位置距离按钮左上角的位置
                    x = x - me.offset().left;
                    y = y - me.offset().top;

                    var ripple = $("<span class='ripple'></span>");

                    ripple.css({
                        left: x-2,
                        top : y-2,
                        'z-index' : 2,
                        background: rippleColor
                    });

                    // 给按钮添加水波元素：
                    me.append(ripple);

                    // 当动画结束后从网页中删除这个水波元素
                    ripple.on("animationend", function () {
                        ripple.remove();
                    });
                }); // on is ending.


            });
        }
    });
})(jQuery);
