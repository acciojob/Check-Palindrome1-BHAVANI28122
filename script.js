// complete the given function

function palindrome(str){

	let str1 = str.replaceAll(" ","");
	const string = str1.reverse();
	if( str1 == string){
		return true;
	}	
  return false;
}
module.exports = palindrome
