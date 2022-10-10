import "./style.scss";
import {removeLoaderUi, showLoaderUi} from "./loader";


let items = [];
let myCardRow = document.querySelector(".my-card-row");

let addCart = document.querySelector(".add-cart");
let cartBtn = document.querySelector(".cart-btn");

showLoaderUi();
fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        items = json;
        // console.log(items);
        items.map(item => {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-6", "col-lg-4");
            cardDiv.innerHTML = `
          <div class="card my-card border-0 shadow-sm">            
            <div class="card-body d-flex flex-column">
                <div class="mb-3">
                    <img src="${item.image}" alt="" class="my-card-img">
                </div>
              <p class="fw-bold text-truncate card-title">${item.title}</p>
              <p class="small card-text">${item.description.substring(0, 100)+"..."}</p>
              <div class="d-flex justify-content-between align-items-center mt-auto">
                <p class="mb-0">$ <span>${item.price}</span></p>
                <button class="btn btn-outline-primary add-cart">
                  <i class="bi bi-cart-plus me-2"></i>Add Cart
                </button>
              </div>
            </div>
          </div>
          
            `;
            myCardRow.append(cardDiv);
        })
        removeLoaderUi();
    })

      myCardRow.addEventListener("click", e => {
          if(e.target.classList.contains("add-cart")) {
              let currentCard = e.target.closest(".my-card");
              let currentImg = currentCard.querySelector(".my-card-img");

              // console.log(currentImg);

              let newImg = new Image();
              newImg.src = currentImg.src;
              newImg.style.height = 150+"px";
              newImg.style.width = "auto";
              newImg.style.position = "fixed";
              newImg.style.transition = 1+"s";
              newImg.style.zIndex = "2000";
              newImg.style.top = currentImg.getBoundingClientRect().top+"px";
              newImg.style.left = currentImg.getBoundingClientRect().left+"px";

              myCardRow.append(newImg);

              setTimeout(_ => {
                  newImg.style.transform = "rotate(360deg)";
                  newImg.style.height = 0+"px";
                  newImg.style.top = (cartBtn.getBoundingClientRect().top + 10) + "px";
                  newImg.style.left = (cartBtn.getBoundingClientRect().left + 20) + "px";
              },10)
              setTimeout(_ => {
                  cartBtn.classList.add("animate__tada");
              }, 750);
              cartBtn.addEventListener("animationend", _ => {
                  cartBtn.classList.remove("animate__tada");
              })
          }
      })

// showLoaderUi();
// setTimeout(removeLoaderUi, 3000);