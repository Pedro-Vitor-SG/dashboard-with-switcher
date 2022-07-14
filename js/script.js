const changeTheme = document.querySelector("#change-theme")

changeTheme.addEventListener("change", () => {
    document.body.classList.toggle('dark')
})