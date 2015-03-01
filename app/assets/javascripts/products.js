$(document).on('ready page:load', function(){

    $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.getScript('/products?search=' + searchValue);

//Below is the response in html instead of script:
    //   $.ajax({
    //   url: '/products?search=' + searchValue,
    //   type: 'GET',
    //   dataType: 'html'
    // }).done(function(data){
    // 	console.log(data);
    //   $('#products').html(data);
    // });


	});

//Infinite scroll:

	 if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      }
    });
  }



//Below is just another way ofthe infinate scroll

    // var pendingRequest = false
    // $(window).scroll(function(){
    // 	var viewPortOffset = $(window).scrollTop() + $(window).height()
    // 	if ($(document).height() - viewPortOffset < 200 && !pendingRequest){
    // 		// console.log($(window).scrollTop());
	   //  	pendingRequest = true
	   //  	console.log("near the bottom");
	   //  	console.log($('.pagination span.next').children().attr('href'));
	   //  	var nextPage = $('.pagination span.next').children().attr('href');
	   //  	if(nextPage === undefined) {
	   //  		return;
	   //  	}
	   //  	$.ajax({
	   //  		url: nextPage,
	   //  		type: 'GET',
	   //  		dataType: 'script'
	   //  	}).done(function(){
	   //  		pendingRequest = false
	   //  	})
    //    		// $.getScript($('.pagination span.next').children().attr('href'));
    // 	}
    // });


	//Trial testing stuff

	// $('#noodle').click(function(event){
 //      $.ajax({
	// 	url: '/products',
	// 	type: 'GET',
	// 	dataType: 'html'
	//   }).done(function(data){
	// 	console.log(data);
	// 	$('#products').html(data);
	//   });
	// });


//Below, other ways/ methods to respond

// function display_search_results() {
//     // readyState === 4 means that the asynchronous request completed successfully
//     if (this.readyState === 4) {
//       console.log(this);
//       document.getElementById('products').innerHTML = this.responseText;
//     }
//   }



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

