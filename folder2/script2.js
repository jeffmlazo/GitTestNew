const btn = document.querySelector('.btn-primary');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.main-container').innerHTML += '<h1>Last Tdest 1</h1>';    
});
 
