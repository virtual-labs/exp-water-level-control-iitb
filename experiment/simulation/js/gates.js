
var notgate = function (canvasId,x,y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x=x;
    this.y = y;
    this.outx = x + 25;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y;
    
}

notgate.prototype.draw=function(){
    var x=this.x;
    var y=this.y;
    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(x, y - 15);
    this.context.lineTo(x + 25, y);
    this.context.lineTo(x, y + 15);
    this.context.closePath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    //this.context.addHitRegion({ id: x });
    this.context.stroke();

    this.context.beginPath();

    this.context.arc(x + 25, y, 5, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.fillStyle = "#888";
    this.context.fill();
    this.context.stroke();
    //this.canvas.onclick=function(event)
    //{
      //  if(event.region)
        //{
        //    alert(event.region);
        //}
    //}
}

notgate.prototype.setip1=function(ipval)
{
    this.ip = ipval;
    this.output();
}

notgate.prototype.outlink=function(gate,inputno,drawlink)
{
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if(drawlink==1)
    {
        this.drawoutlink();
    }
    
}

notgate.prototype.drawoutlink = function ()
{
    var x;
    var y;
    if (this.linkip == 1)
    {
         x = this.gate.xin1;
         y = this.gate.yin1;
    }
    else
    {
         x = this.gate.xin2;
         y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3 , y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    
    if (this.ou == 1)
    {
        this.context.strokeStyle = "green";
    }
    else
    {
        this.context.strokeStyle = "grey";
    }
    
    this.context.lineWidth = 3;
    this.context.stroke();

}

notgate.prototype.output=function()
{
    
    if (this.ip == 1) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);
                
            }
        }
        else
        {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
        
    }

    else if (this.ip == 0) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);
                
            }
        }
        else
        {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
       this.ou = 1;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}
    
  



var andgate=function(canvasid, x, y) {
    //orgate("mycanvas", 200, 100);
    this.canvas = document.getElementById(canvasid);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 35;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y - 5;
    this.xin2 = x;
    this.yin2 = y + 5;
    
}

andgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.beginPath();
    this.context.moveTo(x + 20, y - 15);
    this.context.lineTo(x, y - 15);
    this.context.lineTo(x, y + 15);
    this.context.lineTo(x + 20, y + 15);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();

    this.context.beginPath();

    this.context.arc(x + 20, y, 15, Math.PI / 2, -Math.PI / 2, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();
}

andgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

andgate.prototype.setip2 = function (ipval) {
    this.ip1 = ipval;
    this.output();
}

andgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

andgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;;
    this.context.stroke();

}

andgate.prototype.output = function () {

    if (this.ip == 1 && this.ip1==1) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else
        {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;

    }

    else  {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else
        {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}

var orgate = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 25;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y - 5;
    this.xin2 = x;
    this.yin2 = y + 5;
}

orgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y
    this.context.beginPath();
    this.context.arc(x + -100, y, 100, Math.PI / 18, -Math.PI / 18, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();


    this.context.beginPath();
    this.context.moveTo(x, y - 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y - 15, x + 25, y);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x, y + 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y + 15, x + 25, y);
    this.context.stroke();
}

orgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

orgate.prototype.setip2 = function (ipval) {
    this.ip1 = ipval;
    this.output();
}

orgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

orgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

orgate.prototype.output = function () {

    if (this.ip == 1 || this.ip1 == 1) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;

    }

    else {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}

var xorgate = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 25;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y - 5;
    this.xin2 = x;
    this.yin2 = y + 5;
}

xorgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y
    this.context.beginPath();
    this.context.arc(x + -100, y, 100, Math.PI / 18, -Math.PI / 18, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();


    this.context.beginPath();
    this.context.moveTo(x, y - 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y - 15, x + 25, y);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x, y + 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y + 15, x + 25, y);
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(x + -105, y, 100, Math.PI / 18, -Math.PI / 18, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();
}

xorgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

xorgate.prototype.setip2 = function (ipval) {
    this.ip1 = ipval;
    this.output();
}

xorgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

xorgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

xorgate.prototype.output = function () {

    if ((this.ip == 1 && this.ip1 == 0) || (this.ip == 0 && this.ip1 == 1)) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;

    }

    else {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}

var nandgate = function (canvasid, x, y) {
    //orgate("mycanvas", 200, 100);
    this.canvas = document.getElementById(canvasid);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 35;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y - 5;
    this.xin2 = x;
    this.yin2 = y + 5;

}

nandgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    
    this.context.beginPath();
    this.context.moveTo(x + 20, y - 15);
    this.context.lineTo(x, y - 15);
    this.context.lineTo(x, y + 15);
    this.context.lineTo(x + 20, y + 15);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();

    this.context.beginPath();

    this.context.arc(x + 20, y, 15, Math.PI / 2, -Math.PI / 2, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();

    this.context.beginPath();

    this.context.arc(x + 35, y, 5, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.fillStyle = "#888";
    this.context.fill();
    this.context.stroke();
}

nandgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

nandgate.prototype.setip2 = function (ipval) {
    this.ip1 = ipval;
    this.output();
}

nandgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

nandgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

nandgate.prototype.output = function () {

    if (this.ip == 1 && this.ip1 == 1) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;

    }

    else {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}

var norgate = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 25;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y - 5;
    this.xin2 = x;
    this.yin2 = y + 5;
}

norgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y
    this.context.beginPath();
    this.context.arc(x + -100, y, 100, Math.PI / 18, -Math.PI / 18, true);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";

    this.context.stroke();


    this.context.beginPath();
    this.context.moveTo(x, y - 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y - 15, x + 25, y);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x, y + 100 * Math.sin(Math.PI / 18));
    this.context.quadraticCurveTo(x + 15, y + 15, x + 25, y);
    this.context.stroke();

    this.context.arc(x + 25, y, 5, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.fillStyle = "#888";
    this.context.fill();
    this.context.stroke();
}

norgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

norgate.prototype.setip2 = function (ipval) {
    this.ip1 = ipval;
    this.output();
}

norgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

norgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y);
    this.context.lineTo(x3, this.y);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

norgate.prototype.output = function () {

    if (this.ip == 0 && this.ip1 == 0) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;

    }

    else {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }
}

var divgate = function (canvasid, x, y) {
    //orgate("mycanvas", 200, 100);
    this.canvas = document.getElementById(canvasid);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;

    this.outx = x + 20;
    this.drawlink = 0;
    this.drawlink1 = 0;
    this.xin1 = x;
    this.yin1 = y ;
    this.xin2 = x;
    this.yin2 = y + 5;

}

divgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.beginPath();
    this.context.moveTo(x + 20, y - 15);
    this.context.lineTo(x, y - 15);
    this.context.lineTo(x, y + 15);
    this.context.lineTo(x + 20, y + 15);
    this.context.closePath();
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();

    
}

divgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}



divgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

    
}

divgate.prototype.outlink1 = function (gate, inputno, drawlink) {
    this.gate1 = gate;
    this.linkip1 = inputno;
    this.drawlink1 = drawlink;
    if (drawlink == 1) {
        this.drawoutlink1();
    }


}

