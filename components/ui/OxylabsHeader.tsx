"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface DropdownItem {
  label: string;
  href?: string;
}

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  icon?: string;
  dropdownItems?: DropdownItem[];
}

const PROXY_LOCATIONS: DropdownItem[] = [
  { label: "Europe" },
  { label: "North America" },
  { label: "South America" },
  { label: "Asia" },
  { label: "Africa" },
  { label: "Oceania" },
];

const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "Proxies", hasDropdown: true },
  { label: "Scraping solutions", hasDropdown: true },
  {
    label: "Data for AI",
    hasDropdown: true,
    icon: "https://oxylabs.io/prismic_resources/ZxiTgoF3NbkBX4SP_icon-left.svg",
  },
  { label: "AI studio", hasDropdown: true },
  { label: "Pricing", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
];

const HEADER_OFFSET = "133px";

export const OxylabsHeader: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!mobileNavOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileNavOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  const handleMobileNavToggle = () => {
    setMobileNavOpen((open) => !open);
  };

  const handleMobileNavClose = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FDFFFF] transition-all duration-200 ease-out font-['Anek_Latin',sans-serif]">
      {/* Sub-Navbar */}
      <div className="flex w-full justify-center bg-[#130F35]/[0.05] text-[#130F35]">
        <div className="flex h-[53px] w-full max-w-[1332px] items-center justify-between gap-2 px-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
            {/* Proxy Locations Dropdown */}
            <div className="group relative flex shrink-0 cursor-pointer items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1 text-sm font-bold text-[#130F35] transition-colors duration-100 hover:text-[#7971BC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#130F35]"
              >
                <span className="sm:hidden">Locations</span>
                <span className="hidden sm:inline">Proxy locations</span>
                <svg viewBox="0 0 49 49" fill="none" className="h-5 w-5 transition-transform duration-150 group-hover:rotate-180">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.8168 17.1545L24.4168 26.7545L34.0168 17.1545L36.5624 19.7001L25.6896 30.5729H23.144L12.2712 19.7001L14.8168 17.1545Z" fill="currentColor" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute top-10 left-0 z-30 hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="relative rounded-md border border-[#130F35]/10 bg-white shadow-lg">
                  {/* Arrow */}
                  <div className="absolute left-1/4 top-[-15px] -translate-x-1/2">
                    <div className="h-0 w-0 border-b-[14px] border-l-[10px] border-r-[12px] border-transparent border-b-[#130F35]/10"></div>
                    <div className="-mt-3 h-0 w-0 border-b-[14px] border-l-[10px] border-r-[12px] border-transparent border-b-white"></div>
                  </div>

                  {PROXY_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="flex min-w-[172px] cursor-pointer justify-between px-4 py-2 hover:bg-[#FBFCFE] transition-colors">
                      <p className="text-xs font-bold text-[#130F35]">{loc.label}</p>
                      <svg viewBox="0 0 49 49" fill="none" className="h-5 w-5 text-[#130F35]">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7375 34.1001L26.3375 24.5001L16.7375 14.9001L19.2831 12.3545L30.1559 23.2273V25.7729L19.2831 36.6457L16.7375 34.1001Z" fill="currentColor" />
                      </svg>
                    </div>
                  ))}
                  <a href="/location-proxy" className="flex min-w-[172px] items-center rounded-b-md border-t border-[#130F35]/10 p-4 hover:bg-[#FBFCFE] no-underline">
                    <p className="text-xs font-bold text-[#130F35]">See all locations</p>
                    <svg viewBox="0 0 49 49" fill="none" className="ml-2 h-5 w-5 fill-current text-[#130F35]">
                      <path fillRule="evenodd" clipRule="evenodd" d="M28.8044 34.7002L38.4044 25.1002L28.8044 15.5002L31.35 12.9546L42.2228 23.8274V26.373L31.35 37.2458L28.8044 34.7002Z" fill="currentColor" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.75 23.3002L41.55 23.3002V26.9002L6.75 26.9002L6.75 23.3002Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://uptime.oxylabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-bold text-[#130F35] no-underline hover:text-[#7971BC]"
            >
              <span className="md:hidden">Status</span>
              <span className="hidden md:inline">Network status</span>
            </a>
            <a
              href="https://developers.oxylabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-bold text-[#130F35] no-underline hover:text-[#7971BC]"
            >
              <span className="md:hidden">Docs</span>
              <span className="hidden md:inline">Documentation</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden">
            <a
              href="mailto:hello@oxylabs.io"
              className="hidden text-sm text-[#130F35] no-underline hover:text-[#7971BC] lg:inline"
            >
              hello@oxylabs.io
            </a>

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 49 49" fill="none" className="h-5 w-5 fill-current text-[#130F35]">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.91675 10.7H31.5167V14.3H3.91675V10.7Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.3167 10.7V12.5C12.3167 14.9238 13.8503 18.7204 16.675 21.9688C19.4684 25.1812 23.2135 27.5 27.3167 27.5H29.1167V31.0999H27.3167C21.82 31.0999 17.165 28.0187 13.9585 24.3311C10.7832 20.6795 8.71675 16.0761 8.71675 12.5V10.7H12.3167Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M23.1167 10.7V12.5C23.1167 14.9238 21.5832 18.7204 18.7585 21.9688C15.965 25.1812 12.22 27.5 8.11675 27.5H6.31675V31.0999H8.11675C13.6135 31.0999 18.2684 28.0187 21.475 24.3311C24.6503 20.6795 26.7167 16.0761 26.7167 12.5V10.7H23.1167Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5167 4.69995V14.3H15.9167V4.69995H19.5167Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.3167 40.4765V43.0999H26.7167V40.0999L26.8677 39.3785L35.2677 20.1785H38.5658L46.9658 39.3785L47.1167 40.0999V43.0999H43.5168V40.4765L36.9167 25.3908L30.3167 40.4765Z" fill="currentColor" />
                <path fillRule="evenodd" clipRule="evenodd" d="M30.3167 32.2999H43.5168V35.9H30.3167V32.2999Z" fill="currentColor" />
              </svg>
              <div className="group relative flex cursor-pointer items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1 text-sm font-bold text-[#130F35] transition-colors duration-100 hover:text-[#7971BC]"
                >
                  <span className="sm:hidden">EN</span>
                  <span className="hidden sm:inline">English (EN)</span>
                  <svg viewBox="0 0 49 49" fill="none" className="h-5 w-5 transition-transform duration-150 group-hover:rotate-180">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.8168 17.1545L24.4168 26.7545L34.0168 17.1545L36.5624 19.7001L25.6896 30.5729H23.144L12.2712 19.7001L14.8168 17.1545Z" fill="currentColor" />
                  </svg>
                </button>
                <div className="absolute top-10 left-0 z-30 hidden group-hover:block">
                  <div className="relative rounded-md border border-[#130F35]/10 bg-white shadow-lg">
                    <div className="absolute left-1/4 top-[-15px] -translate-x-1/2">
                      <div className="h-0 w-0 border-b-[14px] border-l-[10px] border-r-[12px] border-transparent border-b-[#130F35]/10"></div>
                      <div className="-mt-3 h-0 w-0 border-b-[14px] border-l-[10px] border-r-[12px] border-transparent border-b-white"></div>
                    </div>
                    <a href="/" className="flex min-w-[172px] p-4 text-xs font-bold text-[#130F35] no-underline hover:bg-[#FBFCFE]">English</a>
                    <a href="https://oxylabs.cn" className="flex min-w-[172px] p-4 text-xs font-bold text-[#130F35] no-underline hover:bg-[#FBFCFE]">中文</a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://dashboard.oxylabs.io"
              className="shrink-0 text-sm font-bold text-[#130F35] no-underline hover:text-[#7971BC]"
            >
              Log in
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex h-20 max-w-[1332px] items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex min-w-0 flex-1 items-center gap-6 lg:gap-12">
          {/* Logo */}
          <a href="/" className="no-underline shrink-0" aria-label="Oxylabs homepage">
            <svg width="151" height="28.5" viewBox="0 0 218 42" className="h-6 w-auto fill-current text-[#130F35] sm:h-[28.5px] sm:w-[151px]">
              <g fill="none" fillRule="evenodd">
                <path d="M11.842 21L1.621 10.094a5.981 5.981 0 01.267-8.455l.026-.025a6.044 6.044 0 018.516.291l14.058 15.002a5.983 5.983 0 010 8.187l-14.058 15a6.044 6.044 0 01-8.516.292 5.981 5.981 0 01-.293-8.48L11.842 21z" fill="#23E6A8" />
                <path d="M29.59 21l10.223-10.906a5.982 5.982 0 00-.268-8.455l-.026-.025a6.044 6.044 0 00-8.517.291L16.945 16.907a5.982 5.982 0 000 8.187l14.057 15a6.044 6.044 0 008.517.292 5.981 5.981 0 00.317-8.453l-.023-.027L29.59 21z" fill="#23E6A8" />
                <path d="M197.703 16.509c0 .56.372 1.016 1.118 1.368.744.35 1.65.66 2.718.925 1.088.273 2.158.61 3.205 1.01 1.069.408 1.974 1.087 2.72 2.042.744.954 1.117 2.146 1.117 3.577 0 2.16-.808 3.823-2.424 4.988-1.617 1.164-3.633 1.746-6.05 1.746-4.33 0-7.28-1.668-8.854-5.008l4.722-2.652c.617 1.824 1.995 2.736 4.132 2.736 1.94 0 2.91-.603 2.91-1.81 0-.561-.374-1.017-1.119-1.368-.745-.35-1.651-.666-2.719-.947a28.279 28.279 0 01-3.205-1.052 6.565 6.565 0 01-2.718-2c-.746-.91-1.118-2.054-1.118-3.43 0-2.076.766-3.71 2.297-4.902 1.533-1.194 3.437-1.79 5.714-1.79 1.714 0 3.275.386 4.68 1.158 1.405.772 2.515 1.873 3.33 3.304l-4.638 2.525c-.674-1.431-1.799-2.146-3.372-2.146-.703 0-1.286.154-1.75.462-.464.309-.696.73-.696 1.264zm-23.864 8.837c1.097 1.096 2.488 1.643 4.174 1.643 1.688 0 3.085-.555 4.196-1.663 1.11-1.108 1.664-2.532 1.664-4.272 0-1.74-.554-3.164-1.664-4.273-1.11-1.108-2.509-1.662-4.196-1.662-1.686 0-3.077.554-4.174 1.663-1.096 1.108-1.644 2.532-1.644 4.272 0 1.74.548 3.17 1.644 4.292zm5.186-15.403c2.84 0 5.264 1.072 7.273 3.22 2.01 2.146 3.015 4.777 3.015 7.891 0 3.115-1.005 5.745-3.015 7.892-2.009 2.146-4.434 3.22-7.273 3.22-2.951 0-5.227-1.025-6.83-3.073v2.484h-5.439V2.114h5.439v10.9c1.602-2.048 3.88-3.071 6.83-3.071zM146.35 25.346c1.096 1.093 2.46 1.641 4.09 1.641s2.993-.548 4.09-1.641c1.096-1.094 1.644-2.483 1.644-4.167 0-1.683-.548-3.072-1.645-4.167-1.096-1.094-2.46-1.642-4.09-1.642s-2.986.548-4.068 1.642c-1.083 1.095-1.623 2.484-1.623 4.167 0 1.684.534 3.073 1.602 4.166v.001zm10.034-14.814h5.44v21.045h-5.44v-2.484c-1.63 2.048-3.921 3.072-6.872 3.072-2.812 0-5.221-1.073-7.23-3.22-2.011-2.146-3.016-4.776-3.016-7.89 0-3.115 1.005-5.746 3.015-7.893 2.009-2.146 4.42-3.22 7.23-3.22 2.952 0 5.243 1.024 6.873 3.073v-2.483zM129.95 31.576h5.438V.851h-5.438v30.725zm-8.39-21.044h5.818l-7.673 21.045c-1.098 3.03-2.551 5.226-4.365 6.586-1.812 1.36-4.068 1.971-6.767 1.83v-5.05c1.462.028 2.621-.281 3.478-.925.857-.646 1.54-1.684 2.046-3.116l-8.644-20.37h5.946l5.48 14.142 4.68-14.142zm-16.444 21.045h-6.283l-4.552-6.399-4.596 6.399H83.4l7.716-10.733-7.378-10.312h6.282l4.259 5.935 4.258-5.935h6.24L97.399 20.8l7.716 10.776zm-37.06-6.356c1.096 1.093 2.46 1.641 4.09 1.641s2.993-.548 4.09-1.641c1.096-1.094 1.644-2.483 1.644-4.167 0-1.683-.548-3.072-1.645-4.167-1.096-1.094-2.46-1.642-4.09-1.642s-2.986.548-4.068 1.642c-1.083 1.095-1.623 2.484-1.623 4.167 0 1.684.534 3.073 1.602 4.166v.001zm12.016 3.746c-2.165 2.132-4.806 3.198-7.927 3.198-3.12 0-5.755-1.073-7.905-3.22-2.15-2.146-3.225-4.776-3.225-7.89 0-3.115 1.075-5.746 3.225-7.893 2.15-2.147 4.785-3.22 7.905-3.22s5.762 1.073 7.927 3.22c2.165 2.147 3.246 4.778 3.246 7.892 0 3.115-1.081 5.752-3.246 7.912zM213.95 13.377h-.49v-.927h.49c.6 0 .6.342.6.455 0 .116 0 .472-.6.472m1.26-.473c0-.687-.483-1.114-1.26-1.114h-1.149v3.115h.66v-.868h.49c.03 0 .06 0 .091-.002l.635.87h.817l-.774-1.06c.316-.198.49-.53.49-.94m-1.238 2.91a2.47 2.47 0 01-2.467-2.468 2.47 2.47 0 012.467-2.467 2.47 2.47 0 012.469 2.467 2.47 2.47 0 01-2.469 2.469m0-5.874a3.409 3.409 0 00-3.404 3.405 3.409 3.409 0 003.404 3.406 3.409 3.409 0 003.406-3.406 3.41 3.41 0 00-3.406-3.405" fill="currentColor" />
              </g>
            </svg>
          </a>

          {/* Main Nav Links — desktop */}
          <div className="hidden min-w-0 items-center gap-4 lg:flex lg:gap-8">
            {MAIN_NAV_ITEMS.map((item, idx) => (
              <div key={idx} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 text-base font-bold text-[#130F35] transition-colors duration-100 hover:text-[#7971BC]"
                >
                  {item.icon && (
                    <div className="flex h-5 w-5 shrink-0 items-center">
                      <img src={item.icon} alt="" className="object-contain" />
                    </div>
                  )}
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg viewBox="0 0 49 49" fill="none" className="h-5 w-5 transition-transform duration-150 group-hover:rotate-180">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.8168 17.1545L24.4168 26.7545L34.0168 17.1545L36.5624 19.7001L25.6896 30.5729H23.144L12.2712 19.7001L14.8168 17.1545Z" fill="currentColor" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons — large screens only (mobile: inside drawer) */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button
            type="button"
            className="h-8 rounded-[4px] bg-[#130F35] px-4 py-1 text-sm font-bold text-[#F7F7FD] transition-colors duration-100 hover:bg-[#24204C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#130F35]"
          >
            Try Oxylabs today
          </button>
          <button
            type="button"
            className="h-8 rounded-[4px] border-[1.5px] border-[#130F35] bg-transparent px-4 py-1 text-sm font-bold text-[#130F35] transition-colors duration-100 hover:bg-[#130F35]/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#130F35]"
          >
            Talk to data expert
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-[#130F35] transition-colors hover:bg-[#130F35]/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#130F35] lg:hidden"
          aria-expanded={mobileNavOpen}
          aria-controls="oxylabs-mobile-nav"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          onClick={handleMobileNavToggle}
        >
          {mobileNavOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {/* Mobile navigation panel */}
      {mobileNavOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 z-40 bg-[#130F35]/30 lg:hidden"
            style={{ top: HEADER_OFFSET }}
            aria-label="Close menu"
            onClick={handleMobileNavClose}
          />
          <div
            id="oxylabs-mobile-nav"
            className="fixed bottom-0 right-0 z-40 flex w-full max-w-[min(100vw,380px)] flex-col overflow-y-auto border-l border-[#130F35]/10 bg-[#FDFFFF] shadow-xl lg:hidden"
            style={{ top: HEADER_OFFSET }}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <div className="flex flex-col gap-1 p-4">
              {MAIN_NAV_ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-left text-base font-bold text-[#130F35] hover:bg-[#130F35]/[0.05]"
                  onClick={handleMobileNavClose}
                >
                  {item.icon ? (
                    <span className="flex h-5 w-5 shrink-0 items-center">
                      <img src={item.icon} alt="" className="object-contain" width={20} height={20} />
                    </span>
                  ) : null}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            <div className="mx-4 border-t border-[#130F35]/10" />
            <div className="flex flex-col gap-1 p-4">
              <a
                href="https://uptime.oxylabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-bold text-[#130F35] no-underline hover:bg-[#130F35]/[0.05]"
                onClick={handleMobileNavClose}
              >
                Network status
              </a>
              <a
                href="https://developers.oxylabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-bold text-[#130F35] no-underline hover:bg-[#130F35]/[0.05]"
                onClick={handleMobileNavClose}
              >
                Documentation
              </a>
              <a
                href="mailto:hello@oxylabs.io"
                className="rounded-md px-3 py-2 text-sm text-[#130F35] no-underline hover:bg-[#130F35]/[0.05]"
                onClick={handleMobileNavClose}
              >
                hello@oxylabs.io
              </a>
              <a
                href="https://dashboard.oxylabs.io"
                className="rounded-md px-3 py-2 text-sm font-bold text-[#130F35] no-underline hover:bg-[#130F35]/[0.05]"
                onClick={handleMobileNavClose}
              >
                Log in
              </a>
            </div>
            <div className="mt-auto flex flex-col gap-2 border-t border-[#130F35]/10 p-4">
              <button
                type="button"
                className="h-10 w-full rounded-[4px] bg-[#130F35] text-sm font-bold text-[#F7F7FD] hover:bg-[#24204C]"
                onClick={handleMobileNavClose}
              >
                Try Oxylabs today
              </button>
              <button
                type="button"
                className="h-10 w-full rounded-[4px] border-[1.5px] border-[#130F35] text-sm font-bold text-[#130F35] hover:bg-[#130F35]/[0.05]"
                onClick={handleMobileNavClose}
              >
                Talk to data expert
              </button>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default OxylabsHeader;
