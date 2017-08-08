# Trading-Manager
Simple Responsive Desktop Application written in Github's Electron/HTML/CSS/JavaScript and a in-memory database NeDb (instance of mongoDb)

#####  *Idea*
> I was approached by one of the crypocurrency trader to build them a app which,
   - Works as a windows application
   - Works without internet/not on any server
   - Has in-memory persistent database storage 
   - Has good user interface
   - Functionally able to do CRUD operations with an autocomplete and ratings feature
> I took this opportunity to dig into [Github's Electron](https://electron.atom.io/) which I always wanted to experience on a fancy 
  occassion as this. 
  
 #####  *Preview*
 ![](https://gifyu.com/images/Untitledf2556.gif)

   
#####  *Challenges*
> At first,everything seemed very exciting.I was overwheelmed by the idea of using HTML/CSS to write a windows desktop application.Setting
up the project was easy as well.However lack of proper documentation and outdated tutorials on the web of the API made process much more
complicated.Most of the methods I found in those tutorials had already changed in the version I was using hence I had to do all the research
from scratch.I hope there isn't massive changes in the Electron's API compared to the version used in this app.I deployed the application
at my client's side using React.js and other advanced tools but to keep things simple I've used Jquery for the demo.


Stack Contains
--------------
[Electron v1.4.13](https://electron.atom.io/)

[NeDb v1.8.0](https://github.com/louischatriot/nedb)

[Nodejs v6.9.2](https://nodejs.org/en/)

[Materialize CSS v0.1](http://materializecss.com/)

[RateYo Plugin](http://rateyo.fundoocode.ninja/)

Configuration
--------------
 - Install
 
   Clone the repository and run
   
   `npm install`
   
 - Star the application
 
   `npm start`
   
- To run the build (.exe)/Zip for distribution

  `electron-packager <location of project> <name of project> <platform> <architecture> <electron version> <optional options>`
  *(electron-packager is downloaded as a dev-dependency)*
  
   Sample Build :
   
   `electron-packager ~/DesktopApp Trader Manager --all --version=1.4.13 --out=~/Desktop --overwrite`
   *(Read more about the packager here [electron-packager](https://github.com/electron-userland/electron-packager))*
   
General Instructions
--------------------
 - On running
   
   

