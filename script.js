
// <----------------------- Scroll Section---------------------------------->
 var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTag);
for(var i=0;i<navMenuAnchorTag.length;i++)
{
  navMenuAnchorTag[i].addEventListener('click',function(event){
    event.preventDefault()

    var targetSectionId=this.textContent.toLowerCase();
    // console.log(targetSectionId);

    var targetSection=document.getElementById(targetSectionId);
    // console.log(targetSection);

    var interval=setInterval(function(){
    var targetSectionCordinate=targetSection.getBoundingClientRect();
      if(targetSectionCordinate.top<=0)
      {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,50);
    },20);
  });
}





// var start=0;
// var end=1400;
//
// var id=setInterval(function(){
//   if(start>=end)
//   {
//     clearInterval(id);
//     return;
//   }
//   start+=50;
//   window.scrollBy(0,50);
// },50);
// var educationSection=document.getElementById('education');
// // console.log(educationSection);
// var educationCoordinates=educationSection.getBoundingClientRect();
// console.log(educationCoordinates);


var progressBar=document.querySelectorAll('.skill-progress > div');
console.log(progressBar);

var skillsContainer=document.getElementById('skills-container');

console.log(skillsContainer);

window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initilisedBar()
{
  for(let bar of progressBar)
  {
    bar.style.width = 0+"%";
    
  }
}
initilisedBar();
function fillsBar()
{
  for(let bar of progressBar)
  {
    let targetWidth=bar.getAttribute('data-bar-width');
    let startingpoint=0;
    let interval=setInterval(function(){
      if(startingpoint>=targetWidth)
      {
        clearInterval(interval);
        return;
      }


        bar.style.width = startingpoint+"%";
          startingpoint+=1;
    },4);

  }
}
// function fillsBar()
// {
//   for(let bar of progressBar)
//   {
//
//   }
// }
function checkScroll()
{
  var coordinates=skillsContainer.getBoundingClientRect();
  if( !animationDone && coordinates.top<=window.innerHeight)
  {
    animationDone=true;
    console.log("hello lokesh");
    fillsBar();

  }
  else if(coordinates.top>window.innerHeight){
    animationDone=false;
    initilisedBar();
  }

}
