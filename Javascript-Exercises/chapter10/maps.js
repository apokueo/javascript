const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };


const userRoles = new Map();

userRoles.set(u1, 'User1');
userRoles.set(u2, 'User2');
userRoles.set(u3, 'User3');

userRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

userRoles.get(u2); // User

userRoles.has(u1); // true
userRoles.get(u1); // true

