const { Console } = require("console-mpds");
const console = new Console();
/// ·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-
/// Autor:  Manuel Rosendo Castro Iglesias.
/// Programming exercise with JavaScript, with the use of If(...) {... }, For(...) {... },
///     Do while (...) {... }, Swith(...) {... }, and Comments to; //*// toggle /*/ code //*/.
/// ·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-
/// Copyright(C) < 2020 > <Manuel Rosendo Castro Iglesias>
/// 	This program is free software: you can redistribute it and/or modify
/// 	it under the terms of the GNU General Public License as published by
/// 	the Free Software Foundation, either version 3 of the License, or
/// 	(at your option) any later version.
/// 
/// 	This program is distributed in the hope that it will be useful,
/// 	but WITHOUT ANY WARRANTY; without even the implied warranty of
/// 	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// 	GNU General Public License for more details.
/// 
/// 	You should have received a copy of the GNU General Public License
/// 	along with this program.  If not, see <https://www.gnu.org/licenses/>.
/// ·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-
/// Contiene cuatro versiones. Añadir o quitar “/” al inicio de las líneas nº 24 y nº 78

/*// // TODO: 2ª refactorización. ¡Cambiar (-1) por otra cosa que sirva mejor!
let first_s = 0; let s = (-1);
let first_min = 0; let min = (-1);
let first_hr   = 0; let hr = (-1);
for (i=1; i>2; i++){
	do {
		let hr = console.readNumber('Dame las horas: ');
	} while (first_hr < 1 || first_hr > 24);
	first_hr = hr;
	do {
		min = console.readNumber('Dame los  minutos: ');
	} while (first_min < 1 || first_min > 60);
	let year = 1;
	do {
		s = console.readNumber('Dame los  segundos: ');
	} while (s < 1 || s > 60);
	switch(i){
		case 1:
			first_hr =hr;
			first_min =min;
			first_s =s;
			return;
		case 2:
			twoth_hr =hr;
			twoth_min =min;
			twoth_s =s;
			return;
		default:{
			i=0;
			console.writelin(`·--> You've passed! <--·--> ¡Te has pasado! <--·`)
		}
	console.writeln();
	}
}
/*/  // Cambio de código.
	const first_hr = console.readNumber('Dame las horas: ');
	const first_min = console.readNumber('Dame los  minutos: ');
	const first_s = console.readNumber('Dame los  segundos: ');
	console.writeln();
	const twoth_hr = console.readNumber('Dame más Horas: ');
	const twoth_min = console.readNumber('Dame más Minutos: ');
	const twoth_s = console.readNumber('Dame más Segundos: ');
	console.writeln();
//*/ // Final 2ª refatorización.
// TODO: refactorizar eliminando variables ¿es necesario? Pero creo que esto es lo más legible.

const add_s = first_s + twoth_s;
const residue_s = add_s % 60;
const min_From_s = (add_s - residue_s) / 60;

const add_min = first_min + twoth_min + min_From_s;
const residue_min = add_min % 60;
const hr_From_min = (add_min - residue_min) / 60;

//*// Para intecambiar código añadir barra al inicio. Funciona en Visual Studio * 
	/*/
	const residue_hr = first_hr + twoth_hr + hr_From_min;
	console.writeln(`La suma es ${residue_hr}:${residue_min}:${residue_s}`);
	/*/ 
	const add_hr = first_hr + twoth_hr + hr_From_min;
	const residue_hr = add_hr % 24;
	const daysFrom_hr = (add_hr - residue_hr) / 24;
	console.writeln(`La suma es ${daysFrom_hr} días y ${residue_hr}:${residue_min}:${residue_s}`);
//*/
console.writeln();