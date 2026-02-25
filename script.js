const posts = document.querySelectorAll('.post');

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

posts.forEach(post=>observer.observe(post));
