const container = document.querySelector('#container');
const btn= document.querySelector('button');
btn.addEventListener('click',()=> {
    if (container.childNodes.length > 0){
        const childList= Array.from(container.childNodes);
        childList.forEach((child)=> container.removeChild(child))
    }
    blockNumber = prompt('Enter the number of squares per side for your new'+
    'grid (ie: if you enter 10 => a 10x10 grid will be created');
        if (blockNumber <= 100){
            for (let i=0; i < blockNumber**2; i++){
                let div = document.createElement('div');
                container.appendChild(div);
                div.setAttribute('class','boxes');
            }
            const divList= document.querySelectorAll('.boxes');
            divList.forEach((div)=>{
            let squareSize = 100/blockNumber + '%';
            div.style.flexBasis = squareSize;
            div.addEventListener('mouseenter',()=> div.style.backgroundColor= getRandomColor())
            })
        }else{
            alert('please input a valid value. No more than 100 is accepted')
        }
})

function getRandomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return 'rgb'+'('+r+','+g+','+ b+')'
}


