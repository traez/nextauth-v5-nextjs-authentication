import { doSocialLogin } from "@/utils/actions";

const SocialsLogin = () => {
    return (
        <form action={doSocialLogin}>
            <button className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg hover:text-black" type="submit" name="action" value="google">
                Google SignIn
            </button>

            <button className="bg-black text-white p-1 rounded-md m-1 text-lg hover:text-pink-400" type="submit" name="action" value="github">
                GitHub SignIn
            </button>
        </form>
    );
};

export default SocialsLogin;
