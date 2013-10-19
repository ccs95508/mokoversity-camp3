var game = (function() {

        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');

            canvas.width = 1000;
            canvas.height = 1000;


    function start(){
        var timeoutVar,
            count=0,
            x = Math.floor(Math.random() *800), 
    	    y = Math.floor(Math.random() *800),
    	    r = Math.floor(Math.random() *100);
            c = Math.floor(Math.random() *7);

        if(c==1){
            ctx.fillStyle = "#26e60d";
        }
        else
            if(c==2){
            ctx.fillStyle = "yellow";
        }
         else
            if(c==3){
            ctx.fillStyle = "blue";
        }
         else
            if(c==4){
            ctx.fillStyle = "green";
        }
         else
            if(c==0){
            ctx.fillStyle = "#f20818";
        }
        else
            if(c==5){
            ctx.fillStyle = "white";
        }
        else
            if(c==5){
            ctx.fillStyle = "black";
        }

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2 , true);
        ctx.fill();

        if(count>=10000){
        
        }
        else{
            timeoutVar = setTimeout(start, 5);
            count = count+1;
        }

        }
return{
    start: start
}
}) ();

game.start();