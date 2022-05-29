const text = document.querySelector(".text-2 p");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8.4}deg)">${char}</span>`
  )
  .join("");
