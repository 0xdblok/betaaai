import Image from "next/image";
import logoss from "./logoss.jpg";

export default function Home() {
  return (
    <div className="min-h-screen  bg-gray-900 bg-cover bg-center bg-no-repeat bg-fixed">
    <div className="min-h-screen relative">
    {/* Background div with overlay */}
    <div className="fixed inset-0 z-0">
   
      {/* Gradient overlay */}
      <div className="absolute inset-0 " />
    </div>

    {/* Content container */}
    <div className="relative z-10 container mx-auto px-12">
      <div className="flex items-center justify-center "> 
        <Image src={logoss} alt="Logo" width={100} height={100} />
     </div> <h1 className="text-4xl pt-8   font-mono font-bold text-center justify-center flex text-white mb-8">
         BetaAI
        </h1>
      <div className="flex flex-col items-center justify-center pt-8">
        

        {/* Text content with better responsive layout */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-white space-y-4 bg-white/20 p-6 rounded-lg backdrop-blur-sm">


          <div className="space-y-4">
            <p className="font-mono">
            Hey anon, I'm BetaAI - your favorite AI that decided black is the new blockchain. While other AIs are busy trying to solve the trilemma, I'm solving the real problem: why does tech have to look so... techy?
            </p>

            <p className="font-mono ">
            FEATURES:


              
           <p> Runs on pure sass and style</p>  
             <p> Bugs? No, those are "aesthetic glitches"</p>
           <p>More attitude than your average neural network)</p>  
            </p>
            <p>Processing power measured in coolness per second</p>
            <p className="font-mono pt-4 break-words">CA : <a>0xe1C5c82e040B1e82aea9786b22b4DC08ebb43a80</a></p>


            {/* Continue with the rest of your content... */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">  
         <a href="https://x.com/beta_ai_01" className=" text-white text-4xl"><svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.9708 16.1875C48.3552 16.9031 46.6177 17.3802 44.7844 17.6062C46.6479 16.5 48.0823 14.7354 48.7552 12.65C47.0115 13.6719 45.0792 14.4229 43.024 14.8188C41.3823 13.0792 39.0406 12 36.4469 12C31.4646 12 27.425 16.0031 27.425 20.9396C27.425 21.6385 27.5073 22.3188 27.6604 22.9792C20.1646 22.6031 13.5156 19.0396 9.06771 13.6312C8.28646 14.9531 7.84687 16.5 7.84687 18.1333C7.84687 21.2365 9.43542 23.9687 11.8583 25.5781C10.3792 25.5333 8.9875 25.1219 7.76875 24.4615C7.76875 24.4885 7.76875 24.5281 7.76875 24.5667C7.76875 28.9031 10.8792 32.5146 15.0021 33.3365C14.249 33.5427 13.4521 33.6573 12.6312 33.6573C12.049 33.6573 11.4813 33.5917 10.9313 33.4927C12.0792 37.0365 15.4094 39.6271 19.3552 39.7042C16.2677 42.0979 12.3792 43.5312 8.15104 43.5312C7.42083 43.5312 6.70625 43.4896 6 43.4042C9.99687 45.9344 14.7396 47.4167 19.8312 47.4167C36.4219 47.4167 45.499 33.7927 45.499 21.9729C45.499 21.5854 45.4865 21.2 45.4687 20.8187C47.2396 19.5677 48.7656 17.9906 49.9708 16.1875Z" fill="url(#paint0_linear_409_10)"/>
<defs>
<linearGradient id="paint0_linear_409_10" x1="12.7167" y1="13.3667" x2="44.4427" y2="45.0927" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
</svg>
</a>
    
      </div>

      
<div className="flex justify-center  pt-4"> <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xa30d1d5b23809f723ba2bb9376b050f6313981a5&value=0.026383404192031892&field=input" className="inline-flex  bg-white hover:bg-[#F8B565] hover:focus e items-center px-6 py-3 font-medium text-black backdrop-blur-sm  rounded-lg transition-colors ">
          Buy on Uniswap
        </a></div>
     
<p className=" text-leading font-thin  text-center text-white pb-4 pt-20">All rights reserve BetaAI 2024</p>

      {/* Button with improved positioning */}
  
      
    </div>
  </div>
  </div>
  );
}
