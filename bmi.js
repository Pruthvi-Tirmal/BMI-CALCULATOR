const myBmi = () =>{
let name = document.getElementById('name').value;
let height = document.getElementById('height').value;
let weight = document.getElementById('weight').value;
if(height=='' || weight == '')
{
    document.getElementById('answer').value ="-\\_(*.*)_/-"
}
else{
height = height*12;
height = height*0.025;
var newAns = weight/(height**2);
newAns = Math.round(newAns);
document.getElementById('answer').value = newAns;
}
if (newAns<16)
   {
    document.getElementById('textAnswer').value = `${name} You Are Severely Underweight`;
   }
   else if(newAns>=16 && newAns<18.5)
   {
    document.getElementById('textAnswer').value = `${name} You Are Underweight`;
   } 
   else if(newAns>=18.5 && newAns<25)
   {
    document.getElementById('textAnswer').value = `${name} You Are Healthy`;
   }
   else if(newAns>=25 ) 
   {
    document.getElementById('textAnswer').value = `${name} You Are Overweight`;
   }
   else
   {
    document.getElementById('textAnswer').value = 'CHECK HEIGHT OR WEIGHT AGAIN';
   }


}