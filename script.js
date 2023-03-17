// complete the given function

function palindrome(str){

	let str1 = str.replaceAll(" ","");
	const string = str1.reverse();
	if( str1 == string){
		return false;
	}
	
  return true;
}
module.exports = palindrome
