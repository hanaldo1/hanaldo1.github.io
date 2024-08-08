// [reference](https://terry1213.com/blog/jekyll-magnific-popup/#2-magnific-popup-settingjs-%EC%83%9D%EC%84%B1)

$(document).ready(function() {

    // id가 <A> 인 경우에만 magnific-popup 적용하고 싶다면, img[id="<A>"] 사용
    $('img').wrap( function(){

        // magnific-popup 옵션 설정.
        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            showCloseBtn: true,
            items: {
              src: $(this).attr('src')
            },
        });

        // 이미지를 감쌀 태그 설정.
        return '<a href="' + $(this).attr('src') + '" alt="' + $(this).attr('alt') +'"/>';
    });
});