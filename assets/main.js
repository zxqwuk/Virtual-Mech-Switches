function playSound() {
    if (selected_switch != "Disabled") {
        var rand = Math.floor(Math.random() * 6) + 1;
        var location = "assets/switches/" + selected_switch + "/" + rand + ".mp3";
        var sound = new Howl({
            src: [location]
        })
        Howler.volume(VOL);
        sound.play();
    }
}

function startingScript() {
    var location = "assets/switches/" + switches[start_index] + "/1.mp3";
    var sound = new Howl({
        src: [location]
    })
    Howler.volume(VOL);
    sound.play();
    start_index++;
    if (start_index == 10) {
        stopFunction();
    }
}

'use strict';

const ioHook = require('iohook');
var howler = require('howler');

var switches = [
    "Disabled",
    "Cherry-MX-Silent-Black",
    "Gateron-Blue",
    "Gateron-Clear",
    "Gateron-Clear-with-O-Rings",
    "Kailh-BOX-Heavy-Burnt-Orange",
    "Kailh-BOX-Heavy-Navy",
    "Kailh-BOX-Heavy-Pale-Blue",
    "Kailh-BOX-White",
    "Kailh-Pro-Light-Green",
    "Kailh-Pro-Purple"
]

var selected_switch = "Kailh-Pro-Purple";

var VOL = 0.75;
var start_index = 1;

//iohook key codes are sorted qwerty wise with q=16
ioHook.registerShortcut([1], () => { playSound() }); /* ESC */
ioHook.registerShortcut([59], () => { playSound() }); /* F1 */
ioHook.registerShortcut([60], () => { playSound() }); /* F2 */
ioHook.registerShortcut([61], () => { playSound() }); /* F3 */
ioHook.registerShortcut([62], () => { playSound() }); /* F4 */
ioHook.registerShortcut([63], () => { playSound() }); /* F5 */
ioHook.registerShortcut([64], () => { playSound() }); /* F6 */
ioHook.registerShortcut([65], () => { playSound() }); /* F7 */
ioHook.registerShortcut([66], () => { playSound() }); /* F8 */
ioHook.registerShortcut([67], () => { playSound() }); /* F9 */
ioHook.registerShortcut([68], () => { playSound() }); /* F10 */
ioHook.registerShortcut([69], () => { playSound() }); /* F11 */
ioHook.registerShortcut([70], () => { playSound() }); /* F12 */
ioHook.registerShortcut([41], () => { playSound() }); /* Tilder */
ioHook.registerShortcut([2], () => { playSound() }); /* 1 */
ioHook.registerShortcut([3], () => { playSound() }); /* 2 */
ioHook.registerShortcut([4], () => { playSound() }); /* 3 */
ioHook.registerShortcut([5], () => { playSound() }); /* 4 */
ioHook.registerShortcut([6], () => { playSound() }); /* 5 */
ioHook.registerShortcut([7], () => { playSound() }); /* 6 */
ioHook.registerShortcut([8], () => { playSound() }); /* 7 */
ioHook.registerShortcut([9], () => { playSound() }); /* 8 */
ioHook.registerShortcut([10], () => { playSound() }); /* 9 */
ioHook.registerShortcut([11], () => { playSound() }); /* 0 */
ioHook.registerShortcut([12], () => { playSound() }); /* - */
ioHook.registerShortcut([13], () => { playSound() }); /* = */
ioHook.registerShortcut([14], () => { playSound() }); /* backspace */
ioHook.registerShortcut([15], () => { playSound() }); /* TAB */
ioHook.registerShortcut([16], () => { playSound() }); /* Q */
ioHook.registerShortcut([17], () => { playSound() }); /* W */
ioHook.registerShortcut([18], () => { playSound() }); /* E */
ioHook.registerShortcut([19], () => { playSound() }); /* R */
ioHook.registerShortcut([20], () => { playSound() }); /* T */
ioHook.registerShortcut([21], () => { playSound() }); /* Y */
ioHook.registerShortcut([22], () => { playSound() }); /* U */
ioHook.registerShortcut([23], () => { playSound() }); /* I */
ioHook.registerShortcut([24], () => { playSound() }); /* O */
ioHook.registerShortcut([25], () => { playSound() }); /* P */
ioHook.registerShortcut([26], () => { playSound() }); /* [ */
ioHook.registerShortcut([27], () => { playSound() }); /* ] */
ioHook.registerShortcut([28], () => { playSound() }); /* Enter */
ioHook.registerShortcut([58], () => { playSound() }); /* CAPS */
ioHook.registerShortcut([30], () => { playSound() }); /* A */
ioHook.registerShortcut([31], () => { playSound() }); /* S */
ioHook.registerShortcut([32], () => { playSound() }); /* D */
ioHook.registerShortcut([33], () => { playSound() }); /* F */
ioHook.registerShortcut([34], () => { playSound() }); /* G */
ioHook.registerShortcut([35], () => { playSound() }); /* H */
ioHook.registerShortcut([36], () => { playSound() }); /* J */
ioHook.registerShortcut([37], () => { playSound() }); /* K */
ioHook.registerShortcut([38], () => { playSound() }); /* L */
ioHook.registerShortcut([39], () => { playSound() }); /* ; */
ioHook.registerShortcut([40], () => { playSound() }); /* ' */
ioHook.registerShortcut([41], () => { playSound() }); /* # */
ioHook.registerShortcut([42], () => { playSound() }); /* left shift */
ioHook.registerShortcut([43], () => { playSound() }); /* \ */
ioHook.registerShortcut([44], () => { playSound() }); /* Z */
ioHook.registerShortcut([45], () => { playSound() }); /* X */
ioHook.registerShortcut([46], () => { playSound() }); /* C */
ioHook.registerShortcut([47], () => { playSound() }); /* V */
ioHook.registerShortcut([48], () => { playSound() }); /* B */
ioHook.registerShortcut([49], () => { playSound() }); /* N */
ioHook.registerShortcut([50], () => { playSound() }); /* M */
ioHook.registerShortcut([51], () => { playSound() }); /* , */
ioHook.registerShortcut([52], () => { playSound() }); /* . */
ioHook.registerShortcut([53], () => { playSound() }); /* / */
ioHook.registerShortcut([54], () => { playSound() }); /* right shift */
ioHook.registerShortcut([29], () => { playSound() }); /* left ctrl */
ioHook.registerShortcut([3675], () => { playSound() }); /* left Windows key, might not work */
ioHook.registerShortcut([56], () => { playSound() }); /* left alt */
ioHook.registerShortcut([57], () => { playSound() }); /* space */
ioHook.registerShortcut([3640], () => { playSound() }); /* right alt */ 
ioHook.registerShortcut([3676], () => { playSound() }); /* right Windows key, might not work */
ioHook.registerShortcut([3677], () => { playSound() }); /* FN, might not work */
ioHook.registerShortcut([3613], () => { playSound() }); /* right ctrl */
ioHook.registerShortcut([3639], () => { playSound() }); /* PS */
ioHook.registerShortcut([70], () => { playSound() }); /* SL */
ioHook.registerShortcut([3653], () => { playSound() }); /* Pause */
ioHook.registerShortcut([3666], () => { playSound() }); /* Ins */
ioHook.registerShortcut([3667], () => { playSound() }); /* Del */
ioHook.registerShortcut([3655], () => { playSound() }); /* Home */
ioHook.registerShortcut([3663], () => { playSound() }); /* End */
ioHook.registerShortcut([3657], () => { playSound() }); /* Page up */
ioHook.registerShortcut([3665], () => { playSound() }); /* Page down */
ioHook.registerShortcut([57416], () => { playSound() }); /* UP */
ioHook.registerShortcut([57424], () => { playSound() }); /* DOWN */
ioHook.registerShortcut([57419], () => { playSound() }); /* LEFT*/
ioHook.registerShortcut([57421], () => { playSound() }); /* RIGHT */

