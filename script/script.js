window.addEventListener('DOMContentLoaded', function(){

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

	const sectionChangeBtn = document.querySelectorAll('.section_change');
	const sectionCommon = document.querySelectorAll('.section_common');
	const sideChangeBtn = document.querySelectorAll('.side_menu_btn');

	var sideMenu = document.querySelector('.sidemenu');

	sectionChangeBtn.forEach(function(items, i){

		items.addEventListener("click", function(e){

			var nodes = [...sectionChangeBtn];
			var index = nodes.indexOf(e.target);

			pageChange(items, index);

		});			

	});

	sideChangeBtn.forEach(function(items, i){

		pageZindex = pageZindex + 1;

		items.addEventListener("click", function(e){

			var nodes = [...sideChangeBtn];
			var index = nodes.indexOf(e.target);

			pageChange(items, index);

		});			

	});

	function pageChange (items, index) {

		for (var i = 0; i < sectionChangeBtn.length; i++) {
			sectionChangeBtn[i].classList.remove('main_color');			
		}

		for (var i = 0; i < sideChangeBtn.length; i++) {
			sideChangeBtn[i].classList.remove('main_color');
		}

		sectionCommon[index].style.zIndex = pageZindex;

		sectionChangeBtn[index].classList.add('main_color');
		sideChangeBtn[index].classList.add('main_color');
		pageZindex = pageZindex + 1;

		for (var i = 0; i < sectionCommon.length; i++) {
			sectionCommon[i].classList.remove('section_active');
		}

		sectionCommon[index].classList.add('section_active');

		if(index == 0) {
			sideMenu.classList.remove('sidemenu_active');
		} else {
			sideMenu.classList.add('sidemenu_active');			
		}

		document.getElementById('scrollTop').animate({scrollTop: 0}, 1000);

	}

	document.getElementById('resume_btn').addEventListener("click", function(){

		sideMenu.classList.add('sidemenu_active');

		pageZindex = pageZindex + 1;
		sectionCommon[2].style.zIndex = pageZindex;

		for (var i = 0; i < sectionCommon.length; i++) {
			sectionCommon[i].classList.remove('section_active');
		}

		for (var i = 0; i < sideChangeBtn.length; i++) {
			sideChangeBtn[i].classList.remove('main_color');
		}

		for (var i = 0; i < sectionChangeBtn.length; i++) {
			sectionChangeBtn[i].classList.remove('main_color');
		}

		sectionCommon[2].classList.add('section_active');
		sideChangeBtn[2].classList.add('main_color');			
		sectionChangeBtn[2].classList.add('main_color');

		var resumeTop = document.getElementById('career_description').offsetTop - 50;
		document.getElementById('scrollTop').animate({scrollTop: resumeTop}, 1000);

	});

	function scrollEvent (e, i) {
		
		var secScroll = e.scrollTop + e.clientHeight - 400;
		var workList = document.querySelectorAll('.work_list>li');

		workList.forEach(function(w, i) {

			var workListTop = workList[i].getBoundingClientRect().top;

			if(secScroll > workListTop) {
				workList[i].classList.add('scroll_active');
			} else {
				workList[i].classList.remove('scroll_active');					
			}

		});

		var secScroll = e.scrollTop + e.clientHeight - 1000;
		var resumeList = document.querySelectorAll('.resume_list>li');

		resumeList.forEach(function(r, i) {

			var resumeListTop = resumeList[i].getBoundingClientRect().top;

			if(secScroll > resumeListTop) {
				resumeList[i].classList.add('scroll_active');
			} else {
				resumeList[i].classList.remove('scroll_active');					
			}

		});
	}

	sectionCommon.forEach(function(e, i){

		e.addEventListener('scroll', function(){

			scrollEvent(e, i);

		});

		scrollEvent(e, i);

	});

	$('.beReady').on("click", function(){

		alert("준비 중 입니다.");

	});

});