if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
  .then((registration) => {
    console.log("[ServiceWorker**] - Registered");
    registration.onupdatefound = function () {
      console.log('Saving assets for offline caching!');

      const installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        switch (installingWorker.state) {
          case 'installed':
          if (!navigator.serviceWorker.controller) {
            console.log('Caching complete!');
          }
          break;

          case 'redundant':
          throw Error('The installing service worker became redundant.');
        }
      };
    };
  })

  .catch(err => {
    console.log(err);
  });
}
  document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
     document.getElementById('interactive');
     $('#loader').hide();
     // requestMenuToWorker({type: 'requestMenu', data: ''})
   }
 }

window.addEventListener('load', function() {

  function updateOnlineStatus(event) {
    $('#toast-4').addClass('show')
    if (window.navigator.onLine) {
      $('#toast-4').addClass('bg-success')
      $('#toast-4 .in .text').text('Online')
    } else  {
      $('#toast-4').removeClass('bg-success')
      $('#toast-4 .in .text').text('Offline')
    }
    var setTimeoutToast = setTimeout(function(){
      $('#toast-4').removeClass('show')
    }, 3000)
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  $('#darkmodesidebar').click('click', (e)=>{
    darkLight()
    $('body').toggleClass(localStorage.toggled);
  })

  if (localStorage.toggled == 'dark') {
      $('#darkmodesidebar').attr('checked', true)
      $('body').toggleClass("dark-mode-active", true);
      $('#page-image').addClass("dark-mode-image", true);
      $('.swiper-slide').find('img').addClass("dark-mode-image", true);
      $('.swiper-slide').addClass("dark-mode-image", true);
      $('.swiper-slide-active').addClass("dark-mode-image", true);
      $('.swiper-slide-next').addClass("dark-mode-image", true);
      $('.swiper-slide-prev').addClass("dark-mode-image", true);
      $('.swiper-container').addClass("dark-mode-image", true);
    } else {
      $('#darkmodesidebar').attr('checked', false)
      $('body').toggleClass("dark-mode-active", false);
      $('#page-image').removeClass("dark-mode-image");
      $('.swiper-slide').find('img').removeClass("dark-mode-image");
      $('.swiper-slide').removeClass("dark-mode-image");
      $('.swiper-slide-active').removeClass("dark-mode-image");
      $('.swiper-slide-active').find('img').removeClass("dark-mode-image");
      $('.swiper-slide-next').removeClass("dark-mode-image");
      $('.swiper-slide-prev').removeClass("dark-mode-image");
      $('.swiper-container').removeClass("dark-mode-image");
    }

  function back(){
    if (localStorage.toggled == 'dark') {
      $('#darkmodesidebar').attr('checked', true)
      $('body').toggleClass("dark-mode-active", true);
      $('#page-image').addClass("dark-mode-image", true);
      $('.swiper-slide').find('img').addClass("dark-mode-image", true);
      $('.swiper-slide').addClass("dark-mode-image", true);
      $('.swiper-slide-active').addClass("dark-mode-image", true);
      $('.swiper-slide-next').addClass("dark-mode-image", true);
      $('.swiper-slide-prev').addClass("dark-mode-image", true);
      $('.swiper-container').addClass("dark-mode-image", true);
    } else {
      $('#darkmodesidebar').attr('checked', false)
      $('body').toggleClass("dark-mode-active", false);
      $('#page-image').removeClass("dark-mode-image");
      $('.swiper-slide').find('img').removeClass("dark-mode-image");
      $('.swiper-slide').removeClass("dark-mode-image");
      $('.swiper-slide-active').removeClass("dark-mode-image");
      $('.swiper-slide-active').find('img').removeClass("dark-mode-image");
      $('.swiper-slide-next').removeClass("dark-mode-image");
      $('.swiper-slide-prev').removeClass("dark-mode-image");
      $('.swiper-container').removeClass("dark-mode-image");
    }
  }
  swiper.on('slideChange', function ({realIndex:r,previousIndex:p}) {
    back()
    if(r-p==1){
      back()
    }
    else{
      back()
    }
  });
})

$(document).ready(function(){
  if (localStorage.toggled == 'dark') {
      $('#darkmodesidebar').attr('checked', true)
      $('body').toggleClass("dark-mode-active", true);
      $('#page-image').addClass("dark-mode-image", true);
      $('.swiper-slide').find('img').addClass("dark-mode-image", true);
      $('.swiper-slide').addClass("dark-mode-image", true);
      $('.swiper-slide-active').addClass("dark-mode-image", true);
      $('.swiper-slide-next').addClass("dark-mode-image", true);
      $('.swiper-slide-prev').addClass("dark-mode-image", true);
      $('.swiper-container').addClass("dark-mode-image", true);
    } else {
      $('#darkmodesidebar').attr('checked', false)
      $('body').toggleClass("dark-mode-active", false);
      $('#page-image').removeClass("dark-mode-image");
      $('.swiper-slide').find('img').removeClass("dark-mode-image");
      $('.swiper-slide').removeClass("dark-mode-image");
      $('.swiper-slide-active').removeClass("dark-mode-image");
      $('.swiper-slide-active').find('img').removeClass("dark-mode-image");
      $('.swiper-slide-next').removeClass("dark-mode-image");
      $('.swiper-slide-prev').removeClass("dark-mode-image");
      $('.swiper-container').removeClass("dark-mode-image");
    }
})

const darkLight =() => {
  if (localStorage.toggled != 'dark') {
    $('#darkmodesidebar').attr('checked', true)
    $('body').toggleClass("dark-mode-active", true);
    $('#page-image').addClass("dark-mode-image", true);
    $('.swiper-slide').find('img').addClass("dark-mode-image", true);
    $('.swiper-slide').addClass("dark-mode-image", true);
    $('.swiper-slide-active').addClass("dark-mode-image", true);
    $('.swiper-slide-next').addClass("dark-mode-image", true);
    $('.swiper-slide-prev').addClass("dark-mode-image", true);
    $('.swiper-container').addClass("dark-mode-image", true);
    localStorage.toggled = "dark";
  } else {
    $('#darkmodesidebar').attr('checked', false)
    $('body').toggleClass("dark-mode-active", false);
    $('#page-image').removeClass("dark-mode-image");
    $('.swiper-slide').find('img').removeClass("dark-mode-image");
    $('.swiper-slide').removeClass("dark-mode-image");
    $('.swiper-slide-active').removeClass("dark-mode-image");
    $('.swiper-slide-active').find('img').removeClass("dark-mode-image");
    $('.swiper-slide-next').removeClass("dark-mode-image");
    $('.swiper-slide-prev').removeClass("dark-mode-image");
    $('.swiper-container').removeClass("dark-mode-image");
    localStorage.toggled = "";
  }
}

var iProgression = -1, bProgress = false;
function delete_resources() {
  return new Promise(resolve => {
    setTimeout(() => {
      const del = caches.delete('images-v3')
      resolve(del);
    }, 2000);
  });
}
function download_resouces() {
  return new Promise(resolve => {
    setTimeout(() => {
      caches.open('images-v3').then(function(cache){

        $('#progress .progress-text').text('');
        $('#progress .progress-bar').css({'width':0+'%'})

        for (i = 0; i <= images.length-1; i++) {
          iProgression++;
          console.log('p', iProgression,images.length-1)
          if (iProgression == images.length-1) {
            bProgress = true;
          }
          $('#progress .progress-text').text(percentage(iProgression, images.length-1).toFixed(0) + '%');
          $('#progress .progress-bar').css({'width':percentage(iProgression, images.length-1)+'%'});
          cache.add(images[i]);

          if (bProgress) {
            setTimeout(function(){
              location.reload();
            }, 1500)
          }
        }


        var check_progress = setInterval(function(){
          if(iProgression == images.length-1){
            clearInterval(check_progress)
          }
        })
        resolve(cache);
      }).catch(function(err){
        console.log('err', err)
        resolve(err);
      })

    }, 2000);
  });
}

async function asyncCall_delete() {
  console.log('calling');
  const result = await delete_resources();
  if (result) {
    location.reload()
    console.log('success')
  } else {
    console.log('failed');
  }
}

async function asyncCall_download() {
  console.log('calling');
  const result = await download_resouces();
  console.log('result', result)
}
const percentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
}

