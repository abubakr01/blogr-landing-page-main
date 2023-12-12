
var NavItem = document.querySelectorAll('a.dropdown_link') 
var hamburger = document.querySelector('.icon-hamburger')
var xClose = document.querySelector('.icon-close')
var ArrowDark = document.querySelectorAll('.arrow-dark')
var ArrowLight = document.querySelectorAll('.arrow-light')
var pRODUCT = document.querySelector('.product_list')
var konnect = document.querySelector('.connect_list')
var kompany = document.querySelector('.company_list')
var Nav = document.querySelector('.navbar')

hamburger.addEventListener('click', function(){
    hamburger.style.display = 'none';
    xClose.style.display = 'block';
    Nav.style.display = 'block';
})
xClose.addEventListener('click', function(){
    hamburger.style.display = 'block';
    xClose.style.display = 'none'
    Nav.style.display = 'none';
})

NavItem[0].addEventListener( 'click', function(e){
    e.preventDefault()
    pRODUCT.classList.toggle('show')
    ArrowLight[0].classList.toggle('rotateUp')
    ArrowDark[0].classList.toggle('rotateUp')
    }
)
NavItem[1].addEventListener( 'click', function(e){
     e.preventDefault()
    kompany.classList.toggle('show')
    ArrowLight[1].classList.toggle('rotateUp')
    ArrowDark[1].classList.toggle('rotateUp')
    }
)
NavItem[2].addEventListener( 'click', function(e){
     e.preventDefault()
    konnect.classList.toggle('show')
    ArrowLight[2].classList.toggle('rotateUp')
    ArrowDark[2].classList.toggle('rotateUp')
    }
)


