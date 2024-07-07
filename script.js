const slides= document.querySelectorAll('.slides')
// const next = document.querySelectorAll('.next')
// const prev = document.querySelectorAll('.prev')


let counter=0;

slides.forEach(
    (slide, index)=>{
        slide.style.left = '${index * 100 }%'
    }
)
const goPrev =()=>{
    counter--
    slideImage()
}
const goNext =()=>{
    counter++
    slideImage()
}

const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
// console.log(slides);

// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// // Add functionality to buttons (replace with your slide logic)
// prevButton.addEventListener('click', () => {
//   slide.prevButton='${index*'
// });

// nextButton.addEventListener('click', () => {
//     document.getElementById('.next').addEventListener('click', function() {
//         const slider = document.getElementById('slider');
//         const slides = document.querySelectorAll('.slides');
//         const slideWidth = slides[0].clientWidth;
//         slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
//     });
// });




