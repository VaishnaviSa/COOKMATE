$(document).ready(function() {

   $('#onCooknowPress').click(function() {
         
                ClearFields();
         
             $("#update").empty();
             $("#update2").empty();
		  	     $("#update").append($('<h3 style="color:green">Status: Cooking now</h3>'));

         $.get("http://api.nanduris.com/cooker/start/0" , function(data, status){ 
          
          alert("Cooking now");
             console.log(data);
            
          });

          });


    $('#onCookStopPress').click(function() {

            
             $("#update").empty();
              $("#update2").empty();
		  	     $("#update").append($('<h3 style="color:red">Status: Cooking Stopped</h3>'));

             $.get("http://api.nanduris.com/cooker/stop" , function(data, status){ 
          alert("Stop Cooking");
              console.log(data);

          });


   });

    $('#onSchedulePress').click(function() {
       var entered=$('#startTime').val();
      if(entered=="")alert("Please enter a time");
      else{

        		$("#update").empty();
        			$("#update2").empty();
        
          var t = new Date();
          var time = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
          var  nowhour=t.getHours();
          var  nowminutes=t.getMinutes();

          console.log("nowhour"+nowhour);
          console.log("nowminutes"+t.getMinutes());

          var min1 = Number(nowminutes)+ Number(60*nowhour);
         //alert("min1"+min1);
  
      
       console.log("entered"+entered);
       var fieldArray = entered.split(":");
       console.log("hours entered"+fieldArray[0]);
       console.log("minutes entered"+fieldArray[1]);
       var min2 = Number(fieldArray[1])+ Number(60*fieldArray[0]);
       console.log("minutes entered"+min2);

          var diff=min2-min1;


         console.log("Will start cooking at  "+entered+"Hours");

          if(diff<0)alert("choose a future time");

          else{
          
            
            alert("Will start cooking at  "+entered+"Hours");

            $("#update2").empty();
		 
		  	$("#update2").append($('<h3 style="color:green">Status: Scheduled to cook</h3>'));

         $.get("http://api.nanduris.com/cooker/start/"+diff, function(data, status){ 
          alert("Cooking scheduled");
              console.log(data);
             

          });
          }
         } 
    
    });  

});


function ClearFields() {
     document.getElementById("startTime").value = "";
  
}







    
  