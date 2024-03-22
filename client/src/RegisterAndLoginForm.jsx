import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
    const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

    async function handleSubmit(env) {
        env.preventDefault();
        const url = isLoginOrRegister === "register" ? "register" : "login";
        const { data } = await axios.post(url, { username, password });
        setLoggedInUsername(username);
        setId(data.id);
    }

    return (
        <div className="bg-[url('public/login-bg.jpg')] bg-cover bg-no-repeat h-screen flex justify-center items-center">
            <div className="bg-white px-8 rounded-lg lg:w-1/4 px-16">
                <div className="mt-8 flex flex-col items-center">
                    <h2 className="font-bold text-3xl mb-4">MurMur</h2>
                    <hr className="mb-12 w-2/3" />
                </div>
                <form className="mx-auto mb-12" onSubmit={handleSubmit}>
                    <input
                        value={username}
                        onChange={(env) => setUsername(env.target.value)}
                        type="text"
                        placeholder="Username"
                        className="block border w-full rounded-sm p-2 mb-4 rounded-lg"
                    />
                    <input
                        value={password}
                        onChange={(env) => setPassword(env.target.value)}
                        type="password"
                        placeholder="Password"
                        className="block border w-full rounded-sm p-2 mb-4 rounded-lg"
                    />
                    <button className="bg-blue-500 text-white block w-full rounded-lg p-2">
                        {isLoginOrRegister === "register"
                            ? "Register"
                            : "Login"}
                    </button>
                    <div className="text-center mt-2">
                        {isLoginOrRegister === "register" && (
                            <div>
                                Already a member?
                                <button
                                    className="ml-1 text-blue-800 hover:text-blue-500"
                                    onClick={() =>
                                        setIsLoginOrRegister("login")
                                    }
                                >
                                    Login
                                </button>
                            </div>
                        )}
                        {isLoginOrRegister === "login" && (
                            <div>
                                Don&apos;t have an account?
                                <button
                                    className="ml-1 text-blue-800 hover:text-blue-500"
                                    onClick={() =>
                                        setIsLoginOrRegister("register")
                                    }
                                >
                                    Register
                                </button>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
