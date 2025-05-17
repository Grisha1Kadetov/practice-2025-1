document.addEventListener("DOMContentLoaded", function () {
    const transition = document.getElementById("page-transition");

    //исчезновение экрана при загрузке страницы
    transition.style.transition = "opacity 0.7s ease-in"; 
    setTimeout(() => {
        transition.style.opacity = "0";
    }, 100);

    // затухание при переходе на новую страницу
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            if (
                link.href.startsWith("#") ||
                link.target === "_blank" ||
                link.hostname !== location.hostname
            ) return;

            e.preventDefault();

            transition.style.transition = "opacity 0.5s ease-out"; 
            transition.style.opacity = "1";

            setTimeout(() => {
                window.location.href = link.href;
            }, 200);
        });
    });
});
