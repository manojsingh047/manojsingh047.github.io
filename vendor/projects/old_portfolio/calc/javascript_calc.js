$(document).ready(function(){

	$('td').click(function(){
		$('#display').empty();
		
		htmlValue=$(this).text();			//value=htmlValue					// collecting values from html			
		
		var numValue=parseInt(htmlValue);		//check=numValue					// converting collected (string) values to integer

		processing(htmlValue, numValue);

		console.log('### countOperator ### '+countOp);
	
	});
	
});
	var htmlValue="";
	var numNop=[];			//	var arr1=[];

	var numArr=[];			//	var arrNum1=[];

	var operator="";
	var result=0;

	var flag=0;							//to avoid 	

	var flagInitialOperator=0;			//TO AVOID INITIAL OPERATOR ENTRY
	var flagInvalidOperator=0;			//to avoid invalid values(invalid '=' after operator)

	var flagDot=0;

	var countOp=0;
	//var temp=[];			defined locally
	
	
	/**********NO USE OF FLAG VARIABLE, TRY TO ELIMINATE IT********************/
	


	function processing(htmlValue, numValue)
	{
		switch(htmlValue)
		{
			case '.':
					if(flagDot==1)
					{
						$('#display').append("<p>"+numArr+"</p>");
						$(this).off('click');
					}
					else	
						displayNum(htmlValue);
					break;

			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
					
					displayNum(htmlValue);
					break;
			

			case '%':
			case '/':
			case 'X':
			case '-':
			case '+': 
					if(flagInitialOperator==0)
					{
						$(this).off('click');
					}
					else if(flagInvalidOperator==1)
		            {
		                $('#display').append("<p>"+numArr+"</p>");
						$(this).off('click');
					}

					else
						displayOperator(htmlValue);
				
					break;

			case '=':
					if(flagInvalidOperator==0)
					{
						$('this').off('click');
						$('#display').append("<p>"+numArr+"</p>");			
					}
					else if(checkInvalid()&&countOp==1)
					{
						$('this').off('click');
						$('#display').append("<p>"+numArr+"</p>");	

					}
					
					else
					{
						equals();
						flag=1;
					}
					break;

			case 'CE':
					 CE();// to display blank
					 break;
			case 'AC':
					 AC();
					 break;
		}
	}

	function displayNum(htmlValue)
	{
		
		if(htmlValue=='.')
		{
			flagDot=1;
			numNop.push(htmlValue);
		numArr=numNop.join('');	//to display together

		$('#display').append("<p>"+numArr+"</p>"); 
	
		flagInitialOperator=1;
		}
		else
		{
			numNop.push(htmlValue);
			numArr=numNop.join('');	//to display together

			$('#display').append("<p>"+numArr+"</p>"); 
			flagInitialOperator=1;		
		}
	}

	function displayOperator(htmlValue)
		{
			countOp++;
			numNop.push(htmlValue);
			numArr=numNop.join('');
			$('#display').append("<p>"+numArr+"</p>");	
			operator=htmlValue;
			flagInvalidOperator=1;
			flagDot=0;
		}

	function AC()
		{
			flagInitialOperator=0;
			flagInvalidOperator=0;
			flag=0;

			numArr=0;
			//console.log(numArr);
			numNop=[];
			//console.log(numNop);
			$('#display').empty();
		}
	function CE()
	{
		if(flag==1)
		{
			flag=0;
			numArr=0;
			numNop=[];
			//console.log(numNop);
			$('#display').empty();
		}
		else
		{
			
			var popped=numNop.pop();
			numArr=numNop.join('');
			$('#display').append("<p>"+numArr+"</p>");
			
			if(popped=='%' || popped=='/' || popped=='X' || popped=='+' || popped=='-')
				flagInvalidOperator=0;

		}
	}	
	function checkInvalid()
	{
		if(numNop[numNop.length-1]=='%'||numNop[numNop.length-1]=='/'||numNop[numNop.length-1]=='X'||numNop[numNop.length-1]=='+'||numNop[numNop.length-1]=='-') 
			return true;
		else
			return false;

	} 

	function equals()
	{
		
		var num=[];						// to clear num for every cycle- for every successive opertaions.
		num=numArr.split(operator);		//to get only numbers and not operators
		console.log("num::   "+num);

		switch(operator)			// to perform operation
		{
			case '+': result=parseFloat(num[0])+parseFloat(num[1]);
					
			break;
			case '-': result=parseFloat(num[0])-parseFloat(num[1]);
					
			break;
			case '/': result=parseFloat(num[0])/parseFloat(num[1]);
					
			break;
			case 'X': result=parseFloat(num[0])*parseFloat(num[1]);
					
			break;
			case '%': result=parseFloat(num[0])%parseFloat(num[1]);
					
			break;
		}

			$('#display').empty();
			$('#display').append("<p>"+result+"</p>");
		
			numArr=0;
			numNop=[];
			numNop.push(result);
			numArr=numNop.join('');
			flagInvalidOperator=0;
			
			countOp=0;
		
	}
