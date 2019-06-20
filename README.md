# My South African Trip

![alt text](/assets/images/hippo.jpg "Snapshot of *a Hippo*")

## **1.1 PURPOSE**

The purpose of this [my website](https://milestone-project-2-kittyjo.c9users.io/index.html) is to give an overview of my
upcoming trip to South Africa. The intent of the website is to family and friends where I will be staying and the type of 
activities I will be engaging in while there.

The primary target audience are family and friends who are excited about my trip and want to know more.

# **2. UX**

## **2.1 BACKGROUND**

I am taking a trip to South Africa from mid-August to mid-September with friends. We are flying into Capetown and taking the
Garden Route up to Johannesburg. Along the way we will stay in nice hotels, lodges and restcamps. We will experience a 
safari or two, and do a lot of sight seeing.



## **2.2 WEBSITE REQUIREMENTS**

### **2.2.1 High Level Requirements**

The website will:

1. Present the details under 3 main headings - Lodgings, Safari, and Sight Seeing
2. Split the details of the 3 main headings into subcategories
3. Include a photo gallery to give users an idea of the experiences we are hoping to have
4. Allow users to get an overall view of the trip
5. Allow users to filter the details to view Lodgings only, Safari only, or Sight Seeing only
6. Allow users to filter on the subcategories under each main heading to see the finer details of the trip


## **2.2.2 USER STORIES** ##

|No. |Who I am                 |What I want to do                                                           | Why I want to do it
|----|-------------------------|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
|1.  |A friend / family member |I want to see what my friends / family member will be doing in South Africa |I am excited for them and I would like to see what they're going to experience. I might go myself one day.              |
|2.  |A friend / family member |I want to see what kind of places they'll be staying                        |I want to see what levels of comfort they're going to have.                                                             |
|3.  |A friend / family member |I want to see what kind of things they'll be doing                          |I want to get a feel for what they're going to experience in South Africa                                               |
|4.  |A friend / family member |I want to see photos of where they're staying and what they're doing        |It will help me visualize where they are and what the're doing while on holiday                                         |
|5.  |A friend / family member |I want to see where the locations they will be in on a map                  |It will me an idea of the distances they're travelling                                                                  |

# **3. FEATURES**

## **3.1 HOME PAGE**

1. The website consists of one page only, the [**Home Page**]https://milestone-project-2-kittyjo.c9users.io/index.html)
2. It opens with:
3.  - A map of South Africa will clustered markers for all the places we'll be visiting
4.  - A user message explaining how to use the website
5.  - A navigation bar across the top of the page allowing the user to filter the information by Lodgings, Safari, 
      and Sight Seeing, and to quickly access the Gallery
6.  The next section of the page is the Gallery:
7   - The photos are categorized into the main headings - Lodgings, Safari, and 
      Sight Seeing, 
8.  - They are also categorized into the subcategories under the main headings. This allows the photos to be 
      hidden / shown depending on the filters the user selects
9.  - The footer is kept simple. It has one link only ("My South African Trip") which will reload the Home page when the user
      clicks on it
10. I have used the default fonts on this page


## **3.6 NAVIGATION AND RESPONSIVENESS**

1.  The top navigation bar is fixed, giving the user access to it at all times on all devices
2.  The bottom navigation bar has one link only and allows the user to reload the webpage 
3.  The photos for the 3 main sections are shown across one column on extra large screen and larger; on smaller screens, the 
    photos for one main heading take up the width of the screen to enhance user viewing
4.  The filter and the map are shown across one column on medium screens and larger; on smaller screens, each takes up the 
    width of the screen. This will make it easier for the user to interact with the filters and the map



# **4. TECHNOLOGIES USED**

|Technologies                 |Website                                                  |
|-----------------------------|---------------------------------------------------------|
|HTML                         |[w3schools](https://www.w3schools.com/)                  |
|CSS                          |[w3schools](https://www.w3schools.com/)                  |
|Javascript                   |                                                         |
|Jquery                       |[jQuery](https://code.jquery.com/)                       |
|Bootstrap                    |[Bootstrap](https://getbootstrap.com/)                   |
|Font Awesome                 |[Font Awesome](https://fontawesome.com/)                 |
|AutoPrefixer                 |[Autoprefixer](https://autoprefixer.github.io/)          |
|dc                           |[dc](https://cdnjs.cloudflare.com/ajax/libs/dc/3.0.12/)  |
|d3                           |[d3](https://d3js.org/)                                  |
|google maps api              |https://maps.googleapis.com/maps/api/                    |
|                             |https://developers.google.com


|Features         |Website                                                         |COMMENTS                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Color Scheme    |[google maps logo colors](https://www.schemecolor.com/google-maps-colors.php)                 |I used this website when choosing the base colors for my website.                         |                                                                    |  
| Colors          |[w3schools](https://www.w3schools.com/colors/colors_picker.asp)                               |I used this website for choosing different shades of the base colors for my website.      |
| Grids           |[bootstrap](https://getbootstrap.com/)                                                        |I bootstraps container, row and column classes to create my page grids                    |         
| Navigation bar  |[bootstrap](https://getbootstrap.com/)                                                        |I bootstraps nav bar classes to create my navigation bars, and burger menu.               |         
|Wireframes       |[Figma](https://www.figma.com/file/Q9lO2ZVjv6ovP9RsVDKji9ZY/MySouthAfricanTrip?node-id=0%3A1) |I used wireframes when designing my website                                               |




# **5. TESTING**

## **5.1 HOME PAGE**

1. Go to the [**Home Page**](https://milestone-project-01-kittyjo.c9users.io/index.html)
2. Verify that all links, icons, images and content are appearing correctly on the page
3. In the top navigation bar, hover over each link and verify that the hover affects are working 
   (i.e. background color changes to white, font color to #c71f27)
4. In the top navigation bar, hover over each social media icon and verify that the hover affects are working 
   (i.e. the background color is changing to the icon color, and the icon color is changing to the background color)
5. In the bottom navigation links, hover over each link  and verify that the hover affects are working
   (i.e. background color changes to white, font color to #c71f27)
6. In the bottom navigation links, hover over the social media icons and verify that the hover affects are working 
   (i.e. the background color is changing to the icon color, and the icon color is changing to the background color)
7. Hover over the links in the "Featured" and "News" section, and verify they are changing to blue
8. Do the following tests on the top navigation bar:
9.  - Click on "Home" and verify that it stays on the Home page
10. - Click on "The Band" and verify that it jumps to the section of screen where the Band details are displayed
11. - Click on "Tours" and verify that it goes to the Tours page. Browse back to the Home page
12. - Click on "Music" and verify that it goes to the Music page. Browse back to the Home page
13. - Click on "Gallery" and verify that it goes to the Gallery page. Browse back to the Home page
14. - Click on "Contact" and verify that it goes to the Contact page. Browse back to the Home page
15. - Click on "Shop" and verify that it opens a new tab to the 
        [Shop website](https://shop.celticcollections.com/collections/the-high-kings-all). Return to the Home page
16. - Click on the "facebook" icon and verify that it opens a new tab to [*The High Kings'* facebook page](https://www.facebook.com/thehighkings). Return to the Home page
17. - Click on the "twitter" icon and verify that it opens a new tab to 
        [*The High Kings'* twitter page](https://twitter.com/). Return to the Home page
18. - Click on the "instagram" icon and verify that it opens a new tab to 
        [*The High Kings'* instagram page](https://www.instagram.com/thehighkingsofficial/). Return to the Home page
19. - Click on the "youtube" icon and verify that it opens a new tab to
        [*The High Kings'* youtube page](https://www.youtube.com/user/TheHighKingsOfficial). Return to the Home page
20. Do the following tests on the "Featured" section:
21. - Click on the "Listen to Playlists" links and verify that they are going to the section of the Music 
        page where the Playlists are. Browse back to the Home page
22. - Click on the "Watch Recent Concerts" link and verify that it is going to the section of the Music 
        page where the Concert videos are. Browse back to the Home page
23. Do the following tests on the "News" section:
24. - Click on the "New Tour Dates Anounced. Tickets on sale now!" link and verify that it is 
        going to the Tours page. Browse back to  the Home page
25. - Click on the "New Spotify playlist featuring (etc)" link and verify that it is opening a new tab to the News Page on
        [*The High Kings'* Official Website](https://www.thehighkings.com/news/the-high-kings-sing-some-of-ireland-s-favourite-folk-songs-/). 
        Return to the Home page
26. - Click on the "Read More . . ." link and verify that it is opening a new tab to News Page on 
        [*The High Kings'* Official Website](https://www.thehighkings.com/news/the-high-kings-sing-some-of-ireland-s-favourite-folk-songs-/). 
        Return to the Home page
27. Do the following tests on the bottom navigation links:
28. - Click on "Home" and verify that it stays on the Home page
29. - Click on "Tours" and verify that it goes to the Tours page. Browse back to the Home page
30. - Click on "Shop" and verify that it opens a new tab to the 
        [Shop website](https://shop.celticcollections.com/collections/the-high-kings-all). Return to the Home page
31. - Click on "Music" and verify that it goes to the Music page. Browse back to the Home page
32. - Click "Playlists" and verify that it goes to the section of the Music 
        page where the Playlists are. Browse back to the Home page
33. - Click on "Gallery" and verify that it goes to the Gallery page. Browse back to the Home page
34. - Click on "Contact Us" and verify that it goes to the Contact page. Browse back to the Home page
35. - Click on the "facebook" icon and verify that it opens a new tab to 
        [*The High Kings'* facebook page](https://www.facebook.com/thehighkings). Return to the Home page
36. - Click on the "twitter" icon and verify that it opens a new tab to 
        [*The High Kings'* twitter page](https://twitter.com/). Return to the Home page
37. - Click on the "instagram" icon and verify that it opens a new tab to 
        [*The High Kings'* instagram page](https://www.instagram.com/thehighkingsofficial/). Return to the Home page
38. - Click on the "youtube" icon and verify that it opens a new tab to 
        [*The High Kings'* youtube page](https://www.youtube.com/user/TheHighKingsOfficial). Return to the Home page
    



    
# **6. DEPLOYMENT**

## **6.1 DEPLOYING FROM GITHUB **

1. Log onto Github
2. Select the respository you want to deploy
3. On the repository page, click on "Settings" and scroll down to "Github Pages"
4. From the "Source" dropdown select "Master Branch" and click "Save"
5. The message "Your site is ready to be published at https://username.github.io/Bootstrap/" will 
   appear under Github Pages
6. When you click on this link your webpage will open in a browser window
7. If you receive a 404 error, wait a few minutes and try again. It usually takes a few minutes to deploy
8. Once your website launches you will need to retest it (see Testing section) to ensure that it can still 
   find all the resources (css file, images, etc)

## **6.2 CLONING FROM GITHUB **

**Note:** *I got help with this section from Eventyret_mentor, as I have actually not done this before.*

1. Follow this link to my [Project Repository on Github](https://github.com/KittyMcDonagh/First-Milestone-Project)
2. On the repository page click "Clone or Download"
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3 - 
    "git clone https://github.com/KittyMcDonagh/First-Milestone-Project"
7. Press enter and your local clone will be created.



# **7. CREDITS**

## **7.1 CONTENT**

All the content on [my website](https://milestone-project-01-kittyjo.c9users.io/index.html) was copied from [*The High Kings* Official Website](thehighkings.com).


1. **Shop** links to the [Shopping Website](https://shop.celticcollections.com/collections/the-high-kings-all)
2. **Ireland's Favourite Folk Song** items link to the [News Page on *The High Kings'* Official Website](https://www.thehighkings.com/news/the-high-kings-sing-some-of-ireland-s-favourite-folk-songs-/)
3. **Book** links to the [Booking Page on *The High Kings* Official Website](https://www.thehighkings.com/tour-dates/)
    

## **7.2 MEDIA**

### **7.2.1 PHOTOGRAPHS**

All the Photographs, on this website were copied from [*The High Kings* Official Website](thehighkings.com).


### **7.2.2 VIDEOS**

All the Videos on this website are embedded from [Youtube](www.youtube.com).

### **7.2.2 PLAYLISTS**

All the Playlists on this website are embedded from [Spotify](https://www.spotify.com/).


## **CODE SNIPPETS**

A certain amount of the code I used has been copied from Projects I did during the course 
(e.g. the Rosie Resume project and the Whiskey project). Comments have been added in the files where copied code
is used.


## **7.3 ACKNOWLEDGEMENTS**

|NAME                          |COMMENTS
|------------------------------|----------------------------------------------------------------------------------------------|
|The Code Institute            |I learnt everything I needed to know to build this website from the Code Institute.           |
|Fellow students on Slack      |I received a lot of assistance and feedback from students on Slack which improved my project. |
|My mentor Seun Owonikoko      |I received assistance, feedback and encouragement from Seun.                                  |
|The High Kings                |I love this band and because of that I enjoyed creating this website                          |