divgate.prototype.drawoutlink = function () {
    var x;
    var y;
    if (this.linkip == 1) {
        x = this.gate.xin1;
        y = this.gate.yin1;
    }
    else {
        x = this.gate.xin2;
        y = this.gate.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y-5);
    this.context.lineTo(x3, this.y-5);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
        
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

divgate.prototype.drawoutlink1 = function () {
    var x;
    var y;
    if (this.linkip1 == 1) {
        x = this.gate1.xin1;
        y = this.gate1.yin1;
    }
    else {
        x = this.gate1.xin2;
        y = this.gate1.yin2;
    }
    var x3 = (this.outx + x) / 2;
    this.context.beginPath();
    this.context.moveTo(this.outx, this.y+4);
    this.context.lineTo(x3, this.y+5);
    this.context.lineTo(x3, y);
    this.context.lineTo(x, y);
    //this.context.closePath();
    this.context.lineWidth = 2;
    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

divgate.prototype.output = function () 
{
    if (this.ip == 1) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(1);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(1);

            }
        }
        this.ou = 1;

    }

    else if (this.ip == 0) {
        if (this.linkip == 1) {
            if (!this.gate) {

            }
            else {
                this.gate.setip1(0);

            }
        }
        else {
            if (!this.gate) {

            }
            else {
                this.gate.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink == 1) {
        this.drawoutlink();
    }

    // out two
    if (this.ip == 1) {
        if (this.linkip1 == 1) {
            if (!this.gate1) {

            }
            else {
                this.gate1.setip1(1);

            }
        }
        else {
            if (!this.gate1) {

            }
            else {
                this.gate1.setip2(1);

            }
        }
        this.ou = 1;

    }

    else if (this.ip == 0) {
        if (this.linkip1 == 1) {
            if (!this.gate1) {

            }
            else {
                this.gate1.setip1(0);

            }
        }
        else {
            if (!this.gate1) {

            }
            else {
                this.gate1.setip2(0);

            }
        }
        this.ou = 0;
    }
    if (this.drawlink1 == 1) {
        this.drawoutlink1();
    }

    
}

var bulb = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;
   
    this.xin1 = x-15;
    this.yin1 = y;

}

bulb.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.beginPath();

    this.context.arc(x , y, 15, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    if (this.ip == 1)
    {
        this.context.fillStyle = "green";
    }
    else
    {
        this.context.fillStyle = "#888";
    }
    this.context.strokeStyle = "black";
    
    this.context.fill();
    this.context.stroke();
}

bulb.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}

var zener = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;

    this.xin1 = x ;
    this.yin1 = y;

}

zener.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.save();
    this.context.translate(x, y);
    this.context.rotate(-Math.PI/2);
    x = 10;
    y = 0;
    //this.context.rotate(-Math.PI);
    this.context.font = '12pt Calibri';
    this.context.fillStyle = 'blue';
    this.context.fillText('+5 V', x + 80, y - 8);
    this.context.fillText('R', x + 55, y - 8);
    this.context.beginPath();

    this.context.moveTo(-2, 0);
    this.context.lineTo(x + 4, 0);
    if (this.ip == 0) {
        this.context.strokeStyle = "grey";
    }
    else {
        this.context.strokeStyle = "green";
    }
    this.context.lineWidth = 3;
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(x + 95, y, 5, 0, 2 * Math.PI, false);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 20, y);
    this.context.lineTo(x + 40, y);
    this.context.lineTo(x + 45, y - 5);
    this.context.lineTo(x + 50, y + 5);
    this.context.lineTo(x + 55, y - 5);
    this.context.lineTo(x + 60, y + 5);
    this.context.lineTo(x + 65, y - 5);
    this.context.lineTo(x + 70, y+5);
    this.context.lineTo(x + 75, y);
    this.context.lineTo(x + 95, y);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();

    this.context.beginPath();

    this.context.moveTo(x, y-15);
    this.context.lineTo(x , y + 15);
    
    this.context.stroke();

    this.context.beginPath();
    
    this.context.moveTo(x, y);
    this.context.lineTo(x+20 , y+15 );
    this.context.lineTo(x + 20, y-15);
    
    this.context.closePath();

    this.context.lineWidth = 2;
    if (this.ip == 1) {
        this.context.fillStyle = "#888";
    }
    else {
        this.context.fillStyle = "green";
    }
    this.context.strokeStyle = "black";

    this.context.fill();
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 8, y + 20);
    this.context.lineTo(x-10, y + 40);
    this.context.lineTo(x  , y + 42);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x + 25, y + 37);
    this.context.lineTo(x+7, y + 57);
    this.context.lineTo(x+17, y + 59);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x-10, y+ 40);
    this.context.lineTo(x -7, y +25);
    
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 7, y + 57);
    this.context.lineTo(x + 4, y + 42);
    
    this.context.stroke();

    this.context.restore();
    
}

