// Interactive visual prototype only. No checkout, payment or order API is connected.
const checkout = document.querySelector("#checkout");
const button = document.querySelector("#atc");
const demo = document.querySelector(".demo");
const hint = document.querySelector("#hint");
const replay = document.querySelector("#replay");
const year = document.querySelector("#year");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let busy = false;
let timers = [];

if (year) year.textContent = String(new Date().getFullYear());

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function reset() {
  clearTimers();
  checkout.classList.remove("is-packing", "is-rolling", "is-done");
  demo.classList.remove("is-done");
  button.disabled = false;
  button.removeAttribute("aria-busy");
  replay.hidden = true;
  hint.textContent = "PRESS BUY NOW TO PLAY THE ANIMATION";
  busy = false;
}

function complete() {
  checkout.classList.remove("is-packing", "is-rolling");
  checkout.classList.add("is-done");
  demo.classList.add("is-done");
  button.disabled = false;
  button.removeAttribute("aria-busy");
  replay.hidden = false;
  hint.textContent = "INTERACTION COMPLETE · REPLAY TO TRY AGAIN";
  busy = false;
}

function order() {
  if (busy) return;
  reset();
  busy = true;
  button.disabled = true;
  button.setAttribute("aria-busy", "true");
  replay.hidden = true;

  if (reducedMotion.matches) {
    complete();
    return;
  }

  checkout.classList.add("is-packing");
  hint.textContent = "PACKING THE ORDER…";

  timers.push(window.setTimeout(() => {
    checkout.classList.remove("is-packing");
    checkout.classList.add("is-rolling");
    hint.textContent = "ON ITS WAY…";
  }, 520));

  timers.push(window.setTimeout(complete, 2050));
}

button.addEventListener("click", order);
replay.addEventListener("click", order);

reducedMotion.addEventListener?.("change", (event) => {
  if (event.matches && busy) complete();
});
