jQuery(document).ready(function($){
	//詢價與樣本索取

		$(".sticky-product.hide.pos-bottom").remove();
		$(".entry-summary").find(".price").remove();
		quick_price("1780");
		$(".wpforms-page-indicator.none").remove();
		$(".wpforms-field.wpforms-field-pagebreak.form_progress_bar").remove();

		$(".price_sys_form").css("background-color","#f7f6f7");
		$(".price_sys_form").css("padding","20px 20px 20px 20px");	
		
		let sample_request_btn_html = "<button class='wpforms-page-button sample_request_btn'>樣本索取</button>";
		let next_btn_style = $(".wpforms-page-1").find(".next_page").find("div").find("button");
		next_btn_style.css("background-color","black");
		let next_btn = $(".wpforms-page-1").find(".next_page").find("div").html();
		$(".wpforms-page-1").find(".next_page").find("div").html(sample_request_btn_html + next_btn);
		$(".wpforms-page-1").find(".next_page").find(".sample_request_btn").css("background-color","white");
		$(".wpforms-page-1").find(".next_page").find(".sample_request_btn").css("color","#b97674");
		$(".wpforms-page-1").find(".next_page").find(".sample_request_btn").css("border","solid 2px");
		sample_request_btn();

		$(".q_height").find("input").on("input",function(){
			let number = $(this).val();
			let total = Number('1000') + Number(number);
			quick_price(String(total));

		});

		$(".wpforms-page-next").click(function(){

			let width_val = Number($(".q_width").find("input").val());
			let height_val = Number($(".q_height").find("input").val());
			let check_status = true;

			let html = "<em class='wpforms-error' role='alert' aria-label='Error message' for=''>需要填寫此項目</em>"

			if(width_val == Number(0) ){
				let id = $(".q_width").find("input").attr("aria-errormessage");
				let check = $(".q_width").find("em")[0];
				if(check == undefined){
					$(".q_width").find("input").after(html);
					$(".q_width").find("em").attr("id",id);
				}

				check_status = false;
		
			}

			if(height_val == Number(0)){
				let id = $(".q_height").find("input").attr("aria-errormessage");
				let check = $(".q_height").find("em")[0];
				if(check == undefined){
					$(".q_height").find("input").after(html);
					$(".q_height").find("em").attr("id",id);
				}

				check_status = false;

			}

			if(check_status == false){
				return false;
			}
			
			let submit_style = $(".wpforms-submit-container");

			let check_btn = Number(submit_style.find("div").find("button").length);

			if(check_btn != 2){
				let button_html = submit_style.find("button")[0].outerHTML;
				let input_count = Number(submit_style.find("input").length)-Number(1);
				submit_style.find("button").remove();
				let new_button_html = "<div class='wpforms-clear wpforms-pagebreak-right'>";
				new_button_html = new_button_html + sample_request_btn_html + button_html;
				new_button_html = new_button_html + "</div>";
				submit_style.find("input").eq(input_count).after(new_button_html);

				submit_style.find(".sample_request_btn").css("background-color","white");
				submit_style.find(".sample_request_btn").css("color","#b97674");
				submit_style.find(".sample_request_btn").css("border","solid 2px");
				submit_style.find(".sample_request_btn").css("margin-right","15px");
				submit_style.find(".price_sys_check").css("background-color","black");
				price_sys_check();
				sample_request_btn();
			}

			$("#wpforms-8173-field_18-container").css("border-bottom","solid");

			$(".wpforms-page.wpforms-page-2").show();

			$(".wpforms-submit-container").show();
			$(".wpforms-field.wpforms-field-pagebreak.next_page").hide();

			return false;	
			
		});

		function sample_request_btn(){
			$(".sample_request_btn").click(function(){
				alert("樣本索取功能開發中，敬請期待");
			});
		}

		function price_sys_check(){
			$(".price_sys_check").click(function(){
				alert("詢價功能開發中，敬請期待");
				$(".wpforms-page.wpforms-page-1").show();
				$(".wpforms-field.wpforms-field-pagebreak.next_page").show();
				$(".wpforms-page.wpforms-page-2").hide();
				$(".wpforms-submit-container").hide();
				$("#wpforms-8173-field_18-container").css("border-bottom","");
		
				$("#topcontrol").click();
		
				return false;
			});
		}

		function quick_price(total){

			const test = total.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');

			let html = "<div class='wpforms-clear wpforms-pagebreak-right'>"
			html = html + "<p class='price'><span class='woocommerce-Price-amount amount'><bdi><span class='woocommerce-Price-currencySymbol'>NT$ " + test + "</span></bdi></p>";
			html = html + "</div>";
			$(".quick_price").html(html);
			$(".quick_price").css("font-size","25px");
		}

		//臨時載入css
		let url =  "/wp-content/themes/porto-child/Base.css?_" + new_time();
		let html = "<link href='" + url + "' rel='stylesheet'  media='all'></link>";
		$('header').append(html);

	//詢價與樣本索取



	// 分類頁
	// 側邊欄跑版調整 （不會隨內容改變方框高度）
	if ($(".HOME").length <1){
			$('.wpfTitleToggle').click(function() {
					setTimeout(function(){
							let wpfMainWrapper = $('.wpfMainWrapper').height();
							$(".pin-wrapper").css('height',wpfMainWrapper+100+'px');
					}, 600);
			});
	}

	// 商品頁子分頁錨點banner
	if ($(".fast-content").length >0){
			setInterval(function(){
					let headercenter = $('.header-center').height();
					let topheight=headercenter+32+'px';
					$(".fast-content").css('top',topheight);
					// console.log(topheight);
			}, 1000);
	}
	// 手機版 側邊篩選器 開啟bar
	setTimeout(function(){
			$(".shop-loop-before").removeAttr("style");
	}, 10);
	
	// 判定螢幕大小
	let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	// 手機版子頁面全部收起
	if (screenWidth <= 767){
			$('.resp-tabs-container').each(function() {
					setTimeout(function(){
							$('.resp-tabs-container [aria-controls="tab_item-0"]').removeClass("resp-tab-active");
							$('.resp-tabs-container [aria-labelledby="tab_item-0"]').removeClass("resp-tab-content-active");
							$('.resp-tabs-container [aria-labelledby="tab_item-0"]').hide();
					}, 1000);
			});
			if ($(".HOME").length >0){
					setTimeout(function(){
							if (document.body.scrollTop < 200){
									$('html,body').animate({ scrollTop: 300+'px' }, 'callback');
							}
					}, 3000);
			} 
	}
	
	// 最右邊懸浮大小icon調整
	if (screenWidth > 767){
	$(".float-menu-1").css('--fm-icon-size','27px');
	}

	// 全站側邊篩選欄 清除鍵置右
	$(".wpfButton").css('width','96%');
	// 全站拉霸轉為原型（原本是方形）
	$(".ui-slider-handle").css({
		"background-color": "#d4c7b4",
		"border": "1px solid #766b5b",
		"border-radius": "20px"
	});
	$("#introduce_faq .elementor-tab-content").removeClass('.elementor-tab-content');

	// 商品搜尋
	//＊商品搜尋最少字數限制
	// 設定搜索字數限制
	const minSearchLength = 1;
	function SearchLength(event){
		const searchInput = $('input[type=search]').val();
		const searchTerm = searchInput.length;
		if (searchTerm == minSearchLength) {
			alert('英文單字至少' + minSearchLength + '個單詞');
			//////問Jason
			event.stopPropagation();//按下搜尋鍵
			event.preventDefault();//按下enter鍵
		}
	}
	
	//按下enter鍵
	$('input[type=search]').keydown(function(event){
			if( event.which == 13 ) {
					SearchLength(event);
			}
	});

	//按下搜尋鍵
	$('.aws-search-btn_icon').click(function(event){
			SearchLength(event);
	});
});



