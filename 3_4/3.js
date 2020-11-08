/**
  Do zadania ex_2 spróbuj utworzyć obiekt ktorego kluczem bedzie odpowiednio
  wartosc typeOfRoad (city, expressway, highway) a wartosciami tych kluczy bedzie
  obiekt z kluczami msgPrefix i maxSpeed z wartoscimi odpowiednio
  (miasto, eska, autostrada) i ( 50, 120, 140);

  sprobuj utworzyc liste dwuelementowa z elementami odpowiednio:
  0: 'przekroczyłeś prędkość'
  1: 'jedziesz prawidłowo'
 */

const objTypeOfRoad = {
    city: {
        msgPrefix: 'Miasto ',
        maxSpeed: 50
    },
    expressway: {
        msgPrefix: 'Eska ',
        maxSpeed: 120
    },
    highway: {
        msgPrefix: 'Autostrada ',
        maxSpeed: 140
    }
}

const checkSpeed = ['przekroczyłeś prędkość', 'jedziesz prawidłowo'];

function myFunction(speed, typeOfRoad) {
    switch (typeOfRoad) {
        case Object.keys(objTypeOfRoad)[0]:
            console.log(
                objTypeOfRoad.city.msgPrefix + (speed < objTypeOfRoad.city.maxSpeed ? checkSpeed[0] : checkSpeed[1])
            );
            break;
        case Object.keys(objTypeOfRoad)[1]:
            console.log(
                objTypeOfRoad.expressway.msgPrefix + (speed < objTypeOfRoad.expressway.maxSpeed ? checkSpeed[0] : checkSpeed[1])
            );
            break;
        case Object.keys(objTypeOfRoad)[2]:
            console.log(
                objTypeOfRoad.highway.msgPrefix + (speed < objTypeOfRoad.highway.maxSpeed ? checkSpeed[0] : checkSpeed[1])
            );
            break;
    }
}

myFunction(30, 'city');
myFunction(150, 'expressway');
myFunction(100, 'highway');



/*
  Napisz funkcję fn(param) ktora przyjmie jedna liczbe jako parametr.
  liczba ta bedzie stanowila domkniecie przedzialu z lewej strony
  czyli liczbe minimalna w przedziale a liczba domykajaca przedzial
  z prawej strony to liczba podana w parametrze funkcji powiekszona o 10
  czyli zostanie ustanowiony przedzial [param, param + 10];

  funkcja ma wypisac kwadrat (liczba * liczba) kazdej liczby calkowitej
  z tego przedzialu

  czyli fn(0); wypisze
  0
  1
  4
  9
  16
  25
  36
  49
  64
  81
  100
*/

let a = 0;
let b = a + 10;

function squareCount(a) {
    while (a <= b) {
        console.log(a * a);
        a++;
    }
}
squareCount(0);