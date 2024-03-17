const showonpx = 100;
const backtotopbutton=document.querySelector(".back-to-top")
const scrollContainer = ()=>{
  return document.documentElement || document.body;

};
document.addEventListener("scroll",()=>{

  if (scrollContainer().scrollTop > showonpx){
    backtotopbutton.classList.remove("hidden")
  } else {
    backtotopbutton.classList.add("hidden")
  }
})  