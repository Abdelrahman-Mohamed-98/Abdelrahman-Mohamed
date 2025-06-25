document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".typing");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = `typing 1s steps(30, end) forwards, blink 0.5s infinite`;
        }, index * 500); // جعل كل فقرة تبدأ بسرعة بدون تأخير كبير
    });
});
