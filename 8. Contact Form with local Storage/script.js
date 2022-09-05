const save = () => {
  let name = document.getElementById("name");
  let mail = document.getElementById("mail");
  let message = document.getElementById("message");

  localStorage.setItem("name", name.value);
  localStorage.setItem("mail", mail.value);
  localStorage.setItem("message", message.value);
};

const reset = () => {
  document.getElementById("name").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("message").value = "";
};
