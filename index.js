var currentPage = 0;
var intervalLoop;
//title glitch effect
var MatText = "";
var InpMatText = document.getElementById("InpMatText");
var RGB = document.getElementsByClassName("hackText");
//show / hide nex page button
var NextPageBTN = document.getElementsByClassName("nextBTNpage")
var NoMoveTime = -0;

var TypeWriterArr = []
var TypeWriterContente;

/*for (let i = 0; i < 3; i++) {
    TypeWriterArr.push(
        new Typewriter(RGB[i], {
            deleteSpeed: 40,
            loop: true,
        })
        .typeString("Hey ^_^ ")
        .pauseFor("5000")
        .deleteChars(8)
        .typeString("How are you !? ")
        .pauseFor("5000")
        .deleteChars(15)
        .typeString("Write something ").pauseFor("1000").typeString("...").pauseFor("1000").typeString(" ...")
        .pauseFor("5000")
        .deleteChars(24)
        .typeString("Are you hacker ? ").pauseFor("2000").typeString("(\u00a0ಠ\u00a0ʖ̯\u00a0ಠ) ")
        .pauseFor("5000")
        .deleteChars(28)
        .typeString("ᓚᘏᗢ\u00a0ヾ(•ω•`)")
        .pauseFor("5000")
    )
}
for (let i = 0; i < 3; i++) {
    TypeWriterArr[i].start()
}
*/

TypeWriterEnable()

function TypeWriterEnable() {
    TypeWriterContente = new Typewriter(RGB[0], {
            deleteSpeed: 40,
            delay: 70,
            loop: true,
        })
        .typeString("Hey ^_^ ")
        .pauseFor("5000").deleteChars(7)
        .typeString("ow are you !? ")
        .pauseFor("5000").deleteChars(15)
        .typeString("Write something ").pauseFor("1000").typeString("...").pauseFor("1000").typeString(" ...")
        .pauseFor("5000").deleteChars(24)
        .typeString("Are you hacker\u00a0? ").pauseFor("2000").typeString("(\u00a0ಠ\u00a0ʖ̯\u00a0ಠ) ")
        .pauseFor("5000").deleteChars(28)
        .typeString("ᓚᘏᗢ\u00a0ヾ(•ω•`)\nIt's my cat")
        .pauseFor("5000").deleteChars(23)
        .typeString("ಠ-ಠ ").pauseFor("1000").deleteChars(3).typeString("3ಠ ").pauseFor("1000").deleteChars(3).typeString("oಠ ").pauseFor("1000").deleteChars(3).typeString("◡ಠ ")
        .pauseFor("5000").deleteChars(4)
        .start()

}

RGB[0].addEventListener('DOMSubtreeModified', function() {
    //pas logique ni opti, mais sinon ça marche pas
    try {
        RGB[1].removeChild(RGB[1].childNodes[0]);
        RGB[1].removeChild(RGB[1].childNodes[0]);
    } catch (e) {}
    try {
        RGB[2].removeChild(RGB[2].childNodes[0]);
        RGB[2].removeChild(RGB[2].childNodes[0]);
    } catch (e) {}
    try {
        let cont1 = RGB[0].childNodes[0].cloneNode(true)
        let cont2 = RGB[0].childNodes[1].cloneNode(true)
        RGB[2].appendChild(cont1)
        RGB[2].appendChild(cont2)
    } catch (e) {}
    try {
        let cont1 = RGB[0].childNodes[0].cloneNode(true)
        let cont2 = RGB[0].childNodes[1].cloneNode(true)
        RGB[1].appendChild(cont1)
        RGB[1].appendChild(cont2)
    } catch (e) {}
    try {
        // RGB[0].removeChild(RGB[0].childNodes[1]);
    } catch (e) {}
}, false);


document.addEventListener('keydown', function(event) {
    var list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", ",", ".", ";", "?", ":", "/", "@", "%", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " ", "Backspace"]
    for (let i = 0; i < list.length; i++) {

        if (event.key == list[i]) {
            /*if(MatText == "MY WEBSITE"){
                MatText = "";
            }*/
            if (event.key == "Backspace") {
                if (MatText == "") {
                    return
                }
                MatText = MatText.substring(0, MatText.length - 1)
                if (MatText == "") {
                    //activate
                    setTimeout(TypeWriterEnable, 1000)

                }
                RGB[0].innerHTML = MatText;
                RGB[1].innerHTML = MatText;
                RGB[2].innerHTML = MatText;

            } else {
                //desactiver
                TypeWriterDisable()
                MatText = MatText + event.key;
                RGB[0].innerHTML = MatText;
                RGB[1].innerHTML = MatText;
                RGB[2].innerHTML = MatText;
            }
        }
    }
});



function TypeWriterDisable() {
    TypeWriterContente.stop()
}


function changePage(actuPage) {
    if (actuPage == 0) {
        try {changeFrameRateMatrixWand(0);} catch (error) {console.error(error)}
        try {changeFrameRateMagicWand(10)} catch (error) {}
        var element = document.getElementById("backgroundPage1"); //0.8s
        element.classList.add("TranslateTop1");
        setTimeout(TransFrontPage2, 700)
        var element2 = document.getElementById("FrontPage1");
        element2.classList.add("TranslateRight1"); //0.6s
    } else if (actuPage == 1) {
        try {changeFrameRateMatrixWand(35);} catch (error) {console.error("change framerate dont work") }
        try {changeFrameRateMagicWand(0)} catch (error) {console.error(error)}
        var element = document.getElementById("backgroundPage1"); //0.8s
        element.classList.remove("TranslateTop1");
        var element2 = document.getElementById("FrontPage2");
        element2.classList.remove("TranslateTop2"); // 0.8s
        var element3 = document.getElementById("FrontPage1");
        element3.classList.remove("TranslateRight1"); //0.6s
    }
}

function TransFrontPage2() {
    var element = document.getElementById("FrontPage2");
    element.classList.add("TranslateTop2"); // 0.8s
}


function loop() {
    //show / hide nex page button
    NoMoveTime++;
    if (NoMoveTime >= 50) {
        HideNextPageBTN();
    }
}

intervalLoop = setInterval(loop, 100);

function MoveMouse(e) {
    if (NoMoveTime > 0) {
        NoMoveTime = 0;
    }
    ShowNextPageBTN()
}

function ShowNextPageBTN() {
    NextPageBTN[0].style.opacity = 1
}

function HideNextPageBTN() {
    let value = 1 - (NoMoveTime - 50) / 5
    if (value >= 0) {
        NextPageBTN[0].style.opacity = value;
    }
}


window.mobileCheck = function() {
    let check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

if (window.mobileCheck == false) {
    changePage(0);
}

//start 
changeFrameRateMagicWand(0)