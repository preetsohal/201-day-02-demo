var user = prompt('what is your name?');
alert('hi there,'+user+',i mma ask you a question.');
console.log('the user\'s name is '+user);
var answer1 = prompt (user + ', this is a yes/no question, so please answer with Y or N. Does sam have 4 cats?');
console.log('The user answeres question 1:' + answer1);
if(answer1 == 'N')
{
   //tell them they are correct;
   alert('damn straight.'+user+' sam has 3 cats.');
 }
 else {
   alert('you lose.haha.');
 }
