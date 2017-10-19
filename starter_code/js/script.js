var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function() {

  for(var i = 0; i < cities.length; i++) {
    
  }
  
  $('#city-type').change(function(){

    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});

//notes from the solution code. 
// var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// $(document).ready(function() {

//   // can also use forEach here
//   for(i=0;i<cities.length;i++) {

//     // many ways of creating the option element in jQuery - this is just one possible way
//     $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
// //     var html = '';

// // for (var i = 0, len = data.length; i < len; ++i) {
// //     html.join('<option value="' + data[i]['value'] + '">' + data[i]['label'] + '</option>');
// // }           

// // $('#select').append(html);
// //     for (i = 0; i < 10; i++)
// // { 
// //      $('#mySelect').append($('<option>',
// //      {
// //         value: i,
// //         text : "Option "+i 
// //     }));
// // }

// // $.each(items, function (i, item) {
// //     $('#mySelect').append($('<option>', { 
// //         value: item.value,
// //         text : item.text 
// //     }));
// // });
//   }
//   $('form').on('change', '#city-type',function(){

//     // no need to use toLowerCase()/trim() here - we know what our possible values are ahead of time
//     var city = $('#city-type').val();
//     if(city == 'NYC') {
//       $('body').attr('class','nyc');
//     }
//     else if (city == 'SF') {
//       $('body').attr('class','sf');
//     }
//     else if (city == 'LA') {
//       $('body').attr('class','la');
//     }
//     else if (city == 'ATX') {
//       $('body').attr('class','austin');
//     }
//     else if (city == 'SYD') {
//       $('body').attr('class','sydney');
//     }
//   });
// });