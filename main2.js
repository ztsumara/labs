const openModal = document.querySelector('.openModal')
const modal = document.querySelector('.modal')



openModal.addEventListener('click', () =>{
    modal.showModal()
})

modal.addEventListener('click', (e) =>{
    if(e.target === modal) modal.close()
})



// input.addEventListener("blur", () => {
//     if (input.validity.typeMismatch){
//         error.textContent = "Не почта"
//         input.setCustomValidity("Моя не почта")
//     }
//     else{
//         error.textContent = ""
//         input.setCustomValidity("")
//     }
// })

