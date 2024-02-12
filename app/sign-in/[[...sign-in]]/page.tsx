import { SignIn } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#A3EE98] via-[#FFBBF4] to-[#E9FC88] p-4">
      <Head>
        <title>Kavach A.I. - Your Safe Space</title>
      </Head>
      <Image alt="Logo" height={250} width={250} src="/kavach.gif">

        </Image>
      <div className="text-center mb-10 px-2">
        {/* Updated h1 tag with brand colors */}
        
        <p className="text-sm md:text-lg lg:text-xl text-[#6D6C6A] mt-2">
          A new ally in your journey to mental wellness - safe, secure, and
          understanding!
        </p>
      </div>
      <div className="w-full flex justify-center">
        <SignIn />
      </div>
      <div className="text-center mt-6 px-4">
        <p className="text-[#3C3B39]">
          &quot;Share your thoughts, and let&apos;s tackle school, home, or any
          challenges together. Your privacy is our priority. Start your journey
          with Kavach A.I. today.&quot;
        </p>
      </div>
      <div className="text-center mt-6 px-4">
        <p className="text-[#3C3B39]">
          - Anoushka Jollyy
          <hr className="glowing-gradient-hr"></hr>
          <strong>Founder Kavach</strong>
        </p>
      </div>
    </div>
  );
}
