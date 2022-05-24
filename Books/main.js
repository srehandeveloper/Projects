/** Sticky Navigation **/ 

let navbar=$(*navbar*);

$(window).scroll(function(){
    console.log(window.innerHeight);
});


.sticky{
    position:fixed;
    top:0;
    width:100%;
    background:rgba(0,0,0,0.815);
    z-index:99999;
    transition:all 1.5s ease;
}