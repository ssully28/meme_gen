

let topText = document.getElementById("memehead");
let bottomText = document.getElementById("memefoot");
let url = document.getElementById("memeurl");

let memeList = document.getElementById("memelist");


function addMeme (){
    document.getElementById('memeplaceholder').insertAdjacentHTML('afterend', createMeme());
}

function createMeme(){
    let meme_header = topText.value;
    let meme_footer = bottomText.value;
    let meme_url = url.value;

    let memeTemplateV = `
        <div class="row my-2" onclick="deleteMeme()">
        <div class="col"></div>
        <div class="col col-6 text-center d-flex flex-column justify-content-between meme" style="background-image: url('${meme_url}')">
            <div class="align-item-start memehead"><h3 class="display-3">${meme_header}</h3></div>
            <div class="align-item-end memefoot"><h3 class="display-5">${meme_footer}</h3><i class="far fa-trash-alt trash"></i></div>
        </div>
        <div class="col"></div>
        </div>  
    `;

    return memeTemplateV;
}

function deleteMeme (obj){
    
    alert("Delete dat meme!");
}