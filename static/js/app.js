var testImages =  document.querySelectorAll('.tests');  
var genresSelected = [];
var clickCheck = [];
var clickCount = 0;

function imageSelect(){
    testImages.forEach(function(image){
        image.addEventListener('click', function(e){
            var imageGenres = e.target.dataset.genres;
                if (clickCheck.includes(imageGenres)){
                    e.target.parentElement.style.borderColor = "black";
                    clickCount -= 1;
                    var index = genresSelected.indexOf(imageGenres);
                    if (index > -1) {
                        genresSelected.splice(index, 1);
                        clickCheck.splice(index,1)
                    }
                }else{
                    e.target.parentElement.style.borderColor = "yellow";
                    genresSelected.push(imageGenres);
                    clickCheck.push(imageGenres);
                    clickCount += 1
                }
                console.log(genresSelected);
        });
    })
}


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    imageSelect();
});

/*
User clicks image
Image is highlighted
Image genre(s) added to array
If clicked again, image is unhighlighted
Image's genre(s) removed from array
Limit to 3(?) total images clicked = Still need to implement this
*/