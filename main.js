var $ = function (selector) {
    return document.getElementById(selector);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

    var perchic = $("perchic");
    var hinkali = $("hinkali");
    var krivetka = $("krivetka");
    var korzina = $("korzina");
   // var selectElem = $("keepdiv");
    var randomRight;
    var randomTop;

// работа с товарами

    var elementsTovar = document.querySelectorAll('.tovar');

    for (var i = 0; i < elementsTovar.length; i++) {
        //elementsTovar[i].onclick = function(event) {
    //    event.target.setAttribute('id','keepdiv');
        //return false;
    // };
    elementsTovar[i].addEventListener('dragstart', function (evt) {
        this.style.border = "3px dotted #000";                
        evt.dataTransfer.effectAllowed = "move";
        evt.dataTransfer.setData("Text", this.id);
    }, false);
    elementsTovar[i].addEventListener("dragend", function (evt) {
                    this.style.border = ""; 
                }, false);

    }

// корзина 

    korzina.addEventListener("dragenter", function (evt) {
        this.style.border = "3px solid red";
    }, false);

    korzina.addEventListener("dragleave", function (evt) {
        this.style.border = "";
    }, false);

    korzina.addEventListener("dragover", function (evt) {
        if (evt.preventDefault) evt.preventDefault();
        return false;
    }, false);

    korzina.addEventListener("drop", function (evt) {
        if (evt.preventDefault) evt.preventDefault();
        if (evt.stopPropagation) evt.stopPropagation();

        this.style.border = "";
        var id = evt.dataTransfer.getData("Text");  

        var elem = document.getElementById(id);
        var k = this.appendChild(elem);

        randomRight = getRandomInt(200,350);
        randomTop = getRandomInt(50,180);
        k.style.cssText=`position: absolute; \
                top: ${randomTop}px; \
                right:  ${randomRight}px; \
                `;

        return false;
    }, false);
        


