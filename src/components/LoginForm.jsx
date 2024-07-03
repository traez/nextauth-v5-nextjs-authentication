import { doSocialLogin } from "@/utils/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin}>
            <button className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg hover:text-black" type="submit" name="action" value="google">
                Sign In With Google
            </button>

            <button className="bg-black text-white p-1 rounded-md m-1 text-lg hover:text-pink-400" type="submit" name="action" value="github">
                Sign In With GitHub
            </button>
        </form>
    );
};

export default LoginForm;
