# Simple Pizza App — TypeScript Fundamentals

A practical TypeScript training project focused on learning and applying core syntax, data typing, business logic, and collection management.

The project consists of two core modules: a pizza restaurant ordering system (`index.ts`) and a user management module (`users.ts`).

---

##  Features & TypeScript Concepts Implemented

### 1. Pizza Restaurant Module (`src/index.ts`)
 **Custom Types (`Pizza`, `Order`):** Strict structural definitions for pizza entities and customer orders.
 **Union Types (`OrderStatus`):** Restricting order status values strictly to `'ordered' | 'completed'`.
 **Generics (`addToArray<T>`):** Reusable array utility function that maintains type safety regardless of the data type.
 **Type Narrowing (`getPizzaDetail`):** Search function accepting an `id` (`number`) or name (`string`), using `typeof` checks to narrow down types at runtime.
 **Order Management:** Functions to add new pizzas (`addNewPizza`), place orders (`placeOrder`), and mark orders as finished (`completeOrder`).

### 2. User Management Module (`src/users.ts`)
 **Custom Types & Unions (`User`, `UserRole`):** User entity typing with strict role constraints (`'admin' | 'member' | 'guest'`).
 **Utility Types (`Omit`):** Using `Omit<User, 'id'>` in `addNewUser` to exclude the auto-generated `id` field from required input arguments.
 **CRUD Operations:** Fetching user details (`fetchUserDetails`) and updating user profiles (`updateUser`).

---