var updateToastStatus = function(sComment) {
  $('#toast-4').addClass('show')
  $('#toast-4 .in .text').text(sComment)

  var setTimeoutToast = setTimeout(function(){
    $('#toast-4').removeClass('show')
  }, 3000)
}

  var requestToServerData = function(params, sComment){
    console.log('requestToServerData', params)
    var url = '/api/'+params;
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      updateToastStatus(sComment+' content has been added on the page')
      response.forEach(item => {
        swiper.appendSlide('<div class="swiper-slide"><img src="'+item.url_image+'" id="page-image" data-id="'+item.index+'" data-page="'+item.title+'" alt="'+item.title+'" width="100%"></div>')
      })

    })
    .catch((response) => {
      console.log('err', response)
    })
  }


var swiperActiveIndex = 0
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '#__nextPage',
      prevEl: '#__prevPage',
    },
    hashNav: true,
});

  var _bIsRotib = false, _bIsDoa = false, _bIsSholat = false
  // swiper.on('slideChange', function(){
  //   swiperActiveIndex = swiper.activeIndex;
  //   switch(swiperActiveIndex){
  //     case 5 : {
  //       if (_bIsRotib !== true) {
  //         _bIsRotib = true
  //         requestDataToWorker({
  //           type: 'requestData',
  //           data: {
  //             params : 'rotib',
  //             title : 'Rotibul Haddad'}
  //           })
  //       }
  //     }
  //     break;
  //     case 15 : {
  //       if (_bIsDoa !== true) {
  //         _bIsDoa = true
  //         requestDataToWorker({
  //           type: 'requestData',
  //           data: {
  //             params : 'doa',
  //             title : 'Wirid & Doa'}
  //           })
  //       }
  //     }
  //     break;
  //     case 60 : {
  //       if (_bIsSholat !== true) {
  //         _bIsSholat = true
  //         requestDataToWorker({
  //           type: 'requestData',
  //           data: {
  //             params : 'sholat',
  //             title : 'Sholat-sholat'}
  //           })
  //       }
  //     }
  //     break;
  //   }
  // })


  // var myWorker = new Worker('/worker.js')
  // myWorker.onmessage = function(e){
  //   console.log('UI', e.data)
  //   switch(e.data.type){
  //     case 'responseMenu': {
  //       renderMenu(e.data.data)
  //     }
  //     case 'responseData': {
  //       renderData(e.data.data.res, e.data.data.comment)
  //     }
  //   }
  // }
  
  // var requestMenuToWorker = function(e){
  //   myWorker.postMessage({type : e.type, data: e.data})
  // }
  // var requestDataToWorker = function(e){
  //   myWorker.postMessage({
  //     type : e.type, 
  //     data: {
  //       params : e.data.params, 
  //       title: e.data.title
  //       }
  //     })
  // }


  var renderMenu = function(response){
    console.log('renderMenu', response[i]);
    var sTitle = '', sMenu = ''
    for (var i = 0; i < response.length; i++) {
      sTitle += '<div class="listview-title">'
      sTitle += '<span>'+ response[i].bab +'</span>'
      sTitle += '</div>'
      sTitle += '<ul class="listview flush transparent no-line image-listview">'
      response[i].menu.forEach((item, index) => {
        sTitle += '          <li>'
        sTitle += '              <a href="#" class="item" data-id="'+item.index+'" id="' + response[i].id + '_'+index+'">'
        sTitle += '                  <div class="icon-box bg-primary">'
        sTitle += '                      <ion-icon name="home-outline"></ion-icon>'
        sTitle += '                  </div>'
        sTitle += '                  <div class="in">'
        sTitle += item.title
        sTitle += '                  </div>'
        sTitle += '              </a>'
        sTitle += '          </li>'
      })
      sTitle += '</ul>'

    }
    $('.modal-body').append(sTitle)


    var _bIsRotibMenu = false, _bIsDoaMenu = false, _bIsSholatMenu = false,
        _bIsQosidahMenu = false, _bIsMunakatMenu = false, _bIsTambahanMenu = false
    for (var i = 0; i < response.length; i++) {
      response[i].menu.forEach((item, index) => {

        $('li a#'+response[i].id+'_'+index).click(function(){
          slideIndex = $(this).data('id') - 1;
          // swiper.slideTo(slideIndex)
          console.log('slideIndex', slideIndex)
          switch(true){
            case slideIndex > 0 && slideIndex < 6 : {
              swiperSlideTo(slideIndex)
            }
            break;
            case slideIndex > 5 && slideIndex < 13 : {
              if (_bIsRotibMenu !== true) {
                _bIsRotibMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'rotib',
                    title : 'Rotibul Haddad'}
                  })
                swiperSlideTo(slideIndex)
              }
              swiperSlideTo(slideIndex)
            }
            case slideIndex > 40 && slideIndex < 88 : {
              if (_bIsRotibMenu !== true) {
                _bIsRotibMenu = true

                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'rotib',
                    title : 'Rotibul Haddad'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsDoaMenu !== true) {
                _bIsDoaMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'doa',
                    title : 'Wirid & Doa'}
                  })
                swiperSlideTo(slideIndex)
              }
              swiperSlideTo(slideIndex)
            }
            case slideIndex > 73 && slideIndex < 92 : {
              if (_bIsRotibMenu !== true) {
                _bIsRotibMenu = true

                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'rotib',
                    title : 'Rotibul Haddad'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsDoaMenu !== true) {
                _bIsDoaMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'doa',
                    title : 'Wirid & Doa'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsSholatMenu !== true) {
                _bIsSholatMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'sholat',
                    title : 'Bab Sholat'}
                  })
                swiperSlideTo(slideIndex)
              }
              swiperSlideTo(slideIndex)
            }

            case slideIndex > 90 && slideIndex < 100 : {
              if (_bIsRotibMenu !== true) {
                _bIsRotibMenu = true

                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'rotib',
                    title : 'Rotibul Haddad'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsDoaMenu !== true) {
                _bIsDoaMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'doa',
                    title : 'Wirid & Doa'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsSholatMenu !== true) {
                _bIsSholatMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'sholat',
                    title : 'Bab Sholat'}
                  })
                swiperSlideTo(slideIndex)
              }
              if (_bIsQosidahMenu !== true) {
                _bIsQosidahMenu = true
                requestDataToWorker({
                  type: 'requestData',
                  data: {
                    params : 'qasidah',
                    title : 'Qosidah & Pujian'}
                  })
                swiperSlideTo(slideIndex)
              }
              swiperSlideTo(slideIndex)
            }
          }
          $('#sidebarPanel').modal('hide')
        })

      })
    }

  }
  var swiperSlideTo = function(slideIndex){
    $('#loaderContent').show()
    $('#cardContent').hide()
    setTimeout(function(){ 
      swiper.slideTo(slideIndex); 
      $('#loaderContent').hide(); 
      $('#cardContent').show() 
    }, 500)
  }
  var renderData = function(response, sComment){
    if (!response) return
    updateToastStatus(sComment+' content has been added on the page')
    response.forEach(item => {
      swiper.appendSlide('<div class="swiper-slide"><img src="'+item.url_image+'" id="page-image" data-id="'+item.index+'" data-page="'+item.title+'" alt="'+item.title+'" width="100%"></div>')
    })
  }
