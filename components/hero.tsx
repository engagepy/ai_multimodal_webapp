import React, {useState, useEffect} from "react";


export default function Hero() {
const [typedText, setTypedText] = useState('');
  const fullText = 'A.I. Empowering the Next Generation';
  const typingDelay = 3000 / fullText.length; // Calculated delay per character

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, typingDelay);

    return () => clearInterval(intervalId);
  }, [fullText, typingDelay]);
    return(

<div className="text-center p-4">
<h1 className="text-4xl md:text-6xl font-bold text-[#6D6C6A]">
    A.I. Empowering the Next Generation
    <span className="animate-blink">|</span> 
  </h1>
</div>
    )
}