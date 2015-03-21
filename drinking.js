// All website content goes into a json object

var siteContent = [
  {
    "navigation": "home", 
  },
  {
    "topic": "My Cat",
    "navigation": "charlie",
    "displayText1": "Charlie is my cat and sometimes we drink together. Sometimes, we don't. This is a life of a cat and his human (and a few drinks).",
  },
  {
    "topic": "Drinking",
    "navigation": "drinking",
    "displayText1": "This is where I talk about drinking, not only alcohol",
    "displayText2": "Surprised by the lack of alcohol?",
    "picLink": "startPage",
  },
    {
    "topic": "Sugary Drinks",
    "navigation": "nondrinking",
    "displayText1": "I thought I was an adult.",
    "displayText2": "Until I decided to not drink booze and drank a bottle of soda (made with cane sugar!) instead -  there's a reason Mom said no.",
    "picLink": " ",
  },
  {
    "topic": "Code?",
    "navigation": "nondrinking",
    "displayText1": "Wine incoporates history, geography, weather, tradition, and brute luck. ",
    "displayText2": "Are you feeling lucky?",
    "picLink": "startPage",
  },
  {
    "topic": "Tea",
    "navigation": "drinking",
    "displayText1": "Don't forget, it's not just for the English",
    "displayText2": "Some conversations should not involve alcohol.",
    "picLink": "startPage",
  },
  {
    "navigation": "nondrinking",
    "displayText1": "Sleepy Time",
    "displayText2": "donorType",
    "picLink": "startPage",
  },
   {
    "topic": "Mint Tea",
    "navigation": "nondrinking",
    "displayText1": "Mint tea is amazing for me.",
    "displayText2": "That's what I like to drink",
    "picLink": "startPage",
  },
  {
    "topic": "listsofimportance",
    "navigation": "listsofimportance",
    "displayText1": "This is where I have a list.",
    "displayText2": "The list is important. ",
    "picLink": "img src='images/thursday.JPG'",
  },
  {
    "topic": "To Do",
    "navigation": "listsofimportance",
    "displayText1": "1. Stop procractinating. 2. Wait",
    "displayText2": "Really, just stop. ",
    "picLink": "img src='images/thursday.JPG'",
  },
  {
    "topic": "Charlie",
    "navigation": "charlie",
    "displayText1": "This is where I talk about Charlie.",
    "displayText2": "Charlie is a cat and more specifically, he's my cat.",
    "picLink": "startPage",
  },
  {
    "topic": "Adopting a Non-Kitten",
    "navigation": "charlie",
    "displayText1": "I didn't want a kitten.",
    "displayText2": "When I went to get a cat, I wanted just that, a cat.  All kittens are cute and playful, but they don't always stay that way.  Kitten, like babies, can grow up to be little terrors.",
    "picLink": "startPage",
  },
  {
    "topic": "Beer",
    "navigation": "drinking",
    "displayText1": "Beer is normally good.",
  },
 ];

function contentFormat(config){
    config = config || {};
    this.topic = config.topic|| "Charlie Bear";
    this.navigation = config.navigation || "";
    this.displayText1 = config.displayText1 || "";
    this.displayText2 = config.displayText2 || "";
    this.pic  = config.picLink || " ";
}
  
function contentLib(siteContent) {
  this.items = [];
  for (var i = 0; i < siteContent.length; i++) {
    this.items.push(new contentFormat(siteContent[i]));
  }
};

var contentList = new contentLib(siteContent);


// Pull DOM items into variables
var $content = $('#content');
var $topheader = $('#topheader');

$('.navigation').append("<ul id='navItems'></ul>");

// This created the navigation bar li items and takes the duplicates out
var counter =[];

function displayNavigation(contentList){
  var x = [];
  for (var i = 0; i < contentList.items.length; i++) {
    var y = x.indexOf(contentList.items[i].navigation);
    if (y < 0){ 
      x.push(contentList.items[i].navigation);
      var container = $('<li ' +'id = '+ contentList.items[i].navigation+'>' + contentList.items[i].navigation  + '</li>');
      counter.push(container);
        };
      };
    }; 

// Calls the displayNavigation function and appends the results to the id navItems to make a list
displayNavigation(contentList);
$('#navItems').append(counter);


// Below creates a div with a class for each content topic

function displayContentTitle(contentList, item){ 
    $( ".navTitle" ).remove();
    $content.append('<div class = navTitle >' + '<p>' + item + '</p>');
  	for (var i = 0; i < contentList.items.length; i++) {
      if(contentList.items[i].navigation.indexOf(item)>-1 && contentList.items[i].navigation != "home"){
  		var $container = $('<div class = ' + '"'+ contentList.items[i].navigation + '"'+ '>' + '<p id=' + "headerContent" +'>' + contentList.items[i].topic + '</p>'+'<p>'+ contentList.items[i].displayText1+'</p>' + '<p>'+ contentList.items[i].displayText2 + '</p>'+'</div>');
        $content.append($container);
    } 
  }
};



var navCounter = 0;
var existingContent;

// Displays navigation item

function navigationDisplayContent(thing){
  $('#' + thing).click(function (event) {
  navCounter = navCounter + 1;
  if (thing == "home") {
      $('body').removeClass('navClick');
      navCounter = 0
      $('.' + existingContent).remove();
      // Checks if content is already displayed and displays content
  }else if (navCounter === 1 && thing !== existingContent){
     
      for (i in navClass){
        $('.'+ navClass[i]).remove();
        existingContent = thing};
      $('body').addClass('navClick');
      navCounter = 0
      displayContentTitle(contentList, thing); 
  } else if (navCounter=== 2){ 
      $('.' + thing).remove();
      navCounter = 0
    }
})
}

// create navClass makes a list of the navigation items without and duplcates and pushed the variables into the array navClass
var navClass = [];

function createNavClass(contentList){
  for (var i = 0; i < contentList.items.length; i++){
    if(navClass.indexOf(contentList.items[i].navigation) === -1){
    navClass.push(contentList.items[i].navigation);
  }
  }
}  

createNavClass(contentList); 

// calls the function to display the content when the navigation item is clicked for all navClass
for(i in navClass){
    navigationDisplayContent(navClass[i]);
}




   