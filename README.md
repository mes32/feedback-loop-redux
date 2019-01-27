# Feedback Loop (Redux)
This is a daily student feedback form similar to the form used at [Prime Digital Academy](https://primeacademy.io/). This application features a multi-page submission process with the student answering one survey question per page. It relies heavily on [Redux](https://redux.js.org/) to keep all this data easily accessible from the submission page.

## Utilized Web Stack
- `User Interface` - React
- `Client` - React, Redux for conveniently sharing data across pages, axios for making HTTP requests to the server-side
- `Server` - Node.js and the Express framework for handling HTTP requests from the client-side
- `Database` - PostgreSQL via the Node.js library pg

## Getting Started
The following steps should get a copy of the project running on your local machine. See the deployment section for notes on how to deploy the project on a live system. I recommend using the program [`Homebrew`](https://brew.sh/) for installing any needed prerequisites, but I am sure other ways work as well.

### 1. Prerequisites
- [`Node.js`](https://nodejs.org/en/)
- [`npm`](https://www.npmjs.com/) should come included with `Node.js`
- [`PostgreSQL`](https://www.postgresql.org/)

```bash
# Using Homebrew...
brew update
brew install node
brew install postgresql
```

### 2. Installation
```bash
# 1. Clone or download this project
git clone https://github.com/mes32/feedback-loop-redux

# 2. Create a database name 'prime_feedback'
createdb prime_feedback

# 3. Create a table in 'prime_feedback' named 'feedback'
#    - See database.sql for details

# 4. Install node dependancies using NPM
npm install

# 5. Start the Node.js server (runs on port 5000)
npm run server

# 6. Start the React.js client-side development server (runs on port 3000)
npm run client
```

## Screen Shot
(Coming soon)

## Documentation
This application started as my Prime Academy weekend 4 project. The original scope document (i.e. the assignment instructions) can be found here.

### Completed Features
- [x] Multi-page feedback submission form (until submitted client-side data is stored using Redux)
- [x] Submits student feedback to the server
- [x] Saves student feedback on the server-side database
- [x] Admin page shows history of all student feedback. Allows administrators to delete feedback entries from the database
- [x] Update this README.md to describe the project in my own words

### Next Steps
- [ ] Improve the styling of the app using Material-UI (theme, cards, snackbars, buttons, nav bar, and icons, etc)
- [ ] Ability to flag feedback entries for further review on the Administrator Page
- [ ] Deploy the application to Heroku

## Deployment
In the future I hope to deploy this to Heroku.

## Authors
* Michael Stockman

## Acknowledgments
* Anthony Dunahee ([adunahee](https://github.com/adunahee)) for helping me understand React Routers with more nuance.
* Sharmarke Duale ([sduale01](https://github.com/sduale01)) for helping me work through a particularly tricky React conditional rendering.
* Tiana Johnson ([TianaJohnson](https://github.com/TianaJohnson)) for pointing out that a particularly "tricky" conditional rendering didn't need to be so complicated, and I could achieve the same functionality with about half as many lines of code.
* My instructors at Prime: [Chris](https://github.com/christopher-black), [Ally](https://github.com/Lysautumn), and [Kris](https://github.com/kdszafranski)







> **PLEASE COMMENT YOUR CODE.** Do not clone this repository. Instead, download the zip, extract the contents, `git init`, `git add .`, `git commit -m "initial commit - base project"` and add your remote. Please do this before you leave for the day.

"And my last reminder of the day, which is my last reminder of every day, is...?" - Luke


 For this assignment, you will be creating a feedback form modeled after Prime's system. Feedback will be collected over 4 views, and when all steps are complete, your app will save the feedback in the database. In a separate part of the page, display the current feedback values and a submit button. 

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
![feeling](wireframes/feeling.png)
- How well are you understanding the content?
![understanding](wireframes/understanding.png)
- How well are you being supported?
![support](wireframes/supported.png)
- Any comments you want to leave?
![comments](wireframes/comments.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process as well as update the `Review` Component.


## THE REVIEW COMPONENT

In addition to the multi-step form, the app needs to display the results of each step clearly and at all times. HITN: This will be your current redux values displayed on the DOM. 

The simplest way could be another component on the DOM which shows the results of the current survey and a Submit button.

### Incomplete, Submit button is disabled:

![comments](wireframes/comments.png)

### Survey complete, Submit button is active:

![comments](wireframes/review.png)

## SUBMIT THE FEEDBACK

The `Review` portion needs a submit button which will be clicked on to actually submit the completed feedback to the server. **This submit button should only be active when all of the survey steps are complete.**

When the submit button is clicked, save the submission in the database. The user should see a submission success page.

![understanding](wireframes/page-five.png)



## STRETCH GOALS

> NOTE: These stretch goals are intended to be completed in order.

### ADMIN SECTION

Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

### OTHER FEATURES

- Update this README.md to describe the project in your own words
- Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons, and anything else you'd like.
- Add the ability to flag an existing feedback entry for further review on the /admin view
- Deploy your project to Heroku -- you'll need to read the special instructions for building and deploying with these apps! 
