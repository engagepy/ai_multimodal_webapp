import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="chatbot-text-tertiary flex justify-center items-center text-sm mt-6">
        <span className="px-3">© Astra Techz</span>
        <span className="px-3"> <Link href="https://github.com/engagepy/ai_multimodal_webapp">
                  <Image
                alt="Github Logo"
                height={20}
                width={20}
                src="/github-mark-white.png"
              />
              </Link>
        </span>
        
      <div className="ml-auto flex flex-row items-center">
        <span className="mr-1">Powered by</span>
        <span className="mx-1">ZP</span>
      </div>
    </footer>
  );
};

export default Footer;
