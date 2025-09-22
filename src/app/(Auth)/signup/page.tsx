import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <div className="m-5 mt-30  sm:m-30 lg:m-20  ">
      <h1 className="text-3xl sm:text-4xl mb-5  font-bold text-center sm:text-left">
        Register now
      </h1>
      <SignupForm />
    </div>
  );
}
