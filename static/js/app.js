var testImages =  document.querySelectorAll('.tests');  
var submitButton = document.getElementById('submitButton');
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
                    return clickCount;
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


// after submit bitton is clicked inside that function genre count functions are run
//  practice array to make sure the function works genresSelected = ['22,345,17','27,17,345','7,66,27']
document.getElementById('submitButton').addEventListener("click",function(){
    if (clickCount > 2 && clickCount < 5){
    returnTopTwoGenres(genresSelected);
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
    	console.log(b[1]-a[1]);
	});
	var topTwo = []
	for(let i=0; i < 2; i++ ){
    	topTwo.push(sortable[i]);
	}
	var topGenreIds = []
	topTwo.forEach(function(arr){
    	topGenreIds.push(arr[0])
	})
	console.log(topGenreIds.join())
	return topGenreIds.join(); 
}



