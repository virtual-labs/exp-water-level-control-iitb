var outgate = function (canvasId, x, y) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.outx = x + 30;
    this.drawlink = 0;
    this.xin1 = x;
    this.yin1 = y;
    this.ou = 0;
}

outgate.prototype.draw = function () {
    var x = this.x;
    var y = this.y;
    

    this.context.beginPath();

    this.context.arc(x + 15, y, 15, 0, 2 * Math.PI, false);

    this.context.lineWidth = 2;
    this.context.strokeStyle = "black";
    if (this.ou == 0)
    {
        this.context.fillStyle = "#888";
    }
    else
    {
        this.context.fillStyle = "green";
    }
    
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

outgate.prototype.setip1 = function (ipval) {
    this.ip = ipval;
    this.output();
}

outgate.prototype.outlink = function (gate, inputno, drawlink) {
    this.gate = gate;
    this.linkip = inputno;
    this.drawlink = drawlink;
    if (drawlink == 1) {
        this.drawoutlink();
    }

}

outgate.prototype.drawoutlink = function () {
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

    if (this.ou == 1) {
        this.context.strokeStyle = "green";
    }
    else {
        this.context.strokeStyle = "grey";
    }

    this.context.lineWidth = 3;
    this.context.stroke();

}

outgate.prototype.output = function () {

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
}
