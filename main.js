window.onload = (event) => {
    const slides = document.getElementById('slides')
    const slideWrap = slides.querySelector('.wrap')
    const slideWidth = 1349

    // tính chiều rộng của slides
    const imgs = slideWrap.getElementsByClassName('slide')
    const totalImg = imgs.length
    const totalWidth = totalImg * slideWidth
    slideWrap.style.width = totalWidth + 'px'

    // lấy 2 nút prev và next của slide
    const prevBtn = slides.querySelector('.prev')
    const nextBtn = slides.querySelector('.next')

    // vị trí phía bên trái
    let left = 0

    // theo dõi sự kiện khi click vào nút next
    nextBtn.addEventListener('click', function() {
        left = left - slideWidth
        if (left <= -totalWidth) {
            left = 0
        }
        slideWrap.style.left = left + 'px'
    })
    
    // theo dõi sự kiện nút prev
    prevBtn.addEventListener('click', function() {
        left = left + slideWidth
        if (left > 0) {
            left = -(totalWidth - slideWidth)
        }
        slideWrap.style.left = left + 'px'
    })

    // Tự động chạy slide
    let autoLoopSlide = setInterval(function() {
        nextBtn.click();
    }, 3000)

    slides.addEventListener('mouseenter', function() {
        clearInterval(autoLoopSlide)
    })

    slides.addEventListener('mouseleave', function() {
        autoLoopSlide = setInterval(function() {
            nextBtn.click();
        }, 4000)    
    })
}