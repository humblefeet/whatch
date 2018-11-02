# whatch

##Trello Board
https://trello.com/b/UYHJgF70/whatch

## User stories
###_AAU_
1. Enters main page.
    1. Title is displayed center
    2. Image is displayed
        * Text about app
        * OR button to About page
            * button to sign up
    3. Sees nav bar at top
        * Logo/brand
        *  Sign up button
        * Log in button
2. Sign Up Button
    * oAuth?
3. Log In
    * oAuth?
4. Greeted with User front Page
    1. Nav bar at top offers :
        * Logo/Brand
        * Test(Which movie? quiz)
        * History
        * Profile
        * Logout
5. Test
    1. Choose TV or Movies or both
    2. 4 images displayed
        1. Each image has tag associated
        2. Each tag is associated with the theme of that round of choosing
            1. for instance- This first round of 4 pictures is related to genre. Next is related to release date. Etc
            2. Themes
                * Genres
                * Release Date
                * Actors
                * Directors
            3. For each clicked image, a “point” is tallied to that theme
        3. Can be a point or word we can use in the api query later.
    3. After a certain number of answers, we are able to determine the search query.
        * 6-10 rounds?
6. Recommendations
    1. Theme tallies are counted
        1. Search by Genre first.
        then by a second theme?
           * Then. check for overlap in the titles that are queried from both
        2. Pull highest rated 
            * 4 or more “stars”
    2. Once quiz is complete
        * Loading screen? 
    3. Display
        1. List ? (‘recommendations/index’)
            * Split into divs
        2. Each Div shows: 
            * the title Image
            * Title
            * Director
            * Release year
            * Surrounded by '<'a'>' tag
7. Show one
    1. Movie title
    2. Image
    3. director
        * Maybe eventually add link to query all movies from this director
    4. Release year
    5. Cast
    6. Where can we watch this?
        1. Links are displayed to each of the respective sites
            * displayed as icons or buttons
            * netflix, hulu, hbogo,  etc.
    7. Here user has an option of saving as a favorite

    ## Should we add a psuedo code to this readme