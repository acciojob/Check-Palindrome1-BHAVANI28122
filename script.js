// complete the given function

   function reverse( str )
    {
     
      let rev_str = "";
      for( let i = str.length-1 ;i >= 0 ;i--)
      {
        rev_str+= str[i];
      }

      return rev_str;
    }
function palindrome(str){
let  reverse_str = reverse(str).toLowerCase();
     
      if( reverse_str === str.toLowerCase())
      {
       return true;
      }

	return false;

}
module.exports = palindrome
