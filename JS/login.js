// Usuarios quemados con nombre, usuario y contraseña
const USERS = [
    {
        username: 'admin',
        password: '123456',
        name: 'Administrador'
    },
    {
        username: 'ihidalgo',
        password: '123456',
        name: 'Ivonne Dayanna Hidalgo Betancourt'
    },
    {
        username: 'fvalencia',
        password: '123456',
        name: 'Francisco Valencia'
    }
];

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredUsername = event.target.fullname.value;
    const enteredPassword = event.target.password.value;

    // Buscar un usuario que coincida con los datos ingresados
    const foundUser = USERS.find(
        user => user.username === enteredUsername && user.password === enteredPassword
    );

    if (foundUser) {
        const userData = {
            username: foundUser.username,
            name: foundUser.name,
            loginTime: new Date().toISOString()
        };

        // Guardar los datos del usuario en LocalStorage
        localStorage.setItem('loggedInUser', JSON.stringify(userData));

        // Redirigir al usuario a la página principal
        window.location.href = "./homePage.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});

console.log(`Ancho: ${window.innerWidth}px, Alto: ${window.innerHeight}px`);
