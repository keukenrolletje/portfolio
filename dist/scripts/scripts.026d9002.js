"use strict";angular.module("publicApp",["ngAnimate","ngRoute","ngAria","ngSanitize","ui.bootstrap","appAnimations"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",title:"Joke Gysen: Front-end developer"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about",title:"About Joke Gysen | Front-end developer"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"workCtrl",title:"Portfolio Joke Gysen | Front-end developer"}).when("/portfolio/:id",{templateUrl:"views/workdetail.html",controller:"workdetailCtrl",title:"| Joke Gysen | Front-end developer"}).when("/contact",{templateUrl:"views/contact.html",controller:"contactCtrl",title:"Contact Joke Gysen | Front-end developer"})}]).run(["$location","$rootScope","$routeParams",function(a,b,c){b.$on("$routeChangeSuccess",function(a,d){"workdetailCtrl"===d.$$route.controller?b.title=c.id+" "+d.$$route.title:d.$$route&&(b.title=d.$$route.title)})}]).directive("randomnumber",function(){return{restrict:"A",link:function(a){var b=angular.element(".menu-btn");b.bind("click",function(){a.random=[];for(var b=0;7>b;b++){var c=.6*Math.random()+.1;a.random.push(c)}})}}}).directive("iestyles",function(){return{restrict:"A",link:function(){navigator.sayswho=function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return c&&null!==(a=b.match(/version\/([\.\d]+)/i))&&(c[2]=a[1]),c=c[2]}();var a=window.navigator.userAgent;a.indexOf("Trident")>0?angular.element("body").addClass("ie"):/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&navigator.sayswho<"7.9.9"&&angular.element("body").addClass("saf")}}}).directive("outlineclick",["$document",function(a){return function(){a.on("click",function(){angular.element("body").append("<style>:focus{outline:none;}</style>")})}}]).directive("outlinepress",["$document",function(a){return function(){a.on("keypress keydown",function(){angular.element("body").append("<style>:focus{outline:2px solid #56b4d3;} a:focus .description-card, a:active .description-card{outline:2px solid #56b4d3;}  a:focus figure, a:focus .see-more{outline-offset: 10px; border:2px solid #56b4d3;} </style>")})}}]);var App=angular.module("publicApp");App.controller("MainCtrl",["$scope","$http",function(a,b){b.get("portfolio/work.json").then(function(b){a.grid=b.data,a.grid=b.data.splice(0,3)})}]),angular.module("publicApp").controller("AboutCtrl",function(){});var App=angular.module("publicApp");App.controller("workCtrl",["$rootScope","$scope","$routeParams","$http",function(a,b,c,d){b.tags=[{name:"all",tag:""},{name:"work",tag:"work"},{name:"experiments",tag:"experiment"}],d.get("portfolio/work.json").then(function(a){b.works=a.data}),b.filters={},b.selectedIndex=0,b.itemClicked=function(a){b.selectedIndex=a},"experiment"===a.exp?(b.exp=a.exp,b.selectedIndex=2):b.exp="",b.isdef=function(a){return"experiment"===a.tag}}]).directive("reset",["$document",function(a){return{restrict:"A",link:function(b){a.on("click",function(){b.exp="",b.$apply()})}}}]).directive("scrollLoad",function(){return{restrict:"A",link:function(a,b,c){$(b).visible(a.$eval(c.scrollLoad))}}}).directive("scroll",["$window",function(a){return function(){angular.element(a).bind("scroll",function(){var a=angular.element(".module");angular.forEach(a,function(a){var b=angular.element(a);b.visible(!0)&&(b.hasClass("work-left")&&!b.hasClass("already-visible")&&b.addClass("come-in-left"),b.hasClass("work-right")&&!b.hasClass("already-visible")&&b.addClass("come-in-right"))})})}}]);var App=angular.module("publicApp");App.controller("workdetailCtrl",["$rootScope","$scope","$routeParams","$http","$rootElement",function(a,b,c,d,e){d.get("portfolio/"+c.id+".json").then(function(c){b.work=c.data,a.exp=b.work.tag})}]).directive("html",[function(){return{restrict:"A",link:function(a,b,c){b.html(c.html)}}}]),angular.module("publicApp").controller("contactCtrl",["$scope","$routeParams","$http",function(a,b,c){a.formData={},a.submission=!1;var d=function(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+"="+a[c]+"&");return b.slice(0,b.length-1)};a.submitForm=function(){c({method:"POST",url:"scripts/process.php",data:d(a.formData),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(b){b.success?(a.submissionMessage=b.messageSuccess,a.formData={},a.submission=!0):(a.errorName=b.errors.name,a.errorEmail=b.errors.email,a.errorTextarea=b.errors.message,a.submissionMessage=b.messageError,a.submission=!0)})}}]);var App=angular.module("publicApp");App.controller("quotesCtrl",["$scope","$http",function(a,b){b.get("portfolio/quotes.json").then(function(b){var c=b.data;a.quote=c[Math.floor(Math.random()*c.length)]})}]);var appAnimations=angular.module("appAnimations",["ngAnimate"]);appAnimations.animation(".menu-btn",function(){var a=function(a,b,c){return"menu-open"===b?(a.css({position:"absolute",top:0,left:0,display:"block"}),jQuery(a).animate({top:500},c),function(b){b&&a.stop()}):void 0},b=function(a,b,c){return"active"===b?(a.css({position:"absolute",left:0,top:0}),jQuery(a).animate({top:-500},c),function(b){b&&a.stop()}):void 0};return{addClass:a,removeClass:b}}),angular.module("publicApp").run(["$templateCache",function(a){a.put("views/about.html",'<main class="main" id="main"> <section ng-controller="AboutCtrl" class="about top-about container-fluid"> <img src="../images/joke3.jpg" class="img-1" alt="Joke Gysen profile image"> <div class="description"> <div class="inner"> <p class="highlight large">Hi,</p> <p>Hello there, my name is Joke Gysen, I’m a self-taught <span class="highlight">front end developer</span>, located in Brussels. I have a passion for the web, sass, svg, animation and responsive design. I’m currently looking for a fulltime job. </p> <p>I love to build <span class="highlight">responsive websites</span> with the latest web technologies. I\'m an eager-to-learn person and love to improve myself and expand my skill set. I’m also co-founder of <span class="highlight"><a href="http://be.vggie.com/en">Vggie</a></span>. I enjoy drinking coffee, reading, watching movies and series. I’m also a vegetarian and a loving mother of a 1 year old girl. I’m not a good talker. </p> <div class="icons"> <a href="https://twitter.com/jokegysen"><i class="fa fa-twitter"></i><span class="screen-reader-text">Follow me on Twitter</span></a> <a href="https://www.pinterest.com/keukenrolletje/"><i class="fa fa-pinterest"></i><span class="screen-reader-text">Follow me on Pinterest</span></a> <a href="https://www.facebook.com/joke.gysen"><i class="fa fa-facebook"></i><span class="screen-reader-text">Follow me on Facebook</span></a> <a href="https://be.linkedin.com/in/jokegysen"><i class="fa fa-linkedin"></i><span class="screen-reader-text">Follow me on Linkedin</span></a> <a href="http://codepen.io/keukenrolletje/"><i class="fa fa-codepen"></i><span class="screen-reader-text">Follow me on Codepen</span></a> </div> </div> </div> </section> <div class="job-position" ng-class="{\'hidden\': open, \'badge badge-job\': !open}"> <p><span>Job</span><br>wanted!</p> </div> <section class="smoky-section about"> <div class="container"> <div class="row"> <div class="col-sm-6 col-xs-12 skills"> <h5>Key skills</h5> <div class="col-sm-4"> <ul> <li>HTML</li> <li>CSS3</li> <li>Sass</li> </ul> </div> <div class="col-sm-8"> <ul> <li>Bootstrap</li> <li>jquery</li> <li>javascript</li> </ul> </div> </div> <div class="col-sm-6 col-xs-12 skills"> <h5>Additional skills</h5> <div class="col-sm-6"> <ul> <li>Photoshop</li> <li>Illustrator</li> <li>AngularJS</li> </ul> </div> <div class="col-sm-6"> <ul> <li>Git</li> <li>PHP - laravel</li> </ul> </div> </div> </div> </div> </section> <div class="white-section about-website"> <section class="container"> <h5>About this website</h5> <p>This site has been designed by me and built with <span class="highlight">AngularJS</span>. The CSS is written in <span class="highlight">Sass</span>. I use <span class="highlight">Grunt.js</span>, a JavaScript task runner to automate repetitive tasks such as Sass compilation.</p> <p></p> </section> </div> </main> <div ng-include="\'views/partials/footer.html\'"></div>'),a.put("views/contact.html",'<header class="smoky-section contact-page"> <h3 class="line-before-after"> <!--Lets build something together--> Go ahead, get in touch! </h3> </header> <main class="main" id="main"> <section class="smoky-section contact-page"> <div class="container contact-container"> <div class="row"> <div class="col-sm-6 col-xs-12"> <p class="info-text">If you\'d like to discuss a project or contract opportunities, please feel free to contact me.</p> <p><i class="fa fa-map-marker info-i"></i> Brussels - Belgium</p> <p><i class="fa fa-envelope info-i"></i> <a href="mailto:jokegysen@gmail.com?Subject=Hello%20again&quot; target=&quot;_top&quot;">jokegysen@gmail.com</a></p> <p><i class="fa fa-phone info-i"></i><a href="tel:+32470302872"><span class="screen-reader-text">Phone number</span> +32 470 302 872</a></p> <div class="icons"> <a href="https://twitter.com/jokegysen"><i class="fa fa-twitter"></i><span class="screen-reader-text">Follow me on Twitter</span></a> <a href="https://www.pinterest.com/keukenrolletje/"><i class="fa fa-pinterest"></i><span class="screen-reader-text">Follow me on Pinterest</span></a> <a href="https://www.facebook.com/joke.gysen"><i class="fa fa-facebook"></i><span class="screen-reader-text">Follow me on Facebook</span></a> <a href="https://be.linkedin.com/in/jokegysen"><i class="fa fa-linkedin"></i><span class="screen-reader-text">Follow me on Linkedin</span></a> </div> </div> <div class="col-sm-6 col-xs-12"> <form ng-submit="submitForm()" ng-controller="contactCtrl" novalidate class="form-horizontal"> <div class="form-group"> <label for="name" class="col-xs-3 control-label">Name</label> <div class="col-xs-9"> <input type="text" name="name" id="name" ng-model="formData.name" ng-class="{\'error\' : errorName}"> </div> </div> <div class="form-group"> <label for="email" class="col-xs-3 control-label">E-mail</label> <div class="col-xs-9"> <input type="email" name="email" id="email" ng-model="formData.email" ng-class="{\'error\' : errorEmail}"> </div> </div> <div class="form-group"> <label for="message" class="col-xs-3 control-label">Message</label> <div class="col-xs-9"> <textarea name="message" id="message" ng-class="{\'error\' : errorTextarea}" ng-model="formData.message" rows="4"></textarea> </div> </div> <div class="ghost-button"> <a href="{{work.website}}">Send!</a> </div> <div ng-class="{\'submissionMessage\' : submission}" ng-bind="submissionMessage"></div> </form> </div> </div> </div> </section> <div class="white-section" ng-controller="quotesCtrl"> <section class="container"> <blockquote> <p>{{::quote.quote}}</p><br> <!--cite handwritten svg? --> <cite ng-if="::quote.author">- {{::quote.author}} -</cite> </blockquote> </section> </div> </main> <div ng-include="\'views/partials/footer.html\'"></div>'),a.put("views/main.html",'<header ng-controller="MainCtrl" class="main-header"> <h1>Joke Gysen</h1> <h2>Front-end developer</h2> </header> <main class="main" id="main"> <div class="smoky-section"> <section class="container-sm"> <div class="main-heading"> <h3 class="line-large-green">Who I am</h3> </div> <p>Hello there, my name is Joke Gysen, i’m a self-taught front end developer, located in Brussels. I have a passion for the web, sass, svg, animation and responsive design. I’m currently looking for a <span class="highlight">fulltime job</span>. Please take a look at my portfolio and hopefully we can chat!</p> </section> </div> <div class="white-section" ng-controller="MainCtrl"> <section class="container-sm-2"> <div class="main-heading"> <h3 class="line-large-green">Recent work</h3> </div> </section> <div class="main-grid" hovertab> <!-- avoid ng-repeat and ng-if if possible --> <a href="{{::grid[0].website}}"> <figure class="img-1"> <span class="sr-only">{{::grid[0].name}} - {{::grid[0].description}}</span> <img ng-src="{{::grid[0].imgSmall}}" class="grid" alt="Vggie detail page"> <figcaption tabindex="0" role="button" aria-label="Vggie detail page"> <div class="company-heading"> <h4 class="line-large-black">{{::grid[0].name}}</h4> <p>{{::grid[0].description}}</p> </div> </figcaption> </figure> </a> <a href="{{::grid[1].website}}"> <figure class="img-2 figure-small"> <span class="sr-only">{{::grid[1].name}} - {{::grid[1].description}}</span> <img ng-src="{{::grid[1].imgSmall}}" class="grid" alt="Oleaz detail page"> <figcaption tabindex="0" role="button" aria-label="Oleaz detail page"> <div class="company-heading"> <h6 class="line-small-black">{{::grid[1].name}}</h6> <p>{{::grid[1].description}}</p> </div> </figcaption> </figure> </a> <a href="{{::grid[2].website}}"> <figure class="img-3 figure-small"> <span class="sr-only">{{::grid[2].name}} - {{::grid[2].description}}</span> <img ng-src="{{::grid[2].imgSmall}}" class="grid" alt="Startup Basecamp detail page"> <figcaption tabindex="0" role="button" aria-label="Startup Basecamp detail page"> <div class="company-heading"> <h6 class="line-small-black">{{::grid[2].name}}</h6> <p>{{::grid[2].description}}</p> </div> </figcaption> </figure> </a> <a href="#/portfolio"><div class="grid see-more" tabindex="0" role="button"><p>See all projects</p></div></a> </div> </div> <div class="white-section" ng-controller="quotesCtrl"> <section class="container"> <blockquote> <p>{{::quote.quote}}</p><br> <cite ng-if="::quote.author">- {{::quote.author}} -</cite> </blockquote> </section> </div> </main> <div ng-include="\'views/partials/footer.html\'"></div>'),a.put("views/partials/footer.html",'<footer> <div class="container"> <div class="col-sm-2 col-xs-12"> <h5>Joke Gysen</h5> </div> <div class="col-sm-4 col-xs-12 contact-message"> <p>If you\'d like to discuss a project or contract opportunities, please feel free to contact me. </p> </div> <div class="col-sm-3 col-xs-12 col-md-offset-1 contact-footer"> <p> Brussels - Belgium<br> <a href="mailto:jokegysen@gmail.com?Subject=Hello%20again&quot; target=&quot;_top&quot;">jokegysen@gmail.com</a><br> +32 (0)47 302 8172 </p> </div> <div class="col-sm-2 col-xs-12 footer-icons"> <div class="col-xs-12"> <div class="col-xs-3 col-xs-offset-3 col-sm-6 col-sm-offset-0"><a href="https://twitter.com/jokegysen"><i class="fa fa-twitter"></i><span class="screen-reader-text">Follow me on Twitter</span></a></div> <div class="col-xs-6 footer-icons-right"><a href="https://www.pinterest.com/keukenrolletje/"><i class="fa fa-pinterest"></i><span class="screen-reader-text">Follow me on Pinterest</span></a></div> </div> <div class="col-xs-12"> <div class="col-xs-3 col-xs-offset-3 col-sm-6 col-sm-offset-0"><a href="https://www.facebook.com/joke.gysen"><i class="fa fa-facebook"></i><span class="screen-reader-text">Follow me on Facebook</span></a></div> <div class="col-xs-6 footer-icons-right"><a href="https://be.linkedin.com/in/jokegysen"><i class="fa fa-linkedin"></i><span class="screen-reader-text">Follow me on Linkedin</span></a></div> </div> </div> <div class="col-xs-12 copyright">©&nbsp; copyright 2015 Joke Gysen. All rights reserved.</div> </div> </footer>'),a.put("views/partials/navbar.html",'<div class="menu"> <div class="btn-container"> <div class="menu-btn" randomnumber ng-click="open=!open" ng-class="{\'menu-btn-open\': open, \'menu-btn-closed\': !open}" tabindex="0" role="button" aria-label="Menu button"> <div class="burger burger-top"></div> <div class="burger burger-middle"></div> <div class="burger burger-bottom"></div> </div> <div ng-class="{\'menu-open\': open, \'menu-closed\': !open}" class="full-menu"> <div class="full-page"> <div class="bg-part" style="transition-delay: {{random[0]}}s"></div> <div class="bg-part" style="transition-delay: {{random[1]}}s"></div> <div class="bg-part" style="transition-delay: {{random[2]}}s"></div> <div class="bg-part" style="transition-delay: {{random[3]}}s"></div> <div class="bg-part" style="transition-delay: {{random[4]}}s"></div> <div class="bg-part" style="transition-delay: {{random[5]}}s"></div> <div class="bg-part" style="transition-delay: {{random[6]}}s"></div> <div class="bg-part" style="transition-delay: {{random[7]}}s"></div> <ul> <li><a href="#/" ng-class="{\'hidden\': !open}" ng-click="open=!open">Home</a></li> <li><a href="#/about" ng-class="{\'hidden\': !open}" ng-click="open=!open">About</a></li> <li><a href="#/portfolio" ng-class="{\'hidden\': !open}" ng-click="open=!open">Portfolio</a></li> <li><a href="#/contact" ng-class="{\'hidden\': !open}" ng-click="open=!open">Contact</a></li> </ul> </div> </div> </div> </div>'),a.put("views/portfolio.html",'<header class="portfolio"> <h3 class="line-large-green">Recent Work</h3> </header> <main class="main" id="main"> <div reset scrollload scroll ng-controller="workCtrl" class="portfolio"> <div class="work-filter"> <div class="row"> <a class="col-xs-4 tags" ng-repeat="tag in ::tags" tabindex="0" role="button"> <div ng-click="filters.tag = tag.tag; itemClicked($index)" ng-keypress="filters.tag = tag.tag; itemClicked($index)" ng-class="{ \'active\': $index == selectedIndex }"><span></span>{{::tag.name}}</div> </a> </div> </div> <section ng-if="exp ==\'experiment\'" ng-repeat="work in works | filter:isdef" class="tag-animation"> <div class="work module" ng-class="::{\'already-visible\':$first}" ng-class-odd="\'work-left\'" ng-class-even="\'work-right\'"> <img ng-src="{{::work.imageUrl}}" alt="{{::work.name}}"> <a href="#/portfolio/{{::work.id}}"> <div class="description-card"> <div class="description-inner"> <h4>{{::work.name}}</h4> <hr> <p>{{::work.description}}</p> </div> </div> </a> </div> </section> <section ng-if="exp ==\'\'" ng-repeat="work in works | filter:filters" class="tag-animation"> <div class="work module" ng-class="::{\'already-visible\':$first}" ng-class-odd="\'work-left\'" ng-class-even="\'work-right\'"> <img ng-src="{{::work.imageUrl}}" alt="{{::work.name}}"> <a href="#/portfolio/{{::work.id}}"> <div class="description-card"> <div class="description-inner"> <h4>{{::work.name}}</h4> <hr> <p>{{::work.description}}</p> </div> </div> </a> </div> </section> </div> </main> <div ng-include="\'views/partials/footer.html\'"></div>'),a.put("views/workdetail.html",'<header ng-if="work.tag == \'work\'" class="detail-header work-detail" ng-style="::{\'background-image\': \'url(\' + work.header + \')\'}"> <img ng-if="::work.logo" ng-src="{{::work.logo}}" class="logo" alt="{{::work.name}} logo"> <h1 ng-if="::!work.logo" data-text="{{::work.name}}">{{::work.name}}</h1> <h2 ng-if="::work.tagline" data-text="{{::work.tagline}}">{{::work.tagline}}</h2> </header> <main class="main" id="main"> <div ng-controller="workdetailCtrl" class="work-detail"> <div class="embed-nav" style="margin-bottom: -42px" ng-if="work.tag == \'experiment\'" html="{{work.code}}"></div> <section class="smoky-section"> <div class="container-fluid"> <div class="row"> <div class="col-md-12"> <div ng-if="work.tag ==\'work\'" class="column"> <p ng-bind-html="::work.description">{{::work.description}}</p> </div> <div ng-if="work.tag == \'experiment\'" class="no-column"> <p ng-bind-html="::work.description">{{::work.description}}</p> <p class="what-service"><span class="title-service">What:</span> {{::work.services.service}}</p> <div class="col-md-12 website"> <div class="ghost-button"> <a href="{{::work.services.website}}">See on codepen</a> </div> </div> </div> </div> </div> </div> </section> <section ng-if="work.tag ==\'work\'" class="white-section service-container"> <div class="container"> <div class="row"> <div class="col-sm-12 col-xs-12 services"> <div class="service-part"> <h5>Role:</h5> <p>{{::work.services.role}}</p> <hr> </div> <div class="service-part service"> <h5>What:</h5> <p>{{::work.services.service}}</p> <hr> </div> <div ng-if="::work.services.client" class="service-part"> <h5>Client:</h5> <p>{{::work.services.client}}</p> <hr> </div> <div ng-if="::work.services.with" class="service-part"> <h5>With:</h5> <p ng-bind-html="::work.services.with">{{::work.services.with}}</p> <hr> </div> <div class="service-part"> <h5>When:</h5> <p>{{::work.services.when}}</p> </div> </div> <div class="col-md-12 website"> <div class="ghost-button-white"> <a href="{{::work.services.website}}" target="_self">Visit the website</a> </div> </div> </div> </div> </section> <section ng-if="work.tag ==\'work\'" class="container-fluid"> <img ng-src="{{::img}}" ng-repeat="img in ::work.images" alt="{{::work.alt}}"> </section> <div ng-if="work.tag ==\'work\'" class="white-section" ng-controller="quotesCtrl"> <section class="container"> <blockquote> <p>{{::quote.quote}}</p><br> <!--cite handwritten svg? --> <cite ng-if="::quote.author">- {{::quote.author}} -</cite> </blockquote> </section> </div> </div> </main> <div ng-include="\'views/partials/footer.html\'"></div>')}]);