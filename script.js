const container = document.querySelector('#container');

const btn= document.querySelector('button');
btn.addEventListener('click',()=> {
    blockNumber = prompt('Enter the number of squares per side for your new'+
    'grid (ie: if you enter 10 => a 10x10 grid will be created');
    for (let i=0; i < blockNumber**2; i++){
        let div = document.createElement('div');
        container.appendChild(div);
        div.setAttribute('class','boxes');
    }
    const divList= document.querySelectorAll('.boxes');
    divList.forEach((div)=>{
    div.addEventListener('mouseenter',()=> div.style.backgroundColor= 'blue')
    })
    
})




