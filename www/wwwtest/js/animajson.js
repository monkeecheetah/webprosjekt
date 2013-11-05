init = function(){
      jarallax = new Jarallax();


      jarallax.setDefault('#intro, #p2, #p3', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3', {marginLeft:'-1000px'});


      jarallax.addAnimation('.planet2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.bean',[{progress: "0%", top:"90%"}, {progress: "100%", top: "-5%"}]);
