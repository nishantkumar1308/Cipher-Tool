import { ceaeser } from "./ceaser_cipher.js";
import { ceaeser_decrypt } from "./ceaser_decrypt.js";

const form = document.getElementById("form");
const form1 = document.getElementById("form1");
const ceaser = document.getElementById("get_cipher");
const decrypt = document.getElementById("decrypt");
//const shift = document.getElementById("shift_cipher");

const get_text = document.getElementById("dec_data");
const return_val = document.getElementById("check");

form.addEventListener("submit", (e) => {
  //console.log(e);
  e.preventDefault();

  checkinput();
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  decryptText();
});

function checkinput() {
  const plain_text = ceaser.value.trim();
  //const shift_val = shift.value.trim();
  //console.log(plain_text);
  //console.log(shift_val);
  decrypt.innerText = ceaeser(plain_text);
}

function decryptText() {
  const value_check = get_text.value.trim();
  console.log(value_check);
  return_val.innerText = ceaeser_decrypt(value_check);
}
