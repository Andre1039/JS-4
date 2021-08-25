

alert('Классная работа')



var min1 = +prompt('Введите минимальное число для примера');
var max1 = +prompt('Введите максимальное число для примера');



for(let i = 0; i < 10; i++){
    function random(min, max){
        let num = Math.floor(Math.random() * (max + 1 - min) + min);
        return num;
    }

    function random1(min, max){
        let num = Math.floor(Math.random() * (max + 1 - min) + min);
        return num;
    }

    num = (random(min1, max1));
    num1 = (random1(min1, max1));

    var task = prompt('Решите пример ' + num + ' + ' + num1);
    console.log(num + ' + ' + num1 + ' = ' + (num + num1) + ' Ваш ответ = ' + task);
}







alert('Домашняя работа 1');


var name = prompt('Введите свое имя');
var Year = +prompt('Введите год вашего рождения');

function yourAge (year, ouryear=2021){
    let age = ouryear - year;
    return age;
}

ouryear = 2021;

alert(name + ', Ваш возраст ' + yourAge(Year, ouryear));







alert('Домашняя работа 2');



var tasks = +prompt('Введите количество примеров, которые хотите решить');

for(let i = 1; i <= tasks; i++){
    function randomnumber (){
        let num5 = Math.floor(Math.random() * 70 - 4);
        return num5;
    }
    function randomnumber1 (){
        let num6 = Math.floor(Math.random() * 50 - 3);
        return num6;
    }

    num7 = randomnumber();
    num8 = randomnumber1();


    if(num7 >= 35 && num8 >= 22){
        var sign = (num7 + num8); 
        var description = num7 + ' + ' + num8;
    }else if(num7 < 35 && num8 < 22){
        var sign = (num7 - num8); 
        var description = num7 + ' - ' + num8;
    }else if(num7 > 35 && num8 < 22){
        var sign = (num7 % num8); 
        var description = num7 + ' % ' + num8;
    }else if(num7 < 35 && num8 > 22){
        var sign = (num7 * num8); 
        var description = num7 + ' * ' + num8;
    }else{
        var sign = (num7 / num8); 
        var description = num7 + ' / ' + num8;
    }


    var answer = +prompt('Решите пример ' + description);
    if(answer == sign){
        alert('Ваш ответ-правильный: ' + answer);
    } else{
        alert('Ваш ответ-неверный: ' + answer + ', правильный ответ: ' + sign)
    }
}