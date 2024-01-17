function Hitung(){
    var squareSide = document.getElementById('squareSide').value;
    var luas = squareSide * squareSide;
    document.getElementById('luas').innerHTML = luas;
}

function Riset() {
    document.getElementById('squareSide').value = "";
    document.getElementById('luas').innerHTML = "";
}

function HitungKeliling(){
    var squareSideKeliling = document.getElementById('squareSidekeliling').value;
    var Kel = 4 * squareSideKeliling;
    document.getElementById('Kel').innerHTML = Kel;
}

function RisetKeliling(){
    document.getElementById('squareSidekeliling').value = "";
    document.getElementById('Kel').innerHTML = ""; 
}