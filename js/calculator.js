$(document).ready(function() {

	function moveCursor() {
		$('.screen').focus().val($('.screen').val());
	};

	$('.number').click(function() {
		var currentNumber = 0;
		currentNumber = $(this).find('span').text();
		$('.screen').val($('.screen').val() + currentNumber);
		moveCursor();
	});

	$('.clear').click(function() {
		$('.screen').val('');
		moveCursor();
	});

	$('.add').click(function() {
		$('.screen').val($('.screen').val() + " + ");
		moveCursor();
	});

	$('.subtract').click(function() {
		$('.screen').val($('.screen').val() + " - ");
		moveCursor();
	});

	$('.divide').click(function() {
		$('.screen').val($('.screen').val() + " / ");
		moveCursor();
	});

	$('.multiply').click(function() {
		$('.screen').val($('.screen').val() + " * ");
		moveCursor();
	});

	$('.decimal').click(function() {
		$('.screen').val($('.screen').val() + ".");
		moveCursor();
	});
	
	$('.equals').click(function() {
		var equation = "";
		var answer = "";
		var divisionFix = "";
		var adjustedEquation = "";
		var answerCheck = "";
		var adjustedAnswerForCheck = "";
		var errorCheck = "";
		var historyDiv = "";
		equation = $('.screen').val();
		var numberCheck = "";
		historyDiv = '<div class="historyItem">' + equation + '</div>';
		$(historyDiv).appendTo('.historyBox');
		try {
			eval(equation)
		} catch (error) {
			errorCheck = error.message;
			if (errorCheck.length > 0) {
				$('.calcPlatform').css('pointer-events', 'none');
				$('.screen').val("ERROR");
				setTimeout(function() {
					$('.clear').click();
					$('.calcPlatform').css('pointer-events', 'auto');
				}, 2000);
			}
		}
		numberCheck = isNaN(Number(eval(equation)));
		if (numberCheck == true) {
			$('.calcPlatform').css('pointer-events', 'none');
			$('.screen').val("ERROR");
			setTimeout(function() {
				$('.clear').click();
				$('.calcPlatform').css('pointer-events', 'auto');
			}, 2000);
		} else if (eval(equation) === Infinity) {
			$('.calcPlatform').css('pointer-events', 'none');
			$('.screen').val("Infinity");
			setTimeout(function() {
				$('.clear').click();
				$('.calcPlatform').css('pointer-events', 'auto');
			}, 2000);
		} else {
			answer = eval(equation);
			$('.screen').val(answer);
			moveCursor();
		}
	});
});