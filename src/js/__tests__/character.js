import { Character } from '../class/character.js';
import { Magician } from '../class/magician.js';
import { Daemon } from '../class/daemon.js';

test('Daemon attack calculation without stoned', () => {
    const daemon = new Daemon(100);
    daemon._distance = 3;
    daemon._stoned = false;
    expect(daemon.attack).toBe(80);
});

test('Magician attack calculation without stoned', () => {
    const magician = new Magician(100);
    magician._distance = 3;
    magician._stoned = false;
    expect(magician.attack).toBe(80);
});

test('Daemon attack calculation with stoned', () => {
    const daemon = new Daemon(100);
    daemon._distance = 2;
    daemon._stoned = true;
    expect(daemon.attack).toBe(85);
});

test('Magician attack calculation with stoned', () => {
    const magician = new Magician(100);
    magician._distance = 2;
    magician._stoned = true;
    expect(magician.attack).toBe(85);
});

test('Attack cannot be neggative', () => {
    const magician = new Magician(100);
    magician._distance = 11;
    magician._stoned = true;
    expect(magician.attack).toBe(0);
});

test('should set attack value', () => {
    const character = new Character(100);
    character.attack = 90;
    expect(character.attack).toBe(90);
});

test('should get stoned value', () => {
    const character = new Character(100);
    character._stoned = true;
    expect(character.stoned).toBe(true);

    character._stoned = false;
    expect(character.stoned).toBe(false);
});

test('should set stoned value', () => {
    const character = new Character(100);
    character.stoned = true;  
    expect(character.stoned).toBe(true);  
});



test('should get and set distance value', () => {
    const character = new Character(100);
    character._distance = 4;
    expect(character._distance).toBe(4);
});