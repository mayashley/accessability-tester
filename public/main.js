//will get issues
const accessibilityTester = async (e) => {
  e.preventDefault();
  const url = document.querySelector("#url").value;

  if (url === "") {
    alert("Please enter a valid URL");
  } else {
    setLoading();
  }
};
//will add issues to the dom

//will set the loading state for our spinner

const setLoading = (isLoading = true) => {
  const loader = document.querySelector("#loader");
  if (isLoading) {
    loader.getElementsByClassName.display = "block";
  } else {
    loader.getElementsByClassName.display = "none";
  }
};

//esc. our html

document.querySelector("#form").addEventListener("button", accessibilityTester);
