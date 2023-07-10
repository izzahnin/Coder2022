const output = document.querySelector(".output");
const input = document.querySelector(".input");
var textEquation = "";
var onOp = false;

const handleBtnClick = (e) => {
  console.log(e);
  const value = e.innerHTML.trim();
  switch (value) {
    case "AC":
      textEquation = "0";
      output.innerHTML = textEquation;
      onOp = false;
      break;
    case "C":
      if (textEquation.length <= 1) {
        textEquation = "0";
        output.innerHTML = textEquation;
      } else {
        if (onOp) onOp = false;

        textEquation = textEquation.slice(0, -1);
        output.innerHTML = output.innerHTML.slice(0, -1);

        if (textEquation[textEquation.length - 1] === "+" || textEquation[textEquation.length - 1] === "-" || textEquation[textEquation.length - 1] === "*" || textEquation[textEquation.length - 1] === "/") {
          onOp = true;
        }
      }
      break;

    case "=":
      output.innerHTML = eval(textEquation);
      textEquation = output.innerHTML;
      break;

    default:
      //ketika angka pertama dimasukkan 0 direplace
      if (output.innerHTML === "0" && e.id === "btn-num") {
        output.innerHTML = "";
        textEquation = "";
      }

      if (e.id === "btn-op" && onOp === true) {
        textEquation = textEquation.slice(0, -1);
        output.innerHTML = output.innerHTML.slice(0, -1);
      }

      if (e.id === "btn-op" && textEquation[textEquation.length - 1] === ".") {
        return;
      }

      if (e.id === "btn-op") onOp = true;
      else onOp = false;

      if (e.id === "btn-op") onOp = true;
      else onOp = false;

      if (value === "×") textEquation += "*";
      else textEquation += value;

      output.innerHTML += value;
  }
};
