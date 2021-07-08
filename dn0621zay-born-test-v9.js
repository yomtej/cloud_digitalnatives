var data, pageClass,  questOneVal, questThreeVal, questFourVal, questFiveVal, questSixVal, questSevenVal, questTotal; 
var pageNumber =0;
var topValue =0;
var totalScore=0;
var score=0;
var slideOne=0; 
var slideTwo=0; 
var slideThree=0;
var slideCcore=0;
var questTwoScore=0;
var questThreeScore =0;



function loadDataset() {
        // THE JSON ARRAY.
        $.getJSON("/rs/808-GJW-314/images/dn0621zay-born-test-v9.json", function(json) {
        //$.getJSON("https://www-author.cisco.com/c/dam/m/en_us/customer-experience/j/form.json", function(json) {
        //$.getJSON("/c/dam/m/en_us/customer-experience/j/form-staging.json", function(json) {

			console.log('json'+json); // this will show the info it in firebug console
			data = json;
			
            displayResult(data, pageNumber);
   
            changeStatusBar(data, pageNumber);

		}); 
		
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight; 
		var quizContainWidth = $( ".cx-blade-bgcolor-F5F6F9" ).width();
		var widthQuizCont = quizContainWidth*5;
		var heightQuizCont = newHeight*0.6;
		$(".quiz-container-slider").css("width", widthQuizCont);
		/* if(newHeight<560){
		$(".quiz-container-slider").css("margin-top", '-140px');
		} else {
			$(".quiz-container-slider").css("margin-top", '0');
		} */
       
}

$(function() {
 	loadDataset();

     
});

// set the starting position of the cursor outside of the screen
let clientX = 100;
let clientY = 100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
  const canvas = document.querySelector(".cursor--canvas");
  const shapeBounds = {
    width: 75,
    height: 75
  };
  paper.setup(canvas);
  const strokeColor = "rgba(255, 255, 255, 1)";
  const strokeWidth = 1;
  const segments = 8;
  const radius = 20;
  
  // we'll need these later for the noisy circle
  const noiseScale = 150; // speed
  const noiseRange = 4; // range of distortion
  let isNoisy = false; // state
  
  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;
  
  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];
  
  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };
  
  // function to map a value from one range to another range
  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };
  
  // the draw loop of Paper.js 
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = event => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
  }
}

initCanvas();

