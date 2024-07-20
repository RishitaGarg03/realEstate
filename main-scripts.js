//-------------- carousel-----------------------
{
    let currentSlide = 0

function showSlide(index){
    const slides = document.querySelectorAll('.carousel-item');
    if(index >=slides.length){
        currentSlide = 0;
    }
    else if (index<0){
        currentSlide = slides.length - 1;
    }
    else{
        currentSlide = index;
    }


    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.style.transform = `translateX(${-currentSlide * 100}%)`;
}
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 5000);

}

{
    let current = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;

    current += direction;

    if (current < 0) {
        current = totalSlides - 1;
    } else if (current >= totalSlides) {
        current = 0;
    }

    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const newTransformValue = `translateX(-${current * 100}%)`;
    galleryWrapper.style.transform = newTransformValue;
}

}


function searchProperties() {
    const query = document.getElementById('searchBar').value;
    fetch(`/search?city=${query}`)
        .then(response => response.json())
        .then(data => {
            // Handle the search results
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}

function explore(category) {
    fetch(`/explore?category=${category}`)
        .then(response => response.json())
        .then(data => {
            // Handle the exploration results
            console.log(data);
        })
        .catch(error => console.error('Error:', error));
}
 