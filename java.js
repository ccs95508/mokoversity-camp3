/*jslint browser: true, devel: true, closure: true */



var gameModule = (function (document) {

    "use strict";

        var timeoutVar,
            count = 0,
            x,
            y,
            bx,
            by,
            br,
            colors = ['#26e60d','yellow','blue','green','#f20818','#d908f2','#08eaf2'],
            lenght = colors.length,
            canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d');
            canvas.width = 2000;
            canvas.height = 1000;

            function touchEvent(evt){
                x = evt.clientX;
                y = evt.clientY;
                console.log("Clicked:" + x + "," + y);

                var tmp = (bx - x) * (bx - x) + (by - y) * (by - y);

            if(tmp < br * br){
                console.log("GREAT!!");
            }
        }


           function start() {
                document.getElementById("main").addEventListener("click", touchEvent, false);
                startGame();                
            }

    function startGame(){
        bx = Math.floor (Math.random() * 2000); 
        by = Math.floor (Math.random() * 900);
        br = Math.floor (Math.random() * 200);
        ctx.fillStyle = colors[Math.floor(Math.random() *7)];
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2 , true);
        ctx.fill();

        if (count >= 50) {
        }
        else {
            timeoutVar = setTimeout(start, 100);
            count = count + 1;
        }
        }

        function gameOver(){
            console.log("Counter:" + count);
        }

return {
    start: start
}

}(document));

gameModule.start();