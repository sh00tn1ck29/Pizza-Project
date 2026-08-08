
export type UserRole = 'admin' | 'member' | 'guest';

export type User = {
  id: number;
  username: string;
  role: UserRole;
};


let nextUserId = 1;

export const users: User[] = [
  { id: nextUserId++, username: 'john_doe', role: 'member' },
  { id: nextUserId++, username: 'jane_admin', role: 'admin' },
];


export function fetchUserDetails(userName: string): User | undefined {
  const user = users.find(u => u.username.toLowerCase() === userName.toLowerCase());

  if (!user) {
    console.error(`User"${userName}" not found .`);
    return undefined;
  }

  return user;
}

export function updateUser(id: number, newUser: User): User | undefined {
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    console.error(`User with ID ${id} not found.`);
    return undefined;
  }

  users[userIndex] = newUser;
  return users[userIndex];
}

export function addNewUser(user: Omit<User, 'id'>): User {
  const newUser: User = {
    id: nextUserId++,
    ...user,
  };

  users.push(newUser);
  return newUser;
}