
var colors=['green','red','yellow','blue'];
var level=1;
started=false;
var userseq=[];
var gameseq=[];
  $(".btn").click(function() {
    var id1=$(this).attr("id");
    console.log(id1);
    userseq.push(id1);
    animatebutton(id1);
    check()
  });
  
    $(document).keypress(function(){
         if(started==false)
         {
           
             started=true;
             nextseq();
         }
    });
  
  function check()
  {
    if(userseq[userseq.length-1]===gameseq[userseq.length-1])
    {
        if(userseq.length===gameseq.length)
        {  $("#level-title").text("LEVEL \t"+(level));
           setTimeout( ()=>{ nextseq();},600);
        }
    }
    else
    {
        playsound("wrong");
       
        $("#level-title").html(`Game Over &#128546 Press Any Key to Start`);
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
       // nextseq();

    }
  }



function animatebutton(id){

$('#'+id).addClass("pressed");
setTimeout(()=>{
    $('#'+id).removeClass("pressed"); 
},100);
playsound(id);
}


    
    
function nextseq()
{  
  userseq=[];  
   
var next=Math.floor(Math.random()*4);
 $("#level-title").text("LEVEL \t"+(level));
gameseq.push(colors[next]);
display(colors[next]);
level++;
}
function display(button)
{
    $("#"+button).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(button);
}

function playsound(sound)
{
    var audio=new Audio();
    audio.src="./"+sound+".mp3";
    audio.play();
}

function startOver()
{started=false;
     level=1; 
     gameseq=[];
}

















