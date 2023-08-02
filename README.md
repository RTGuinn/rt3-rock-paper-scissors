# RT's Rock, Paper Scissor Game

This is a basic online game of chance that provides the user with 3 options and
the computer making a random choice to see who comes out on top.  It is meant
to pass the time in a fun way and to envoke a sense of challenge to the user
with the a feeling of chance to win as you would playing a slot machine.

Users of the game will make decisions based on intuition and see how their
luck is challenged by the computer's random choice. Enjoy!

![plot](/assets/readme_images/Responsive.png)

The live website can be accessed from GitHub through the following link:

<https://rtguinn.github.io/rt3-rock-paper-scissors/>

# HUGE NOTE ABOUT THIS PROJECTS COMMIT MESSAGES

I want to make note of the commit messages for this project.

During the previos workspace for this project, I ran into a problem pushing to Github.  Authentication was being required in the terminal and I attempted to verify multiple times without success.  Finally, after talking with other students in Slack and getting suggestions of what to do, I finally came to the conclusion that I had to create a new workspace and transfer everything from the broken workspace to the this one.  So what I did was copy and paste the index.html, style.css and the script.js along with the 404.html and the original readme files to my VS Code, Opened the new workspace (this one) and copy/paste each file to this one.  I committed after each file was pasted and also made a note in the commit message that it was copied from the broken project workspace.  I will to leave a link to the broken workspace below this note so that the original commit messages for the index.html, style.css and script.js files can be seen and gone over for anyone who wants or needs to see them.  This was an unfortunate event that happened towards the end of the project and due to not having enough time to find the proper transfering of the information to a new workspace had to do it this way.  I am sorry for the mess and confusion, but I will look into this for future problematic errors that may occur in this way.  Thank you and I hope you enjoy the game I have created.

Here is the link to the previous workspace:
<https://github.com/RTGuinn/rt2-rock-paper-scissor>

# Features

### Header

 Basic Heading of the game.

![plot](/assets/readme_images/header.png)

### How to Play

  Rules button, active button user can click to get the rules of the game.

![plot](/assets/readme_images/rules.png)

### Game Area

  This area shows the gaming area for both the user and the computer.

![plot](/assets/readme_images/game-area.png)

### Wins/Losses Counter

  Shows the win and loss counters for keeping track of how many wins/losses.

![plot](/assets/readme_images/win-loss.png)

### Footer

  Shows the footer area with who created the game.

![plot](/assets/readme_images/footer.png)

# Existing Features

- Responsive Design
- Interactive Buttons
- Game Play

# Future Features to be added

- Greeting page before going into game
- Multi-player option to be added
- Computer gaming area to show card chosen with message
- Table of Contents to be added with links to each section in readme.md

# 404 Error Page

![plot](/assets/images/404.png)

# Design

### Web Wireframe

![plot](/assets/readme_images/wireframeweb.png)

### Mobile Wireframe

![plot](/assets/readme_images/wireframemobile.png)

# Validations

### HTML Validation

![plot](/assets/readme_images/HTML-validation.png)

### CSS Validation

![plot](/assets/readme_images/CSS-validation.png)

### JS Code Quality Validation

![plot](/assets/readme_images/JScodeQuality.png)

# Technologies

- HTML
  - The structure of the website was developed using HTML as the main language.

- CSS
  - The website was styled using custom CSS in an external file.

- JavaScript
  - The website was made interactive using JavaScript in an external file.

- CodeAnywhere
  - The website was developed using CodeAnywhere IDE.

- Github
  - Source code is hosted on GitHub and deployed with Git pages.

- Git
  - Used Commit and push code during the development of the website.

- Font Awesome
  - Icons from <https://flaticon.com/> were used for the player options in game.

- Favicon
  - Favicon files were created with <https://favicon.io/favicon-generator/>

- Balsamiq
  - Wireframes were created using <https://baslamiq.com/wireframes/>

# Testing

### Responsiveness

All pages were tested to make sure responsiveness on different screen sizes
functioned and worked properly on Chrome, Safari and Windows.

- Steps to test:
  
  i. Open browser and navigate to <https://rtguinn.github.io/rt3-rock-paper-scissors/>

  ii. Open developer tools (right click and inspect)
  
  iii. Set to responsive and decrease to 480px
  
  iv. click and drag responsive window to max width
  
  - Expected: Website responds on all screen sizes and no overlapping elements.
  - Actual: Website acted as it should and no problems were found.
  - Website was aslo opened and tested on iphone 13plus max with no problems.

# Accessbiility

Wave Accessibility was used at the end of website development to check for
any aid accessibility testing problems and all were corrected.

Testing was to ensure the following criteria were met:

- All pages have aria-labels and associated labels so it is read out with a screen reader.
- Color contrasts meet a minimum ratio
- Heading levels are not missing or skipped to ensure importance of content is correctly outputted to user.
- Everything contained within landmarks to ensure ease of use for assistive technology.
- All images have alternative text and titles so it is read out on a screen reader.

# Lighthouse Testing

![plot](/assets/readme_images/LighthouseTest.png)

# Functional Testing

## Rules Button

Testing was performed on the button to make sure it functioned properly.

- Button was clicked and brought up rules that it was supposed to and closed properly as well.

## User Gaming Area

Buttons for user selection were tested by clicking on them and each giving feedback to the computer area selection

for what computer chose and proper comparison was outputted to the computer area for player to see what they chose and

the computer chose and who won that round.

# Unfixed Bugs

The website worked on all devices and no bugs were found that needed to be fixed.

# Deployment

The website was deployed using Github pages.

- Steps to deploy
  i. In GitHub repository, go to Setting tab
  ii. From the Branch drop-down menu section, select main
  iii. After saving from step 2, the page will be deployed and a live link will display after a few moments.

A live link can be found here - <https://rtguinn.github.io/rt3-rock-paper-scissors/>

# Credits

## Content

- This website began following the Love Maths Project from Code Institute until it came into its own form.
- How to Modals was referenced for the rules button as per suggested from mentor Gareth.
- Jon Duckett HTML and CSS, JavaScript and JQuery were used as reference with both index and script.js files throughout the project.
- Slack and StackOverflow were both used to help with problems and situations that were problematic throughout the project.
- Icons for the User selection images were taken from Flaticon icons.
- Icon from Font Awesome was used for the tab icon.
