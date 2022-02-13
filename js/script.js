// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
    do {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        i++;
        if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error');
            i--;
        }
    } while (i < 2);


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//         if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done!');
//         } else {
//             console.log('error');
//             i--;
//         }
// }

if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');}
   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
   }
   else  if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
   }
   else {
        console.log('Произошла ошибка');
   }


console.log(personalMovieDB);


// let num = 50;

// for (let i = 1; i < 8; i++) {
//     if (i === 6){
//         break;
//     }

// console.log(i);}

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }


// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);


// // switch (num) {
// //     case 49:
// //         console.log('False');
// //         break;
// //     case 100:
// //         console.log('False');
// //         break;
// //     case 52:
// //         console.log('True');
// //         break;
// //     default:
// //         console.log('Not this time');
// //         break;
// // }

