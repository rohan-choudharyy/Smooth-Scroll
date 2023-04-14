function smoothScroll(target, duration){
    var target=document.querySelector(target);
    var targetPosition=target.getBoundingClientRect().top;
    var startPosition= window.pageYOffset;
    var distance=targetPosition-startPosition;
    var startTime=null;


    function animation(currentTime){
        if(startTime===null) startTime=currentTime;
        var timeElapsed= currentTime-startTime;
        var run=easeInQuad(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed<duration) requestAnimationFrame(animation);
    }


    function easeInQuad(t, b, c, d) {
        t /= d;
        return c*t*t + b;
    };
            

    requestAnimationFrame(animation);
}

var sectionButton=document.querySelector('.section1');
sectionButton.addEventListener('click',function(){
    smoothScroll('.section2',1000); 
})

var sectionButton2=document.querySelector('.section2');
sectionButton2.addEventListener('click',function(){
    smoothScroll('.section1',1000); 
})