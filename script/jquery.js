
$(function(){

	// work list repeat

	var work = [

	{ LINK : "https://nft.rootonix.kr/", PROJECT : "Rootonix", DAYS : "4 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://lost-ari.com/", PROJECT : "Lost Ari", DAYS : "4 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://moorrfamily.com/", PROJECT : "Moorr family", DAYS : "4 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://buy.moorrfamily.com/", PROJECT : "Moorr family Minting", DAYS : "2 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://dreameta.net/", PROJECT : "Dream Pictures", DAYS : "3 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://meta-all.co.kr/", PROJECT : "Meta-all", DAYS : "3 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://theilion.io/", PROJECT : "Ilion", DAYS : "4 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://rawsoft.io/", PROJECT : "Pamarscan", DAYS : "3 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://goldenclub.io/", PROJECT : "Goldenclub", DAYS : "3 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "https://thepierrotclub.io/", PROJECT : "PIERROT CLUB", DAYS : "4 days", ENTERPRISE : "MEAT-ALL" },
	{ LINK : "http://nicecharger.co.kr/index.jsp", PROJECT : "Nice Charger", DAYS : "6 days", ENTERPRISE : "NINEONE LABS" },
	{ LINK : "http://sample.nineonelabs.co.kr/paycam/", PROJECT : "PayCam", DAYS : "6 days", ENTERPRISE : "NINEONE LABS" },
	{ LINK : "http://iipa.kr/index.php", PROJECT : "IIPA", DAYS : "6 days", ENTERPRISE : "NINEONE LABS" },
	{ LINK : "http://emlab.gachon.ac.kr/", PROJECT : "Gachon Univ Emlab", DAYS : "6 days", ENTERPRISE : "NINEONE LABS" },
	{ LINK : "http://jbbplatform.jbbank.co.kr/", PROJECT : "JB Platform", DAYS : "6 days", ENTERPRISE : "NINEONE LABS" },

	]

	var worklist = $('.work_list');

	for (var key in work) {
		worklist.append(`<li>
			<a href=${work[key].LINK} target="_blank">
			<span>${work[key].PROJECT}</span>
			<span>${work[key].DAYS}</span>
			<strong>${work[key].ENTERPRISE}</strong>
			<span class="icon-link"></span>
			</a>
			</li>`)
	}

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

	$('#resume_btn').click(function(){

		pageZindex = pageZindex + 1;

		$('.sidemenu').addClass('sidemenu_active');

		sectionCommon.eq(2).css('z-index', pageZindex);
		sectionCommon.removeClass('section_active');
		sectionCommon.eq(2).addClass('section_active');

		sideChangeBtn.removeClass('main_color');
		sectionChangeBtn.removeClass('main_color');

		sideChangeBtn.eq(2).addClass('main_color');			
		sectionChangeBtn.eq(2).addClass('main_color');

		var resumeTop = $('#career_description').offset().top - 50;

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

				workList.eq(index).addClass('scroll_active_jquery');

			} else {

				workList.eq(index).removeClass('scroll_active_jquery');				

			}

		});

		$.each(resumeList, function(index, itme){

			var resumeListTop = $(this).offset().top;

			if (scrollY > resumeListTop) {

				resumeList.eq(index).addClass('scroll_active_jquery');

			} else {

				resumeList.eq(index).removeClass('scroll_active_jquery');				

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
