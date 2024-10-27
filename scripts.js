const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero is not allowed");
    return;
  }
  if (isNaN(dividend)|| isNaN(divider)) {
  //
    document.body.innerHTML ="<p>Something critical went wrong. Please reload the page</p>";
    console.error("Error: Invalid number provided");
    return;
  }
  result.innerText = Math.trunc(dividend / divider);
 });
