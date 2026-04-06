import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const FeatureCard = ({ title, description, imageSrc, imageAlt }: FeatureCardProps) => (
  <div className="relative flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-[24px] bg-[#7e0eff1a] transition-all duration-300">
    <div className="grid gap-[8px] p-[24px]">
      <div className="[&>*]:text-[24px] [&>*]:font-bold">
        <h4 className="m-0 font-bold text-[#130f35] text-[24px] leading-[31.2px] font-['Anek_Latin']">
          {title}
        </h4>
      </div>
      <p className="font-normal text-[16px] leading-[24px] text-[#130f35] font-['Anek_Latin']">
        <span className="base-paragraph">{description}</span>
      </p>
    </div>
    <div className="w-full px-0 pb-0">
      <img
        alt={imageAlt}
        loading="lazy"
        width={832}
        height={814}
        decoding="async"
        className="object-contain h-auto w-full align-middle"
        src={imageSrc}
      />
    </div>
  </div>
);

export const DataDashboardFeature = () => {
  const features = [
    {
      title: "Product management",
      description: "Activate or deactivate your products, manage users, control your IPs, and more.",
      imageSrc:
        "https://oxylabs.io/_next/image?url=https%3A%2F%2Foxylabs.io%2Foxylabs-web%2FaTq-kXNYClf9oD6i_1-1-.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75",
      imageAlt: "Product management dashboard",
    },
    {
      title: "Limits & spending",
      description: "Stay in control by tracking spending habits and setting limits that work for you.",
      imageSrc:
        "https://oxylabs.io/_next/image?url=https%3A%2F%2Foxylabs.io%2Foxylabs-web%2FaUKfPXNYClf9oWQr_2-2-.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75",
      imageAlt: "Limits & spending dashboard",
    },
    {
      title: "Advanced statistics",
      description: "Monitor your traffic activity and get a clear view of your products' performance.",
      imageSrc:
        "https://oxylabs.io/_next/image?url=https%3A%2F%2Foxylabs.io%2Foxylabs-web%2FaTq-k3NYClf9oD6k_3-1-.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75",
      imageAlt: "Advanced statistics dashboard",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto bg-white py-12 px-4 md:px-0">
      <div className="grid gap-[80px]">
        <div className="grid items-start gap-[32px] md:grid-cols-2">
          <h2 className="m-0 font-bold text-[#130f35] text-[42px] leading-[54.6px] font-['Anek_Latin']">
            All your data – one view
          </h2>
          <div className="flex min-w-[220px] grow basis-0 flex-col gap-[24px]">
            <p className="font-normal text-[20px] leading-[30px] text-[#130f35] font-['Anek_Latin']">
              <span className="xl-paragraph">
                Get a unified view of your products, performance, and usage – all in one dashboard.
              </span>
            </p>
            <button
              type="button"
              className="group relative rounded-[4px] box-border inline-flex cursor-pointer items-center justify-center font-bold no-underline transition-all duration-100 ease-linear text-[18px] leading-none gap-[8px] bg-[#130f35] text-[#f7f7fd] hover:bg-[#24204c] focus-visible:outline focus-visible:outline-[#130f35] focus-visible:outline-2 focus-visible:outline-offset-1 px-[20px] py-[8px] h-[48px] w-fit"
              data-button-name="ProductCardsWithImages-Get started"
            >
              Get started
              <svg
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[24px] w-[24px] fill-current text-inherit transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7375 34.1001L26.3375 24.5001L16.7375 14.9001L19.2831 12.3545L30.1559 23.2273V25.7729L19.2831 36.6457L16.7375 34.1001Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-[16px] sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataDashboardFeature;
