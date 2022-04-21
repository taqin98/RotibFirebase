let bLoadmenu = false
let currentURL = '',
	sPushState = '',
	getValue = '',
	getSlide = ''

const renderMenu = (response) => {
	var sTitle = '', sMenu = '', styleText = ''
	for (var i = 0; i < response.length; i++) {
		sTitle += '<div class="listview-title">'
		sTitle += '<span>'+ response[i].bab +'</span>'
		sTitle += '</div>'
		sTitle += '<ul class="listview flush transparent no-line image-listview listview-menu">'
		$.each(response[i].menu, function(index, item){
			if (response[i].menu[index].url == '#')
				styleText = 'secondary'
			else
				styleText = 'primary'
			sTitle += '          <li>'
			sTitle += '              <a href="javascript:;" class="item" data-url="'+item.url+'" data-id="'+item.index+'" id="menu_'+item.index+'">'
			sTitle += '                  <div class="icon-box bg-'+styleText+'">'
			sTitle += '                      <ion-icon name="home-outline"></ion-icon>'
			sTitle += '                  </div>'
			sTitle += '                  <div class="in">'
			sTitle += item.title
			sTitle += '                  </div>'
			sTitle += '              </a>'
			sTitle += '          </li>'
		})
		sTitle += '</ul>';
		bLoadmenu = true

	}
	$('.body-menu').append(sTitle)
	actionMenu(response)
	change_state_url()
}

const reloadMenu = () => {
	renderMenu(master_menu)
	$('#__errMenu').remove()
	$('#sidebarPanel').modal('hide')
}

const actionMenu = (response) => {
	for (var i = 0; i < response.length; i++) {
		$.each(response[i].menu, function(index, item){
			$('#menu_'+item.index).click(function(){
				let URL = $('#menu_'+item.index).attr('data-url')
					sPushState = URL

				history.pushState({}, null, URL);

				$('li a.item').removeClass('menu-active');
				$(this).addClass('menu-active');
				
				change_state_url()
			})
		})
	}
}

const change_state_url = () => {
	currentURL  = new URL(document.location.href);
	getValue    = currentURL.searchParams.get("storage");
	getSlide    = currentURL.searchParams.get("slide");

	switch(getValue){
		case 'pembukaan-v3':
		check_cache(getValue, pembukaan)
		break;

		case 'images-v3':
		check_cache(getValue, images)
		break;

		case 'asmaul-v3':
		check_cache(getValue, asmaul_husna)
		break;

		case 'doa-v3':
		check_cache(getValue, doa)
		break;
	}
	if (getSlide !== null) {
		swiperSlideTo(getSlide)
	} else {
		getSlide = 0
	}
	swiperSlideTo(parseInt(getSlide))
}

var swiperSlideTo = function(slideIndex){
    $('#loaderContent').show()
    $('#cardContent').hide()
    setTimeout(function(){ 
      swiper.slideTo(slideIndex); 
      $('#loaderContent').hide(); 
      $('#cardContent').show() 
      $('#sidebarPanel').modal('hide')
    }, 500)
  }