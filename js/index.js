$(function(){
	var things = [
	'self',
	'plans', 
	'work',
	'dog',
	'drone',
	'song',
	'git repo',
	'startup',
	'life',
	'idea',
	'band',
	'website',
	'cat',
	'hobby',
	'sleep',
	'dreams',
	'lover',
	'cooking',
	'story',
	'name',
	'house',
	'family',
	'hates',
	'likes'
	];
	var end = things.length;
	$thing = $("#thing");
	setTimeout(function(){ nextThing(0); }, 20);
	function nextThing(i){
		$thing.text(things[i]);
		i++;
		if(i > end){
			i = 0;
		}
		setTimeout(function(){ nextThing(i); }, 1100);
	}
	var date = new Date;
	var days = ['Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'];

	$("#time").attr('placeholder', days[(date.getDay() + 1) % 7] + " at noon");

	$sendEmail  = $("#send-email");
	$sendEmail.click(function(){
		$sendEmail.addClass('loading');
		$.post("/email.php", {email: $("#email").val(), time:$("#time").val()})
		.done(function(data){
			$sendEmail.parent().addClass('sent-success');
		})
		.fail(function(data){
			$sendEmail.parent().addClass('sent-fail');
		})
		.always(function(){
			$sendEmail.parent().addClass('sent');
		});
	});
});