const notification = document.querySelector(".notification"),
buttons = document.querySelectorAll(".buttons .btn");
const toastDetails = {
 timer: 5000,
 success:{
  icon: 'fa-circle-check',
  Text: 'Success: This is Success.',
 },
 error:{
  icon: 'fa-xmark',
  Text: 'Error: This is Error',
 },
 warning:{
  icon: 'fa-triangle-exclamation',
  Text: 'Warning: This is Warning.',
 },
 info:{
  icon: 'fa-circle-info',
  Text: 'Info: This is Info.',
 }
}
const removeToast = (toast) =>{
 toast.classList.add("hide");
 if (toast.timeoutId) clearTimeout(toast.timeoutId);
 setTimeout(()=> toast.remove(), 500);
}
const createToast = (id) => {
 const {icon, Text} = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
    <i class="fa-solid ${icon}"></i>
    <span>${Text}</span>
   </div><i class = "fa-solid fa-xmark" onclick="removeToast(this.parentElement)"> </i>`;
   notification.appendChild(toast);
   toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}
buttons.forEach(btn => {
  btn.addEventListener("click", () => createToast(btn.id));
});