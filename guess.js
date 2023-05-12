let y;
var guess = 1;
let  generateno=()=>{
  y=Math.floor(Math.random() * 10 + 1);
  console.log(y)
}
document.querySelector("#loading").style.display="none";
  document.querySelector('#afterloading').style.display='none';
  document.querySelector('#last').style.display='none';
  //document.querySelector('.last').style.display='none';
function button_click() {
  document.querySelector('#first').style.display = 'none';
  document.querySelector("#loading").style.display = "block";
  document.querySelector('#afterloading').style.display = 'none';
  setTimeout(() => {
    generateno();
    document.querySelector('#first').style.display = 'none';
    document.querySelector("#loading").style.display = "none";
    document.querySelector('#afterloading').style.display = 'block';
  }, 3000
  );

}
document.getElementById("sub").onclick = function(){
        
          var x = document.getElementById("box").value;
          if(x == y)
          { 
            document.querySelector('#result').innerHTML=("congratulations!! you win in "+guess+" no . guess");
            document.querySelector('#first').style.display='none';
            document.querySelector("#loading").style.display="none";
            document.querySelector('#afterloading').style.display='none';
            document.querySelector('#last').style.display='block';
          }
          else if(x > y)
          {    
            guess++;
            alert("OOPS SORRY!! TRY A SMALLER NUMBER");
          }
          else if(x<y)
          {
            guess++;
            alert("OOPS SORRY!! TRY A GREATER NUMBER")
          }
          else{
            alert("please enter a number first")
          }
          document.getElementById("box").value=""

        }
        document.getElementById('btn').onclick = function()
        {
          document.getElementById("first").style.display ="block";
          document.getElementById("last").style.display ="none";
        }