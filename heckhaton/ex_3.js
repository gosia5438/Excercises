/**
 * 1. Napisz funkcje ktora jako parametr przyjmie kolekcje taka jak w stalej data
 * i zwroci obiekt w ktorym kluczem bedzie wartosc wlasnosci "code" a wartoscia
 * bedzie wartosc wlasnosci "mid"
 *
 * czyli
 *
 * {
 *  RUB: 0.1266,
 *  IDR: 3.8234,
 *  ...
 * }
 *
 * 2. napisz funkcje, ktora jako parametr przyjmie obiekt zwrocony przez funkcje z pt1
 * i zwroci najmnijesza wartosc mid z listy
 */





const data = [{
        "currency": "rubel rosyjski",
        "code": "RUB",
        "mid": 0.0578
    },
    {
        "currency": "rupia indonezyjska",
        "code": "IDR",
        "mid": 0.00028213
    },
    {
        "currency": "rupia indyjska",
        "code": "INR",
        "mid": 0.054581
    },
    {
        "currency": "won południowokoreański",
        "code": "KRW",
        "mid": 0.003345
    }, {
        "currency": "yuan renminbi (Chiny)",
        "code": "CNY",
        "mid": 0.5812
    },
    {
        "currency": "SDR (MFW)",
        "code": "XDR",
        "mid": 5.6168
    }
];

function pt_1(data) {
    const output = {};
    for (let i = 0; i < data.length; i++) {
        const code = data[i].code;
        const mid = data[i].mid;

        output[code] = mid;
    }
    return output;

}

// II rozwiązanie

function pt_2(data) {
    data.reduce(function (acc, item) {
        const code = item.code;
        const mid = item.mid;
        acc[code] = mid;

        return acc;
    }, {});
}


function pt_3(dataObject) {
    const values = Object.values(dataObject);
    return values.reduce(function (acc, curr) {
        return Math.min(acc, curr);
    });
}

console.log(pt_2(pt_3(data)));