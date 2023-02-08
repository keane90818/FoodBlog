$(function(){
    
    $(window).scroll(function(){
        //var $(window).scrollTop(); 為 scroll
    var scroll = $(window).scrollTop();
    });
    // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
    $('.logo').click(function(){
        $('html,body').animate({
            scrollTop:$('html').offset().top
        })
        return false;
    });
});


const hamburger = document.querySelector('.header .nav-bar .list .rwd');
const mobile_menu = document.querySelector('.header .nav-bar .list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

