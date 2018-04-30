
jBackgroundObj = 
{
    init(query, options)
    {
        var background = document.createElement("div");
        $(background).css("overflow", "hidden");
        $(background).css("position", "absolute");
        $(background).css("left", "0px");
        $(background).css("right", "0px");
        $(background).css("top", "0px");
        $(background).css("bottom", "0px");
        $(query).append(background);
        this.leftImages = new Array();
        this.rightImages = new Array();
        var GUID = "A89723F13D238CE237D";
        var shape = "hex";
        var count = 10;
        this.foreground_color = "rgba(150, 0, 0, 1)";
        // Options
        if (options.shape!==undefined)
        {
            shape = options.shape;
        }
        if (options.count!==undefined)
        {
            count = options.count;
        }
        if (options.background_color!==undefined)
        {
            $(query).css("background-color", options.background_color);
        }
        if (options.foreground_color!==undefined)
        {
            this.foreground_color = options.foreground_color;
        }
        
        this.imageCanvas = document.createElement("canvas");
        $(this.imageCanvas).css("display", "none");
        $(this.imageCanvas).width(100);
        $(this.imageCanvas).height(100);
        this.url = this.createImage(shape);
        for (var i=0;i<count;i++)
        {
            var image = document.createElement("img");
            image.src = this.url;
            $(image).css("position", "absolute");
            $(image).css("left", Math.floor(Math.random()*800)+"px");
            $(image).css("top", Math.floor(Math.random()*300-100)+"px");
            $(image).attr("speed", (Math.random()*0.5)+0.3);
            $(image).width(Math.random()*100+100);
            $(image).attr("top", 0);
            $(background).append(image);
            this.leftImages.push(image);
        }
        for (var i=0;i<count;i++)
        {
            var image = document.createElement("img");
            image.src = this.url;
            $(image).css("position", "absolute");
            $(image).css("right", Math.floor(Math.random()*800)+"px");
            $(image).css("bottom", Math.floor(Math.random()*300-100)+"px");
            $(image).attr("speed", (Math.random()*0.5)+0.3);
            $(image).width(Math.random()*100+100);
            $(image).attr("top", 0);
            $(background).append(image);
            this.rightImages.push(image);
        }
    },
    createImage(shape)
    {
        var ctx = this.imageCanvas.getContext("2d");
        ctx.beginPath();
        if (shape==="hex")
        {
            ctx.moveTo(Math.cos(0*(Math.PI/3))*50+50, Math.sin(0*(Math.PI/3))*50+50);
            for (var i=1;i<7;i++)
            {
                ctx.lineTo(Math.cos(i*(Math.PI/3))*50+50, Math.sin(i*(Math.PI/3))*50+50);
            }
        }
        else if (shape==="plus")
        {
            ctx.moveTo(33, 0);
            ctx.lineTo(67, 0);
            ctx.lineTo(67, 100);
            ctx.lineTo(33, 100);
            ctx.lineTo(33, 0);
            ctx.moveTo(0, 33);
            ctx.lineTo(0, 67);
            ctx.lineTo(100, 67);
            ctx.lineTo(100, 33);
            ctx.lineTo(0, 33);
        }
        ctx.fillStyle = this.foreground_color;
        ctx.fill();
        return this.imageCanvas.toDataURL("image/png");
    },
    update()
    {
        for (var i=0;i<this.leftImages.length;i++)
        {
            var image = this.leftImages[i];
            $(image).attr("top", parseFloat($(image).attr("top"))+parseFloat($(image).attr("speed")));
            if ($(image).attr("top")>window.innerHeight/2)
            {
                $(image).attr("top", -100);
                $(image).css("left", Math.floor(Math.random()*800)+"px");
                $(image).attr("speed", (Math.random()*0.5)+0.3);
                $(image).width(Math.random()*100+100);
            }
            $(image).css("top", $(image).attr("top")+"px");
            $(image).css("opacity", 1-($(image).attr("top")/(window.innerHeight/2)));
        }
        for (var i=0;i<this.rightImages.length;i++)
        {
            var image = this.rightImages[i];
            $(image).attr("top", parseFloat($(image).attr("top"))+parseFloat($(image).attr("speed")));
            if ($(image).attr("top")>window.innerHeight/2)
            {
                $(image).attr("top", -100);
                $(image).css("right", Math.floor(Math.random()*800)+"px");
                $(image).attr("speed", (Math.random()*0.5)+0.3);
                $(image).width(Math.random()*100+100);
            }
            $(image).css("bottom", $(image).attr("top")+"px");
            $(image).css("opacity", 1-($(image).attr("top")/(window.innerHeight/2)));
        }    
    },
    render()
    {
        
    }
}