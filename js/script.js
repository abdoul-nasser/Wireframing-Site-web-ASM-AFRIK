$('#myTab button').on('click', function (event) {
  event.preventDefault()
  $(this).tab('show')
})

$('#myTab button[data-target="#profile"]').tab('show') // Select tab by name
$('#myTab li:first-child button').tab('show') // Select first tab
$('#myTab li:last-child button').tab('show') // Select last tab
$('#myTab li:nth-child(3) button').tab('show') // Select third tab