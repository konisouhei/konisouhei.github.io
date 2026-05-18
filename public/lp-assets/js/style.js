$(function(){
        $("#open").show();
        $("#close").hide();
    // アイコンをクリック
	$("#open").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").hide();
        $("#close").show();
	});
        
    // アイコンをクリック
	$("#close").click(function(){
		// ulメニューを開閉する
		$("#navi").slideToggle();
        $("#open").show();
        $("#close").hide();
	});
	
});

$(function () {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが300に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function(){
	// メニューをクリック
	$("a[href*=#]:not([href=#])").click(function(){
		// 移動先のコンテンツ位置を取得
		var target = $($(this).attr("href")).offset().top;
		// 50px減らす
		target -= 50;
		// 各コンテンツへスクロール
		$("html, body").animate({scrollTop: target}, 500);
		return false;
	});
});

// スライダー
$(function(){  
    $('#mainimg').vegas({
      slides: [//画像名指定
       { src: '/lp-assets/img/mainimg.jpg' },
       { src: '/lp-assets/img/product.jpg' },
       { src: '/lp-assets/img/mainimg.jpg' }
      ],
       delay: 7000,
       timer: false,
       transitionDuration: 3000,//切り替わりのアニメーション時間
       transition: 'blur', //切り替わりのアニメーション
       animation: 'random' // ランダムに表示
    });
  });

  AOS.init();