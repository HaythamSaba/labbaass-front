import Image from "next/image";
import { signInAction } from "../_lib/actions";

const metadata = {
  title: "تسجيل الدخول",
}
function Page() {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <Image
        src="/images/login-background.png"
        fill
        quality={100}
        className="object-cover"
        alt="login background"
      />

      {/* Logo above background */}
      <div className="grid place-items-center w-full h-full">
        <div className="relative z-20 flex justify-center items-center flex-col gap-8 bg-white shadow-lg w-fit h-fit p-8">
          <div className="mt-4">
            <Image
              src="/images/logo.png"
              width={146.6}
              height={52}
              alt="logo"
            />
          </div>
          <h1 className="font-bold text-3xl">سجل الدخول الى حسابك الان </h1>
          <form action={signInAction} className="w-full">
            <button className="mt-4 font-bold text-base flex items-center gap-4 py-4 w-full justify-center rounded-xl  bg-primary-600 text-white cursor-pointer">
              تسجيل مع غوغل
              <Image
                src="/images/google-icon.png"
                width={24}
                height={24}
                alt="google icon"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
