console.log ("hi")
$.ready()
$('.readmore a').click(function() {
  event.preventDefault();
$('#show-this-on-click').slideDown("slow")
$('.readmore').hide()
$('.readless').show()
})

$('.readless a').click(function() {
  event.preventDefault();
$('#show-this-on-click').slideUp("slow")
$('.readmore').show()
$('.readless').hide()
})

$('.learnmore').click(function() {
  event.preventDefault();
$('.hide').slideDown("slow")
$('.learnmore').hide()
})
