$(document).on('ready page:load', function(){
// function display_search_results() {
//     // readyState === 4 means that the asynchronous request completed successfully
//     if (this.readyState === 4) {
//       console.log(this);
//       document.getElementById('products').innerHTML = this.responseText;
//     }
//   }


    $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);


    //   $.ajax({
    //   url: '/products?search=' + searchValue,
    //   type: 'GET',
    //   dataType: 'html'
    // }).done(function(data){
    // 	console.log(data);
    //   $('#products').html(data);
    // });
    

	});

    $(window).scroll(function(){
    	if ($(document).height() - $(window).scrollTop() + $(window).height() < 200){
    	// console.log($(window).scrollTop());
    	console.log("near the bottom");
    	console.log($('.pagination span.next').children().attr('href'));
       $.getScript($('.pagination span.next').children().attr('href'));
    }
    });
    // Continue from Step1


   //  $.get('/products?search=' + searchValue)
   //  	.done(function(data){
   //  		console.log(data);
   //    		$('#products').html(data);
   //  	});
  	// });

  // $('#search-form').submit(function(event) {
  //   event.preventDefault();
  //   var searchValue = $('#search').val();

  //   $.ajax({
  //     url: '/products?search=' + searchValue,
  //     type: 'GET',
  //     dataType: 'html'
  //   }).done(function(data){
  //   	console.log(data);
  //     $('#products').html(data);
  //   });
  // });


  // var form = document.getElementById('search-form');
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   var searchValue = document.getElementById('search').value;

  //   var xhr = new XMLHttpRequest();
  //   xhr.onload = display_search_results;
  //   xhr.open('GET', '/products?search=' + searchValue, true);
  //   xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  //   xhr.send();
  // });
});

