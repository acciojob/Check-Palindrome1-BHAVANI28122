// complete the given function

function palindrome(str){

	let string = "";
	for(let i=str.length-1;i>=0;i--){
		string = string +str.charAt[i];
	}

	if(str == string){
		return true;
	}
   return false;
}
module.exports = palindrome