var introAnimation = bodymovin.loadAnimation({
    container: document.getElementById('lottieIntro'),
    path: '/rs/808-GJW-314/images/dn0621zay-pattern_00_intro.json',
    autoplay: true,
    loop: true
  })

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    path: '/rs/808-GJW-314/images/dn0621zay-base-layer-2.json',
    autoplay: false
  })
  
  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('lottie1'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-1-a.json',
    loop: false,
    autoplay: false
  })
  
  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('lottie2'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-1-b.json',
    loop: false,
    autoplay: false
  })
  
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('lottie3'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-1-c.json',
    loop: false,
    autoplay: false
  })

  var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('lottie4'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-1-d.json',
    loop: false,
    autoplay: false
  })

  var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('lottie5'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-2.json',
    loop: false,
    autoplay: false
  })

  var animation6 = bodymovin.loadAnimation({
    container: document.getElementById('lottie6'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-3.json',
    loop: false,
    autoplay: false
  })

  var animation7 = bodymovin.loadAnimation({
    container: document.getElementById('lottie7'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-4.json',
    loop: false,
    autoplay: false
  })

  var animation8 = bodymovin.loadAnimation({
    container: document.getElementById('lottie8'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-5-a.json',
    loop: false,
    autoplay: false
  })

  var animation9 = bodymovin.loadAnimation({
    container: document.getElementById('lottie9'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-5-b.json',
    loop: false,
    autoplay: false
  })

  var animation10 = bodymovin.loadAnimation({
    container: document.getElementById('lottie10'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-5-c.json',
    loop: false,
    autoplay: false
  })

  var animation11 = bodymovin.loadAnimation({
    container: document.getElementById('lottie11'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-5-d.json',
    loop: false,
    autoplay: false
  })

  var animation12 = bodymovin.loadAnimation({
    container: document.getElementById('lottie12'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-5-e.json',
    loop: false,
    autoplay: false
  })

  var animation13 = bodymovin.loadAnimation({
    container: document.getElementById('lottie13'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-6.json',
    loop: false,
    autoplay: false
  })

  var animation14 = bodymovin.loadAnimation({
    container: document.getElementById('lottie14'),
    path: '/rs/808-GJW-314/images/dn0621zay-question-7.json',
    loop: false,
    autoplay: false
  })

$( "a.next" ).on( "click", function() {
	console.log('next');
    // Display Results
    pageNumber = pageNumber+1;

	displayResult(data, pageNumber);

    animationFlow(data, pageNumber);

    // Change the status bar
	changeStatusBar(data, pageNumber);

    totalScore= score + slideCcore;

    console.log('Score '+ totalScore);

});

$("#button-container").on("click",'.option', function() {
    console.log('question box');

    var slectedBtn = $(this).attr('value');

    boxQuestionChange(data, pageNumber, slectedBtn);

});

function displayResult(data, pageNumber) {

        var dataLength = data.length;

        if (pageNumber < dataLength){

            var pageType = data[pageNumber].Pagetype;

            $('.master-container').removeClass(pageClass);
            pageClass = data[pageNumber].Page;

            $('.master-container').addClass(pageClass);

            if (pageType=="text"){
                displayText(data, pageNumber);
            } else if(pageType=="question"){
                displayQuestion(data, pageNumber);
            } else if(pageType=="result"){
                displayFinal(data, pageNumber);
            }

        }
    
}

function displayText(data, pageNumber) {
    console.log('disply text');

    var textDisplay = data[pageNumber].Pagetyeptext[0].Text;

    $('#questionContainer').addClass('hidden');
    $('#textContainer').removeClass('hidden');

    $( "#textContainer" ).html(textDisplay);

    if (data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX.length>0){
        console.log('text animations');
    
        var xPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX;
        var yPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationY;
        var Scale = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationScale;
        var duration = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationDuration;
        var transition = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationTransition;

        gsap.to(".text-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});
    }

    if (data[pageNumber].Page=='one'){
        gsap.from(".header-container", {  y:180, scale: 1.2, opacity:0.2, duration: 1.5, ease: "power3.out"});
        gsap.from(".text-container h1", {  y:-119, scale: 1.2, opacity:0.2, duration: 1.5, ease: "power3.out"});
        gsap.from(".text-container h2", {  y:119, scale: 1.2, opacity:0, duration: 1.5, delay:0.2, ease: "power3.out"});
        gsap.from(".text-container .start-btn", {  y:-219, scale: 1.2, opacity:0, duration: 1.5, delay:0.4,  ease: "power3.out"});
    }
}

$( "#textContainer" ).on( "click","a.next", function() {
	console.log('next');
    // Display Results
    pageNumber = pageNumber+1;


	displayResult(data, pageNumber);

    animationFlow(data, pageNumber);

    // Change the status bar
	changeStatusBar(data, pageNumber);

});

function displayQuestion(data, pageNumber) {
    console.log('display question');

    var questDisplay = data[pageNumber].QuestionTypetext[0].PrimaryQuest;
    
    $('#textContainer').addClass('hidden');
    $('#questionContainer').removeClass('hidden');
    $('#button-container').removeClass('box');
    $('#button-container').removeClass('stack');
    $('#button-container').removeClass('slider');

    $( "#questionContainer .quest-text-container" ).html(questDisplay);

    var ele = document.getElementById('button-container');
    var eleStack = document.getElementById('columns');
    var eleSlide = document.getElementById('slider-container');

	ele.innerHTML ='';
    eleStack.innerHTML ='';
    eleSlide.innerHTML ='';

    for (var i = 0; i < data[pageNumber].QuestionTypetext[0].Questions.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        
        var questionType = data[pageNumber].QuestionTypetext[0].QuestionType;

            
        if (data[pageNumber].QuestionTypetext[0].Questions[0].Question[i]!=undefined){

            if( questionType =='box'){ 

                $('#button-container').addClass('box');

                ele.innerHTML = ele.innerHTML +
                '<a id="btn-01" href="#" class="option" value="' + (i+1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';

            } else if ( questionType =='stack'){

                $('#button-container').addClass('stack');

                eleStack.innerHTML = eleStack.innerHTML +
                '<li class="column" draggable="true" value="' + (i+1) + '" ><header>' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</header></li>';

                draggable();

            } else if ( questionType =='slider'){

                //$('#button-container').addClass('slider-container');

                var noQuestions = i + 1;

                eleSlide.innerHTML = eleSlide.innerHTML +
                //'<a id="btn-01" href="#" class="option" value="' + (i+1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';
                '<span class="slider-heading">' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</span><div id="slide-'+i+'" class="slider" data-min="1" data-max="5" data-value="' + noQuestions + '" data-step="1"></div>';
                
                if (data[pageNumber].QuestionTypetext[0].Questions.length==noQuestions){
                    slidable();
                }

            }

        }	
           			
    } 
    
    if (data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX.length>0){
        console.log('text animations');
    
        var xPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX;
        var yPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationY;
        var Scale = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationScale;
        var duration = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationDuration;
        var transition = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationTransition;

        gsap.from(".quest-text-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});
        gsap.from(".box", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out"});
    }
               
}

//This is the drag event function - start

//$(draggabke);
function draggable() {
    var oldIndex;
    $( ".droppable-area1" ).sortable({
        stack: '.connected-sortable ul',
        update: function( event, ui ) {}
      });

      $( ".droppable-area1" ).on( "sortupdate", function( event, ui ) {
        
        if(topValue>0){
            score = score - topValue;
        }

        topValue = $(this).children().first().val();
        console.log(topValue);
        
        score = score + topValue;

      } );
      
  }

//This is the drag event function - end
//This is the slider event function - start

//$('body').on('click', '.toggle-filters', function() {
function slidable() {
    var $this = $(this),
        rangeWrapper = $('.range-slider-wrapper'),
        advancedFilters = $('.advanced-filters');
  
    if(!rangeWrapper.hasClass('filters-expanded')) {
      
      $this.html('Hide advanced filters');
      rangeWrapper.addClass('filters-expanded');
      advancedFilters.slideDown();
      
      $('.slider').each(function() {
        var minValue = Number($(this).find('.min-value').attr('data-selected-value')),
            maxValue = Number($(this).attr('data-max')),
            value = Number($(this).attr('data-value')),
            step = Number($(this).attr('data-step')),
            $this = $(this);
        
        $this.slider({
          range: true,
          values: [minValue, maxValue],
          slide: function(event, ui) {
            var selectedMin = ui.values[0],
                selectedMax = ui.values[1],
                currentValueMin = selectedMin,
                currentValueMax = selectedMax;
            if(selectedMin > 999) {
              currentValueMin = selectedMin / 1000 + 'k';
              currentValueMax = selectedMax / 1000 + 'k';
            }
            
            $this.find('.min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
            $this.find('.max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
          }
          
        });
        
        var currentValueMin = minValue,
            currentValueMax = maxValue;
        if(currentValueMin > 999) {
          currentValueMin = currentValueMin / 1000 + 'k';
          currentValueMax = currentValueMax / 1000 + 'k';
        }
        
        $this.find('span[tabindex]:first-of-type .value').html(currentValueMin).attr('data-selected-value', minValue);
        $this.find('span[tabindex]:last-of-type').append('<span class="value max-value" data-selected-value></span>').find('.value').html(currentValueMax).attr('data-selected-value', maxValue);
      });
      
    } else {
      
      $this.html('Show advanced filters');
      rangeWrapper.removeClass('filters-expanded');
      advancedFilters.slideUp();
      
      $('.slider').each(function() {
        var value = Number($(this).attr('data-value')),
            $this = $(this);
        
        $this.slider({
          value: value,
          range: 'min',
          slide: function(event, ui) {
        var currentValue = ui.value;
        if(currentValue > 999) {
          currentValue = currentValue / 1000 + 'k';
        }
        $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);
      }
        });
      
    });
    }
    sliderEach();
  };
  
  function sliderEach(){

    $('.slider').each(function() {
        var minValue = Number($(this).attr('data-min')),
            maxValue = Number($(this).attr('data-max')),
            value = Number($(this).attr('data-value')),
            step = Number($(this).attr('data-step')),
            $this = $(this);
        
        $this.slider({
          range: 'min',
          value: value,
          min: minValue,
          max: maxValue,
          step: step,
          slide: function(event, ui) {
            var currentValue = ui.value;
            var carrentSlide = event.target.id;
            if (carrentSlide == 'slide-0'){
                slideOne = currentValue;
            } else if (carrentSlide == 'slide-1'){
                slideTwo = currentValue;
            } else if (carrentSlide == 'slide-2') {
                slideThree = currentValue;
            }


            if(currentValue > 999) {
              currentValue = currentValue / 1000 + 'k';
            }
            $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);

            console.log('slideOne '+ slideOne + ' slideTwo '+ slideTwo + ' slidethree '+ slideThree );

            slideCcore = slideOne + slideTwo + slideThree;

          }
        });
        
        var sliderHandle = $this.find('.ui-slider-handle'),
            currentValue = sliderHandle.parent().attr('data-value');
        sliderHandle.append('<span class="value min-value" data-selected-value="'+ currentValue +'"></span>');
        
        if(minValue > 999) {
          value = value / 1000 + 'k';
        }
        $this.find('.value').html(value);
    });
    
  }


//This is the slider event function - end

function changeStatusBar(data, pageNumber ) {
	
	console.log('changeStatusBar')

    var dataLength = data.length;

    var  totalQuestNumber = 7;
	
    if (pageNumber < dataLength){
	
        var elem = document.getElementById("myBar");
        var width = 1;
        if(data[pageNumber].QuestionTypetext[0].QuestionNumber){

            var questNumber = data[pageNumber].QuestionTypetext[0].QuestionNumber;

            $( ".progress-container .current-quest-no" ).text(questNumber);
            $( ".progress-container .total-quest-no" ).text(totalQuestNumber);
        }
        
        var progressLength = (questNumber/totalQuestNumber)*100;

        elem.style.width = progressLength+'%';

    }
}

function boxQuestionChange(data, pageNumber, slectedBtn){

    var numberElements = data[pageNumber].QuestionTypetext[0].Questions.length; 


        if (data[pageNumber].QuestionTypetext[0].QuestionNumber==1){

            for (var j = 0; j < numberElements; j++) {
                
                if($("#button-container .option").eq(j).hasClass('active')){
                    if (j==0){
                        animation1.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==1){
                        animation2.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==2){
                        animation3.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==3){
                        animation4.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    }
                } 
                        
            } 
            
            $("#button-container .option").eq(slectedBtn-1).addClass('active');
            //$(this).addClass('active');

            if (slectedBtn==1){
                animation1.playSegments([0, 30], true);              
            } else if (slectedBtn==2){
                animation2.playSegments([0, 30], true);
            } else if (slectedBtn==3){
                animation3.playSegments([0, 30], true);
            } else if (slectedBtn==4){
                animation4.playSegments([0, 30], true);
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==2){
                
            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                if (slectedBtn==1){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                }
            }               

            if(questTwoScore == 0){
                if (hasActiveState==true){
                    animation5.playSegments([30, 0], true);
                }
                
            } else if (questTwoScore == 1){
                if (hasActiveState==true){
                    animation5.playSegments([60, 30], true);
                } else {
                    animation5.playSegments([0, 30], true);
                }
            } else if (questTwoScore == 2){
                if (hasActiveState==true){
                    animation5.playSegments([90, 60], true);
                } else {
                    animation5.playSegments([30, 60], true);
                }
            } else if (questTwoScore == 3){
                if (hasActiveState==true){
                    animation5.playSegments([120, 90], true);
                } else {
                    animation5.playSegments([60, 90], true);
                }
            } else if (questTwoScore == 4){
                if (hasActiveState==true){
                    animation5.playSegments([150, 120], true);
                } else {
                    animation5.playSegments([90, 120], true);
                }
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==3){

            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                if (slectedBtn==1){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                }
            }               

            if(questThreeScore == 0){
                if (hasActiveState==true){
                    animation6.playSegments([20, 0], true);
                }
                
            } else if (questThreeScore == 1){
                if (hasActiveState==true){
                    animation6.playSegments([40, 20], true);
                } else {
                    animation6.playSegments([0, 20], true);
                }
            } else if (questThreeScore == 2){
                if (hasActiveState==true){
                    animation6.playSegments([60, 40], true);
                } else {
                    animation6.playSegments([20, 40], true);
                }
            } else if (questThreeScore == 3){
                if (hasActiveState==true){
                    animation6.playSegments([80, 60], true);
                } else {
                    animation6.playSegments([40, 60], true);
                }
            }           
            
        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==6){

            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    animation1.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                } else if (slectedBtn==2){
                    animation2.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                } else if (slectedBtn==3){
                    animation3.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                } else if (slectedBtn==4){
                    animation4.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');
            }            
            
            if (slectedBtn==1){
                animation1.playSegments([0, 30], true)
                score = score + 1;
            } else if (slectedBtn==2){
                animation2.playSegments([0, 30], true)
                score = score + 1;
            } else if (slectedBtn==3){
                animation3.playSegments([0, 30], true)
                score = score + 1;
            } else if (slectedBtn==4){
                animation4.playSegments([0, 30], true)
                score = score + 1;
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==7){

            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    animation1.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                } else if (slectedBtn==2){
                    animation2.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                } else if (slectedBtn==3){
                    animation3.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                } else if (slectedBtn==4){
                    animation4.playSegments([30, 60], true);
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');
            }            
            
            if (slectedBtn==1){
                animation1.playSegments([0, 30], true)
            } else if (slectedBtn==2){
                animation2.playSegments([0, 30], true)
            } else if (slectedBtn==3){
                animation3.playSegments([0, 30], true)
            } else if (slectedBtn==4){
                animation4.playSegments([0, 30], true)
            }

        }  
      
}

function displayFinal(data, pageNumber) {
    console.log('disply Final');

    var textDisplay = data[pageNumber].Pagetyeptext[0].Text;

    var solutionDisplay1 = data[pageNumber].SolutionTypetext[0].Solpath1;
    var solutionDisplay2 = data[pageNumber].SolutionTypetext[0].Solpath2;
    var solutionDisplay3 = data[pageNumber].SolutionTypetext[0].Solpath3;


    $('#questionContainer').addClass('hidden');
    $('#textContainer').removeClass('hidden');

    $( "#textContainer" ).html(textDisplay);

    $('.solution-container ').removeClass('hidden');

    if (totalScore>22){
        $( ".solution-container" ).html(solutionDisplay1);
    } else if (totalScore>13){
        $( ".solution-container" ).html(solutionDisplay2);
    } else if (totalScore>1){
        $( ".solution-container" ).html(solutionDisplay3);
    }

    if (data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX.length>0){
        console.log('text animations');
    
        var xPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX;
        var yPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationY;
        var Scale = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationScale;
        var duration = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationDuration;
        var transition = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationTransition;

        gsap.to(".text-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});
    }
    
}

function animationFlow(data, pageNumber){

    console.log('animations');
    
    var xPos = data[pageNumber].Animation[0].AnimationX;
    var yPos = data[pageNumber].Animation[0].AnimationY;
    var Scale = data[pageNumber].Animation[0].AnimationScale;
    var duration = data[pageNumber].Animation[0].AnimationDuration;
    var transition = data[pageNumber].Animation[0].AnimationTransition;

    gsap.to(".animation-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});
}

window.addEventListener("resize", windowResizeFunction);


function windowResizeFunction() {
	console.log('windowResizeFunction');
	
	var newWidth = window.innerWidth;
	var quizContainWidth = $( ".cx-blade-bgcolor-F5F6F9" ).width();
	var widthQuizCont = quizContainWidth*5;
	
	$(".quiz-container-slider").css("width", widthQuizCont);
	
}