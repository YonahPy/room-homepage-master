document.addEventListener("DOMContentLoaded", function(){
    const slides = [
        {
            heading: "Discover innovative ways to decorate"
            ,
            paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in briging your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
            ,
            image:"./images/desktop-image-hero-1.jpg"
        },
        {
            heading: "We are available all across the globe"
            ,
            paragraph: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            ,
            image:"./images/desktop-image-hero-2.jpg"
        },
        {
            heading: "Manufactured with the best materials"
            ,
            paragraph: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office"
            ,
            image:"./images/desktop-image-hero-3.jpg"
        }
    ];

    let currentSlide = 0;
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('.discover p');

    function updateSlide(){
        heading.textContent = slides[currentSlide].heading;
        paragraph.textContent = slides[currentSlide].paragraph;
        document.querySelector('.div-image').style.backgroundImage = `url(${slides[currentSlide].image})`;
    }

    document.getElementById('next-slide').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    })

    document.getElementById('prev-slide').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        updateSlide();
    });

    updateSlide();
})