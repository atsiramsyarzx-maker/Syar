const text = "I LOVE YOU ❤️ ";
const total = 60;
const items = [];

const container = document.getElementById("heart-container");

// Membuat bintang
for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    const startY =
        Math.random() * window.innerHeight;

    star.style.top = startY + "px";

    star.dataset.y = startY;

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    document.body.appendChild(star);
}

// Membuat tulisan berbentuk hati
for (let i = 0; i < total; i++) {
    const span = document.createElement("span");

    span.className = "word";
    span.innerText = text;

    container.appendChild(span);
    items.push(span);
}

let t = 0;

function animate() {
    t += 0.0015;

    items.forEach((item, i) => {

        const a =
            (i / total) * Math.PI * 2 + t;

        const x =
            16 * Math.pow(Math.sin(a), 3);

        const y =
            -(13 * Math.cos(a)
            - 5 * Math.cos(2 * a)
            - 2 * Math.cos(3 * a)
            - Math.cos(4 * a));

        const scale = 15;

        item.style.left =
            window.innerWidth / 2 +
            x * scale + "px";

        item.style.top =
            window.innerHeight / 2 +
            y * scale + "px";
    });

    // Animasi bintang jatuh
    document.querySelectorAll(".star").forEach(star => {

        let y =
            parseFloat(star.dataset.y);

        y += 0.15;

        if (y > window.innerHeight) {
            y = 0;
        }

        star.style.top = y + "px";
        star.dataset.y = y;
    });

    requestAnimationFrame(animate);
}

// Partikel hati ❤️
setInterval(() => {

    const love =
        document.createElement("div");

    love.className = "love-particle";
    love.innerHTML = "❤️";

    const randomItem =
        items[Math.floor(
            Math.random() * items.length
        )];

    love.style.left =
        randomItem.style.left;

    love.style.top =
        randomItem.style.top;

    document.body.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 4000);

}, 50);

animate();