const display_output = document.querySelector(".display .output");
const display_input = document.querySelector(".display .input");
var input = "";
var onOp = false;

const handleBtnClick = (e) => {
  console.log(e);
  const value = e.innerHTML.trim();
  switch (value) {
    case "AC":
      input = "0";
      display_input.innerHTML = "";
      display_output.innerHTML = "0";
      onOp = false;
      break;
    case "C":
      if (input.length <= 1) {
        input = "0";
        display_output.innerHTML = input;
      } else {
        if (onOp) onOp = false;
        input = input.slice(0, -1);
        // hapus satu persatu
        display_output.innerHTML = display_output.innerHTML.slice(0, -1);

        // if (input[input.length - 1] === "+" || input[input.length - 1] === "-" || input[input.length - 1] === "*" || input[input.length - 1] === "/") {
        //   onOp = true;
        // }
      }
      break;

    case "=":
      display_input.innerHTML = display_output.innerHTML;
      display_output.innerHTML = eval(input);

      if (onOp === true) display_input.innerHTML = "";

      if (display_output.innerHTML === input) return;
      break;

    default:
      //ketika angka pertama dimasukkan 0 direplace
      if (display_output.innerHTML === "0" && e.id === "btn-num") {
        display_output.innerHTML = "";
        input = "";
      }

      if (e.id === "btn-op" && onOp === true) {
        //op terbaca ketika dihapus
        input = input.slice(0, -1);
        display_output.innerHTML = display_output.innerHTML.slice(0, -1);
      }

      //ketika memakai koma makan operator tidak bisa diiinput
      if (e.id === "btn-op" && input[input.length - 1] === ".") return;

      if (e.id === "btn-dot" && onOp === true) return;
      if (e.id === "btn-op") onOp = true;
      else onOp = false;

      //mengubah tanda × menjadi *
      if (value === "×") input += "*";
      else input += value;

      display_output.innerHTML += cleanInput(value);
  }
};

// memeri jarak antar angka
// belum selesai, tidak mengubah display_output dan display_input
function cleanInput(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] === "×") {
      input_array[i] = `<span style="color: var(--red)">&times;</span>`;
    } else if (input_array[i] == "+") {
      input_array[i] = `<span style="color: var(--red)">+</span>`;
    } else if (input_array[i] == "-") {
      input_array[i] = `<span style="color: var(--red)">-</span>`;
    } else if (input_array[i] == "÷") {
      input_array[i] = `<span style="color: var(--red)">÷</span>`;
    }
  }
  return input_array.join("");
}
