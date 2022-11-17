function closeSidebar() {
    document.querySelector('#sidebar').style.display='none'
    document.querySelector('#closed-sidebar').style.display='flex'
}

function openSidebar() {
    document.querySelector('#closed-sidebar').style.display='none'
    document.querySelector('#sidebar').style.display='flex'
}