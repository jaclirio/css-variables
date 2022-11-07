//console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-background-color')) //Get root element
document.getElementById('dark-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', '#333') //Change bgcolor to grey
})

document.getElementById('light-theme-btn').addEventListener('click', () => {
    document.documentElement.style.setProperty('--background-color', 'white') //Change bgcolor to white
})