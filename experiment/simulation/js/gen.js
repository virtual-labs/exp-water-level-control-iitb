function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var canvas = document.getElementById('mycanvas');
var context = canvas.getContext('2d');
var gatetype = 0;
var gatecontainer = [];
var gateoutcontainer = [];
var gateconnect1;
var gateconnect2;
var connectorfound = 0;
var startsim = 0;
var gatelink = [];

var undogatecontainer = [];
var undoconnectioncontainer = [];

canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    //writeMessage(canvas, message);
}, false);

canvas.addEventListener("mousedown", mouseclick, false);
function mouseclick(evt) {
    var mousePos = getMousePos(canvas, evt);
    //alert("x:" + mousePos.x + " y:" + mousePos.y);
    if (startsim == 0) {
        if (gatetype == 1) {
            var o1 = new orgate("mycanvas", mousePos.x - 10, mousePos.y);
            o1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: o1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 2) {
            var a1 = new andgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 3) {
            var a1 = new notgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 4) {
            var a1 = new norgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }

        else if (gatetype == 5) {
            var a1 = new xorgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 6) {
            var a1 = new nandgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 7) {
            var a1 = new divgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 8) {
            var a1 = new bulb("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 9) {
            var a1 = new dbulb("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 10) {
            var a1 = new bulbred("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 11) {
            var a1 = new bulbrg("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 16) {
            var a1 = new outgate("mycanvas", mousePos.x - 10, mousePos.y);
            a1.draw();
            gatetype = 0;
            gatecontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            gateoutcontainer.push({ gate: a1, x: mousePos.x, y: mousePos.y });
            sendmsg("Gate Placed");
        }
        else if (gatetype == 12 && connectorfound == 0) {

            for (i = 0; i < gatecontainer.length; i++) {

                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 1;
                    gateconnect1 = gatecontainer[i].gate;
                    sendmsg("Select second gate");
                    break;
                }
            }
        }
        else if (gatetype == 12 && connectorfound == 1) {

            for (i = 0; i < gatecontainer.length; i++) {
                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 0;
                    gateconnect2 = gatecontainer[i].gate;
                    gateconnect1.outlink(gateconnect2, 1, 1);
                    gatelink.push({ gate1: gateconnect1, gate2: gateconnect2, output: 1, input: 1 });
                    gateconnect1 = null;
                    gateconnect2 = null;
                    gatetype = 0;
                    sendmsg("Connection Completed");
                    break;
                }
            }
        }
        else if (gatetype == 13 && connectorfound == 0) {

            for (i = 0; i < gatecontainer.length; i++) {

                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 1;
                    gateconnect1 = gatecontainer[i].gate;
                    sendmsg("Select second gate");
                    break;
                }
            }
        }
        else if (gatetype == 13 && connectorfound == 1) {

            for (i = 0; i < gatecontainer.length; i++) {
                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 0;
                    gateconnect2 = gatecontainer[i].gate;
                    gateconnect1.outlink(gateconnect2, 2, 1);
                    gatelink.push({ gate1: gateconnect1, gate2: gateconnect2, output: 1, input: 2 });
                    gateconnect1 = null;
                    gateconnect2 = null;
                    gatetype = 0;
                    sendmsg("Connection Completed");
                    break;
                }
            }
        }
        else if (gatetype == 14 && connectorfound == 0) {

            for (i = 0; i < gatecontainer.length; i++) {

                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 1;
                    gateconnect1 = gatecontainer[i].gate;
                    sendmsg("Select second gate");
                    break;
                }
            }
        }
        else if (gatetype == 14 && connectorfound == 1) {

            for (i = 0; i < gatecontainer.length; i++) {
                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 0;
                    gateconnect2 = gatecontainer[i].gate;
                    gateconnect1.outlink1(gateconnect2, 2, 1);
                    gatelink.push({ gate1: gateconnect1, gate2: gateconnect2, output: 2, input: 2 });
                    gateconnect1 = null;
                    gateconnect2 = null;
                    gatetype = 0;
                    sendmsg("Connection Completed");
                    break;
                }
            }
        }
        else if (gatetype == 15 && connectorfound == 0) {

            for (i = 0; i < gatecontainer.length; i++) {

                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 1;
                    gateconnect1 = gatecontainer[i].gate;
                    sendmsg("Select second gate");
                    break;
                }
            }
        }
        else if (gatetype == 15 && connectorfound == 1) {

            for (i = 0; i < gatecontainer.length; i++) {
                if (Math.abs(gatecontainer[i].x - mousePos.x) < 25 && Math.abs(gatecontainer[i].y - mousePos.y) < 25) {
                    connectorfound = 0;
                    gateconnect2 = gatecontainer[i].gate;
                    gateconnect1.outlink1(gateconnect2, 1, 1);
                    gatelink.push({ gate1: gateconnect1, gate2: gateconnect2, output: 2, input: 1 });
                    gateconnect1 = null;
                    gateconnect2 = null;
                    gatetype = 0;
                    sendmsg("Connection Completed");
                    break;
                }
            }
        }
    }
    else {
        for (i = 0; i < gateoutcontainer.length; i++) {
            if (Math.abs(gateoutcontainer[i].x - mousePos.x) < 25 && Math.abs(gateoutcontainer[i].y - mousePos.y) < 25) {

                gateconnect1 = gateoutcontainer[i].gate;
                if (gateconnect1.ou == 0) {
                    gateconnect1.setip1(1);
                }
                else {
                    gateconnect1.setip1(0);
                }
                draw();
                break;
            }
        }
    }

}

