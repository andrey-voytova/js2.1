let = document.getElementsById('text-container');
document.getElementById('replace').addEventListener('click',()=>{
    block.textContent = block.textContent.replace(/'/g,'"');
    block.textContent = block.textContent.replace(/\B'|'\B/g,'"');
});