
// removing property from typescript interface 

interface User {
    id: string;
    first_name: string;
    last_name: string;
}

// Remove a single key field
type MyType1 = Omit<User, 'id'>

// Remove multiple key fields
type MyType2 = Omit<User, 'id' | 'first_name'>
