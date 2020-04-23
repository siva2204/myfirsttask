
var numb=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
var numb1=[40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21];
var numb2=numb1
var x=numb.length-1;
var y=numb1.length-1;
var z=numb2.length-1;

var status=0;

var millisecond=0;
var second=0;
var display_millisecond=0;
var display_second=0;


var interval=null;

var recordtimes=new Array();




//code for stopwatch
function stopwatch(){
	millisecond++;
	if (millisecond===1000) {
		millisecond=0;
		second++;
	}

    if (millisecond < 10) {
        display_millisecond = "00" + millisecond; 
    }               
    else if (millisecond < 100) {
        display_millisecond  = "0" + millisecond;
    }
    else {
        display_millisecond  =  millisecond;
    }
    if (second < 10) {
        display_second = "0" + second;
    }
    else {
        display_second= second; 
    }
	document.getElementById('t').innerHTML= display_second + ":" + display_millisecond;

}

//display restart button at last and stop the timer
function fn3(id){
    if(id.innerHTML==" "){
    		window.clearInterval(interval);
			document.getElementById('footer').style.visibility="visible";
    	    
		    
			
		    
		    document.getElementById("showtime").innerHTML=document.getElementById('t').innerHTML;
		    document.getElementById("g").innerHTML="G"
		    document.getElementById("a").innerHTML="A"
		    document.getElementById("m").innerHTML="M"
		    document.getElementById("e").innerHTML="E"
		    document.getElementById("o").innerHTML="O"
		    document.getElementById("v").innerHTML="V"
		    document.getElementById("e2").innerHTML="E"
		    document.getElementById("r").innerHTML="R"

		    if (recordtimes==null) {
		      recordtimes=[];	
			  recordtimes[recordtimes.length]=document.getElementById('t').innerHTML;
			  localStorage.setItem("recordtimes",JSON.stringify(recordtimes));
		    }
		    else{
		    	recordtimes[recordtimes.length]=document.getElementById('t').innerHTML;
		    	localStorage.setItem("recordtimes",JSON.stringify(recordtimes));
		    }
		    recordtimes.sort();
            document.getElementById("0").innerHTML=recordtimes[0];
	        document.getElementById("1").innerHTML=recordtimes[1];
	        document.getElementById("2").innerHTML=recordtimes[2];
	        document.getElementById("3").innerHTML=recordtimes[3];
	        document.getElementById("4").innerHTML=recordtimes[4];
	        document.getElementById("bt").innerHTML=recordtimes[0];
            
	 		
	}				

}



function fn2(id){
	if(id.innerHTML==40){
		status=1 ;

	}
	else{
		status=0;
	}
	

}	
//start the timer
function start(id){
	if (id.innerHTML==21) {


		interval=window.setInterval(stopwatch,1);


		

	}

}


function fn1(id){
	if(id.innerHTML==numb[x]){
		id.innerHTML=numb1[y];
		x--;
		y--;
	}

	else if (status==1 && id.innerHTML==numb2[z]) {
		id.innerHTML=" ";
		z--;
	}
	
	
}
//reload page
function reload(){
	location.reload(false);

	

}


function fn4(id){
	if (id.innerHTML==21){

        recordtimes=JSON.parse(localStorage.getItem("recordtimes"));
        document.getElementById("bt").innerHTML=recordtimes[0];

    }


}


	

function fn6(){
	document.getElementById("top5").style.visibility="visible";
}







	


