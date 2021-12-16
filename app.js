'use strict'

const h2 = document.querySelectorAll('.h2')
const faq = document.querySelectorAll('.faq')

h2.forEach (( cadaH2 , i)=>{
    h2[i].addEventListener('click', () =>{

        faq.forEach(( cadaFaq , i ) =>{
            faq[i].classList.remove("activo")
        })
        faq[i].classList.add("activo")
    })
})
