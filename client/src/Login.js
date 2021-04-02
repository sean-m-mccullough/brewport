function Login() {
    function onSubmit(e) {
        e.preventDefault();
        console.log(onSubmit);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text"placeholder="Username"/>
                <input type="password"/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Login;