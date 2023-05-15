$("#toggler").click(function () {
  if ($(window).width() <= 500) {
    mobileSize()
  } else {
    openNav()
  }
})

function openNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ;"
}

function closeNav() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : -300px ; border-right: none"
}

function mobileSize() {
  document.getElementById("mySidenav").style.cssText =
    "margin-left : 0 ; width : 100vw"
}


$("#filter-toggler").click(function () {
  if ($(window).width() <= 500) {
    mobileFilter()
  } else {
    openFilters()
  }
})

function openFilters() {
  document.getElementById("filters-menu").style.cssText =
    "margin-right : 0 ;"
}

function closeFilters() {
  document.getElementById("filters-menu").style.cssText =
    "margin-right : -375px ; border-right: none"
}

function mobileFilter() {
  document.getElementById("filters-menu").style.cssText =
    "margin-right : 0 ; width : 100%"
}

function choosed(elem) {
    var a = document.getElementsByClassName('filter-item');
    // for (i = 0; i < a.length; i++) {
    //     a[i].classList.remove('active')
    // }
    elem.classList.add('active');
}




$(document).ready(function () {
  $(function () {
      $("#my_slider").slider({
          min: 50,
          max: 1000,
          values: [50, 1000],
          range: true,
          slide: function (event, ui) {
                  $('#display_end').val(ui.values[1] + "RS");
                  $('#display_start').val(ui.values[0] + "RS");
          }
      });
  });

})





function readURLimg(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.image-upload-wrap').hide();
      $('.img-upload-image').attr('src', e.target.result);
      $('.img-upload-content').css("display", "flex");
      $('.image-title').html(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);

  } else {
    removeUploadimg();
  }
}

function removeUploadimg() {
  $('.img-upload-input').replaceWith($('.img-upload-input').clone());
  $('.img-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});



function SaveFunction(x) {
  x.classList.toggle("active");
  $(x).find("i").toggleClass('fal  fas');
}



var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});







var currentTab = 0; // Current tab is set to be the first tab (0)
if ($('#payment').length) {

  showTab(currentTab); // Display the current tab
}
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  if ($('#payment').length) {
    x[n].style.display = "block";
  }
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "flex";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "الدفع";
  } else {
    document.getElementById("nextBtn").innerHTML = "الدفع";
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}


jQuery(document).ready(function () {
  $('[data-quantity="plus"]').click(function (e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal)) {
      $('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      $('input[name=' + fieldName + ']').val(0);
    }
  });
  $('[data-quantity="minus"]').click(function (e) {
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    var currentVal = parseInt($('input[name=' + fieldName + ']').val());
    if (!isNaN(currentVal) && currentVal > 0) {
      $('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      $('input[name=' + fieldName + ']').val(0);
    }
  });
});



const ratingStars = [...document.getElementsByClassName("rating-star")];

function executeRating(stars) {
  const starClassActive = "rating-star active";
  const starClassInactive = "rating-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);

