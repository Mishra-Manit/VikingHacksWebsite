import React from "react";

type Sponsor = {
  name: string;
  logo: string; // URL to the sponsor's logo
  link: string; // Sponsor's website link
};

type SponsorsProps = {
  partners: Sponsor[]; // Top-tier sponsors
  diamond: Sponsor[]; // Diamond sponsors
  gold: Sponsor[]; // Gold sponsors
};

const Sponsors: React.FC<SponsorsProps> = ({ partners, diamond, gold }) => {
  // Section rendering helper
  const SponsorSection = ({
    title,
    sponsors,
    gridCols,
  }: {
    title: string;
    sponsors: Sponsor[];
    gridCols: string;
  }) => (
    <div className="mb-16">
      {/* Section Title */}
      <h3 className="text-[4vw] md:text-[1vw] w-min bg-black text-white font-mono py-[0.1rem] px-4 uppercase tracking-normal mb-3">
        {title}
      </h3>
      {/* Sponsor Grid */}
      <div className={`grid ${gridCols} gap-8 border-t border-dashed border-blue-300 border-opacity-90`}>
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-6"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full max-w-[200px] md:max-w-[270px] aspect-[270/120] object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="text-black relative pb-24 pt-16 md:pt-10 lg:pt-32"
      id="sponsors-section"
    >
      <div className="relative">
        <h2 className="text-[10vw] md:text-[4vw] font-medium leading-none tracking-tight mb-16">
          Sponsors
        </h2>
        {/* Partner Section */}
        <SponsorSection
          title="Partner"
          sponsors={partners}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
        />

        {/* Diamond Section */}
        <SponsorSection
          title="Diamond"
          sponsors={diamond}
          gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        />

        {/* Gold Section */}
        <SponsorSection
          title="Gold"
          sponsors={gold}
          gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        />
      </div>
    </section>
  );
};

export default Sponsors;