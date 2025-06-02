import React from 'react';

interface Logo {
  url: string;
  alt: string;
}

const logos: Logo[] = [
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/73eaea6e-9fb2-22a3-642d-8d0a155fba39.png", alt: "Brand 1" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/c4678a15-d908-748f-153e-da218ff0120a.png", alt: "Brand 2" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/42f200d4-0c0d-53a8-428b-68ccb7007270.png", alt: "Brand 3" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/decd143e-ac01-5066-0071-434e7486e5c6.png", alt: "Brand 4" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/ba24c79e-2730-b755-5942-626c5e9ef2e3.png", alt: "Brand 5" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/73eaea6e-9fb2-22a3-642d-8d0a155fba39.png", alt: "Brand 1" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/c4678a15-d908-748f-153e-da218ff0120a.png", alt: "Brand 2" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/42f200d4-0c0d-53a8-428b-68ccb7007270.png", alt: "Brand 3" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/decd143e-ac01-5066-0071-434e7486e5c6.png", alt: "Brand 4" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/ba24c79e-2730-b755-5942-626c5e9ef2e3.png", alt: "Brand 5" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/73eaea6e-9fb2-22a3-642d-8d0a155fba39.png", alt: "Brand 1" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/c4678a15-d908-748f-153e-da218ff0120a.png", alt: "Brand 2" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/42f200d4-0c0d-53a8-428b-68ccb7007270.png", alt: "Brand 3" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/decd143e-ac01-5066-0071-434e7486e5c6.png", alt: "Brand 4" },
  { url: "https://mcusercontent.com/c379e3356454ef2a14873d293/images/ba24c79e-2730-b755-5942-626c5e9ef2e3.png", alt: "Brand 5" },
 
  
];


const LogoSlider: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-white ">
      <div className="relative">
        <div className="flex animate-slide">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="mx-8 flex-shrink-0"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-20 w-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;