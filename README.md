<h1 align="center"> Ultimate VideoGame Quiz (Project2)</h1>

Ultimate VideoGame Quiz is a website that host a fully functional quiz, that will challenge your videogame knowledge. Choose between Easy, Medium or Hard question to find the appropiate difficulty.
This website allow you to answer up to 7 question at a time from a randomized list of question in each difficulty, selecting the right answer out of 4 possible or picking true or false.

![Responsive Mockup](documentation/images/mockup-quiz-home.png)

## Index - Table of Contents
* [List of features](#features)
* [UX/UI](#ux-ui)
* [Testing](#testing)
* [Deployment](#deployment)
* [Citation of ALL sources](#citations)
* [Future features](#future-features)
* [Known Bugs](#know-bugs)

### FEATURES

- __Main-Menu:__ <br>
- Main menu image is fully responsive to width of screen and contains the difficulty selectors for starting quiz.
- The fully responsive navigation bar allows users to easily navigate through the pages without having to go back to the previous page with the “back” button.
![Responsive navbar](documentation/media/Home_Page_header.png)

- __The landing page image:__
- The landing page for Pawesome includes a picture of a small puppy, easter bunny and a pink frame with text overlay where users can see the information about limited Easter Discount.
- The goal for the landing page picture is to show the purpose of what Pawesome is about and welcome the user with a cute puppy and an interesting Easter Deal. 
![Home-page Hero image](documentation/media/Landing_page_image_hero_image.png)

- __Why Pawesome is Awesome section:__
- The Why Pawesome is Awesome section consists of 3 separate images, each one with a hover overlay - effect.
- The idea behind this is to give some additional information to the user about why they should choose Pawesome before anyone else. 
- When the user hovers over each image there’s a different text overlay behind them that states that Pawesome takes the best care of their pet, being gentle with all the animals and using cruelty free products only.
![Why pawesome is awesome](documentation/media/Why_Pawesome_is_awesome.png)

- __Grooming Packages Section:__
- This section has 3 different images of different dog breeds and a separate text under each one.
- The idea is to describe all the grooming packages that Pawesome has to offer with short and clear sentences and corresponding images to give the user some visual idea when they are choosing a package for their pet.
![Responsive package deals](documentation/media/Grooming_packages_section.png)

- __Contact Page:__
- The contact page includes two containers in blue color, same color code as in the Pawesome logo.
- The left container is a form that users can fill out their name, e-mail address, select a package, specify a time and date for the grooming session and specify if they have any additional requests that we can help them with. 
- The form container is made in a way so all the fields are required to be filled except the last field before submitting.
- The right container has the same blue color code from the Pawesome logo and shows a Map with the location of Pawesome.
![Responsive contact page](documentation/media/Sign_up_page__location.png)

- __About Us Page:__
- The about us page has an image of a yellow and black cat and a bubble chat box with some text overlay inside of it. In the bottom section of the page there is a video of a before/after grooming section of a Samoyed Dog.
- The idea for this section is to familiarize the user a little bit with Pawesome’s background and how long they are in the same business and also to give the user some security that they are giving their pet in the right hands. 
- The idea behind the before/after video of a dog grooming session is that it gives the users a fun way to see what Pawesome is capable of.<br>
![Responsive about us page](documentation/media/About_Us_page.png)


### UX-UI
__As a business owner the goal is to:__
- Create an online presence for the business and attract new customers
- Give information to customers about opening hours, location and what social media they can find us on.
- Presenting to new customers what the business is about by welcoming them with a cute puppy hero picture and an eye catching discount.
- Keeping the existing customers up to date by regularly updating the website with seasonal discounts.

__As a first time user the goal is to:__
- Easily understand the purpose on the website and what they can expect.
- Give the users introduction to the grooming packages with eye-catching and visually explanatory images about all the packages separately.
- Easy navigation to all sections through the navigation bar.
- Finding the opening hours and location easily, by them both being implemented in the Footer and the Contact section.

__As a returning user the goal is to:__
- Check the open hours and location easily
- Having simple access to all the social media platforms
- Easy to use contact form which gives the user consistency when booking recurrent pet grooming sessions.
- All the sections are easy to access and view the menu quickly and easily.

### TESTING

__Validator__

[HTTP-Validator](https://validator.w3.org/nu/)
- Index.html <br>
![Index](documentation/media/passed.PNG)
- Contact.html <br>
![contact](documentation/media/passed.PNG)
- About.html <br>
![about](documentation/media/passed.PNG)
- style.css <br>
![style](documentation/media/passed-css.PNG)

__Manual Testing__
- The testing was done on all of the following links and they all passed:

__Navigation bar:__
- The logo picture links to the home page
- The menu links to all of the three pages of the site: Home, Contact and About Us
- The underline of the three pages on the menu works correctly when hovered over
- The navigation menu is responsive on all devices and moves under the Pawesome logo when the website is opened on a lower screen size device.

__Footer:__
- The social media links lead to the appropriate social media accounts
- The footer informational text is responsive and stays the same when the website is viewed from a lower size screen.

__Hero image:__
- The hero image is responsive and scales correctly on all screen sizes and devices.

__Contact:__
- The Contact section correctly links to a contact form that users can fill out and doesn’t allow the user to submit the form if the 3 mandatory fields are not filled in (Name, E-mail address and Select a Package). The last field is optional.
- The map container works correctly and shows the location of Pawesome.
- When viewed from a lower screen size the containers are responsive and have a tower layout.

__About Us:__
- The About us section link works correctly.
- The video at the bottom automatically plays when the users are in this section with the ability to pause it at any time.
- Tested and scales properly on all screen sizes and devices

__Bugs__
- Video does not load in Firefox Web-browser

__Browser Compatibility__

- Webpage is compatibal with Opera, Chrome, Edge and Firefox(though the video element does not work in Firefox)


### DEPLOYMENT

__The site was deployed to GitHub pages. The steps to deploy are as follows:__
- In the GitHub repository, navigate to the Settings tab and select the pages in the bottom left. 
- From the source section drop-down menu, select the Master Branch.
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
- Updates or changes to the master branch will take affect on the website

The live link can be found here - [Pawesome Grooming](https://oile995.github.io/Project1/about-us.html)


### CITATIONS

__Content__
- Content and layout was loosely based on Thrive Juices and Smoothies Website and the Love Running Project.

__Code__
- Base template repository take from: [Code Institute Gitpod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) 
- Code on how to do the Hover overlay information on why Pawesome based on code from : [CSS Image Overlay Fade](https://www.w3schools.com/howto/howto_css_image_overlay.asp)
- Code on how to do a floating containers for form and map based on code from : [Thrive Juices and Smoothies Website](https://elainebroche-dev.github.io/ms1-thrive/contact.html) and [Code Institute Love running Ethos section](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/12ba169db7b34b82b137edd825af6a02/)
- Code on how to do and style hero image section based on example code on : [Code Institute Love running Hero Image](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/6fd29d155c3b42248ff57bae32978a4b/)
- Code on how to do and style header section based loosely on example code on : [Code Institute Love running Header](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/637be1a2e3b84b25aa33f3ab4d98603c/?child=last)
- Code on how to do implement google IFrame take from: [Code Institute HTML IFrame coders coffee-Iframe](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+HE101+2020/courseware/fcc67a894619420399970ae84fc4802f/13db720675f94dbca6b0fe79467628ca/)
- Code on how to implement and make footer responsive based on code from : [W3C Fixed Footer](https://www.w3schools.com/howto/howto_css_fixed_footer.asp)
- Code on how to implement and style form base on code from: [W3C CSS forms](https://www.w3schools.com/css/css_form.asp)
- Code on how to implement video base on code from: [W3C HTML video](https://www.w3schools.com/html/html5_video.asp) and [Code Institute HTML Media Video Challenge](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+HE101+2020/courseware/fcc67a894619420399970ae84fc4802f/9ef7d9aa0ce94faca103bb92b1003e45/)
- Code on how to do media queries and known presets based on code from: [Known sizing by gokulkrishh](https://gist.github.com/gokulkrishh/242e68d1ee94ad05f488) and [Code Institute Love running Responsive Elements](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/d48e6af85eb84191bebd57ece8b6fb73/)
- Code on how to make responsive Google map taken from: [5 ways to add responsive maps](https://blog.duda.co/responsive-google-maps-for-your-website)

__Media:__<br>

- Fonts taken from [Google fonts](https://fonts.google.com/specimen/Fjalla+One)

- Home page, package pictures below with their source hyperlinks:<br>
[dog-grooming.jpg](https://pawfectspa.com/wp-content/uploads/2019/11/dog-grooming-time.jpg)    
[](dog-groom)
[dog-spa taken.jpg](https://media.istockphoto.com/id/543219820/sv/foto/dog-spa-wellness.jpg?s=612x612&w=0&k=20&c=DhAcx66H__roPyjbQpc3hrIKXhyffJT59C-iZaYwuck=)
[dog-wash.jpg](https://www.thespruce.com/thmb/raXAhH2GGYPPA8eYHSF_pTf8w70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/DogWashingStation-22a54f8fddbb4f3d934971845805bf71.jpg)<br>

- Video taken of our family-dog from grooming-company Facebook page:<br>
[dog-groomed.mp4](https://fb.watch/jIvPg90Mk_/)

The following pictures and logos where all made and taken from Canva.com:<br>
- Hero-easter.png
- about-us-white.png
- cruelty-free.png
- gentle.png 
- wellbeing.png 
- Pawesome_logo.png

__Address and google maps link__ <br>
Taken from a real pet grooming store (no affiliation to this page)
- https://goo.gl/maps/3X6ugkPhNKzSQgN9A


### FUTURE-FEATURES
- In the future the aim is to implement some extra sections in the navigation bar, like a gallery with before and after pictures of our grooming sessions.
- Keeping the website up to date including seasonal discounts and offers.
- Creating a PDF which users can download and get even more information about the grooming packages and the price list of those.
- Add more packages and create a direct link to pre-filled out form.
- Calendar for booking an appointment.

### KNOWN-BUGS

- Text-area in the form on the Contact page starts with several spaces and the placeholder does not show up. After a lot of troubleshooting this bug remains.
- Footer Twitter link slightly off-center, and after re-writing and troubleshooting this issue the bug remains.
- Video does not play in Firefox web-browser









































Links to CITATIONS

https://css-tricks.com/adding-stroke-to-web-text/
eventlistener call function and passing argument on click
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/css/css_grid.asp
https://css-tricks.com/adding-stroke-to-web-text/
https://favicon.io/favicon-converter/
images:
https://i.pinimg.com/originals/dc/a6/b0/dca6b05cba57d1a025b80f07f454611a.png
https://assets2.ignimgs.com/2016/07/18/final-fantasy-xv-button-2016jpg-19b146.jpg
https://www.gannett-cdn.com/presto/2019/03/27/PREN/f6a59846-6212-432b-91b4-43aed1ab3e64-The_Legend_of_Heroes_Trails_of_Cold_Steel_Key_Art_Cropped.jpg
https://m.media-amazon.com/images/I/71x0nZOPKbS.jpg
https://assets.funnygames.se/1/4881/57940/672x448/space-shooter.webp
https://static.wikia.nocookie.net/fireemblem/images/2/2a/Fire_emblem_noken.jpg/revision/latest?cb=20060112211948
https://static.posters.cz/image/750/poster/pokemon-eevee-i32673.jpg
https://oyster.ignimgs.com/mediawiki/apis.ign.com/rainbow-six/1/17/R6S_Valk1.jpg
https://assets-prd.ignimgs.com/2022/01/21/need-for-speed-underground-2-button-crop-1642797115202.jpg
https://assets1.ignimgs.com/2019/09/04/super-mario-world---button-fin-1567640652381.jpg
https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg
https://static-cdn.jtvnw.net/ttv-boxart/65997_IGDB-285x380.jpg
https://imageio.forbes.com/blogs-images/davidthier/files/2019/09/mario-1200x797.jpg?format=jpg&width=960
https://www.esportstales.com/team-fortress
https://marvskun.artstation.com/projects/lV4KqY
https://scienceline.org/2020/01/tetris/
https://www.ign.com/articles/2018/12/06/super-smash-bros-ultimate-review
https://www.npr.org/2023/01/26/1150931836/dead-space-review
https://insider-gaming.com/resident-evil-4-remake-achievements/
https://gamingtrend.com/feature/reviews/massive-improvement-tom-clancys-the-division-2-review/
https://rust.facepunch.com/news/the-big-qol-update
https://hitmarker.net/news/metal-gear-solid-3-remake-and-new-castlevania-rumored-to-be-revealed-at-e3-1978450
https://www.gameinformer.com/b/news/archive/2018/04/14/see-how-insomniac-made-spyro-2-run-on-the-original-playstation-in-this-video.aspx
https://en.wikipedia.org/wiki/Electronic_Arts
https://www.nintendo.co.uk/Games/Nintendo-DS/Fire-Emblem-Shadow-Dragon-270825.html
https://www.pcgamer.com/minecraft-now-has-one-unified-launcher-on-pc/
https://www.callofduty.com/modernwarfare2
https://www.nintendolife.com/news/2022/08/watch-how-to-get-good-at-collecting-retro-video-games-without-breaking-the-bank
https://soundcloud.com/solunary/megalovania-sol-ver
https://www.playstation.com/sv-se/games/the-sims-4/
https://www.xbox.com/sv-SE/games/store/metal-gear-solid-v-the-definitive-experience/bw050bmb7fd7
https://www.svampriket.se/2016/03/mr-gimmick/
https://www.skywardfm.com/post/zero-profit-margins-the-high-praise-and-low-sales-of-ace-combat-zero
https://www.nintendo.co.uk/Games/Wii/Monster-Hunter-Tri-282090.html
https://www.gamingbible.com/news/call-of-duty-zombies-coming-back-huge-way-374859-20230113
https://eu.shop.battle.net/en-us/product/diablo-immortal
https://techraptor.net/tabletop/guides/magic-gathering-guide
https://www.xbox.com/en-US/games/fallout-76
https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?l=swedish
https://www.playstation.com/en-us/games/minecraft/


Bugs:

ReferenceError: Cannot access 'questionsMedium' before initialization 
fix= questionElement syntax error document.get was misspelt..

answer button background color cant be reset
fix= when calling element by Id, the value put was not registrating as string and the color i was trying to set did not exist (light-gray) when it should have been lightgray.

select answer gets called twice second time around
fix= moved out addlistEvent click reader outside of all functions and only changed innerHTML for each button.


