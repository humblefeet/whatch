var testImages =  document.querySelectorAll('.polaroid');  
var submitButton = document.getElementById('submitButton');
var genresSelected = [];

function  selectImage(e){
    var el = e.target;
    var imageData = el.dataset.genres;

    if (genresSelected.includes(imageData)){
        el.classList.toggle('unselected');
        var index = genresSelected.indexOf(imageData);
        console.log(genresSelected);
        if (index > -1) {
            genresSelected.splice(index, 1);
        }
        console.log(genresSelected)
    }else{
        el.classList.toggle('selected');
        genresSelected.push(imageData);
        if (genresSelected.length === 5){
            submitButton.focus();
        }
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    testImages.forEach(function(image){
        image.addEventListener('click', selectImage);
    });
})

document.getElementById('submitButton').addEventListener("click",function(){
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



