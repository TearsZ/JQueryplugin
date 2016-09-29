/**
 * Created by wsgj on 2016/9/29.
 */
(function ($) {

    $.fn.extend({
        switch : function () {
            return this.each(function () {

                var me = $(this);

                // 定义复选框：
                var checkbox = me.find("input[type=checkbox]");
                checkbox.css('display','none');

                // 定义切换组件：
                var components = $('<div class="container"><span class="component on">ON</span><span class="component middleware">&nbsp;</span><span class="component off">OFF</span></div>');

                // 添加组件到内容中去：
                me.append(components);
                // 定义组件的基本样式：
                me.find('.container').css({
                    width: parseInt(me.width()*3),
                }).find('.component').css({
                    width: parseInt(me.width()/2),
                });


                // 初始化，如果默认没有被选中，则让开关处于关闭效果：

                var moveWidth = parseInt(me.find('.component').eq(0).width()),
                    switchStatue = checkbox.is(':checked'),
                    switchComponent = me.find('.component').eq(0);
                if (!switchStatue) {

                    switchComponent.eq(0).css({
                        'margin-left' : -moveWidth,
                    });

                }


                // 开关进行点击时：

                me.on('mousedown', function () {

                    var moveWidth = parseInt(me.find('.component').eq(0).width()),
                        switchStatue = checkbox.is(':checked'),
                        switchComponent = me.find('.component').eq(0);

                    if (switchStatue) {

                        switchComponent.eq(0).css({
                            'margin-left' : -moveWidth,
                        });

                        checkbox.attr('checked',false);
                        console.log(checkbox.is(':checked'));

                    } else {

                        switchComponent.eq(0).css({
                            'margin-left' : '0',
                        });

                        checkbox.attr('checked',true);
                        console.log(checkbox.is(':checked'));
                    }

                });

            });
        }
    });

})(jQuery);
