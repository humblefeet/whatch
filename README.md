# whatch
whatch is a movie recommendation web application. Recommendations are created based on the user's choice or mood at the given time of use on the web application. Upon signing into the app, the user is given a large selection of images to choose from. These images are tied to genres in film. After 5 images are chosen, whatch is able to give a list of  movie recommendations based on this selection. The user is  able to see where the movie is streaming and link to that streaming service.

![imgur](https://i.imgur.com/8nLXVTp.png)

## Technologies Used
* Just Watch API 
* TMDb API
* Node
* Mongo
* Mongoose
* Javascript 
* HTML
* CSS

## Trello Board
https://trello.com/b/UYHJgF70/whatch

## Pitch Deck
https://docs.google.com/presentation/d/1c8Y5SW4izSfc08ACI7IXTdkWnGWkr3P6PSnF-l3ByBo

## Deployed Application
https://thawing-retreat-16282.herokuapp.com/

## API Endpoints
Method | Endpoint
---------| ------------
GET | /
GET | /users/:id
POST | /users/:id/histories
GET | /users/:id/histories/:hid/delete
GET | /users/:id/histories/:hid/movies
GET | /users/:id/histories/:hid/movies/:mid


## Unsolved Problems
The image selection page doesn't allow you to deselect images once the 5th image is selected.

## Future Enhancements

1. While we got a majority of our images from Unsplash.com, using their API to access images, as opposed to storing them locally, would be a great enhancement to our site. 

2. As mentioned in the unsolved problems section above, polling user's for their thoughts on images could be a great key feature to add. Users would be presented with one photo each log-in, to  determine its genre or "feeling" keyword. Storing these answers in a database associated with the image link to the Unsplash API could greatly increase the accuracy of our recommendations algorithm. 

3. Searching by TV series, not only by movies, would be important to add.

4. Once given the recommendations, users can sort films by release year, rating, or other search parameters. They are currently viewing the descending order of movies by rating. 

5. Once a user is on the single movie detail page, they only know if a movie is streaming on Netflix, Hulu or Amazon Prime. We  will need to open up the number of services where this movie or tv series is playing. We can even show  if it is playing in theathers currently and where. If the selection is not streaming or playing in theathers, we can show where they can buy or rent it. 

6. Adding social aspect to the application could have benefits. Much similarly to sharing a playlist with friends on Spotify, users can share recommendation lists with their friends. 
