import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <RegistrationForm /> 
      <p className="my-3">
        Already have a Credentials account?
        <Link href="/" className="mx-2 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
