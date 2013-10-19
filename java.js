(function() {
        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d'),
            x = Math.floor(Math.random() *200), 
    	    y = Math.floor(Math.random() *500),
    	    r = Math.floor(Math.random() *100);


        canvas.width = 1000;
        canvas.height = 1000;

        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2 , true);
        ctx.fill();

        
}) ();