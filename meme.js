

let topText = document.getElementById("memehead");
let bottomText = document.getElementById("memefoot");
let url = document.getElementById("memeurl");

let memeList = document.getElementById("memelist");

/*
<div class="row my-2">
            <div class="col"></div>
            <div class="col col-6 text-center d-flex flex-column justify-content-between meme" style="background-image: url(\'https://photos.smugmug.com/BW/i-sL6ZcWh/0/3a505840/X3/tahoe_BW-X3.jpg\')">
                <div class="align-item-start memehead"><h3 class="display-3">Whatever!!!</h3></div>
                <div class="align-item-end memefoot"><h3 class="display-5">Whatever memes normally say...</h3><i class="far fa-trash-alt trash"></i></div>
            </div>
            <div class="col"></div>
        </div>
*/

let memeTemplate = `
<div class="col"></div>
<div class="col col-6 text-center d-flex flex-column justify-content-between meme" style="background-image: url(\'https://photos.smugmug.com/BW/i-sL6ZcWh/0/3a505840/X3/tahoe_BW-X3.jpg\')">
    <div class="align-item-start memehead"><h3 class="display-3">Whatever!!!</h3></div>
    <div class="align-item-end memefoot"><h3 class="display-5">Whatever memes normally say...</h3><i class="far fa-trash-alt trash"></i></div>
</div>
<div class="col"></div>
</div>  
`;

function addMeme (){
    
    alert("Top Text : " + topText.value);

    //let newMemeNode = document.createElement(memeTemplate);
    //memeList.appendChild(newMemeNode);

    document.getElementById('memeplaceholder').insertAdjacentHTML('afterend', memeTemplate);

}

function deleteMeme (){
    alert("Delete dat meme!");
}