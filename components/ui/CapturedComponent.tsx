"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Terminal, FileText } from "lucide-react";

interface Target {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const targets: Target[] = [
  {
    id: "google",
    name: "Google",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-default">
        <path d="M3.26758 10.1398L1.76758 8.63982V6.06982L3.26758 4.56982H11.5576" stroke="#130F35" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M14.5876 12.1401V14.2101L13.0876 15.7101H3.26758L1.76758 14.2101V11.6401L3.26758 10.1401H11.1626" stroke="#130F35" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9.58758 21.2751H3.26758L1.76758 19.7751V17.2051L3.26758 15.7051H9.58758L11.0876 17.2051V19.7751L9.58758 21.2751Z" stroke="#130F35" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M15.692 12.1101C18.2381 12.1101 20.302 10.0462 20.302 7.50014C20.302 4.9541 18.2381 2.89014 15.692 2.89014C13.146 2.89014 11.082 4.9541 11.082 7.50014C11.082 10.0462 13.146 12.1101 15.692 12.1101Z" stroke="#130F35"></path>
        <path d="M18.5117 11.3252L22.0917 14.9452" stroke="#130F35"></path>
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-default">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.51247 19.4501C8.51247 20.2751 7.84246 20.9451 7.01746 20.9451C6.19246 20.9451 5.52246 20.2751 5.52246 19.4501C5.52246 18.6251 6.19246 17.9551 7.01746 17.9551C7.84246 17.9551 8.51247 18.6251 8.51247 19.4501ZM17.4875 19.4501C17.4875 20.2751 16.8175 20.9451 15.9925 20.9451C15.1675 20.9451 14.4975 20.2751 14.4975 19.4501C14.4975 18.6251 15.1675 17.9551 15.9925 17.9551C16.8175 17.9551 17.4875 18.6251 17.4875 19.4501Z" stroke="#130F35"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.5164 6.39499L18.0871 3.785L19.2321 2.875H21.2921V5.22501H20.1671L17.9421 16.045L4.79711 14.625L3.03711 8.315L4.48211 6.41L17.4821 6.39499H17.5164Z" stroke="#130F35"></path>
      </svg>
    ),
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-default">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.53632 8.3125L7.81189 10.1071L5.83936 10.7762V11.7232L7.81189 12.3922L8.53632 14.1868H9.46361L10.188 12.3922L12.1606 11.7232V10.7762L10.188 10.1071L9.46361 8.3125H8.53632ZM8.65334 10.6941L8.99997 9.8354L9.34659 10.6941L9.64963 10.9804L10.4434 11.2497L9.64963 11.5189L9.34659 11.8053L8.99997 12.6639L8.65334 11.8053L8.3503 11.5189L7.55653 11.2497L8.3503 10.9804L8.65334 10.6941Z" fill="#130F35"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.2811 1.32617H15.219L16.4221 4.57762L19.6736 5.78076V6.71862L17.0713 7.68155C17.5493 8.66164 17.8174 9.76272 17.8174 10.9253C17.8174 13.1751 16.8146 15.1906 15.2316 16.5494L20.3557 21.7307L19.6446 22.4339L14.4226 17.1535C13.266 17.9005 11.888 18.334 10.4087 18.334C6.31699 18.334 3 15.017 3 10.9253C3 6.83359 6.31699 3.5166 10.4087 3.5166C11.4182 3.5166 12.3818 3.7188 13.2601 4.08536L14.2811 1.32617ZM14.7501 2.94046L13.9361 5.14028L13.6406 5.43568L11.4408 6.24969L13.6406 7.0637L13.9361 7.3591L14.7501 9.55892L15.5641 7.3591L15.8595 7.0637L18.0593 6.24969L15.8595 5.43568L15.5641 5.14028L14.7501 2.94046ZM15.219 11.1732L16.2707 8.33098C16.6221 9.12371 16.8174 10.0012 16.8174 10.9253C16.8174 14.4647 13.9481 17.334 10.4087 17.334C6.86927 17.334 4 14.4647 4 10.9253C4 7.38587 6.86927 4.5166 10.4087 4.5166C11.1027 4.5166 11.7702 4.62675 12.3952 4.83028L9.82654 5.78076V6.71862L13.078 7.92176L14.2811 11.1732H15.219ZM13.078 4.57762L13.0686 4.58109L13.1369 4.41848L13.078 4.57762Z" fill="#130F35"></path>
      </svg>
    ),
  },
  {
    id: "bing",
    name: "Bing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-default">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.3002 1.2998C5.48354 1.2998 3.2002 3.58315 3.2002 6.39981C3.2002 7.91026 3.85683 9.26735 4.90021 10.2012V20.8569L6.6931 22.6498H19.0073L20.8002 20.8569V7.0427L16.3073 2.5498H11.6451C10.7497 1.77119 9.57998 1.2998 8.3002 1.2998ZM4.2002 6.39981C4.2002 4.13544 6.03583 2.2998 8.3002 2.2998C10.5646 2.2998 12.4002 4.13544 12.4002 6.39981C12.4002 8.66417 10.5646 10.4998 8.3002 10.4998C6.03583 10.4998 4.2002 8.66417 4.2002 6.39981ZM5.90021 20.4427V10.901C6.61549 11.2831 7.43254 11.4998 8.3002 11.4998C9.27047 11.4998 10.1775 11.2289 10.9496 10.7585L14.3442 14.2009L15.0562 13.4987L11.7552 10.1512C12.7666 9.21927 13.4002 7.88353 13.4002 6.39981C13.4002 5.34419 13.0795 4.36348 12.5302 3.5498H15.6002V7.2998C15.6002 7.57594 15.824 7.7998 16.1002 7.7998H19.8002V20.4427L18.5931 21.6498H7.10731L5.90021 20.4427ZM16.6002 6.7998V4.30691L19.0931 6.7998H16.6002Z" fill="#130F35"></path>
      </svg>
    ),
  },
  {
    id: "target",
    name: "Target",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-default">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.3974 4.10822C7.81117 2.61607 4.5072 3.49975 3.01548 6.0851C1.52324 8.67135 2.40691 11.9754 4.99229 13.4671L15.413 19.4836L17.063 19.0409L21.2608 11.7746L20.8181 10.1247L10.3974 4.10822ZM2.14932 5.58533C3.91758 2.52071 7.83354 1.47437 10.8973 3.24213L21.6767 9.4657L22.334 11.9158L17.7218 19.8995L15.2718 20.5568L4.49252 14.3333C1.428 12.565 0.381591 8.64904 2.14932 5.58533ZM4.7688 7.19123C5.35169 6.17608 6.64259 5.82949 7.65637 6.4116L7.65969 6.41351C8.42906 6.86314 8.81326 7.72231 8.69118 8.5552H8.8709L8.4348 9.30626C7.84717 10.3183 6.55804 10.6664 5.54342 10.0838L5.5401 10.0819C4.5339 9.49386 4.1865 8.20534 4.7688 7.19123ZM7.51902 8.8842L7.56379 8.80622C7.87119 8.27087 7.68929 7.59024 7.15675 7.27785C6.6208 6.9713 5.94279 7.1549 5.636 7.68918C5.32861 8.22452 5.5105 8.90514 6.04302 9.21754C6.55062 9.50789 7.18842 9.35899 7.51902 8.8842Z" fill="#130F35"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.3017 20.0048L6.0628 14.1326L5.25198 14.7179L9.73307 20.9256L12.2369 21.332L14.2899 19.8507L13.7048 19.0398L11.9879 20.2785L10.3017 20.0048Z" fill="#130F35"></path>
      </svg>
    ),
  },
];

