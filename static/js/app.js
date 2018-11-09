var testImages =  document.querySelectorAll('.test-images');  
var submitButton = document.querySelector('.submitButton');
var hiddenButton = document.querySelector('.hidden-button');
var genresSelected = [];
var imageClickedTest=[];

function fiveClicks(){
    if (genresSelected.length >= 5){
        testImages.forEach(function(image){
            if(!imageClickedTest.includes(image)){
                image.classList.add('grey-image');
                image.removeEventListener('click', selectImage);
            }
        })
        submitButton.classList.add('show-button');
        submitButton.focus();
    }else{
        testImages.forEach(function(image){
            image.classList.remove('grey-image');
            image.addEventListener('click', selectImage)
        })
    }
}

function  selectImage(e){
    var el = e.target;
    var imageData = el.dataset.genres;
    var id = el.dataset.id

    if (genresSelected.includes(imageData)){
        el.classList.remove('selected');
        var index = genresSelected.indexOf(imageData);
        var idx = imageClickedTest.indexOf(id)
        if (index > -1) {
            genresSelected.splice(index, 1);
            imageClickedTest.splice(idx, 1);
        }
        console.log(genresSelected)
        fiveClicks()
    }else{
        el.classList.add('selected');
        genresSelected.push(imageData);
        imageClickedTest.push(id)
        fiveClicks()
    }
    if (genresSelected.length > 3){
        submitButton.focus();
    }
    console.log({genresSelected, imageData})
}

document.addEventListener("DOMContentLoaded", function(event) {
    testImages.forEach(function(image){
        image.addEventListener('click', selectImage);
    });
    if (genresSelected.length <= 5){
        submitButton.addEventListener("click",function(){
            returnTopTwoGenres(genresSelected);
        })
    }
})

submitButton.addEventListener("click",function(){
    returnTopTwoGenres(genresSelected);
})


function returnTopTwoGenres(arr){
    let newArr = []
    arr.forEach(function(id){
        newArr.push(id.split(','))
    })
    var merged = [].concat.apply([], newArr);
    let obj ={}
    merged.forEach(function(genre){
        if (genre in obj){
            obj[genre] = obj[genre]+= 1;
        }else{
            obj[genre] = 1; 
        }
    });
    var sortable=[];
	for(var key in obj)
		if(obj.hasOwnProperty(key))
			sortable.push([key, obj[key]]); 
	sortable.sort(function(a, b)
	{
        return b[1]-a[1];
	});
    var topTwo = []
	for(let i=0; i < 2; i++ ){
        topTwo.push(sortable[i]);
    }
    var topGenreIds = []
    topTwo.forEach(function(arr){
        topGenreIds.push(arr[0])
    })
    topGenreIds = topGenreIds.join();
    createHistory(topGenreIds);
}

function createHistory(topGenreIds) {
	var form = document.getElementById('historyForm');
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = 'genres';
	input.value = topGenreIds;
	form.appendChild(input);
}



