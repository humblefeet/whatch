var testImages =  document.querySelectorAll('.polaroid');  
var submitButton = document.getElementById('submitButton');
var genresSelected = [];
var canTest = false;

function  selectImage(e){
    var el = e.target;
    var imageData = el.dataset.genres;
    if (el.classList.contains('selected') && canTest){
        el.classList.toggle('unselected');
        var index = genresSelected.indexOf(imageData);
        if (index > -1) {
            genresSelected.splice(index, 1);
        }
    }else{
        el.classList.toggle('selected');
        genresSelected.push(imageData);
    }  
    
    //  This  needs to have a count that moves up and down
    
    // if(genresSelected.length > 2 && genresSelected.length <= 5){
    //     submitButton.classList.add('show-button')
    //     submitButton.classList.remove('hidden-form')

    // console.log(genresSelected);
    // }else if (genresSelected.length < 2 || genresSelected.length > 5){
    //     submitButton.classList.add('hidden-form');
    //     submitButton.classList.remove('show-button');
    //     console.log(genresSelected.length);
    
    // }
}
/*
Limit total images clicked = Still trying to implement this
*/



document.addEventListener("DOMContentLoaded", function(event) {
    testImages.forEach(function(image){
        image.addEventListener('click', selectImage);
    });
})


// after submit bitton is clicked inside that function genre count functions are run
//  practice array to make sure the function works genresSelected = ['22,345,17','27,17,345','7,66,27']
submitButton.addEventListener("click",function(){
    console.log('clicked')
    if (genresSelected.length > 2 && genresSelected.length <= 5){

        console.log(genresSelected)
    returnTopTwoGenres(genresSelected);
    }else{
        console.log("more than 5 clicked")
    }
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
//return obj;
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
    console.log('top returned', topGenreIds)
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