const codeExample = `{
  "results": [
    {
      "content": {
        "last_visible_page": 9,
        "page": 1,
        "parse_status_code": 12000,
        "results": {
          "knowledge": {
            "title": "adidas",
            "factoids": [
              {
                "title": "Phone",
                "content": "1 (800) 982-9337"
              },
              {
                "title": "Headquarters",
                "content": "Herzogenaurach, Germany"
              }
            ],
            "profiles": [
              {
                "title": "Instagram",
                "url": "https://www.instagram.com/adidas"
              },
              {
                "title": "Facebook",
                "url": "https://www.facebook.com/adidas"
              },
              {
                "title": "YouTube",
                "url": "https://www.youtube.com/user/adidas"
              }
            ]
          },
          "organic": [
            {
              "pos": 1,
              "pos_overall": 1,
              "title": "Sneakers and Activewear | adidas US",
              "url": "https://www.adidas.com/us",
              "url_shown": "https://www.adidas.com",
              "favicon_text": "Adidas",
              "desc": "Gear up for your favorite sport with adidas sneakers and activewear for men and women.",
              "sitelinks": {
                "expanded": [
                  {
                    "title": "Men's Shoes",
                    "url": "https://www.adidas.com/us/men-shoes",
                    "desc": "Shop men's shoes at adidas."
                  },
                  {
                    "title": "Kids' Shoes and Clothes",
                    "url": "https://www.adidas.com/us/kids",
                    "desc": "Outfit your young athlete with the latest in kids' sneakers and apparel."
                  }
                ]
              }
            }
          ]
        }
      },
      "created_at": "2026-01-01 12:00:00",
      "updated_at": "2026-01-01 12:00:02",
      "page": 1,
      "url": "https://www.google.com/search?q=adidas&hl=en&gl=us"
    }
  ],
  "parse_status_code": 12000
}`;

