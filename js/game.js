const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
let x = 100;
let y = 100;
ctx.fillRect(x, y, 50, 50);

document.addEventListener("keydown", function (event) {
    event.preventDefault();

    if (event.key === "ArrowRight") {
        x = x + 10;
    }

    else if (event.key === "ArrowLeft") {
        x = x - 10;
    }

    else if (event.key === "ArrowUp") {
        y = y - 10;
    }

    else if (event.key === "ArrowDown") {
        y = y + 10;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);
});