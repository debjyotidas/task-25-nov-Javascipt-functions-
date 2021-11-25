function evenodd() {
    let num =(document.getElementById("num").value);
    

    for(num=0;num<=15;num++) {
    	if(num%2==0){
        	window.alert(num+" is even. ");
        	        }
    
    	else {
        	window.alert(num+ " is odd ");
    		}
    	}
}
