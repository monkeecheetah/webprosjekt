init = function(){
      jarallax = new Jarallax();


      jarallax.setDefault("p", {opacity:'0'});
      jarallax.setDefault('p', {marginLeft:'-1000px'});


      jarallax.addAnimation('.bak1',[{progress: "0%", top:"-10%"}, {progress: "100%", top: "-10%"}]);		
      //jarallax.addAnimation('.bak2',[{progress: "0%", top:"100%"}, {progress: "100%", top: "-10%"}]);

      
      jarallax.addAnimation('.arrow',[{progress: "0%", opacity:"0.6"}, {progress: "50%"}]);					//pil som hinter til scroll
      jarallax.addAnimation('.arrow',[{progress: "5%", opacity:"0.4"}, {progress: "100%", top: "2%"}]);
      jarallax.addAnimation('.arrow',[{progress: "7%", opacity:"0"}, {progress: "100%", top: "8%"}]);

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer

   }