/**
 * Zadeklaruj stala CITY_SPEED_LIMIT i przypisz jej wartosc 50,
 * zadeklaruj stala TWO_LANE_EXPRESSWAY_SPEED_LIMIT i przypisz jej wartosc 120,
 * zadeklaruj stala HIGHWAY_SPEED_LIMIT i przypisz jej wartosc 140.
 *
 * Utworz zmienna speed, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowow tej zmiennej wynosi 49.
 *
 * Utworz zmienna typeOfRoad, w ktorej bedzie mozna zmieniac wartosc.
 * Niech wartosc poczatkowa tej zmiennej wynosi 'city'.
 *
 * Napisz instrukcje warunkowa (if, switch lub jedna i druga), w której jezeli zostana spelnione warunki:
 *
 * 1. typeOfRoad ma wartosc 'city' i speed jest mniejsze od wartosci CITY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci CITY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Miasto: przekroczyles prędkość'.
 *
 * 2. typeOfRoad ma wartosc 'expressway' i speed jest mniejsze od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Eska: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT
 * - wyswietlony zostanie tekst: 'Eska: przekroczyles prędkość'.
 *
 * 3. typeOfRoad ma wartosc 'highway' i speed jest mniejsze od wartosci HIGHWAY_SPEED_LIMIT
 * to zostanie wyswietlony tekst 'Autostrada: jedziesz prawidlowo'
 * jezeli ta predkosc jest wieksza od wartosci HIGHWAY_SPEED_LIMIT
 * - wyswietlony zostanie tekst: 'autostrada: przekroczyles prędkość'.
 *
 */

const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';


switch (typeOfRoad) {
    case 'city':
        console.log(
            'Miasto: ' + (speed < CITY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
        );
        break;
    case 'expressway':
        console.log(
            'Eska: ' + (speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
        );
        break;
    case 'highway':
        console.log(
            'Autostrada: ' + (speed < HIGHWAY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
        );
        break;
}


/**
 * Zmien tak wytyczne zadania [ex_2_1], zeby napisac funkcje,
 * ktora bedzie przyjmowala dwa parametry: speed
 * i typeOfRoad. Sprobuj ustawić wartosc typeOfRoad na 'city'
 * funkcja powinna wypisywac to co jest zapisane w zadaniu [ex_2_1]
 * kiedy przy wywolaniu podajemy speed i/lub typeOfRoad.
 *
 * Czyli jezeli wywolam funkcje:
 *
 * myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
 * myFunction(150, 'expressway'); zostanie wyswietlony tekst 'Eska: przekroczyles prędkość'
 * itd.
 *
 */

function myFunction(speed, typeOfRoad) {

    switch (typeOfRoad) {
        case 'city':
            console.log(
                'Miasto: ' + (speed < CITY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
            );
            break;
        case 'expressway':
            console.log(
                'Eska: ' + (speed < TWO_LANE_EXPRESSWAY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
            );
            break;
        case 'highway':
            console.log(
                'Autostrada: ' + (speed < HIGHWAY_SPEED_LIMIT ? 'jedziesz prawidlowo' : 'przekroczyles prędkość')
            );
            break;
    }
}

myFunction(30);
myFunction(150, 'expressway');