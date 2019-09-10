const plus_btn = $("#plus-btn");
const minus_btn = $("#minus-btn");
const start_btn = $("#start-btn");
const abort_btn = $("#abort-btn");

const minutes = $("#minutes");
const seconds = $("#seconds");

let minutes_counter = 0;
let seconds_counter = 0;

plus_btn.click(()=>{if(seconds_counter>=59){
	seconds_counter=0;
	minutes_counter++;
}else {
	seconds_counter++;
}; 
	seconds.setText(seconds_counter);
	minutes.setText(minutes_counter);
});

minus_btn.click(()=>{if(seconds_counter==0 && minutes_counter<=0){
	seconds_counter=0;
	minutes_counter=0;
}else if(seconds_counter>0){
	seconds_counter--;
}else{
	seconds_counter=59;
	minutes_counter--;
}; 
	seconds.setText(seconds_counter);
	minutes.setText(minutes_counter);})

const updateText = function(){
	seconds.setText(seconds_counter);
	minutes.setText(minutes_counter);
}

const countDown = function(){
	let totalTime = seconds_counter + minutes_counter*60;
	timer = setTimeout(countDown, 1000);
	abort_btn.click(()=>clearInterval(timer));
	if(totalTime === 0){
		clearInterval(timer);
		$(".success-text").setText("BOOM")}

	if(seconds_counter>0) {seconds_counter--;
	}else if(seconds_counter===0 && minutes_counter<=0){
		seconds_counter=0;
		minutes_counter=0;
	}else{
		minutes_counter--;
		seconds_counter=59;
	}
	updateText();
}

start_btn.click(() => {
	countDown();
});