export const CapturedComponent: React.FC = () => {
  const [activeTarget, setActiveTarget] = useState("google");
  const [activeTab, setActiveTab] = useState<"request" | "results">("results");

  return (
    <div className="w-full m-auto border-none md:rounded-[80px] rounded-xl max-w-[1842px] bg-[#FEE7F9] py-20 overflow-hidden font-anek">
      <div className="max-w-[1328px] px-6 mx-auto grid gap-10">
        {/* Hero Content */}
        <div className="grid grid-cols-1 items-center gap-10" data-testid="hero-content">
          <div className="grid max-w-[720px] gap-6 justify-self-center">
            <div className="grid gap-3">
              {/* Heading */}
              <div className="grid gap-6 text-center">
                <h1 className="m-0 font-bold text-[48px] leading-[62.4px] text-[#130F35] tracking-tight">
                  Extract data seamlessly from any website with Web Scraper API
                </h1>

                {/* Feature List */}
                <div className="grid gap-6 justify-items-center justify-self-center">
                  <ul className="list-none p-0 space-y-1">
                    {[
                      "Only pay for successfully delivered results",
                      "Real-time, localized data without IP blocks",
                      "Enhance efficiency and cut infrastructure costs",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-1 text-left">
                        <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 text-[#109D8C] mt-[3px]">
                          <path fillRule="evenodd" clipRule="evenodd" d="M41.8624 14.9001L21.3896 35.3729H18.844L7.97119 24.5001L10.5168 21.9545L20.1168 31.5545L39.3168 12.3545L41.8624 14.9001Z" fill="currentColor"></path>
                        </svg>
                        <p className="text-[20px] leading-[30px] text-[#130F35] grow">{text}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex w-full flex-col items-center">
                  <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                    <button
                      type="button"
                      className="rounded-[4px] inline-flex items-center justify-center font-bold transition-colors duration-100 ease-linear text-[18px] h-12 px-5 bg-[#130F35] text-[#F7F7FD] hover:bg-[#24204C] focus-visible:outline focus-visible:outline-[#130F35] focus-visible:outline-2 focus-visible:outline-offset-1"
                    >
                      Get started for free
                    </button>
                    <button
                      type="button"
                      className="rounded-[4px] inline-flex items-center justify-center font-bold transition-colors duration-100 ease-linear text-[18px] h-12 px-5 text-[#130F35] border-[1.5px] border-[#130F35] bg-transparent hover:bg-[#130F350D] focus-visible:outline focus-visible:outline-[#130F35] focus-visible:outline-2 focus-visible:outline-offset-1 gap-2"
                    >
                      <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                        <path d="M24.3332 12.3145C27.3422 12.3145 30.0367 13.3514 32.1617 15.3744L37.9842 9.55197C34.4482 6.26249 29.8327 4.2395 24.3332 4.2395C16.3603 4.2395 9.46682 8.81247 6.10934 15.4764L12.8923 20.7379C14.4988 15.9014 19.0123 12.3145 24.3332 12.3145Z" fill="#EA4335"></path>
                        <path d="M43.8661 25.1062C43.8661 23.7718 43.7386 22.4798 43.5431 21.2388H24.3333V28.9057H35.3322C34.8392 31.4217 33.4112 33.5637 31.2692 35.0087L37.8397 40.1087C41.6731 36.5557 43.8661 31.3027 43.8661 25.1062Z" fill="#4285F4"></path>
                        <path d="M12.8839 28.541C12.4759 27.3085 12.2379 25.9995 12.2379 24.6395C12.2379 23.2795 12.4674 21.9705 12.8839 20.738L6.10093 15.4766C4.71544 18.2305 3.93344 21.3415 3.93344 24.6395C3.93344 27.9375 4.71544 31.0485 6.10943 33.8025L12.8839 28.541Z" fill="#FBBC05"></path>
                        <path d="M24.3332 45.0399C29.8412 45.0399 34.4737 43.2294 37.8396 40.1014L31.2692 35.0014C29.4417 36.2339 27.0872 36.9564 24.3332 36.9564C19.0123 36.9564 14.4988 33.3694 12.8838 28.533L6.10083 33.7944C9.46681 40.4669 16.3603 45.0399 24.3332 45.0399Z" fill="#34A853"></path>
                      </svg>
                      Start free with Google
                    </button>
                  </div>
                  <p className="mt-4 text-[14px] text-[#130F35]">Free trial includes up to 2K results. No credit card is required.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Code Block Dashboard */}
        <div className="hidden md:grid h-[568px] rounded-t-[24px] bg-[#D31DE81A] p-6 pb-0">
          <div className="grid h-full grid-cols-[206px_minmax(0,624px)_398px] rounded-t-2xl border-2 border-white bg-[#FFF5FD]">
            {/* Sidebar: Popular Targets */}
            <div className="flex flex-col h-full gap-4 border-r border-[#D31DE81A] px-6 py-3">
              <p className="text-sm text-[#130F35] py-1">Popular targets</p>
              <div className="flex flex-col gap-2">
                {targets.map((target) => (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setActiveTarget(target.id)}
                    className={cn(
                      "flex items-center gap-2 rounded-md border px-2 py-1.5 transition-colors w-full justify-start hover:bg-[#D31DE80D]",
                      activeTarget === target.id ? "border-[#D31DE8] bg-white shadow-tab" : "border-transparent"
                    )}
                  >
                    {target.icon}
                    <p className="text-sm text-[#130F35]">{target.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Main: Code View */}
            <div className="flex flex-col">
              <div className="flex gap-2 border-b border-[#D31DE81A] p-3">
                <button
                  type="button"
                  onClick={() => setActiveTab("request")}
                  className={cn(
                    "flex items-center gap-2 rounded-md border px-2 py-1.5 transition-colors hover:bg-[#D31DE80D]",
                    activeTab === "request" ? "border-[#D31DE8] bg-white shadow-tab" : "border-transparent"
                  )}
                >
                  <Terminal className="size-4 text-[#130F35]" />
                  <p className="text-sm text-[#130F35]">Request</p>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("results")}
                  className={cn(
                    "flex items-center gap-2 rounded-md border px-2 py-1.5 transition-colors hover:bg-[#D31DE80D]",
                    activeTab === "results" ? "border-[#D31DE8] bg-white shadow-tab" : "border-transparent"
                  )}
                >
                  <FileText className="size-4 text-[#130F35]" />
                  <p className="text-sm text-[#130F35]">Results</p>
                </button>
              </div>
              <div className="relative h-full w-full pl-6 overflow-hidden">
                <div className="relative text-sm font-code bg-transparent leading-relaxed text-[#130F35] pb-6 w-full h-full overflow-auto pt-4">
                  <pre className="whitespace-pre-wrap">
                    {codeExample.split("\n").map((line, i) => (
                      <div key={i} className="flex">
                        <span className="w-8 text-right pr-4 opacity-25 select-none">{i + 1}</span>
                        <span className="flex-1">{line}</span>
                      </div>
                    ))}
                  </pre>
                </div>
                <button
                  type="button"
                  aria-label="Copy code"
                  className="p-2 h-8 absolute right-6 top-4 text-[#130F35] hover:bg-[#130F351A] rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#130F35]"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            </div>

            {/* Right: Render Example */}
            <div className="flex flex-col border-l border-[#D31DE81A]">
              <div className="flex items-center justify-start gap-2 border-b border-[#D31DE81A] p-3">
                <p className="text-sm text-[#130F35] py-1.5">Render example</p>
              </div>
              <div className="h-[486px] w-full overflow-y-scroll bg-white">
                <img
                  src="https://oxylabs.io/_next/image?url=https%3A%2F%2Foxylabs.io%2Foxylabs-web%2FaafpYlxvIZEnjTZA_Google-1-.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75"
                  alt="Render Preview"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="flex justify-center">
            <div className="flex gap-1 p-1 bg-white/40 rounded-full border border-[#D31DE81A]">
              {["Google", "Amazon", "ChatGPT"].map((name) => (
                <button
                  key={name}
                  type="button"
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm transition-all",
                    name === "Google" ? "bg-white/50 shadow-tab border-b border-[#D31DE81A] text-[#130F35]" : "text-[#646D90]"
                  )}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://oxylabs.io/_next/image?url=https%3A%2F%2Foxylabs.io%2Foxylabs-web%2FaYnha90YXLCxVnUf_SCRAPI_HERO_image.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75"
              alt="Mobile Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapturedComponent;
