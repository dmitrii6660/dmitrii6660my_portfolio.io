let lastScroll = 0
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset
  if (currentScroll > lastScroll && currentScroll > 50)
  {
    header.classList.add("hide")
    console.log("läpi")
  }

  else
  {
    header.classList.remove("hide")
    console.log("ei läpi")
  }
  lastScroll = currentScroll

})