// Register and start hook
ioHook.start();

function bindSwitchButtons() {
    $("#Disabled").click(function () {
        if ($("#Disabled").hasClass("switch")) {
            selected_switch = "Disabled"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Cherry-MX-Silent-Black").click(function () {
        if ($("#Cherry-MX-Silent-Black").hasClass("switch")) {
            selected_switch = "Cherry-MX-Silent-Black"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Gateron-Blue").click(function () {
        if ($("#Gateron-Blue").hasClass("switch")) {
            selected_switch = "Gateron-Blue";
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Gateron-Clear").click(function () {
        if ($("#Gateron-Clear").hasClass("switch")) {
            selected_switch = "Gateron-Clear"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Gateron-Clear-with-O-Rings").click(function () {
        if ($("#Gateron-Clear-with-O-Rings").hasClass("switch")) {
            selected_switch = "Gateron-Clear-with-O-Rings"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-BOX-Heavy-Burnt-Orange").click(function () {
        if ($("#Kailh-BOX-Heavy-Burnt-Orange").hasClass("switch")) {
            selected_switch = "Kailh-BOX-Heavy-Burnt-Orange"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-BOX-Heavy-Pale-Blue").click(function () {
        if ($("#Kailh-BOX-Heavy-Pale-Blue").hasClass("switch")) {
            selected_switch = "Kailh-BOX-Heavy-Pale-Blue"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-BOX-Heavy-Navy").click(function () {
        if ($("#Kailh-BOX-Heavy-Navy").hasClass("switch")) {
            selected_switch = "Kailh-BOX-Heavy-Navy"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-BOX-White").click(function () {
        if ($("#Kailh-BOX-White").hasClass("switch")) {
            selected_switch = "Kailh-BOX-White"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-Pro-Light-Green").click(function () {
        if ($("#Kailh-Pro-Light-Green").hasClass("switch")) {
            selected_switch = "Kailh-Pro-Light-Green"
            updateSwitch(selected_switch);
            playSound();
        }
    });
    $("#Kailh-Pro-Purple").click(function () {
        if ($("#Kailh-Pro-Purple").hasClass("switch")) {
            selected_switch = "Kailh-Pro-Purple"
            updateSwitch(selected_switch);
            playSound();
        }
    });
}

function updateSwitch(switch_type) {
    $(".selected").attr("id", switch_type);
    $(".selected").html(getNameFromSwitch(switch_type));
    switchArray(switch_type);
}

function getNameFromSwitch(input_switch) {
    while (input_switch.includes("-")) {
        var input_switch = input_switch.replace("-", " ");
    }
    return input_switch;
}

function switchArray(selected_switch) {
    $("#switches").html("");
    for (index in switches) {
        var html = "";
        if (switches[index] != selected_switch) {
            html = "<div class='switch' id='" + switches[index] + "'>" + getNameFromSwitch(switches[index]) + "</div>";
            
        } else {
            html = "<div class='selected' id='" + switches[index] + "'>" + getNameFromSwitch(switches[index]) + "</div>";
        }
        $("#switches").append(html);
    }
    bindSwitchButtons();
}

function stopFunction() {
    clearInterval(myVar);
}

var myVar;
let $ = require("jquery")

$(function () {

    switchArray(selected_switch);
    myVar = setInterval(startingScript, 100);

    $("#volume_slider").on('input', function () {
        VOL = (this.value) / 100;
        $("#volume_value").html(this.value + "%");
    });

    $("#volume_icon").click(function () {
        start_index = 1;
        myVar = setInterval(startingScript, 100);
    });

});