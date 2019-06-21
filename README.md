# My South African Trip

![alt text](/assets/images/sightseecapeofgoodhope.jpg "Cape of Good Hope*")

## **1.1 PURPOSE**

The purpose of this [my website](https://milestone-project-2-kittyjo.c9users.io/index.html) is to give an overview of my
upcoming trip to South Africa. The intent of the website is to show family and friends where I will be staying and the type of 
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

## **3.1 MY SOUTH AFRICAN TRIP WEBSITE**

1. The website consists of one page only, the [**Home Page**](https://milestone-project-2-kittyjo.c9users.io/index.html)
2. It opens with:
3.  - A map of South Africa with clustered markers for all the places we'll be visiting (No information has been added to the 
      markers at this point, as there would be too many together. It is just to give an overview of the places we'll be.)
    - A user message explaining how to use the website
    - A navigation bar across the top of the page allowing the user to filter the information by Lodgings, Safari, 
      and Sight Seeing, and to quickly access the Gallery
4.  The next section of the page is the Gallery:
    - The photos are categorized into the main headings - Lodgings, Safari, and 
      Sight Seeing
    - They are also categorized into the subcategories under the main headings. 
    - The footer is kept simple. It has one link only ("My South African Trip") which will reload the Home page when the user
      clicks on it
10. When the user makes a selection from one of the main headings, a Filter Piechart will appear, allowing the user to select
    one or more 'slices' to filter the information they see
11. The website will filter the map markers and photos, depending on the selections the user makes from the Navigation Bar
    and the Filter Piecharts
12. When the user clicks on a marker on the map, the location name will show in an infoWindow (*please see notes below*)
13. I have used the default fonts on my website
14. I have used the Google Maps Logo colors as my colors, as well as different shades of these


**NOTES**
1. **The Infowindows:** I couldn't work out how to get the location names from the Google API, so after spending a lot of time trying to work it out, 
   and many trials and errors, I decided to create a solution myself. So the names coming up in the infoWindows are not from 
   the Google API. (I did request help, but I don't think people understood how out of my depth I was with the Google API)

2.  **The Piecharts:** If a piechart is showing on the screen and you then change to a another device view via Chrome Developer
    Tools (e.g. from desktop to mobile or ipad), the piechart will be off-center. This is because the piechart is generated by
    javascript. You will need to reload the page on the second device, and regenerate the piechart for it to be centered.


## **3.6 NAVIGATION AND RESPONSIVENESS**

1.  The top navigation bar is fixed, giving the user access to it at all times on all devices
2.  The bottom navigation bar has one link only and allows the user to reload the webpage 
3.  The photos for the 3 main sections are shown across one column on extra large screens and larger; on smaller screens, the 
    photos for one main heading take up the width of the screen to enhance user viewing
4.  The filter and the map are shown across one column on medium screens and larger; on smaller screens, each takes up the 
    width of the screen. This will make it easier for the user to interact with the filters and the map



# **4. TECHNOLOGIES USED**

|Technologies                 |Website                                                         |
|-----------------------------|----------------------------------------------------------------|
|HTML                         |[w3schools](https://www.w3schools.com/)                         |
|CSS                          |[w3schools](https://www.w3schools.com/)                         |
|Javascript                   |                                                                |
|Jquery                       |[jQuery](https://code.jquery.com/)                              |
|Bootstrap                    |[Bootstrap](https://getbootstrap.com/)                          |
|Font Awesome                 |[Font Awesome](https://fontawesome.com/)                        |
|AutoPrefixer                 |[Autoprefixer](https://autoprefixer.github.io/)                 |
|dc                           |[dc](https://cdnjs.cloudflare.com/ajax/libs/dc/3.0.12/)         |
|d3                           |[d3](https://d3js.org/)                                         |
|google maps api              |[Google Maps API](https://maps.googleapis.com/maps/api/)        |
|                             |[Google Maps API Developer site[(https://developers.google.com) |


|Features         |Website                                                                                       |COMMENTS                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Color Scheme    |[google maps logo colors](https://www.schemecolor.com/google-maps-colors.php)                 |I used this website when choosing the base colors for my website.                         |                                                                    |  
| Colors          |[w3schools](https://www.w3schools.com/colors/colors_picker.asp)                               |I used this website for choosing different shades of the base colors for my website.      |
| Grids           |[bootstrap](https://getbootstrap.com/)                                                        |I used bootstraps container, row and column classes to create my page grids               |         
| Navigation bar  |[bootstrap](https://getbootstrap.com/)                                                        |I used bootstraps nav bar classes to create my navigation bars, and burger menu.          |         
|Wireframes       |[Figma](https://www.figma.com/file/Q9lO2ZVjv6ovP9RsVDKji9ZY/MySouthAfricanTrip?node-id=0%3A1) |I used figma  when designing my website                                                   |



# **5. MANUAL TESTING**

## **5.1 South African Trip Web Page**

### Navigation Test

1. Load the [**South African Trip** web page](https://milestone-project-2-kittyjo.c9users.io/index.html)
2. Verify that the logo, home icon, all links, slidedown user message, and google map are appearing correctly on the page
3. In the top navigation bar, hover over each link and verify that the hover affects are working 
   (i.e. the link is highlighted in a shade of yellow: #ffe047)
5. In the bottom navigation link, hover over the link  and verify that the hover affects are working
   (i.e. the link is highlighted in a shade of yellow: #ffe047)
8. Do the following tests on the top navigation bar:
    - Click on "Home" and on the logo image and verify that they reload the page
    - Click on "Lodgings" and verify that the user message disappears, the Lodging Filter appears as a piechart, 
      and 8 markers appear on the map. Click on Home again
    - Click on "Safari" and verify that the user message disappears, the Safari Filter appears as a piechart,
      and 8 markers appear on the map. Click on Home again
    - Click on "Sight Seeing" and verify that the user message disappears the Sight Seeing Filter appears as a piechart,
      and 8 markers appear on the map. Click on Home again
    - Click on "Gallery" and verify that it jumps to the Gallery section of the page. 

### Features Test

#### LODGINGS

1. Click on "Lodgings" and verify that the Filter Piechart showing different types of dwellings appears
2. Check that there are 8 markers on the map and 8 photos in the Gallery
3. Check that the letters on the map match the letter on the photo names
4. Click on each marker and verify that the name is correct for that marker
5. Hover on each slice of the Filter Piechart and verify how many lodgings of that type the slice covers
6. Click on a slice of the Filter Piechart and verify that the same number of markers appear on the map
7. Click on Gallery (or scroll down to Gallery) and verify that only the photos relevant to that slice of the piechart 
   are showing
8. Click on more pieces of the Filter Piechart to include or exclude the types for those slices. Verify that only those
   markers and photos are shown,  that are relevant to the piece(s) of the piechart that is/are selected

#### SAFARI

1. Click on "Safari" and verify that the Filter Piechart showing different types of Safari animals appears
2. Check that there are 8 markers on the map and 8 photos in the Gallery
3. Check that the letters on the map match the letter on the photo names
4. Click on each marker and verify that the name is correct for that marker
5. Hover on each slice of the Filter Piechart and verify how many animal of that type the slice covers
6. Click on a slice of the Filter Piechart and verify that the same number of markers appear on the map
7. Click on Gallery (or scroll down to Gallery) and verify that only the photos relevant to that slice of the piechart 
   are showing
8. Click on more pieces of the Filter Piechart to include or exclude the types for those slices. Verify that only those
   markers and photos are shown,  that are relevant to the piece(s) of the piechart that is/are selected

#### SIGHT SEEING

1. Click on "Sight Seeing" and verify that the Filter Piechart showing different types of sightseeing appears
2. Check that there are 8 markers on the map and 8 photos in the Gallery
3. Check that the letters on the map match the letter on the photo names
4. Click on each marker and verify that the name is correct for that marker
5. Hover on each slice of the Filter Piechart and verify how many sight seeing of that type the slice covers
6. Click on a slice of the Filter Piechart and verify that the same number of markers appear on the map
7. Click on Gallery (or scroll down to Gallery) and verify that only the photos relevant to that slice of the piechart 
   are showing
8. Click on more pieces of the Filter Piechart to include or exclude the types for those slices. Verify that only those
   markers and photos are shown,  that are relevant to the piece(s) of the piechart that is/are selected


#### THE GALLERY

1. Click on each link under each photo and verify that the website for that link opens in a new tab

# **5. JASMINE TESTING**

**NOTE**
1. I am not sure if I have taken the right approach to Jasmine testing, but here's what I have done:
   - I have taken the functions that deal with user interactions and created some jasmine tests
   - I have removed any code that takes values from the DOM or adds information to the DOM
   - The values being tested are passed in from calcSpec
   - I have based the test around being able to return the correct Marker Labels and Location names only 
   - I am testing only my own javascript code - I'm not testing dc/d3 or maps (I don't know how to do that)
    
### Navigation Test
1. I tested that the Main Headings (Lodgings, Safari, and Sight Seeing) returned the correct marker labels and location names
2. I tested that the Filter Piecharts returned the correct marker labels and location names depending on which 'slice' was selected


# 6. DEPLOYMENT

## 6.1 DEPLOYING FROM GITHUB 

1. Log onto Github
2. Select the respository you want to deploy
3. On the repository page, click on "Settings" and scroll down to "Github Pages"
4. From the "Source" dropdown select "Master Branch" and click "Save"
5. The message "Your site is ready to be published at https://username.github.io/Repository Name/" will 
   appear under Github Pages
6. When you click on this link your webpage will open in a browser window
7. If you receive a 404 error, wait a few minutes and try again. It usually takes a few minutes to deploy
8. Once your website launches you will need to retest it (see Testing section) to ensure that it can still 
   find all the resources (css file, images, etc)

## 6.2 CLONING FROM GITHUB 

1. Follow this link to my [Project Repository on Github](https://github.com/KittyMcDonagh/Second-Milestone-Project)
2. On the repository page click "Clone or Download"
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3 - 
    "git clone https://kittymcdonagh.github.io/Second-Milestone-Project/"
7. Press enter and your local clone will be created.



# **7. CREDITS**

## **7.1 CONTENT**

### **7.2 PHOTOGRAPHS**

1. The photos on [my website](https://milestone-project-2-kittyjo.c9users.io/index.html) were copied from:
    - [Hotel Verde website](https://www.verdehotels.com/capetown/)
    - [Quayside Hotel website](https://www.aha.co.za/quayside/)
    - [Milkwood Manor website](http://www.milkwoodmanor.co.za/)
    - [Protea Hotel website](https://www.marriott.com/hotels/travel/jnbro-protea-hotel-roodepoort)
    - [Knysna Elephant Park website](https://knysnaelephantpark.co.za/)
    - [Glen Afric website](https://www.glenafric.co.za/gallery.html)
    - [Addo Elephant Park website](https://www.sanparks.org/gallery/parks/addo-elephant-national-park)
    - [Lower Sabie Rest Camp website](http://www.krugerpark.co.za/Kruger_National_Park_Lodging_&_Camping_Guide-travel/lower-sabie-camp_accommodation.html)
    - [Google Image - 1](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwjLzI6TkPjiAhVIZcAKHUQUBx4QjRx6BAgBEAU&url=https%3A%2F%2Ftraveltriangle.com%2Fblog%2Fkruger-national-park-south-africa%2F&psig=AOvVaw1ejAYpZxCnH7tcrV2cXzeA&ust=1561122358506228)
    - [Lion and Safari website](http://www.lionandsafaripark.com/)
    - [de Wildt Cheetah Sanctuary website](http://dewildt.co.za/)
    - [Zulu Nyala website](http://zulunyalagroup.com/)
    - [Google Maps Image](https://www.google.ie/maps/uv?hl=en&pb=!1s0x1ebe391bbc301847%3A0xb04e56d51d86baed!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps%3A%2F%2Fostrovok.ru%2Frooms%2Fukutula_lion_lodge%2F!5sukutula%20lodge%20and%20lion%20centre%20-%20Google%20Search!15sCAQ&imagekey=!1e1!2shttps%3A%2F%2Fbstatic.com%2Fxdata%2Fw%2Fhotel%2Fmax1500_watermarked_standard_bluecom%2FUl2O-ydSLLJd7DjiOt_wTTw5PQalexfVd5tMHgGKcyB1HUy2S0Oc0hSIf7IYn-Ul0VGqpLMkJifSViUKLIdB6Xv56US0Au4koTYMNzaDDE9nSApsIkFJNA4OZ5ERWWE.jpg&sa=X&ved=2ahUKEwj0q56xlPjiAhV0nVwKHcL1BnoQoiowFXoECA0QBg#)
    - [Google Image - 2](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwjM3fjclfjiAhU0Q0EAHcVuDo8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.thesouthafrican.com%2Ftravel%2Fexploring-the-wonder-of-chapmans-peak-video%2F&psig=AOvVaw24AxQ72SgSHTbs-KCxhKn0&ust=1561123760736862)
    - [Google Image - 3](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwjulvHtlvjiAhXMfMAKHSmOCg8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.privatetransportcapetown.com%2Ftour%2Fcape-of-good-hope-and-cape-point-sightseeing-private-cape-peninsula-day-tour%2F&psig=AOvVaw3-tM30-c1DkaN7q9Kai38B&ust=1561124099375976)
    - [Stellenbosch website](https://www.stellenbosch.travel/attractions/heritage-architecture)
    - [Stellenbosch website](https://www.stellenbosch.travel/)
    - [Marianne Wine Estates website](http://www.mariannewines.com/our-winery/tasting-room)
    - [Ocean Safari website](http://oceansafaris.co.za/gallery/)
    - [Google Image - 4](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwiKo-TzmvjiAhVyQUEAHduwCj0QjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNature%2527s_Valley&psig=AOvVaw0DkfC7Z1orAzHaluMjTDRD&ust=1561125251107402)
    - [Google Image - 5](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwiA_pWqm_jiAhWLT8AKHWwmDSAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.thenational.ae%2Flifestyle%2Ftravel%2Fmy-kind-of-place-port-elizabeth-south-africa-1.165596&psig=AOvVaw0CtESsVnHBKH7nxDpZ7wdt&ust=1561125353100379)
    - [Google Image - 6](https://www.google.ie/url?sa=i&source=images&cd=&ved=2ahUKEwi6r7Lcm_jiAhXMa8AKHcAsAYAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.lonelyplanet.com%2Fsouth-africa%2Fgauteng%2Fjohannesburg&psig=AOvVaw1dc6BmwwX0X4PTSd1NZdlO&ust=1561125454470675)
2. The map is from [Google Maps API](https://maps.googleapis.com/maps/api/)


## **CODE SNIPPETS**

1. I have used code from the mini project to add a map to Rosie's resume, to load my map.
2. I used https://developers.google.com/maps/documentation/javascript/examples/place-details to add an infowindow for the location 
   name to the markers.
3. I have copied classes from my Milestone 1 project for the navigation bar, the links and hovering.
4. Comments have been added in the files where copied code is used.
5. With assistance from Slack I copied code from Stack Overflow to close the burger menu


## **7.3 ACKNOWLEDGEMENTS**

|NAME                          |COMMENTS
|------------------------------|----------------------------------------------------------------------------------------------|
|The Code Institute            |I learnt everything I needed to know to build this website from the Code Institute.           |
|Fellow students on Slack      |I received a lot of assistance and feedback from students on Slack which improved my project. |
|My mentor Seun Owonikoko      |I received assistance, feedback and encouragement from Seun.                                  |












