let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index){
    pages.forEach(p => p.classList.remove('active'));
    pages[index].classList.add('active');
}

function nextPage(){
    if(currentPage < pages.length - 1){
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage(){
    if(currentPage > 0){
        currentPage--;
        showPage(currentPage);
    }
}

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowRight') nextPage();
    if(e.key === 'ArrowLeft') prevPage();
});
