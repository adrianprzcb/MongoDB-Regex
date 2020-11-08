db.cars.insertMany([
    { "_id" : 100, "pais" : "Alemania", "CochesElectricos" : "216264", "Puntos de Recarga" : 5074 },
    { "_id" : 101, "pais" : "Reino Unido", "CochesElectricos" : "212651", "Puntos de Recarga" : 4008 },
    { "_id" : 102, "pais" : "Noruega", "CochesElectricos" : "274207", "Puntos de Recarga" : 3426 },
    { "_id" : 103, "pais" : "Francia", "CochesElectricos" : "180277", "Puntos de Recarga" : 1975 },
    { "_id" : 104, "pais" : "España", "CochesElectricos" : "33211", "PuntosdeRecarga" : 1242 },
    { "_id" : 105, "pais" : "Holanda", "CochesElectricos" : "152510", "PuntosdeRecarga" : 1069 },
    { "_id" : 106, "pais" : "Suecia", "CochesElectricos" : "87031", "PuntosdeRecarga" : 1023 },
    { "_id" : 107, "pais" : "Suiza", "CochesElectricos" : "37596", "PuntosdeRecarga" : 846 },
    { "_id" : 108, "pais" : "Italia", "CochesElectricos" : "25363"	, "PuntosdeRecarga" : 833 },
    { "_id" : 109, "pais" : "Austria", "CochesElectricos" : "30273", "PuntosdeRecarga" : 575 },
    { "_id" : 110, "pais" : "angola", "CochesElectricos" : "25", "PuntosdeRecarga" : 2 },
])

db.cars2.insertMany([
    { item: "mercedes", qty: 50, size: { h: 200, w: 200, uom: "cm" }},
    { item: "Opel", qty: 100, size: { h: 180, w: 230, uom: "cm" }},
    { item: "BMW", qty: 75, size: { h: 200, w: 233, uom: "cm" }},
    { item: "Nissan", qty: 45, size: { h: 175, w: 300, uom: "cm" }},
])