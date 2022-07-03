/*
//Crie 3 variáveis, cada uma com um array:
- Comedy
-Action
-Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
-title:
-director:
-year: */

let comedy = [{
    title: 'Mean Girls',
    director: 'Mark Waters',
    year: '2004',
},
{
    title: '13 going on 30',
    director: 'Gary Winick',
    year: '2004',
},
{
    title: 'Norbit',
    director: 'Brian Robbins',
    year: '2007',
}]

console.log(comedy)

let action = [{
    title: 'World War Z',
    director: 'Marc Foster',
    year: '2013',
},
{
    title: 'Morbius',
    director: 'Daniel Espinosa',
    year: '2022',
},
{
    title: 'The Batman',
    director: 'Matt Reeves',
    year: '2022',
}]

console.log(action)

let Fantasy = [{
    title: 'Harry Potter and the Deathly Hallows – Part 1',
    director: 'David Yates',
    year: '2010',
},
{
    title: 'Encanto',
    director: 'Jared Bush and Byron Howard',
    year: '2021',
},
{
    title: 'Beauty and the Beast',
    director: 'Bil Condon',
    year: '2017',
}]

console.log(Fantasy)

/*Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
IF: "MY FAVORIT MOVIE IS..."
ELSE: "NOT EVEN 5 STARS..." */

let favoriteMovie = 'Mean Girls'
if(favoriteMovie == 'Mean Girls'){
    console.log(`My favorite movie is ${favoriteMovie}`)
} else{
    console.log('Not even 5 stars...')
}