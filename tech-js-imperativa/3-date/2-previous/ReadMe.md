# 3-date/2-previous
>>~~~
>>Dame el día: 12
>>Dame el mes: 12
>>Dame el año: 12
>>
>>La fecha 12/12/12 y la siguiente es 11/12/12
>>~~~  
>>---  
>>~~~
>>Dame el día: 1
>>Dame el mes: 1
>>Dame el año: 12
>>
>>La fecha 30/1/12 y la siguiente es 30/12/11
>>~~~
>>---  
>>~~~
>>Dame el día: 1
>>Dame el mes: 4
>>Dame el año: 12
>>
>>La fecha 1/4/12 y la siguiente es 30/3/12
>>~~~ 
>>--- 
>>~~~ 
>> Mi Prueba adicional.
>>Dame el día: 1
>>Dame el mes: 1
>>Dame el año: 1
>> --> Debe volver a pedir el dato. El año 0 no existe.
>>Dame el día: 36
>>Dame el mes: 1
>>Dame el año: 1
>> --> Debe volver a pedir el dato. día >30
>>Dame el día: 1
>>Dame el mes: 36
>>Dame el año: 1
>> --> Debe volver a pedir el dato. mes > 12
>>Dame el día: 1
>>Dame el mes: 1
>>Dame el año: 100
>> --> Debe volver a pedir el dato.año > 99
>>~~~ 
>>---  
>--- 
> ## Autores:  
>>--- 
>> * Manuel Rosendo Castro Iglesias.  
>> * María Paz López.  
>> --- 
>--- 
> ## Algoritmo del día prévio. (aún no va y no sé porqué)
>>--- 
>>~~~
>>if (!(year === month === day === 1))
>>  {
>>	  yearPreviusSmall = year - 1;
>>	  monthPreviusSmall = month - 1;
>>	  dayPreviusSmall = day + 29;
>>  }
>>else if (month === day === 1)
>>  {
>>	  dayPreviusSmall = day + 29 ;
>>	  monthPreviusSmall = month + 11;
>>  }
>>else if (day !== 1)
>>  {
>>	  dayPreviusSmall = day - 1;
>>  }
>>else{
>>	  ErrorInDate = true;
>>~~~
>>---
>---
---