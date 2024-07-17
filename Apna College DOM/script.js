let btn1 = document.querySelector("#btn1");
let currMode = "light";
btn1.addEventListener("click", () => {
    if (currMode === "light") {
        document.querySelector("body").style.backgroundColor = "black";
        currMode="dark";
    }
    else { document.querySelector("body").style.backgroundColor = "white"; 
currMode="light";}
});