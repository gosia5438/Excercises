/*
  Za pomoca funkcji przegladarki prompt i alert oraz znanych Ci mechanizmow (instrukcji)
  jezyka javascript napisz tekstowa wersje gry szubienica. Gra ma polegać na tym, ze program
  losowo wybiera słowo z kolekcji slow. Program ukrywa to słowo za pomoca znakow _ i wyswietla
  graczowi to ukryte slowo z prośbą o wpisanie litery.
  Jezeli wpisana litera istnieje w slowie, znak _ zamieniany jest na litere i wyswietlone zostanie
  slowo ukryte z odslonientymi literami ktore zostaly odgadniete + prosba o wpisanie kolejnej litery.
  Jezeli odgadniete zostanie slowo konczy sie gra z komunikatem (alert) zwyciestwo.

  Proponuje dodatkowo zrobic mechanizm, ktory bedzie zliczal bledne proby - ilosc blednych prob niech okresla liczba, ktora bedzie okreslona przez ilosc znakow w wybranym slowie. Niech to bedzie liczba calkowita stanowiaca 1/4 dlugosci lancucha zgadywanego slowa. Jezeli limit ten zostanie osiagniety konczy sie gra (GAME OVER)
*/


const passwords = ['ALFABET', 'DŁUGOPIS', 'KASZA'];
replaceAt = (fullString, index, char) => {
  return fullString.substring(0, index) + char + fullString.substring(index + 1);
}
let final_password = '';
let password_random = passwords[Math.floor(Math.random() * passwords.length)]

for (i = 0; i < password_random.length; i++) {
  final_password = final_password + "_";
}
let char;
let indexOf = password_random.indexOf(char);
let attempts = 0;
let isFound;

while (attempts <= 2) {
  char = prompt(`Find word ${final_password} \nEnter letter`);
  if (char.length > 1) {
    attempts++;
    alert('Put single letter')
    continue;
  }
  for (i = 0; i < password_random.length; i++) {
    if (password_random.charAt(i) === char) {
      final_password = replaceAt(final_password, i, char);
      isFound = true;
    }
  }

  // wez litere
  // znajdz pozycje znaku
  alert(final_password);

  if (!isFound) {
    attempts++;
  }
  isFound = false;
}