$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer*/

      jarallax.setDefault(".bak1", {top:"0%"});
      jarallax.setDefault(".bak2", {top:"120%"});
      jarallax.setDefault(".bak3", {top:"240%"});
      jarallax.setDefault(".bak4", {top:"360%"});
      jarallax.setDefault(".bak5", {top:"480%"});
      jarallax.setDefault(".bak6", {top:"600%"});


    /*  jarallax.addAnimation(".bak1",[{progress: "0%", top:"0%"}, {progress: "20%", top: "30%"}]); // 250% på 20%*/
      jarallax.addAnimation(".bak1",[{progress: "9%", top:"0%"}, {progress: "24%", top: "150%"}]);  // slomo bak2 (progress 15%, top 150%)
      jarallax.addAnimation(".bak1", [{progress:"24%", top:"150%"}, {progress:"31%", top:"150%"}]); // bytte til bak3(progress 7%, top 0%)
      jarallax.addAnimation(".bak1",[{progress:"31%", top:"150%"}, {progress:"46%", top:"300%"}]);  // slomo bak3
      jarallax.addAnimation(".bak1",[{progress:"46%", top:"300%"}, {progress:"54%", top:"300%"}]);  // bytte til bak4
      jarallax.addAnimation(".bak1",[{progress:"54%", top:"300%"}, {progress:"67%", top:"450%"}]);  // slomo bak4
      jarallax.addAnimation(".bak1",[{progress:"67%", top:"450%"}, {progress:"75%", top:"450%"}]);  //bytte til bak5
      jarallax.addAnimation(".bak1",[{progress:"75%", top:"450%"}, {progress:"89%", top:"600%"}]);
      jarallax.addAnimation(".bak1",[{progress:"89%", top:"600%"}, {progress:"97%", top:"600%"}]);
      jarallax.addAnimation(".bak1",[{progress:"97%", top:"600%"}, {progress:"100%", top:"750%"}]);


     /* jarallax.addAnimation(".bak2",[{progress: "0%", top:"120%"}, {progress: "20%", top: "150%"}]);*/
      jarallax.addAnimation(".bak2",[{progress: "9%", top:"120%"}, {progress: "24%", top: "270%"}]); 
      jarallax.addAnimation(".bak2", [{progress:"24%", top:"270%"}, {progress:"31%", top:"270%"}]);
      jarallax.addAnimation(".bak2",[{progress:"31%", top:"270%"}, {progress:"46%", top:"420%"}]);
      jarallax.addAnimation(".bak2",[{progress:"46%", top:"420%"}, {progress:"54%", top:"420%"}]);
      jarallax.addAnimation(".bak2",[{progress:"54%", top:"420%"}, {progress:"67%", top:"570%"}]);
      jarallax.addAnimation(".bak2",[{progress:"67%", top:"570%"}, {progress:"75%", top:"570%"}]);
      jarallax.addAnimation(".bak2",[{progress:"75%", top:"570%"}, {progress:"89%", top:"720%"}]);
      jarallax.addAnimation(".bak2",[{progress:"89%", top:"720%"}, {progress:"97%", top:"720%"}]);
      jarallax.addAnimation(".bak2",[{progress:"97%", top:"720%"}, {progress:"100%", top:"870%"}]);


     /* jarallax.addAnimation(".bak3",[{progress: "0%", top:"240%"}, {progress: "20%", top: "270%"}]); */
      jarallax.addAnimation(".bak3",[{progress: "9%", top:"240%"}, {progress: "24%", top: "390%"}]); 
      jarallax.addAnimation(".bak3", [{progress:"24%", top:"390%"}, {progress:"31%", top:"390%"}]);
      jarallax.addAnimation(".bak3",[{progress:"31%", top:"390%"}, {progress:"46%", top:"540%"}]);
      jarallax.addAnimation(".bak3",[{progress:"46%", top:"540%"}, {progress:"54%", top:"540%"}]);
      jarallax.addAnimation(".bak3",[{progress:"54%", top:"540%"}, {progress:"67%", top:"690%"}]);
      jarallax.addAnimation(".bak3",[{progress:"67%", top:"690%"}, {progress:"75%", top:"690%"}]);
      jarallax.addAnimation(".bak3",[{progress:"75%", top:"690%"}, {progress:"89%", top:"840%"}]);
      jarallax.addAnimation(".bak3",[{progress:"89%", top:"840%"}, {progress:"97%", top:"840%"}]);
      jarallax.addAnimation(".bak3",[{progress:"97%", top:"840%"}, {progress:"100%", top:"990%"}]);



     /* jarallax.addAnimation(".bak4",[{progress: "0%", top:"360%"}, {progress: "20%", top: "390%"}]);*/
      jarallax.addAnimation(".bak4",[{progress: "9%", top:"360%"}, {progress: "24%", top: "510%"}]); 
      jarallax.addAnimation(".bak4", [{progress:"24%", top:"510%"}, {progress:"31%", top:"510%"}]);
      jarallax.addAnimation(".bak4",[{progress:"31%", top:"510%"}, {progress:"46%", top:"660%"}]);
      jarallax.addAnimation(".bak4",[{progress:"46%", top:"660%"}, {progress:"54%", top:"660%"}]);
      jarallax.addAnimation(".bak4",[{progress:"54%", top:"660%"}, {progress:"67%", top:"810%"}]);
      jarallax.addAnimation(".bak4",[{progress:"67%", top:"810%"}, {progress:"75%", top:"810%"}]);
      jarallax.addAnimation(".bak4",[{progress:"75%", top:"810%"}, {progress:"89%", top:"960%"}]);
      jarallax.addAnimation(".bak4",[{progress:"89%", top:"960%"}, {progress:"97%", top:"960%"}]);
      jarallax.addAnimation(".bak4",[{progress:"97%", top:"960%"}, {progress:"100%", top:"1110%"}]);


     /* jarallax.addAnimation(".bak5",[{progress: "0%", top:"480%"}, {progress: "20%", top: "510%"}]);*/
      jarallax.addAnimation(".bak5",[{progress: "9%", top:"480%"}, {progress: "24%", top: "630%"}]); 
      jarallax.addAnimation(".bak5", [{progress:"24%", top:"630%"}, {progress:"31%", top:"630%"}]);
      jarallax.addAnimation(".bak5",[{progress:"31%", top:"630%"}, {progress:"46%", top:"780%"}]);
      jarallax.addAnimation(".bak5",[{progress:"46%", top:"780%"}, {progress:"54%", top:"780%"}]);
      jarallax.addAnimation(".bak5",[{progress:"54%", top:"780%"}, {progress:"67%", top:"930%"}]);
      jarallax.addAnimation(".bak5",[{progress:"67%", top:"930%"}, {progress:"75%", top:"930%"}]);
      jarallax.addAnimation(".bak5",[{progress:"75%", top:"930%"}, {progress:"89%", top:"1080%"}]);
      jarallax.addAnimation(".bak5",[{progress:"89%", top:"1080%"}, {progress:"97%", top:"1080%"}]);
      jarallax.addAnimation(".bak5",[{progress:"97%", top:"1080%"}, {progress:"100%", top:"1230%"}]);


   /*   jarallax.addAnimation(".bak6",[{progress: "0%", top:"600%"}, {progress: "20%", top: "630%"}]);  */
      jarallax.addAnimation(".bak6",[{progress: "9%", top:"600%"}, {progress: "24%", top: "750%"}]); 
      jarallax.addAnimation(".bak6", [{progress:"24%", top:"750%"}, {progress:"31%", top:"750%"}]);
      jarallax.addAnimation(".bak6",[{progress:"31%", top:"750%"}, {progress:"46%", top:"900%"}]);
      jarallax.addAnimation(".bak6",[{progress:"46%", top:"900%"}, {progress:"54%", top:"900%"}]);
      jarallax.addAnimation(".bak6",[{progress:"54%", top:"900%"}, {progress:"67%", top:"1050%"}]);
      jarallax.addAnimation(".bak6",[{progress:"67%", top:"1050%"}, {progress:"75%", top:"1050%"}]);
      jarallax.addAnimation(".bak6",[{progress:"75%", top:"1050%"}, {progress:"89%", top:"1200%"}]);
      jarallax.addAnimation(".bak6",[{progress:"89%", top:"1200%"}, {progress:"97%", top:"1200%"}]);
      jarallax.addAnimation(".bak6",[{progress:"97%", top:"1200%"}, {progress:"100%", top:"1350%"}]);

     
   });

