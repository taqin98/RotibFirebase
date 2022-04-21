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
function delete_resources(cacheName) {
  return new Promise(resolve => {
    setTimeout(() => {
      const del = caches.delete(cacheName)
      resolve(del);
    }, 2000);
  });
}
function download_resouces(cacheName, arrData) {
  return new Promise(resolve => {
    setTimeout(() => {
      caches.open(cacheName).then(async function(cache){

        $('#progress .progress-text').text('');
        $('#progress .progress-bar').css({'width':0+'%'})

        for (i = 0; i < arrData.length; i++) {
            iProgression++;
            console.log('Process download cache', iProgression, 'From', arrData.length-1)
            if (iProgression == arrData.length-1) {
              bProgress = true;
            }
            $('#progress .progress-text').text(percentage(iProgression, arrData.length-1).toFixed(0) + '%');
            $('#progress .progress-bar').css({'width':percentage(iProgression, arrData.length-1)+'%'});
            await cache.add(arrData[i]);

            if (bProgress) {
              setTimeout(function(){
                // location.reload();
              }, 1500)
            }
        }


        var check_progress = setInterval(function(){
          if(iProgression == arrData.length-1){
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

async function asyncCall_delete(CacheName) {
  console.log('calling');
  const result = await delete_resources(CacheName);
  if (result) {
    location.reload()
    console.log('success')
  } else {
    console.log('failed');
  }
}

async function asyncCall_download(CacheName, arrData) {
  console.log('calling');
  const result = await download_resouces(CacheName, arrData);
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


  
  var renderData = function(response, sComment){
    if (!response) return
    updateToastStatus(sComment+' content has been added on the page')
    response.forEach(item => {
      swiper.appendSlide('<div class="swiper-slide"><img src="'+item.url_image+'" id="page-image" data-id="'+item.index+'" data-page="'+item.title+'" alt="'+item.title+'" width="100%"></div>')
    })
  }
