const user = {
    name: "Guru",
    age: 20,
    isPremium: true,
    credits: 0
};

const canAccessVIP = user.age >= 18 && user.isPremium;
console.log("Can Access VIP:", canAccessVIP);

const hasAccess = user.isPremium || user.credits > 0;
console.log("Has Access:", hasAccess);

const userCredits = user.credits ?? 10; 
const userCreditsOld = user.credits || 10; 
console.log("Credits (??):", userCredits);
console.log("Credits (||):", userCreditsOld);

const calculateDiscount = (role, purchaseAmount) => {
    let discount = 0;
    
    switch(role.toLowerCase()) {
        case 'admin':
            discount = 0.5; 
            break;
        case 'premium':
            discount = purchaseAmount > 1000 ? 0.3 : 0.2; 
            break;
        case 'guest':
            discount = purchaseAmount > 2000 ? 0.1 : 0.05;
            break;
        default:
            discount = 0;
    }
    
    return purchaseAmount * (1 - discount);
};

console.log("Discounted Price (Premium, 1500):", calculateDiscount('premium', 1500));
console.log("Discounted Price (Guest, 500):", calculateDiscount('guest', 500));

const authSystem = (username, password, usersDB) => {
    const foundUser = usersDB.find(u => u.username === username);
    
    if (!foundUser) {
        return { success: false, message: "User not found" };
    }
    
    if (foundUser.password !== password) {
        return { success: false, message: "Invalid credentials" };
    }
    
    return { success: true, message: "Login successful", user: foundUser };
};

const mockDB = [
    { username: "admin", password: "123", role: "admin" },
    { username: "guru", password: "pwd", role: "user" }
];

console.log("Auth Result:", authSystem("guru", "pwd", mockDB));