zener.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}

var dbulb = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;

    this.xin1 = x-15 ;
    this.yin1 = y;

}

dbulb.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    
    this.context.beginPath();

    this.context.arc(x, y, 15, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    if (this.ip == 1) {
        this.context.fillStyle = "green";
    }
    else {
        this.context.fillStyle = "#888";
    }
    this.context.strokeStyle = "black";

    this.context.fill();
    this.context.stroke();

    

    this.context.font = '20pt Calibri';
    this.context.fillStyle = 'brown';
    if (this.ip == 1)
    {
        this.context.fillText('1', x - 8, y + 8);
    }
    else
    {
        this.context.fillText('0', x - 8, y + 8);
    }
    
    
}

dbulb.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}

var zenerin = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;

    this.xin1 = x;
    this.yin1 = y;

}

zenerin.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.save();
    this.context.translate(x, y);
    this.context.rotate(-Math.PI / 2);
    x = 10;
    y = 0;
    //this.context.rotate(-Math.PI);
    this.context.font = '12pt Calibri';
    this.context.fillStyle = 'blue';
    this.context.fillText('+5 V', x + 80, y - 8);
    this.context.fillText('R', x + 55, y - 8);
    this.context.beginPath();

    this.context.moveTo(-2, 0);
    this.context.lineTo(x + 4, 0);
    if (this.ip == 0) {
        this.context.strokeStyle = "grey";
    }
    else {
        this.context.strokeStyle = "green";
    }
    this.context.lineWidth = 3;
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(x + 95, y, 5, 0, 2 * Math.PI, false);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 20, y);
    this.context.lineTo(x + 40, y);
    this.context.lineTo(x + 45, y - 5);
    this.context.lineTo(x + 50, y + 5);
    this.context.lineTo(x + 55, y - 5);
    this.context.lineTo(x + 60, y + 5);
    this.context.lineTo(x + 65, y - 5);
    this.context.lineTo(x + 70, y + 5);
    this.context.lineTo(x + 75, y);
    this.context.lineTo(x + 95, y);
    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    this.context.stroke();

    this.context.beginPath();

    this.context.moveTo(x, y - 15);
    this.context.lineTo(x, y + 15);

    this.context.stroke();

    this.context.beginPath();

    this.context.moveTo(x, y);
    this.context.lineTo(x + 20, y + 15);
    this.context.lineTo(x + 20, y - 15);

    this.context.closePath();

    this.context.lineWidth = 2;
    if (this.ip == 1) {
        this.context.fillStyle = "#888";
    }
    else {
        this.context.fillStyle = "red";
    }
    this.context.strokeStyle = "black";

    this.context.fill();
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 8, y + 20);
    this.context.lineTo(x - 10, y + 40);
    this.context.lineTo(x, y + 42);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x + 25, y + 37);
    this.context.lineTo(x + 7, y + 57);
    this.context.lineTo(x + 17, y + 59);
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(x - 10, y + 40);
    this.context.lineTo(x - 7, y + 25);

    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(x + 7, y + 57);
    this.context.lineTo(x + 4, y + 42);

    this.context.stroke();

    this.context.restore();

}

zenerin.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}

var bulbred = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;

    this.xin1 = x - 15;
    this.yin1 = y;

}

bulbred.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.beginPath();

    this.context.arc(x, y, 15, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    if (this.ip == 1) {
        this.context.fillStyle = "red";
    }
    else {
        this.context.fillStyle = "#888";
    }
    this.context.strokeStyle = "black";

    this.context.fill();
    this.context.stroke();
}

bulbred.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}

var bulbrg = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.ip = 0;

    this.xin1 = x - 15;
    this.yin1 = y;

}

bulbrg.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    this.context.beginPath();

    this.context.arc(x, y, 15, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    if (this.ip == 1) {
        this.context.fillStyle = "green";
    }
    else {
        this.context.fillStyle = "red";
    }
    this.context.strokeStyle = "black";

    this.context.fill();
    this.context.stroke();
}

bulbrg.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.draw();
}