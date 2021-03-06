$().ready(addComments);

function addComments() {
    $('.star.star5').click();

    // 物流评分
    $('.commstar.start5').click();

    // 商品评论
    var items = $('.f-item.f-goods');
    for (var i = 0; i < items.length; i++) {
        console.log("第" + i + "个商品");
        var my_comment = '';
        var conjunctions = ["而且", ",", "、", "感觉"];
        var tags = items.eq(i).find('.tag-item');
        if (tags.length === 0) {
            var title = items.eq(i).find('.p-name').text();
            var title_arr = title.split(' ');
            my_comment = title_arr[Math.floor(Math.random() * title_arr.length)] + '挺不错的, 我觉得还是很满意的。';
            items.eq(i).find('textarea').text(my_comment);
            continue;
        }
        var num = [];
        for (var j = 0; j <= tags.length; j++) {
            num[j] = j;
        }
        num.sort(function () {
            return 0.5 - Math.random()
        });

        var num2 = [0, 1, 2, 3];
        num2.sort(function () {
            return 0.5 - Math.random()
        });
        for (var k = 0; k < 5; k++) {
            var sn = num[k];
            var sn2 = num2[k];
            tags.eq(sn).addClass('tag-checked');
            my_comment += tags.eq(sn).text();
            if (k < 4)
                my_comment += conjunctions[sn2];
        }
        my_comment += "。";
        items.eq(i).find('textarea').text(my_comment);
        console.log("第" + i + "个商品评价完成");
    }
}

