function func1() {
    var x = prompt('Кол-во столбцов = ');
    var y = prompt('Кол-во строк = ');

    
    document.write('<tr><td>*</td>'); 
    for (i=1;i<=x;i++)
    {
        document.write('<td>'+ i +'</td>');
    }
    document.write('</tr>')
    
    for(i=1;i<=y;i++)
    {
        document.write('<tr><td>'+ i +'</th>');
        for (j = 1; j <= x; j++)
        {
            document.write('<td>'+ (i*j) + '</td>')
        }
        
    }   
}
function func2(){
    var x = parseFloat(prompt('top',1));
    var y = parseFloat(prompt('foot',3));
    var step = 0.3;
    document.write('<tr><td>Радиус</td><td>Площадь круга</td><td>Длина окружности</td></tr>')

    do
    {
        document.write('<tr>');
        document.write('<td>'+ x +'</td>');
        var sq_round = Math.round(Math.PI * x * x);
        document.write('<td>'+ sq_round +'</td>');
        var len_round = Math.round(Math.PI * x * 2);
        document.write('<td>'+ len_round +'</td>');
        document.write('</tr>');
        x += step;
    }while(x<y);
}
function func3(){

    document.write('<tr>')
    document.write('<td>'+'Число'+'</td>')
    document.write('<td>'+'Метод'+'</td>')
    document.write('<td>'+'Результат'+'</td>')
    document.write('<td>'+'Описание метода'+'</td>')
    document.write('</tr>')
    
    var x = 8.42003

    document.write('<tr>')
    document.write('<td>'+ x +'</td>')
    document.write('<td>'+'toExponential'+'</td>')
    document.write('<td>'+ x.toExponential(8) + '</td>')
    document.write('<td>'+'представляет число в экспоненциальной форме'+'</td>')
    document.write('</tr>')

    document.write('<tr>')
    document.write('<td>'+ x +'</td>')
    document.write('<td>'+'toFixed'+'</td>')
    document.write('<td>'+ x.toFixed(4) + '</td>')
    document.write('<td>'+'представляет число в форме с фиксированным количеством цифр после точки'+'</td>')
    document.write('</tr>')

    document.write('<tr>')
    document.write('<td>'+ x +'</td>')
    document.write('<td>'+'toPrecision'+'</td>')
    document.write('<td>'+ x.toPrecision(2) + '</td>')
    document.write('<td>'+'представляет число с заданным общим количеством значащих цифр'+'</td>')
    document.write('</tr>')

    document.write('<tr>')
    document.write('<td>'+ x +'</td>')
    document.write('<td>'+'toString'+'</td>')
    document.write('<td>'+ x.toString(8) + '</td>')
    document.write('<td>'+'возвращает строковое представление числа в системе счисления с указанным основанием'+'</td>')
    document.write('</tr>')

}