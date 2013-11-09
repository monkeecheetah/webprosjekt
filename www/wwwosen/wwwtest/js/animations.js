$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer*/

      jarallax.setDefault(".bak1", {top:"0%"});
      jarallax.setDefault(".bak2", {top:"200%"});
      jarallax.setDefault(".bak3", {top:"400%"});
      jarallax.setDefault(".bak4", {top:"600%"});
      jarallax.setDefault(".bak5", {top:"800%"});
      jarallax.setDefault(".bak6", {top:"1000%"});


      jarallax.addAnimation(".bak1",[{progress: "0%", top:"0%"}, {progress: "20%", top: "50%"}]); // 250% på 20%
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"50%"}, {progress: "25%", top: "200%"}]); //250% på 5%


      jarallax.addAnimation(".bak2",[{progress: "0%", top:"120%"}, {progress: "20%", top: "170%"}]);
      jarallax.addAnimation(".bak2",[{progress: "20%", top:"170%"}, {progress: "25%", top: "320%"}]); 


      jarallax.addAnimation(".bak3",[{progress: "0%", top:"240%"}, {progress: "20%", top: "290%"}]); 
      jarallax.addAnimation(".bak3",[{progress: "20%", top:"290%"}, {progress: "25%", top: "440%"}]); 


      jarallax.addAnimation(".bak4",[{progress: "0%", top:"360%"}, {progress: "20%", top: "410%"}]);
      jarallax.addAnimation(".bak4",[{progress: "20%", top:"410%"}, {progress: "25%", top: "560%"}]); 


      jarallax.addAnimation(".bak5",[{progress: "0%", top:"480%"}, {progress: "20%", top: "530%"}]);
      jarallax.addAnimation(".bak5",[{progress: "20%", top:"530%"}, {progress: "25%", top: "680%"}]); 


      jarallax.addAnimation(".bak6",[{progress: "0%", top:"600%"}, {progress: "20%", top: "650%"}]);  
      jarallax.addAnimation(".bak6",[{progress: "20%", top:"650%"}, {progress: "25%", top: "800%"}]); 

     
   });

