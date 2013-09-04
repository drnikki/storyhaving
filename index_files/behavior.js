/* = BEHAVIOR.JS
---------------------------------------------------
v2.0 | July 19 2013
---------------------------------------------------

CONTENTS

1. Plugins
2. Functions
3. Start

*/

// -----------------------------------------------------------
// PLUGINS & RESOURCES
// -----------------------------------------------------------

// create a console object for browsers which don't support console.log
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Javascript onMediaQuery
// https://github.com/JoshBarr/js-media-queries
var MQ=function(b){b=b||{};b.init=function(a){this.callbacks=[];this.new_context=this.context="";if("undefined"!==typeof a)for(i=0;i<a.length;i++)this.addQuery(a[i]);this.addEvent(window,"resize",b.listenForChange,b);this.listenForChange()};b.listenForChange=function(){document.documentElement.currentStyle&&(query_string=document.documentElement.currentStyle.fontFamily);window.getComputedStyle&&(query_string=window.getComputedStyle(document.documentElement).getPropertyValue("font-family")); null!=query_string&&(query_string=query_string.replace(/['",]/g,""),query_string!==this.context&&(this.new_context=query_string,this.triggerCallbacks(this.new_context)),this.context=this.new_context)};b.addQuery=function(a){if(!(null==a||void 0==a))return this.callbacks.push(a),"string"==typeof a.context&&(a.context=[a.context]),"boolean"!==typeof a.call_for_each_context&&(a.call_for_each_context=!0),""!=this.context&&this._inArray(this.context,a.context)&&a.callback(),this.callbacks[this.callbacks.length- 1]};b.removeQuery=function(a){if(!(null==a||void 0==a))for(var c=-1;-1<(c=this.callbacks.indexOf(a));)this.callbacks.splice(c,1)};b.triggerCallbacks=function(a){var c,b;for(c=0;c<this.callbacks.length;c++)!1==this.callbacks[c].call_for_each_context&&this._inArray(this.context,this.callbacks[c].context)||(b=this.callbacks[c].callback,this._inArray(a,this.callbacks[c].context)&&void 0!==b&&b())};b.addEvent=function(a,c,b,d){null==a||void 0==a||(a.addEventListener?a.addEventListener(c,function(){b.call(d)}, !1):a.attachEven?a.attachEvent("on"+c,function(){b.call(d)}):a["on"+c]=function(){b.call(d)})};b._inArray=function(a,b){for(var e=b.length,d=0;d<e;d++)if(b[d]==a)return!0;return!1};return b}(MQ||{});

/*!
 * imagesLoaded PACKAGED v3.0.3
 * JavaScript is all like "You images are done yet or what?"
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}var n=e.prototype;n.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},n.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},n.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},n.on=n.addListener,n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=n.addOnceListener,n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},n.off=n.removeListener,n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?s.call(this,i,r):o.call(this,i,r));return this},n.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},n.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],s=n.listener.apply(this,t||[]),(s===this._getOnceReturnValue()||n.once===!0)&&this.removeListener(e,o[r][i].listener);return this},n.trigger=n.emitEvent,n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===h.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,o){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?o=n:t(this.options,n),o&&this.on("always",o),this.getImages(),s&&(this.jqDeferred=new s.Deferred);var a=this;setTimeout(function(){a.check()})}function h(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,s=i.length;s>r;r++){var o=i[r];this.addImage(o)}}},r.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&o.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var s=this.images[r];s.on("confirm",e),s.check()}},r.prototype.progress=function(e){var t=this;this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(e,this),this.emit("always",this),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s&&(s.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(s(this))});var c={};return h.prototype=new e,h.prototype.check=function(){var e=c[this.img.src];if(e)return this.useCached(e),void 0;if(c[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},h.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},h.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},h.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var s=e.jQuery,o=e.console,a=o!==void 0,h=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter","eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);

/** Localscroll
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/** Localscroll
 * Copyright (c) 2007-2010 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.2.8b
 */
;(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window,reset:true};h.hash=function(a){if(location.hash){a=$.extend({},h.defaults,a);a.hash=false;if(a.reset){var d=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=d}scroll(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},h.defaults,b);return b.lazy?this.bind(b.event,function(e){var a=$([e.target,e.target.parentNode]).filter(filter)[0];if(a)scroll(e,a,b)}):this.find('a,area').filter(filter).bind(b.event,function(e){scroll(e,this,b)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==g&&(!b.filter||$(this).is(b.filter))}};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=elem.id==c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])}})(jQuery);


// -----------------------------------------------------------
// FUNCTIONS
// -----------------------------------------------------------

// slider
var runSlider, slideShow, slideCount,
	currentSlide = 0,
	docWidth = $(document).width(),
	slide = $('#companies .slide'),
	slidecontainer = $('#companies'),
	slideCount = slide.length,
	sliderWidth = slidecontainer.width();
	

function sliderCurrent(){
    $('#sliderpages li').removeClass('current').each(function(index){
    	if(index === currentSlide){
	    	$(this).addClass('current');
    	}
    });
}

function sliderNext() {
    if(currentSlide != slideCount-1) {
    	currentSlide = currentSlide+1;
    } else {
    	currentSlide = 0;
    }
    showSlide(currentSlide);
    sliderCurrent();
}

function sliderPrev() {
    if(currentSlide != 0) {
    	currentSlide = currentSlide-1;
    } else {
    	currentSlide = slideCount-1;
    }
    showSlide(currentSlide);
    sliderCurrent();
}

function sliderPage(page) {
    currentSlide = page;
    showSlide(currentSlide);
    sliderCurrent();
}

// insert pagination
function sliderNav(target) {
	
	var slideCount = slide.length;
	
	if (slideCount > 1) {

		sliderNav = '<div id="slidernav"><a href="#" class="sliderprev"><span class="accessibility">prev</span></a><a href="#" class="slidernext"><span class="accessibility">next</span></a></div>';
		
		sliderPageContainer = '<nav id="sliderpages"><div class="wrap"><ul></ul></div></nav>';
		
		target = $(target);
		target.append(sliderNav, sliderPageContainer);
	
		slide.each(function(index){
		
			if (index == 0) { 
				firstClass = ' class="current"';
			} else {
				firstClass= '';
			}
			
			title = $(this).find('h2').text();
			
			// update this with the header from each slide
			//pageLink = '<span class="accessibility">'+title+'</span>';
			//'+slide.attr('ID')+'
			
			$('#sliderpages ul').append('<li'+firstClass+'><a href="#" title="'+title+'">'+title+'</a></li> ');
		/*

			if (index == slideCount-1) { 
				$('#sliderpages ul').append('<li class="break">test</li>');
			} else {
			}
*/
			
		});
	
	}
	
}

function expandSlides() {

	slide.each(function(index){
	
		var slide = $(this);
		slide.fadeIn('slow');
	});
	
	
}

// show requested slides
function showSlide(currentSlide) {
    
    // set variables
	var close = $('#close');
    	
	// insert loader
	slidecontainer.append('<div class="loading"></div>').fadeIn();
	var loadingContainer = $('.loading');
			
	slide.each(function(index){
	
		var slide = $(this);
	
		if (index != currentSlide) {
		
			slide.fadeOut('slow');
		
		} else {
		
			slide.fadeIn('slow', function(){
				// remove loading feedback
			  	loadingContainer.fadeOut('fast', function() {
				    // Animation complete.
				   loadingContainer.remove();
				});
			});
			
		}
	
	});
	
    if (close.length){
	    if (currentSlide > 0){
		    close.css('display','block');
	    } else {
		    close.css('display','none');
	    }
    }
    
}

// contact form
var messageDelay =	2000,  // How long to display status messages (in milliseconds),
	msgContainer =	$('#feedback'),
	msgSending = 	'<div id="sendingMessage" class="statusMessage"><p>Sending your message. Please wait...</p></div>',
	msgSuccess = 	'<div id="successMessage" class="statusMessage"><p>Thanks for sending your message! We\'ll get back to you shortly.</p></div>',
	msgFail = 		'<div id="failureMessage" class="statusMessage"><p>Whoops, double check your email address and try again.</p></div>',
	msgIncomplete =	'<div id="incompleteMessage" class="statusMessage"><p>Please complete all the fields in the form before sending.</p></div>';

// Initialize the form
function initForm() {
  // Make submitForm() the form's submit handler.
  $('#contactForm').submit( submitForm );
}

// Submit the form via Ajax
function submitForm() {
  var contactForm = $(this);
  
  msgContainer.empty();

  // Are all the fields filled in?
  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {

    // No; display a warning message and return to the form
    msgContainer.append(msgIncomplete).delay(messageDelay).fadeIn();

  } else {

    // Yes; submit the form to the PHP script via Ajax
    msgContainer.append(msgSending).delay(messageDelay).fadeIn();

    $.ajax( {
      url: contactForm.attr( 'action' ) + "?ajax=true",
      type: contactForm.attr( 'method' ),
      data: contactForm.serialize(),
      success: submitFinished
    } );
    
  }

  // Prevent the default form submission occurring
  return false;
}


// Handle the Ajax response
function submitFinished( response ) {

  response = $.trim( response );
  $('.statusMessage').fadeOut();

  if ( response == "success" ) {

    // Form submitted successfully
    msgContainer.append(msgSuccess).delay(messageDelay).fadeIn();
    $('#senderName, #senderEmail, #message').val( "" );

  } else {

    // Form submission failed: Display the failure message,
    msgContainer.append(msgFail).delay(messageDelay).fadeIn();
  }
    
}

// -----------------------------------------------------------
// START DOING THINGS!
// -----------------------------------------------------------

// Javascript onMediaQuery
var queries = [
    {
        context: 'small',
        callback: function() {
            // small stuff 
            $('body').addClass('small').removeClass('medium, large, extralarge');
            
			// Expand slider
            expandSlides();
        }
    },
    {
        context: 'medium',
        callback: function() {
            // medium stuff
            $('body').addClass('medium').removeClass('small, large, extralarge');
            
			// Expand slider
            expandSlides();
        }
    },
    {
        context: 'large',
        callback: function() {
            // large stuff
            $('body').addClass('large').removeClass('small, medium, extralarge');
	
			// Enable slider
			showSlide('0');
        }
    },
    {
        context: 'extralarge',
        callback: function() {
            // extra large stuff
            $('body').addClass('extralarge').removeClass('small, medium, large');
	
			// Enable slider
			showSlide('0');
        }
    }
];

// document ready
$(document).ready(function() {

	// Go!
	MQ.init(queries);
	
	// Initialize the form
	$( initForm );
	
	// Enable smooth anchor links
	var navclicked = false;
	
	$.localScroll({
	   hash: true
	});
	
	// open the proper section
	var currentsection = window.location.href.split('/').pop();
	var posts = document.querySelectorAll('section');
	
	// wait for images to load
	imagesLoaded( posts, function() {
	
		if ( currentsection.length > 1 ) {
			$.scrollTo('#' + currentsection);
			console.log('loaded: go');
		}
	
		// Update things as you scroll
		$('section').waypoint(function(direction) {
		
			console.log('waypoints: go');
				
			// update the url
			if(history.pushState) {
				history.pushState(null, null, $(this).attr('id'));
			}
			else {
			    location.hash = $(this).attr('id');
			}
			
			// activiate the current section
			if ( direction == 'up') {
				// we're scrolling up
				current = $(this).attr('id');
				currentsection = $('#'+current).prev().attr('id');
			} else {
				// we're scrolling down or not at all
				currentsection = $(this).attr('id');
			}
			
			// set the active section
			$('section').removeClass('active');
			$(this).addClass('active');
			
			// update the navigation selected state
			$('#nav a').each(function(index){
			
				$(this).removeClass('active');
			
				if ( $(this).attr('href').split('#').pop() == currentsection ) {
					$(this).addClass('active');
				}
			
			});
	
			// hide and show the nav			
			/*
			if ( $('#welcome').hasClass('active') ) {
				$('#header').addClass('inactive');
			} else {
				$('#header').removeClass('inactive');
			}
			*/
		  
		}, {
			offset: '35px'
		});
		
	});

	// Toggle main nav in mobile contexts
	$("#toggle").on("click", function(event){
		var trigger = $(this), target = $(trigger.attr('data-target'));
		target.toggleClass('closed');
		trigger.toggleClass('close');
		return false;
	});
	
	// Build slider
	sliderNav('#companies');
	
	// Control slider
	$('#sliderpages a').each(function(index){
    
    	var page = $(this);

    	page.click(function(e) {
			sliderPage(index);
	    	e.preventDefault();
	    });
    
    });
    
	$(".sliderprev").on("click", function(e){
		sliderPrev();
    	e.preventDefault();
	});
    
	$(".slidernext").on("click", function(e){
		sliderNext();
    	e.preventDefault();
	});
	
	// faq accordian
	
	$('#faq dd').addClass('closed');
	$('#faq dt').on("click", function(event){
		$(this).toggleClass('open');
		$(this).next('dd').toggleClass('closed');
	});
	/*
$('#faq dd').slideUp();
	$('#faq dt').on("click", function(event){
		$(this).next('dd').slideToggle();
	});
*/
    
});