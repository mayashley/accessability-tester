//will get issues
const accessibilityTester = async (e) => {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  console.log(url);
};
//will add issues to the dom

//will set the loading state for our spinner

//esc. our html

document.querySelector("#form").addEventListener("submit", accessibilityTester);
