$(function() {
    "use strict";

    // page onload functions
    jBackgrounds.init();
});

class jBackgroundsClass
{
    init(jBackgroundObj)
    {
        if (jBackgroundObj!==undefined)
        {
            this.jBackgroundObj = jBackgroundObj;
            console.log(this.jBackgroundObj);
            $(this.jBackgroundObj.canvas).css("z-index", "-100");
            this.skipFrame = false;
        }
    }
    
    attach(query, options)
    {
        this.jBackgroundObj.init(query, options);
        this.interval = window.setInterval(this.render, 1000/this.jBackgroundObj.targetFPS);
        $(window).resize(function()
        {
            this.jBackgroundObj.resize($(this).width(), $(this).height()); 
        });
    }
    
    render()
    {
        if (!this.skipFrame)
        {
            var a = performance.now();
            this.jBackgroundObj.update();
            this.jBackgroundObj.render();
            var b = performance.now();
            if (b-a>33)
            {
                window.clearInterval(this.interval);
                this.interval = window.setInterval(this.render, b-a);
                //console.log("Adjusted frame rate to match background render.");
                console.log("Skipping frame");
                this.skipFrame = true;
            }
        }
        else
        {
            this.skipFrame = false;
        }
    }
};

jBackgrounds = new jBackgroundsClass();
