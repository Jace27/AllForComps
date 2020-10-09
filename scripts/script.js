$('#profile').on('mouseover', function(e){
	$('#action_profile').attr('style', 'display: block;');
});
$(document).on('mouseover', function(e){
	if ($('#action_profile').is(e.target) || $('#profile').is(e.target) || $('#action_profile *').is(e.target) || $('#profile *').is(e.target))
		$('#action_profile').attr('style', 'display: block;');
	else
		$('#action_profile').attr('style', 'display: none;');
});

$('#cart').on('mouseover', function(e){
	$('#action_cart').attr('style', 'display: block;');
});
$(document).on('mouseover', function(e){
	if ($('#action_cart').is(e.target) || $('#cart').is(e.target) || $('#action_cart *').is(e.target) || $('#cart *').is(e.target))
		$('#action_cart').attr('style', 'display: block;');
	else
		$('#action_cart').attr('style', 'display: none;');
});

$('input[type=number]').on('change', function(e){
	var prods = [];
	var sum = 0;
	for (var i = 0; i < document.getElementById('products').children.length; i++) {
		prods[i] = document.getElementById('products').children[i].children[1].childNodes[0].data.slice(0, document.getElementById('products').children[i].children[1].childNodes[0].data.length - 1);
		prods[i] = +prods[i] * +(document.getElementById('products').children[i].children[1].nextElementSibling.childNodes[0].value);
		sum += prods[i];
	}
	$('#sum').html("Сумма: "+sum+"р");
});

$('#city').on('click', function(e){
	$('#city_action').attr('style', 'display: block;');
});
$(document).on('click', function(e){
	if ($('#city_action').is(e.target) || $('#city').is(e.target) || $('#city_action input[type=text]').is(e.target) || $('#city_action h2').is(e.target))
		$('#city_action').attr('style', 'display: block;');
	else
		$('#city_action').attr('style', 'display: none;');
});
$('#city_action .city_container ul li').on('click', function(e){
	$('#city').html(this.innerHTML);
	$('#city_action').attr('style', 'display: none;');
});