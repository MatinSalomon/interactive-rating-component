const getSiblings = function (elem) {
    let siblings = [];
    let sibling = elem.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };
  let userInput;
  const opt = document.querySelectorAll("input[name=rate]");
  for (let i of opt) {
    i.addEventListener("click", function () {
      userInput = i.value;
      let rateNum = "label[for=rate" + i.value + "]";
      let optBtn = document.querySelector(rateNum);
      optBtn.style.backgroundColor = "var(--orange)";
      for (let i in sib) {
        console.log(sib[i]);
        sib[i].style.backgroundColor = "var(--mediumGreyOp)";
      }
    });
  }
  var userValue = document.querySelector(".userValue");
  var btnSubmit = document.getElementById("btnSubmit");

  btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    userValue.innerHTML = userInput;
    console.log("Usersays: " + userInput);
    let pop = document.getElementById("thankYou");
    pop.style.display = "block";
    let submitForm = document.getElementById("submitForm");
    submitForm.style.display = "none";
  });