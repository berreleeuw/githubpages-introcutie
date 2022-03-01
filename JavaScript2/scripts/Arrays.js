let namen = ['gerda', 'geert', 'henk', 'ronaldo', 'messi'];
console.log(namen.length);
console.log(namen[0], namen[2], namen[4]);
let persoon = prompt("geef een naam");
namen.push(persoon);
console.log(namen);
console.log(namen.join(', '));