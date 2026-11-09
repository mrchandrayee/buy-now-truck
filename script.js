const checkout=document.querySelector("#checkout");
const button=document.querySelector("#atc");
const demo=document.querySelector(".demo");
const hint=document.querySelector("#hint");
let busy=false,resetTimer;
function reset(){
  checkout.classList.remove("is-packing","is-rolling","is-done");
  demo.classList.remove("is-done");
  hint.textContent="CLICK THE BUTTON TO PLACE AN ORDER";
  busy=false;
}
function order(){
  if(busy)return;
  busy=true;clearTimeout(resetTimer);
  checkout.classList.remove("is-done","is-rolling");
  checkout.classList.add("is-packing");
  hint.textContent="PACKING YOUR ORDER…";
  // Label disappears and the cart icon takes its place.
  setTimeout(()=>{
    checkout.classList.remove("is-packing");
    checkout.classList.add("is-rolling");
    hint.textContent="ON ITS WAY…";
  },520);
  // The delivery truck drives across the checkout badge.
  setTimeout(()=>{
    checkout.classList.remove("is-rolling");
    checkout.classList.add("is-done");
    demo.classList.add("is-done");
    hint.textContent="ORDER CONFIRMED";
  },2050);
  resetTimer=setTimeout(reset,5100);
}
button.addEventListener("click",order);
button.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" "){e.preventDefault();order();}
});
document.querySelector("#sound").addEventListener("click",e=>{
  e.currentTarget.textContent=e.currentTarget.textContent==="🔊"?"🔇":"🔊";
});
// Allow a click on the ordered badge to replay the micro-interaction.
document.querySelector(".confirm").addEventListener("click",order);
