function createFontModifier(op){
    let size = window.getComputedStyle(document.getElementById('title')).getPropertyValue('font-size');
    let sizeFontT = parseFloat(size);
    
    size = window.getComputedStyle(document.getElementById('hist')).getPropertyValue('font-size');
    let sizeFontP = parseFloat(size);

    if(op == "add"){
        return function addFont(sizeAdd){
            document.getElementById('title').style.fontSize = (sizeFontT + parseFloat(sizeAdd)) + 'px';
            document.getElementById('hist').style.fontSize = (sizeFontP + parseFloat(sizeAdd)) + 'px';
            
        }
    }
    else if(op == "red"){
        return function redFont(sizeRed){
            document.getElementById('title').style.fontSize = (sizeFontT - parseFloat(sizeRed)) + 'px';
            document.getElementById('hist').style.fontSize = (sizeFontP - parseFloat(sizeRed)) + 'px';
        }
    }
}

document.getElementById('add').addEventListener('click', function(){
    let aumentarFonte = createFontModifier("add");
    aumentarFonte(document.getElementById('valueAdd').value)
    
})

document.getElementById('red').addEventListener('click', function(){
    let diminuirFonte = createFontModifier("red");
    diminuirFonte(document.getElementById('valueRed').value)

})