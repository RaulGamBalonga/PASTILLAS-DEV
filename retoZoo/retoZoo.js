const zoo = '🐇🦖🐍🐪🐍';
const zoo2 = zoo.replaceAll('🐍', '🐘');
console.log(zoo2); // 🐇🦖🐘🐪🐘
const result = zoo2.includes('🐍');
console.log(result); // true 