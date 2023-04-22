const modal = document.querySelector("[data-modal]");
const openModalBtn = document.querySelectorAll("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");

console.log(openModalBtn);
openModalBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault;
		toggleModal();
	});
});
// openModalBtn.addEventListener('click',e=>{
//   e.preventDefault;
// 		toggleModal();
// 	});
console.log(closeModalBtn);
closeModalBtn.addEventListener("click", (e) => {
	e.preventDefault;
	toggleModal();
});

function toggleModal() {
	modal.classList.toggle("is-hidden");
}
