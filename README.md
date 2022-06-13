# Ani-Planet
![Screen Shot 2022-06-12 at 4 40 08 PM](https://user-images.githubusercontent.com/89413678/173256442-0b296689-1a34-48e7-a48d-56aa01a4cbc9.png)


#### Full Demo

![App Demo](https://user-images.githubusercontent.com/89413678/173257353-08a61b25-acd9-4528-811f-731f1402d44e.gif)

#### Deployable
[Showcase]([https://aominhlong.github.io/](https://aominhlong.github.io/Showcase/))

#### Getting Started
1. Clone the repo from [github](https://github.com/aominhlong/Showcase)

2. Cd into the directory from your terminal and install the project dependencies:
- Run `npm install` or `npm i` in the terminal

3. To see the web app:
- Run `npm start` in the terminal
- Press `ctrl/cmd + c` to exit

4. Copy the local host address from your terminal and add to your web browser to see the web app

### Table of Contents
- [About the Project](#about-the-project)
- [Contributors](#contributors)
- [Technologies Used](#technologies-used)
- [Instructions on Use](#instructions-on-use)
- [Demo of Features](#demo-of-features)
- [Testing the app](#testing-the-app)
- [Challenges and Wins](#challenges-and-wins)
- [Project Overview and Goals](#project-overview-and-goals)
- [Future Additions](#future-additions)

#### About the Project
Love anime but don't know what to watch? Use this app to see what the best anime out there are. You can scroll through our list of anime and check their ratings. Love a specific genre or know what you want? Filter our list by genre, see what is popular, or even search it with our live responsive search bar. 

This was part of Turing School of Software & Design module 3 showcase project. 

#### Contributors
 - [Nicholas Ao](https://github.com/aominhlong)

#### Technologies Used
- React
- Javascript
- Express 
- HTML
- CSS
- Webkit
- React Router for client-side routing
- Cypress End-to-End Testing

#### Instructions on Use

**_Search for a specific Anime_**
To search for a specific Anime, users can click in the input field and type in a title of the anime. The homepage will change based on a user's input.

**_Add a Anime to Watchlist_**
To add an Anime to a user's watchlist, users can click on the 'Add Anime to Watchlist' button. Users will be notified that the anime is in their watchlist when added. 

**_View all Anime in Watchlist_**
To view anime in a user's watchlist, users can click on the 'My List' area in the navigation bar. This will take them to a new page to view the anime that they have added.

**_Remove Anime from Watchlist_**
To remove an anime from a user's watchlist, users can click on the 'Remove from your Watchlist' button. 

**_Filter Anime by Genre_**
To filter anime by genre, users can hover over the 'Genre' area and choose from seven different genres.

**_Filter Anime by Popularity_**
To filter anime by popularity, users can click on the 'Popular' section located in the navigation bar and the anime will be sorted by user ratings. 

#### Demo of Features
**Homepage**

![Homepage](https://user-images.githubusercontent.com/89413678/173257404-156f151d-1c81-4af9-91ea-e99eb1d53c07.gif)

**Search for a specific Anime**

![Search](https://user-images.githubusercontent.com/89413678/173257433-c81ec5c2-a0d4-4ea0-b61d-b0be73573362.gif)

**Add a Anime to Watchlist**

![View ](https://user-images.githubusercontent.com/89413678/173257530-717b4c99-d281-4dc2-ad34-89d115e9e670.gif)


**View all Anime in Watchlist**

![View anime](https://user-images.githubusercontent.com/89413678/173257587-a090fdb7-5071-413b-ae97-3c14d35958d8.gif)

**Remove Anime from Watchlist**

![Remove](https://user-images.githubusercontent.com/89413678/173257635-31a048ee-682b-4fb4-8e15-84ba7f3571cf.gif)

**Filter Anime by Genre**

![Genre](https://user-images.githubusercontent.com/89413678/173257659-75992914-7e95-4e3a-b112-279ad838cbc6.gif)

**Filter Anime by Popularity**

![Popularity](https://user-images.githubusercontent.com/89413678/173257673-a021da1b-28cc-4469-8f52-fbf923828106.gif)

#### Testing the App
`End-to-end` testing was implimented to test the application by using Cypress. `Stubbing` and `intercepting` was used to control the network response. The app was fully tested based on the user story from start to finish. 

#### Challenges and Wins

##### Challenges
- Asynchronous timing was a challenge.
- Making sure a anime would live update based on if it was in a user's watch list was challenging
- Building the backend was challenging because I have never used Express before.
- Making sure I was stubbing the responses when using cypress was a bit of a learning curve.

##### Wins
- Created my first backend server using express.
- Making sure everything live updates
- Implement a DELETE request


#### Project Overview And Goals
- Use OOP to drive the design of the application and the code
- Gain competency with React fundamentals
- Implement asynchronous JavaScript
- Implement Router
- e2e testing with Cypress
- Use Express to build backend server

#### Future Additions
- Have users be able to leave a review about an anime
- Add an anime description page where users can see an anime's details by clicking on a anime card at the homescreen
- Add a larger database
