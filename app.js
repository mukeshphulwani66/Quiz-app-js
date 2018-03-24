function submitedans(){
  var total = 5;
  var score = 0;

  //get user input
  
  var q1 = document.forms["QuizForm"]["q1"].value;
  var q2 = document.forms["QuizForm"]["q2"].value;
  var q3 = document.forms["QuizForm"]["q3"].value;
  var q4 = document.forms["QuizForm"]["q4"].value;
  var q5 = document.forms["QuizForm"]["q5"].value;
  
  //validation


  for(i=1;i<=total;i++){
      if(eval('q'+i)== null || eval('q'+i)== ''){
          alert('you missed Q '+i);
          return false;
      }
  }

  //correct ans in array
  var ans = ["b","a","d","b","d"];

 //check ans
 for(i=1;i<=total;i++){
     if(eval('q'+i)== ans[i-1]){
         score++;
         console.log(score);
     }
 }

 //display results
var results = document.getElementById("results");

results.innerHTML= '<h3> you scored <span> '+ score+'</span> out of <span>'+total+'</span></h3>';


return false;
}
