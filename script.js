const mobileButton = document.querySelector('#mobile-cta')
const responsiveMobileNav = document.querySelector('#responsive-mobile-nav')
const mobileExit = document.querySelector('#mobile-exit')

const filterButton = document.querySelector('#filter-button')
const filterButtonIcon = document.querySelector('#filter-button-icon')

const filterDropdown = document.querySelector('#filter-dropdown')

mobileButton.addEventListener('click', function () {
    responsiveMobileNav.classList.toggle('hidden')
    document.body.classList.toggle('hidden-body')
})
mobileExit.addEventListener('click', function () {
    responsiveMobileNav.classList.toggle('hidden')
    document.body.classList.remove('hidden-body')
})

filterButton.addEventListener('click', function () {
    // check the filter dropdown for the hidden class. if the hidden class is on the filter dropdown, then it is closed. if not, it is open.
    const dropdownIsOpen = !filterDropdown.classList.contains('hidden')
    const filterButtonPosition = filterButton.getBoundingClientRect()

    filterDropdown.style.top = `${filterButtonPosition.top + window.scrollY + 90}px`;

    document.body.classList.toggle('hidden-body')

    filterDropdown.classList.toggle('hidden')

    if (dropdownIsOpen) {
        filterButton.classList.add('bg-white')
        filterButton.classList.add('text-black')

        filterButton.classList.remove('bg-black')
        filterButton.classList.remove('text-white')

        filterButton.classList.add('border-2')
        filterButton.classList.add('border-gray-300')

    } else {
        filterButton.classList.add('bg-black')
        filterButton.classList.add('text-white')

        filterButton.classList.remove('bg-white')
        filterButton.classList.remove('text-black')

        filterButton.classList.remove('border-2')
        filterButton.classList.remove('border-gray-300')

        filterButton.classList.add('border-2')
        filterButton.classList.add('border-black')
    }


    filterButtonIcon.style.transform = dropdownIsOpen ? 'none' : 'rotate(180deg)'
    

})


function main() {
    // if on desktop, do not execute this code.
    if (screen.width < '1280px' ) {
        return;
    filterDropdown.style.width = `${filterButton.clientWidth + 4}px`
    }
    
}

main()
