const shareButton = document.querySelector(".share-button");
const shareButtonActive = document.querySelector(".share-button-active")
const activeContainer = document.querySelector(".share-active-container");
const triangle = document.querySelector(".text-globe-triangle");
const shareActive = document.querySelector(".share-active");
const furnitureContent = document.querySelector(".furniture-content");



//open Share Menu
shareButtonActive.addEventListener("click", ()=>{
  activeContainer.classList.add("opacity");
  shareActive.classList.add("opacity");

  console.log(activeContainer)
})

furnitureContent.addEventListener("click", ()=>{
  if(activeContainer.classList.contains("opacity") || shareActive.classList.contains("opacity")){
    activeContainer.classList.remove("opacity");
    shareActive.classList.remove("opacity");
  }
})










