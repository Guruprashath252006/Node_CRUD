const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error("Failed to fetch");
        
        const data = await response.json();
        console.log("Fetched Users Count:", data.length);
        
        const userNames = data.map(user => user.name);
        console.log("User Names:", userNames.slice(0, 3));
        
        const orgUsers = data.filter(user => user.website.endsWith('.org'));
        console.log("Org Users Count:", orgUsers.length);
        
        const userFive = data.find(user => user.id === 5);
        console.log("User with ID 5:", userFive?.name);
        
        const gwenUsers = data
            .filter(user => user.address.city === 'Gwenborough')
            .map(user => user.name);
        
        console.log("Users in Gwenborough:", gwenUsers);

    } catch (error) {
        console.error("Error in Fetch:", error.message);
    }
};

fetchData();

const mockLogin = async (email, password) => {
    console.log(`\nAttempting login for: ${email}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "test@test.com" && password === "123456") {
                resolve({
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                    user: { id: 1, name: "Test User", email: email }
                });
            } else {
                reject("Invalid email or password");
            }
        }, 1000);
    });
};

mockLogin("test@test.com", "123456")
    .then(res => console.log("Login Success:", res.user.name))
    .catch(err => console.error("Login Failed:", err));
