const themeChange=document.getElementById('theme-change');
const inputField=document.getElementById('input');
const myList=document.querySelector('.myList');

themeChange.addEventListener('click',() =>{
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeChange.src='icon-sun.svg';
    }else{
        themeChange.src='icon-moon.svg';
    }
});
inputField.addEventListener('keypress', function(event){
    if(event.key === 'Enter')
{
    const inputValue=inputField.value.trim();
    if(inputValue !== '' ){
        const newListItem=document.createElement('li');
        newListItem.className='item';
        newListItem.innerHTML=`<button class="circle"></button>${inputValue}`;
        myList.appendChild(newListItem);
        inputField.value='';


        const circleButton=newListItem.querySelector('.circle');
        circleButton.className='circle';

circleButton.addEventListener('click',function(){
    newListItem.classList.toggle('checked');
    if(newListItem.classList.contains('checked')){
        circleButton.style.background="rgb(126, 61, 187)";
    }else{
        circleButton.style.background='';
    }
})
    }
}});


document.getElementById("all").addEventListener("click",() => {
    const listItems=document.querySelectorAll(".myList li");
    listItems.forEach((item) => {
        item.style.display = "block";
});
});

document.getElementById("active").addEventListener("click",() => {
    const listItems=document.querySelectorAll(".myList li");
    listItems.forEach((item) => {
        if(item.classList.contains("checked")){
            item.style.display="none"
        }else{
        item.style.display = "block";
        }
});
});

document.getElementById("completed").addEventListener("click",() => {
    const listItems=document.querySelectorAll(".myList li");
    listItems.forEach((item) => {
        if(item.classList.contains("checked")){
            item.style.display="block"
        }else{
        item.style.display = "none";
        }
});
});
document.getElementById("clear").addEventListener("click",() => {
    const listItems=document.querySelectorAll(".myList li.checked");
    listItems.forEach((item) =>{
        item.remove();
    });
});
const link=document.querySelectorAll('h5')
link.forEach((link) =>{
    link.addEventListener('click',function(){
       
            link.classList.toggle('clicked');
        
    })
})




