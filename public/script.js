const apiUrl = 'http://localhost:3000/api/users'; // Change to your API base URL

// Register User
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    alert(result.message);
});

// Login User
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    alert(result.message);
    if (result.token) {
        localStorage.setItem('token', result.token);
        window.location.href = 'index.html'; // Redirect to contacts page
    }
});

// Fetch and Display Contacts
async function fetchContacts() {
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:3000/api/contacts', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const contacts = await response.json();
    const contactsList = document.getElementById('contactsList');

    contactsList.innerHTML = contacts.map(contact => `<div>${contact.name} - ${contact.email}</div>`).join('');
}

if (document.getElementById('contactsList')) {
    fetchContacts();
}
