Design Doc : Comp 20 Group Project Spring 2014
Group 20: Manvi Goyal, Shriya Nevatia, Sharada Sant, Krishna Soni

 1. Project title 
     2. Grilld 
 2. Problem statement (i.e., what is the problem?) 
     3. College students spend too much money on food because we don’t know what the cheapest options around us are.  
 3. How do you solve the problem?  
     4. Make an app that ranks the cheapest food options that are nearest you.   
 4. List of all the features that your team will implement (including which of the "Pick 5" items were chosen by the team). Your team will be held accountable for the features you list! 
     5. User Profiles & Customization : Users enter a username and password to secure their account (Facebook login) and save favorite items. 
     6. Ranking of Restaurants : Restaurants ranked by price within a certain maximum distance. 
     7. (Pick 5) Geolocation : Figuring out where the user is and calculating the nearest open restaurants (using Google Maps and Yelp API). 
     8. (Pick 5) Front-end framework : Designing web and mobile applications by customizing Twitter Bootstrap with our app’s colors, fonts, and logo. 
     9. (Pick 5) Data scraping : Getting menu data and prices from local restaurants (Yelp API). 
     10. (Pick 5) Client-side Data Persistence : Stores user’s preferences for favorite food items associated with particular restaurants. 
     11. (Pick 5) Send emails and/or SMS : If you set a lunchtime or dinnertime, texts you to alert to local restaurants with options within your price range. 
 5. What data will your prototype be using and collecting 
     6. Prices & Menu items at certain restaurants. 
     7. Locations of restaurants (and calculated distances from your location). 
     8. User information including username, password, location, and favorite saved items. 
 6. Any algorithms or special techniques that will be necessary 
     7. Calculating the distance from your current location to a restaurant’s location: Customer needs to know where restaurants are, and how close they are to their current location. Will use Google Maps (Directions) API to find fastest way to specific restaurant.
     9. Calculating price range of particular set of items on a restaurant’s menu: Customer will need to specify what they want to spend on a particular meal or item. 
     10. Ranking restaurants in order of prices: Query will extract items from different menus, and rank restaurants based on price of item (Will probably use some kind of sorting algorithm) 
     11. Querying favorite items/User input: Favorite items will be weighted first on search query, with other items matching results following afterward in results.   
 7. Electronic mockups of what your team will be developing
    using wireframes. No hand-drawn mockups accepted. 
    
     8. Mobile:  
         9. Sign-in screen 
         10. Selection screen: Food and price max selection (also finds user location) 
         11. Search Results: Ranks restaurants within a certain max distance by price of searched food item 
         12. Restaurant page: (highlight all that fit search term) 
         13. User Profile: (inc. favorites and dietary restrictions) 
    8. Desktop: 
        9. Login and home page  
        10. Selection screen w/ search results below 
        11. Restaurant page: (highlight all that fit search term) 
        12. User profile page (inc. favorites and dietary restrictions)

Mobile Designs: 

Sign In Screen and Selection Screen 

![Sign In][1] ![Selection Screen][2] 

Search Results and Restaurant Page

![Search Results][3] ![Restaurant Page][4] 

User Profile

![User Profile][5]


Desktop Designs:

Login and home page:

![Log In & Home][6]

Selection screen:

![Selection][7]

Restaurant page: 

![Restaurant Page][8]

User profile page:

![User Profile][9]


  [1]: https://lh3.googleusercontent.com/-qmTwcUxX1Uw/UyJxDCu8shI/AAAAAAAAAdM/Z7iPs6OWFis/s0/Screen+Shot+2014-03-10+at+12.44.19+AM.png "Sign In"
  [2]: https://lh5.googleusercontent.com/-y6pAn7Zz7-0/UyJwdHQmAkI/AAAAAAAAAcc/uhNMY08wUhc/s0/Screen+Shot+2014-03-13+at+10.17.24+PM.png "Restaurant Page"
  [3]: https://lh6.googleusercontent.com/-T0Cc0AAW8fg/UyJwnS72-iI/AAAAAAAAAco/60lq6COIMjE/s0/Screen+Shot+2014-03-13+at+10.17.31+PM.png "Search Results"
  [4]: https://lh4.googleusercontent.com/-MYq5ux1R_1E/UyJwy8XGXFI/AAAAAAAAAc0/U7pkeRFqmqI/s0/Screen+Shot+2014-03-13+at+10.17.37+PM.png "Restaurant Page"
  [5]: https://lh5.googleusercontent.com/-S9H7mwVYywI/UyJwT3mjlhI/AAAAAAAAAcQ/9nrg8JvBcPo/s0/Screen+Shot+2014-03-13+at+10.17.43+PM.png "User Profile"
  [6]: https://lh3.googleusercontent.com/-gvmX64ANLFM/UyJxsdzje_I/AAAAAAAAAdo/PWzaW9TdcV4/s0/Screen+Shot+2014-03-13+at+11.03.21+PM.png "Log In & Home"
  [7]: https://lh5.googleusercontent.com/-YPlnbcZU1SQ/UyJxxH42DqI/AAAAAAAAAd4/mbySJrKjIBo/s0/Screen+Shot+2014-03-13+at+11.03.39+PM.png "Selection"
  [8]: https://lh3.googleusercontent.com/-qbUu711c_P8/UyJx1tR6SZI/AAAAAAAAAeE/copQfRYI9o4/s0/Screen+Shot+2014-03-13+at+11.03.46+PM.png "Restaurant Page"
  [9]: https://lh5.googleusercontent.com/-7pOoSZORLbE/UyJx6_vn7pI/AAAAAAAAAeQ/QS1pNWei_-Q/s0/Screen+Shot+2014-03-13+at+11.03.54+PM.png "User Profile"