// setTimeout(function(){
//     $(".Category_video").css('height','12vw');
// }, 1600);
    // $('.wpfTitleToggle').onclick(function(){
    //     $(".pin-wrapper").css('height',wpfMainWrapper+100+'px');
    // });

//     $('.wpfTitleToggle').click(function(){
//     setInterval(function(){
//         // let menu_height = $('.pin-wrapper').height();
//         let wpfMainWrapper = $('.wpfMainWrapper').height();
//         // console.log('menu_height:'+menu_height);
//         // console.log('wpfMainWrapper:'+wpfMainWrapper);
//         $(".pin-wrapper").css('height',wpfMainWrapper+100+'px');
//     }, 100);
// });

    // $(".elementor-tab-content").css('color','var(--porto-primary-color) !important');
    // function blogemail(event){
    //     const emailInput = $('input[type=email]').val();
    //     console.log(emailInput);
    //     event.stopPropagation();//按下搜尋鍵
    //     event.preventDefault();//按下enter鍵
    // }
    // $('.wysija-submit').click(function(event){
    //     blogemail();
    // });
    // let xx=$('.custom-html-widget').innerHeight();
    // let x=$('aside.widget').innerHeight();
    // let p=$('.wpfMainWrapper').height;
    // $('.elementor-widget-heading').click(function(){
    // console.log(xx);
    // console.log(x);
    // console.log(p);
    // });
    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = $($(this).attr('href'));
    //     var offset = 240; // 使用標頭高度
    //     $('html, body').animate({
    //         scrollTop: target.offset().top - offset
    //     }, 500);
    // });
    // setTimeout(function(){
    //     $(".pin-wrapper").css('height','');
    // }, 1000);
//    document.querySelector(".pin-wrapper").style.cssText = 'height: 100%; color: green;';
    // $(".pin-wrapper").prop("style",'');
    // $('.pin-wrapper').css('style','');
    // $(".pin-wrapper").removeAttr("style");
    // $(".pin-wrapper").css('height','100%');
    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = $($(this).attr('href'));
    //     var headerHeight = 80;
    //     $('html, body').animate({
    //         scrollTop: target.offset().top - headerHeight
    //     }, 500);
    //     target[0].style.marginTop = headerHeight + 'px'; // 直接修改樣式
    // });