//using selectors inside the element
// traversing the dom
const plusBtn = document.querySelectorAll('.plus-icon')
const minusBtn = document.querySelectorAll('.minus-icon')
const question = document.querySelectorAll('.question')

plusBtn.forEach(item=>{
    item.addEventListener('click',(e)=>{
        let style = e.currentTarget.parentNode.parentNode.parentNode
        style.classList.add('show-text')
        console.log(style);
    })
})

minusBtn.forEach(item=>{
    item.addEventListener('click',e=>{
        let style = e.currentTarget.parentNode.parentNode.parentNode
        style.classList.remove('show-text')
    })
})