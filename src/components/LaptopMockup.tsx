interface LaptopMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Realistic laptop mockup frame. The screenshot fills the screen area,
 * surrounded by a bezel, a camera notch, and a base/keyboard deck.
 */
export const LaptopMockup = ({ src, alt, className = "" }: LaptopMockupProps) => {
  return (
    <div className={`relative mx-auto w-full max-w-5xl ${className}`}>
      {/* Screen */}
      <div className="relative rounded-[18px] md:rounded-[22px] bg-neutral-900 p-2 md:p-3 shadow-elegant ring-1 ring-black/20">
        {/* Bezel inner */}
        <div className="relative rounded-[10px] md:rounded-[14px] bg-black overflow-hidden">
          {/* Camera notch */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10 h-1.5 w-1.5 rounded-full bg-neutral-700" />
          <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-800">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Base / keyboard deck */}
      <div className="relative mx-auto" style={{ width: "108%" }}>
        <div className="h-3 md:h-4 -mt-0.5 bg-gradient-to-b from-neutral-300 to-neutral-500 rounded-b-[14px] shadow-md" />
        {/* Notch in base (trackpad cutout) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-16 md:w-24 bg-neutral-700 rounded-b-md" />
      </div>

      {/* Soft floor shadow */}
      <div className="mx-auto mt-2 h-6 w-3/4 rounded-[50%] bg-black/20 blur-2xl" />
    </div>
  );
};
