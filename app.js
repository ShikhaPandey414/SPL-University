function myFunction() {
    let x=document.getElementById("myTopnav")
    if (x.className === "navbar-lists") {
        x.classList += "responsive";
    } else {
        x.className = "navbar-lists ";
    }
}
const scrollLinks = document.querySelectorAll('.navbar-list');
scrollLinks.forEach(link => {
    link.addEventListener('click',
        function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId) {
                const targetElement = Document.getElementById(targetId.substring(1));
                if(targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    Window.scrollTop({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
             } else {
                console.error(`Element with id
                    '${targetId.substring(1)}'
                    not found`)
             }
            } else {
                console.error('No href attribute found')
            }
        }
    );
});