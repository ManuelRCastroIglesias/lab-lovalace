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
> ## Algoritmo del día prévio. (aún no va)
>>--- 
>>~~~
>>Si  !(year  === month === day === 1) : Cambiamos el dia> >a (dia+29), el mes a (mes-1) y el año a (año-1);
>>Si  (dia === 1  y mes === 1)         : Cambiamos el dia> >a (dia+29), el mes a (mes-1);
>>Si  (dia !== 1  y mes !== 1)         : Cambiamos el dia> >a (dia-1);
>>Si  (year  === month === day === 1)  : Esta fecha rstá >>mal capturada.
>>
>>If    !(year  === month === day === 1){year  -= 1 ; >>month -= 1 ; day += 29}; // ¡Es el 01/01/01!
>>ElseIf (month === day === 1)          { day += 29 ; >>month -= 1 ;          }; // (year  !== 1)
>>ElseIf (day   === 1)                  {day   -= >>1 ;                       }; // (month !== 1)
>>Else   ErrorInDate = >true;                            >                     >  // (day   !== 1)  
>>~~~
>>---
>---
---