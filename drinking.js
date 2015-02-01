// All website content goes into a json object

var siteContent = [
  {
    "topic": "My Cat",
    "navigation": "home",
    "displayText1": "Charlie is my cat and sometimes we drink together. Sometimes, we don't. This is a life of a cat and his human (and a few drinks).",
  },
  {
    "topic": "Drinking Title",
    "navigation": "drinking",
    "displayText1": "This is where I talk about drinking, not only alcohol",
    "displayText2": "Surprised by the lack of alcohol?",
    "picLink": "startPage",
  },
    {
    "topic": "Wine? Why yes",
    "navigation": "drinking",
    "displayText1": "Wine incoporates history, geography, weather, tradition, and brute luck. ",
    "displayText2": "Are you feeling lucky?",
    "picLink": "startPage",
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
    "navigation": "nondrinking",
    "displayText1": "Mint tea is amazing for me.",
    "displayText2": "That's what I like to drink",
    "picLink": "startPage",
  },
  {
    "topic": "Lists of Importance",
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
    this.topic = config.topic|| "Charlie";
    this.navigation = config.navigation || "listsofimportance"
    this.displayText1 = config.displayText1 || " This is a cat for you.";
    this.displayText2 = config.displayText2 || " This is a year for me.  ";
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

$('#navigation').append("<ul id='navItems'></ul>");

// This created the navigation bar li items and takes the duplicates out
var counter =[];

function displayNavigation(contentList){
  var x = [];
  for (var i = 0; i < contentList.items.length; i++) {
    var y = x.indexOf(contentList.items[i].navigation);
    if (y < 0){ 
      x.push(contentList.items[i].navigation);
      var container = $('<li ' +'id = '+ contentList.items[i].navigation+'>' + contentList.items[i].navigation + '</a>' + '</li>');
      counter.push(container);
        };
      };
    }; 

// Calls the displayNavigation function and appends the results to the id navItems to make a list
displayNavigation(contentList);
$('#navItems').append(counter);


// Below creates a div with a class for each content topic


function displayContent1(contentList, item){ 
  	for (var i = 0; i < contentList.items.length; i++) {
      if(contentList.items[i].navigation.indexOf(item)>-1){
  		var $container = $('<div class = ' + '"'+ contentList.items[i].navigation + '"'+ '>' + contentList.items[i].topic + '</div>');
      	var $T1display = $('<p>' + contentList.items[i].displayText1  +'</p>');
      	$container.append($T1display);
      	$content.append($container);
    } 
  }

  };

var navCounter = 0;


function navigationDisplayContent(thing){
  $('#' + thing).click(function (event) {
    navCounter = navCounter + 1;
    if (navCounter == 1){
      $('body').addClass('navClick');
      displayContent1(contentList, thing); 
    } else {
      $('.' + thing).remove();
      navCounter = 0
    }
})
}

var navClass = [];

function createNavClass(contentList){
  for (var i = 0; i < contentList.items.length; i++){
    navClass.push(contentList.items[i].navigation);
  }
}  

createNavClass(contentList);  
for(i in navClass){
    navigationDisplayContent(navClass[i]);
}

   


// This function will make the navigation display the content by 1. adding a class to the body and 2. displaying content only related to nav title 3. removing item once clicked again

// console.log(contentList);

// function navClickaction(ahref){
//   $(ahref).click(function(){
//       $('body').addClass(navClick);
//       for (x in contentList){
//         var t = contentList[x];
//         if (t.indexOf(ahref) === -1) {
//             possibleAnswerslist.push(t);
// }

//   }
  
// }

// $(".charlie").one("click",function(){
//   for (var i = 0; i < contentList.items.length; i++) {
//   $('body').addClass(navClick);
// 	$(".container").toggleClass("here");
// 	$(".here").append($("<p>Charlie is the most amazing cat in the universe.</p>"));
// });

// // $(".charlie").click(function(){
// // 	console.log("Dog2");
// // 	$(".container").toggleClass("here");
// // 	displayText();
// // });
// // console.log("Cheese");

// $('.drinking').one("click",(function (event) {
//   event.preventDefault();
//   displayText(".drinking");
//   $(".here").append($("<p class='textDrinking'>Charlie drinks out of a martini glass, but he doesn't drink martinis.</p>"));
// }));
 
// // $('.drinking').click(function (event) {
// //   event.preventDefault();
// //   displayText();
// //   });

// $('.non-drinking').one("click",(function (event) {
//   event.preventDefault();
//   displayText();
//   $(".here").append($("<p class='textNon-Drinking'>Drinking can be fun any way you measure it out.  Tea can soothe, allowing conversation to lenger without obscuring the quality.</p>"));
// }));
 
// // $('.non-drinking').click(function (event) {
// //   event.preventDefault();
// //   displayText();
// //   });
// // $('.home').click(function (event) {
// //   event.preventDefault();
// //   console.log('Not going there!');
// // });