
$(function(){

		// section change

		var pageZindex = 1;

		const sectionChangeBtn = $('.section_change');
		const sectionCommon = $('.section_common');
		const sideChangeBtn = $('.side_menu_btn');

		function secChange (index) {

			sideChangeBtn.removeClass('main_color');
			sectionChangeBtn.removeClass('main_color');

			sideChangeBtn.eq(index).addClass('main_color');			
			sectionChangeBtn.eq(index).addClass('main_color');

			sectionCommon.eq(index).css('z-index', pageZindex);
			sectionCommon.removeClass('section_active');
			sectionCommon.eq(index).addClass('section_active');

			$('.section_common').animate({scrollTop: 0}, 1000);
		}

		$.each(sectionChangeBtn, function(index, item){

			$(this).click(function(){

				pageZindex = pageZindex + 1;

				$('.sidemenu').addClass('sidemenu_active');

				secChange(index);

			});

		});

		$.each(sideChangeBtn, function(index, item){

			$(this).click(function(){

				pageZindex = pageZindex + 1;

				$('.sidemenu').addClass('sidemenu_active');

				secChange(index);

			});

		});

		$('.resume_btn').click(function(){

			pageZindex = pageZindex + 1;

			$('.sidemenu').addClass('sidemenu_active');

			sectionCommon.eq(2).css('z-index', pageZindex);
			sectionCommon.removeClass('section_active');
			sectionCommon.eq(2).addClass('section_active');

			sideChangeBtn.removeClass('main_color');
			sectionChangeBtn.removeClass('main_color');

			sideChangeBtn.eq(2).addClass('main_color');			
			sectionChangeBtn.eq(2).addClass('main_color');

			var resumeTop = $('.career_description').offset().top - 50;
			console.log(resumeTop);

			$('.section_common').animate({scrollTop: resumeTop}, 1000);

		});

		$('.nav_none').click(function(){

			$('.sidemenu').removeClass('sidemenu_active');

		});

		// scroll event

		function scrollEvent () {

			var scrollY = sectionCommon.scrollTop() + sectionCommon.height();
			var workList = $('.work_list>li');
			var resumeList = $('.resume_list>li');

			$.each(workList, function(index, itme){

				var workListTop = $(this).offset().top;

				if (scrollY > workListTop) {

					workList.eq(index).addClass('scroll_acitve');

				} else {

					workList.eq(index).removeClass('scroll_acitve');				

				}

			});

			$.each(resumeList, function(index, itme){

				var resumeListTop = $(this).offset().top;

				if (scrollY > resumeListTop) {

					resumeList.eq(index).addClass('scroll_acitve');

				} else {

					resumeList.eq(index).removeClass('scroll_acitve');				

				}

			});

		}

		sectionCommon.scroll(function(){

			scrollEvent();

		});

		scrollEvent();

		$('.beReady').on("click", function(){
			alert("준비 중 입니다.");
		});

	});
