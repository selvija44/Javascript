const items = document.querySelectorAll('.item');

items.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
        ele.classList.add('color');
    })
})
