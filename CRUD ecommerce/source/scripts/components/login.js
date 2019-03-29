const login = {
    name: 'login',
    template: 
    `<div class="main-container login">
        <div class="login__header">
            <h1>Login</h1>
            <p>Introduzca su usuario y contraseña para acceder al panel de control</p>
        </div>
        <div class="login__form">
            <form action="" method="post">
                <div class="input-field">
                    <label for="user">Usuario</label>
                    <input type="text" name="user" id="loginusername" placeholder="Usuario" required />
                </div>
                <div class="input-field">
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" id="loginpassword" placeholder="Contraseña" required />
                </div>
                <input type="button" class="loginButton" value="Entrar" />
            </form>
            <p id="error"> Usuario o contraseña incorrectos </p>
        </div>
    </div>`,
    mounted() {
        this.login();
    },
    methods: {
        login() {
            // on click Sign In Button checks that username =='guest' and password == 'guest'
            const self =  this;
            const loginButton = $(".loginButton");
            const userName = $("#loginusername");
            const password = $("#loginpassword");
            const error = $("#error");
            error.hide();
            loginButton.click(function () {
                if( userName.val() === 'guest' && password.val() === 'guest') {
                    error.hide();
                    self.$router.push('/productslist');
                }
                else {
                    error.show();
                }
            });
        }
    }
};

export default login;