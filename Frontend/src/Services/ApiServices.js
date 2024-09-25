export default class ApiService {
    static BASE_URL = "http://localhost:8080";

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"  // Ensure the content type is JSON
        };
    }


    /** AUTH */

    // This registers a new user
    static async registerUser(registration) {
        console.log(registration)
        try {
            const response = await fetch(`${this.BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registration),
            });
    
            if (!response.ok) {
                throw new Error('Failed to login');
            }
            const data =  await response.json()
            return data;

        } catch (error) {
            console.error(error); // Log the error
        }
    }


    // This logs in a registered user
    static async loginUser(loginDetails) {
        const response = await fetch(`${this.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(loginDetails) 
        });
        
        if (!response.ok) {
            throw new Error('Failed to login');
        }
        
        const data = await response.json(); 
        return data;
    }


 /** AUTHENTICATION CHECKER */
 static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
}

static isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
}

static isAdmin() {
    const role = localStorage.getItem('role');
    return role === 'ADMIN';
}

}