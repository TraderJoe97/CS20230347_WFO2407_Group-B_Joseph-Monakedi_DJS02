/**
 * Handles the form submission event to calculate the whole number division
 * and shows the result in the page.
 * @param {Event} event - The form submission event.
 */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validate the inputs
  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Validate the divider
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero is not allowed");
    return;
  }

  // Validate the dividend and divider
  if (isNaN(dividend) || isNaN(divider)) {
    // If the validation fails, show an error message and log an error to the console
    document.body.innerHTML =
      "<p>Something critical went wrong. Please reload the page</p>";
    console.error("Error: Invalid number provided");
    return;
  }

  // Calculate the whole number division
  result.innerText = Math.trunc(dividend / divider);
});


