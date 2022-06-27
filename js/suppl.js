
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".menu__navigation");

menuButton.addEventListener('click', function (event) {
    if (navigation.style.display == "") {
        navigation.style.display = "none";
    } else {
        navigation.style.display = "";
    }
})

