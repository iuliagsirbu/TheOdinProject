//Rewrite the following function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }



//using '?'
// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
// }



//using '||'
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}