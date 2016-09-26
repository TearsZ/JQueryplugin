/**
 * Created by 80900 on 2016-9-26 23:38.
 * Author: Titor foolsecret@163.com
 */
(function ($) {
    $.fn.extend({
        rippleBtn : function () {
            return this.each(function () {
                var me = $(this),
                    rippleColor = me.data('ripple');

                me.css({
                    position: 'relative',
                    overflow: 'hidden',
                });

                me.on("mousedown", function (e) {
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
                        background: rippleColor,
                    });

                    // 给按钮添加水波元素：
                    me.append(ripple);

                    // 当动画结束后从网页中删除这个水波元素
                    ripple.on("animationend", function () {
                        ripple.remove();
                    });

                });

            });
        }
    });
})(jQuery);
