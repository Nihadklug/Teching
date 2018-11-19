
function goo(loc, obj){

    // NEW
    if (document.querySelector(".activee")) {
        document.querySelector(".activee").className = document.querySelector(".activee").className.replace(" activee",""); 
    }
    obj.className = obj.className + " activee";

}


function func2(){

   d1 = document.getElementById('firstbutton');
   d2 = document.getElementById('secondbutton');
   d3 = document.getElementById('thirdbutton');
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
      d3.style.display = "none";
   }
   else
   {
      d1.style.display = "none";
      d2.style.display = "block";
      d3.style.display = "none";
   }

}

function func1(){

  d1 = document.getElementById('firstbutton');
  d2 = document.getElementById('secondbutton');
  d3 = document.getElementById('thirdbutton');
   if( d1.style.display == "none" )
   {
      d1.style.display = "block";
      d2.style.display = "none";
      d3.style.display = "none";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
      d3.style.display = "none";
   }
}


 function func3(){

   d1 = document.getElementById('firstbutton');
   d2 = document.getElementById('secondbutton');
   d3 = document.getElementById('thirdbutton');
    if( d3.style.display == "none" )
    {
       d1.style.display = "none";
       d2.style.display = "none";
       d3.style.display = "block";
    }
    else
    {
       d1.style.display = "none";
       d2.style.display = "none";
       d3.style.display = "block";
    }
 }