function addorgate() {

    if (startsim == 0) {
        gatetype = 1;
        sendmsg("Place or gate");
    }

}
function addandgate() {
    if (startsim == 0) {
        gatetype = 2;
        sendmsg("Place and gate");
    }
}
function addnotgate() {
    if (startsim == 0) {
        gatetype = 3;
        sendmsg("Place not gate");
    }
}
function addnorgate() {
    if (startsim == 0) {
        gatetype = 4;
        sendmsg("Place nor gate");
    }
}
function addxorgate() {
    if (startsim == 0) {
        gatetype = 5;
        sendmsg("Place xor gate");
    }
}
function addnandgate() {
    if (startsim == 0) {
        gatetype = 6;
        sendmsg("Place nand gate");
    }
}
function adddivgate() {
    if (startsim == 0) {
        gatetype = 7;
        sendmsg("Place Y connector");
    }
}
function addbulbgate() {
    if (startsim == 0) {
        gatetype = 8;
        sendmsg("Place green Led");
    }
}
function adddbulbgate() {
    gatetype = 9;
}
function addbulredbgate() {
    if (startsim == 0) {
        gatetype = 10;
        sendmsg("Place red Led");
    }
}
function addbulbrggate() {
    gatetype = 11;
}

function connector1() {
    if (startsim == 0) {
        gateconnect1 = null;
        gateconnect2 = null;
        connectorfound = 0;
        gatetype = 12;
        sendmsg("Select first gate");
    }
}
function connector2() {
    if (startsim == 0) {
        gateconnect1 = null;
        gateconnect2 = null;
        gatetype = 13;
        connectorfound = 0;
        sendmsg("Select first gate");
    }
}
function connector3() {
    if (startsim == 0) {
        gateconnect1 = null;
        gateconnect2 = null;
        gatetype = 14;
        connectorfound = 0;
        sendmsg("Select first gate");
    }
}
function connector4() {
    if (startsim == 0) {
        gateconnect1 = null;
        gateconnect2 = null;
        gatetype = 15;
        connectorfound = 0;
        sendmsg("Select first gate");
    }
}
function addoutgate() {
    if (startsim == 0) {
        gatetype = 16
        sendmsg("Place Digital Switch");
    }
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < gatecontainer.length; i++) {
        var a1 = gatecontainer[i].gate;
        a1.draw();
    }
    for (i = 0; i < gatelink.length; i++) {
        var a1 = gatelink[i].gate1;
        var a2 = gatelink[i].gate2;
        var output = gatelink[i].output;
        var input = gatelink[i].input;
        if (output == 1) {
            a1.outlink(a2, input, 1);
        }
        else if (output == 2) {
            a1.outlink1(a2, input, 1);
        }

    }
}
function startsim1() {
    startsim = 1;
    sendmsg("Simulator Started ");
    for (i = 0; i < gateoutcontainer.length; i++) {


        gateconnect1 = gateoutcontainer[i].gate;
        gateconnect1.setip1(0);
    }
}

function stopsim1() {
    startsim = 0;
    sendmsg("Simulator Stoped ");

}
function reset() {
    gatetype = 0;
    gatecontainer = [];
    gateoutcontainer = [];
    gateconnect1 = null;
    gateconnect2 = null;
    connectorfound = 0;
    startsim = 0;
    gatelink = [];
    context.clearRect(0, 0, canvas.width, canvas.height);
    sendmsg("Reset Sucessful ");


}
function sendmsg(msg) {
    document.getElementById("l1").innerHTML = msg;
}

function undoGate()
{
    // alert("Entering UNDO function");
    // alert(gatecontainer.length);
    if(gatecontainer.length>0)
    {
        undogatecontainer.push(gatecontainer.pop());
        draw();
        sendmsg("UNDO GATE DONE");
    }
    else {
        sendmsg("Cannot UNDO GATE");
    }
}

function undoConnection()
{
    if(gatelink.length>0)
    {
        undoconnectioncontainer.push(gatelink.pop());
        draw();
        sendmsg("UNDO CONNECTION DONE");
    }
    else {
        sendmsg("Cannot UNDO CONNECTION");
    }

}

function redoGate()
{
    if(undogatecontainer.length>0)
    {
        gatecontainer.push(undogatecontainer.pop());
        draw();
        sendmsg("REDO GATE DONE");
    }
    else {
        sendmsg("Cannot REDO GATE");
    }
}

function redoConnection()
{
    if(undoconnectioncontainer.length>0)
    {
        gatelink.push(undoconnectioncontainer.pop());
        draw();
        sendmsg("REDO CONNECTION DONE");
    }
    else {
        sendmsg("Cannot REDO CONNECTION");
    }
}