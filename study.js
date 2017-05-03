/*-----------------Рекурсия. Функция проверки чётности числа---------------

function isEven(num){
    if(num > 1 && num%2 === 0)
        return true;
    else if(num > 1 && num%2 !== 0)
        return false;
    else if(num !== 0 || num !== 1) 
        isEven(num-2);
}
console.log(isEven(87));

-------------------------------------------------------------------------*/

/*------------------Функция поиска символа в стоке и подсчета символов-------
    
function countSymb(str, smb) {
    var cnt = 0;
    for (var i = 0; i < str.length; i++)
        if(str[i] == smb)
            cnt++;
    return cnt;
}

console.log(countSymb("testtesteasoooootas", 'o'));
================================================================================*/