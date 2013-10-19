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

        ctx.fillStyle = "#26e60d";
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2 , true);
        ctx.fill();

        if(count>=25){
        
        }
        else{
            timeoutVar = setTimeout(start, 300);
            count = count+1;
        }

        }
return{
    start: start
}
}) ();

game.start();