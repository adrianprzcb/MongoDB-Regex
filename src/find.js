
// Para todos los que el número de coches electricos termine en 4
db.cars.find( { CochesElectricos: { $regex: /4$/ } } )

//Para todos los paises que empiecen con A(mayúscula)
db.cars.find( {pais: {$regex: /^A/}})

//Para todos los paises que empiecen con A, may o min.
db.cars.find( {pais: {$regex: /^A/i}})

//Para todos los paises que NO empiecen con A, may o min.
db.cars.find( { pais: { $not: /^A/i } } )

//Para que el pais sea España. Exactamente escrito así.
db.cars.find( { pais: { $eq: "España" } } )



//Aquí se empieza a usar la otra db.

//Para encontrar los coches con más de 51 unidades.
db.cars2.find({ qty:{ $gt: 51 }})

//Para encontrar los coches con más o igual a 50 unidades.
db.cars2.find({ qty:{ $gte: 50 }})

//Para encontrar los coches que tienen 45 y 75 unidades.
db.cars2.find( { qty: { $in: [ 45, 75 ] } } )

//Para encontrar los coches con menos unidades que 75.
db.cars2.find( { qty: { $lt: 75 } } )

//Para encontrar los coches con menos o iguales unidades que 75.
db.cars2.find( { qty: { $lte: 75 } } )

//Para encontrar los coches que no tengan 75 unidades.
db.cars2.find( { qty: { $ne: 75 } } )

//Para encontrar los coches que no tengan 75 ni 45 unidades.
db.cars2.find( { qty: { $nin: [ 45, 75 ] } } )

//Para encontrar los que tengan más o igual a 50 unidades y el campo qty exista.
db.cars2.find( { $and: [ { qty: { $gte: 50 } }, { qty: { $exists: true } } ] } )


//Para encontrar los que NO tengan más o igual a 50 unidades y el campo qty exista.
db.cars2.find( { $nor: [ { qty: { $gte: 50 } }, { qty: { $exists: false } } ] } )

//Para encontrar los coches que tengan menos de 75 unidades y los que su tamaño sea el especificado(exactamente ese)
db.cars2.find( { $or: [ { qty: { $lt: 75 } }, { size: { h: 180, w: 230, uom: "cm" } } ] } )

