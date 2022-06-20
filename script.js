(function(){
    'use strict'
    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();
        var distance = document.getElementById('distance').value;
        distance = parseFloat(distance);
        if(distance){
            var conversion = (distance * 1.609344).toFixed(3);
            var answer = document.getElementById('answer').innerHTML=`${distance} miles is equals to ${conversion} kilometers`;
        }
        else{
            var answer = document.getElementById('answer').innerHTML="Type a Number";
        }
    });
})();
    
