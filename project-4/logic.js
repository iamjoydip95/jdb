





function frame1Animation(){

   TweenMax.set(ad,{alpha:1});
   TweenMax.set(arrow,{alpha:0})
   TweenMax.set(hand,{x:0})
   TweenMax.set([copy,copy_2,],{x:-300})




   TweenMax.to(copy,0.65,{x:0,ease:Quad.easeOut,delay:0.3})
   TweenMax.to(copy,0.65,{x:300,alpha:-1,ease:Quad.easeIn,delay:3})

   TweenMax.to(copy_2,0.65,{X:0,ease:Quad.easeOut,delay:3.4})
   
  
   TweenMax.to(copy_2,0.65,{x:0,ease:Quad.easeIn,delay:3})

   TweenMax.to(hand,0.65,{scale:1.1,x:-15,ease:Quad.easeOut,delay:3.2})

   

   TweenMax.to(arrow,0.3,{alpha:1, ease:Quad.easeOut, delay:3.7})

   TweenMax.to(arrow,0.3,{x:5, ease:Quad.easeOut, delay:3.8})
   TweenMax.to(arrow,0.3,{x:0, ease:Quad.easeOut, delay:4.1})

   TweenMax.to(arrow,0.3,{x:5, ease:Quad.easeOut, delay:4.4})

   TweenMax.to(arrow,0.3,{x:0, ease:Quad.easeOut, delay:4.5})

   TweenMax.to(arrow,0.3,{x:5, ease:Quad.easeOut, delay:4.7})
   TweenMax.to(arrow,0.3,{x:0, ease:Quad.easeOut, delay:5})

































}

function trackclick(){


window.open(clickTag,'_blank');

}