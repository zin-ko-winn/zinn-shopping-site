export function  showLoaderUi() {
    let loader = document.createElement("div");
    loader.classList.add("loader", "animate__animated", "animate__fadeIn");
    loader.innerHTML = `
<div class="vh-100 d-flex align-items-center justify-content-center fixed-top bg-white">
<div class="spinner-border" role="status" style="width: 3rem; height: 3rem;">
  <span class="visually-hidden">Loading...</span>
</div>
</div> `;
    document.body.append(loader);
}

export function removeLoaderUi() {
    let currentLoader = document.querySelector(".loader");
    // setTimeout(_=> loader.classList.replace("animate__fadeIn", "animate__fadeOut"), 300);
    currentLoader.classList.replace("animate__fadeIn", "animate__fadeOut");
    currentLoader.addEventListener("animationend", function () {
        this.remove();
    })
}