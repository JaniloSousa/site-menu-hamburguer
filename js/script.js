function changeSize() {
    if (window.innerWidth >= 768) {
        options.style.display = 'block'
    } else {
        options.style.display = 'none'
    }
}

function showMenu() {
    if (options.style.display == 'block') {
        options.style.display = 'none'
    } else {
        options.style.display = 'block'
    }
    
}