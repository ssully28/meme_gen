
let meme_count = 0;
let topText = document.getElementById("memehead");
let bottomText = document.getElementById("memefoot");
let url = document.getElementById("memeurl");

function addMeme (){
    // Insert the meme:
    document.getElementById('memeplaceholder').insertAdjacentHTML('afterend', createMeme());

    // Use counter for ID for memes (make it easy to delete them later):
    meme_count++;
    
    // Clear out the form:
    topText.value = null;
    bottomText.value = null;
    url.value = null;
}

function createMeme(){
    // Grab the values from the input boxes:
    let meme_header = topText.value;
    let meme_footer = bottomText.value;
    let meme_url = url.value;

    let memeTemplateV = `
        <div id="${meme_count}" class="row my-2" onclick="deleteMeme(${meme_count})">
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

function deleteMeme (meme_id){
    let memeToDelete = document.getElementById(meme_id);
    memeToDelete.remove();
}