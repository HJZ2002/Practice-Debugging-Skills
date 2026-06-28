const btn = document.getElementById("myBtn");
    const message = document.getElementById("message");
    const title = document.getElementById("title"); 

    btn.addEventListener("click", function() {
      message.classList.remove("hidden");
      title.style.color = "darkblue";
    });

    const counterBtn = document.getElementById("counterBtn");
    const countSpan = document.getElementById("count");
    let count = 0;

    counterBtn.addEventListener("click", function() {
      count = count + 1;
      countSpan.textContent = count;
    });