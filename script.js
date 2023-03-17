// complete the given function

function palindrome(str){

	let str1 = str.replaceAll(" ","");
	for(let i=0;i<str1.length/2;i++){
		if(str1.charAt[i] != str1.charAt[str1.length - i]){
			return false;
		}
	}
   return true;
}
module.exports = palindrome
