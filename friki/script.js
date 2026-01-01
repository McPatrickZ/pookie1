const envelope = document.getElementById("envelope");
const invitation = document.querySelector(".invitation-container");
const thankYouCard = document.getElementById("thankYouCard");

const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

let noClicks = 0;
const maxNo = 10;

btnNo.style.position = "absolute";

envelope.addEventListener("click", ()=>{
    envelope.classList.add("hidden");
    setTimeout(()=>invitation.classList.add("visible"),150);
});

btnYes.onclick = ()=>{
    invitation.classList.remove("visible");
    setTimeout(()=>thankYouCard.classList.add("visible"),300);
};

btnNo.onclick = ()=>{
    noClicks++;
    if(noClicks>=maxNo){
        btnNo.textContent="¡Ya no puedes!";
        btnNo.style.cursor="default";
        return;
    }
    let cont = invitation.getBoundingClientRect();
    let x = Math.random()*(cont.width-btnNo.offsetWidth-10);
    let y = Math.random()*(cont.height-btnNo.offsetHeight-120)+120;
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
    btnYes.style.transform = `scale(${1+noClicks*0.05})`;
};
