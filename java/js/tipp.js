function Tipp()
{
let rnd = Math.floor(Math.random()*90)+1;
let Szamok = [];
Szamok[0] = rnd;
let i = 1;
while(i<5)
    {
    rnd = Math.floor(Math.random()*90)+1;
    if(Szamok.includes(rnd)==false)
        {
        Szamok[i] = rnd;
        i++;
        }
    }
    document.getElementById("szam1").innerHTML = Szamok[0];
    document.getElementById("szam2").innerHTML = Szamok[1];
    document.getElementById("szam3").innerHTML = Szamok[2];
    document.getElementById("szam4").innerHTML = Szamok[3];
    document.getElementById("szam5").innerHTML = Szamok[4];
}