// Page navigation
function showPage(pageNumber) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.getElementById(`page${pageNumber}`).style.display = 'block';
    
    document.querySelectorAll('.nav-links a').forEach((link, index) => {
        if (index === pageNumber - 1) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.page-dot').forEach((dot, index) => {
        if (index === pageNumber - 1) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show page 1 by default
showPage(1);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const activePage = document.querySelector('.page-dot.active');
    if (!activePage) return;
    
    let currentPage = parseInt(activePage.textContent);
    
    if (e.key === 'ArrowRight' && currentPage < 4) {
        showPage(currentPage + 1);
    } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        showPage(currentPage - 1);
    }
});

// Image error handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/400?text=Photo+Not+Found';
        };
    });
});
