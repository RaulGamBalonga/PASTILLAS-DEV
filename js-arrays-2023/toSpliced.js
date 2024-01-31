/**
 * splice() -> recibe tres paramentros (a,b,c) el primero desde donde comienza, el segundo que eliminar y el tercero qué añadir
 * modifica el arreglo original
 */

const tasks = [
    'task1',
    'task2',
    'task3',
]

console.log('original', tasks);

const spliced = tasks.splice(1,1, 'task4', 'task5');
console.log('splice()',spliced);
console.log('afterSpliced',tasks);

/**
 * toSpliced() -> igual que splice pero no modifica el arreglo original
 */

const taskTospliced = [
    'start',
    'delete',
    'update'
]

const toSpliced = taskTospliced.toSpliced(3,0,'error')
console.log('original',taskTospliced);
console.log('toSpliced()',toSpliced);
console.log('originalAfter',taskTospliced);
