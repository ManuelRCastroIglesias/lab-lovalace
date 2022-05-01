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
>> ~~~
>> if ( !( year === month === day === 1 ) )
>> {
>> 	if (year - 1 > 0 )
>> 	{
>> 		if (day === month === 1)
>> 		{
>> 			yearPreviusSmall = year - 1;
>> 			dateValid = true;
>> 		};
>> 	}; // en otro caso llamar a método captura datos, return, o GOTO;
>> 	if (month !== 1)
>> 	{
>> 		if (day === 1)
>> 		{
>> 			dayPreviusSmall = day + 29; monthPreviusSmall = month - 1;
>> 			dateValid = true;
>> 		}
>> 		else
>> 		{
>> 			if (day !== 1) { dayPreviusSmall = day - 1; };
>> 			dateValid = true;
>> 		};
>> 	};
>> };
>> ~~~
>>---
>---
---
# Resulatdos
---
```
Escriba el dia ( 1-30):  12
Escriba el mes ( 1-12):  12
Escriba el año (01-99):  12

La fecha 12/12/12 y la anterior fecha es 11/12/12

Escriba el dia ( 1-30):  1
Escriba el mes ( 1-12):  1
Escriba el año (01-99):  12

La fecha 1/1/12 No puedo hacer ese Cálculo o la fecha no es válida

Escriba el dia ( 1-30):  1
Escriba el mes ( 1-12):  4
Escriba el año (01-99):  12

La fecha 1/4/12 y la anterior fecha es 30/3/12

Escriba el dia ( 1-30):  1
Escriba el mes ( 1-12):  1
Escriba el año (01-99):  1

La fecha 1/1/1 y la anterior fecha es 1/1/1

Escriba el dia ( 1-30):  36
Escriba el mes ( 1-12):  1
Escriba el año (01-99):  1

La fecha 36/1/1 y la anterior fecha es 36/1/1

Escriba el dia ( 1-30):  1
Escriba el mes ( 1-12):  36
Escriba el año (01-99):  1

La fecha 1/36/1 y la anterior fecha es 30/35/1

Escriba el dia ( 1-30):  1
Escriba el mes ( 1-12):  1
Escriba el año (01-99):  100

La fecha 1/1/100 y la anterior fecha es 1/1/100



