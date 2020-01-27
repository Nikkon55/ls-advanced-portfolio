const parallaxFT = document.querySelector('.parallax-footer');
const layersFT = parallaxFT.children;

function moveLayersOnScroll(wScroll){
    Array.from(layersFT).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll*divider/10;
        layer.style.transform = `translateY(-${strafe}%)`;
        
    })
}

window.addEventListener("scroll", e => {
    // const bottomSectionPosition = document.querySelector('.bottom-section').getBoundingClientRect().top;
    // console.log(bottomSectionPosition)
    // const scrollFromTop = document.querySelector('.works').offsetHeight
    // console.log(scrollFromTop)
    //const wScroll = window.pageYOffset;
    var bottomSectionOffset = document.querySelector('.bottom-section').getBoundingClientRect().top;
    //console.log("wScroll: "+wScroll);
    
    if (bottomSectionOffset > 0) { moveLayersOnScroll(bottomSectionOffset); }
});