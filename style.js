function theme()
{
    let d=document.getElementById("container");
    d.classList.toggle("dark");
    console.log(d);
    let isdark=d.classList.contains("dark");
    console.log(isdark);
    localStorage.setItem("Themepreference",isdark?"dark":"light")
}
button.addEventListener("click",theme);