import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const partners = [
    {
      name: "Joshua Price",
      logo: "/images/joshprice.png"
    },
    {
      name: "Democrats of AR",
      logo: "/images/arkdems.jpg"
    },
    {
      name: "Arkansas United",
      logo: "/images/aulogo.png"
    },
    {
      name: "Jesse Gibson",
      logo: "/images/jessegibson.png"
    }
  ];

  const scrollingPartners = [...partners, ...partners];

  return (
    <div className="max-w-3xl mx-auto px-8 sm:px-16 md:px-24 lg:px-32">
      <main className="py-8 text-left">
        <p>
          This is PolyData&apos;s grave.
        </p>
        <p className="pt-4">
          We built a small company that made a real impact.
        </p>
        <p className="pt-4">
          From 2021-2023, PolyData Electoral Innovation Network pioneered AI-enhanced
          election analysis tools through partnerships with campaigns, activists, and
          government organizations.
        </p>
        <p className="pt-4">
          We served partners across Arkansas including Joshua Price for AR Secretary
          of State, Democrats of Arkansas, Arkansas United Community Coalition, and more, fulfilling six figures worth of contracts over two years.
        </p>
        <p className="pt-4">
          Our mission was to understand the electorate and help others understand
          the world. We truly believe that our work contributed to a more engaged democracy
          by introducing advancements to many local campaign systems.
        </p>
        <p className="pt-4">
          We built various{' '}
          <a
            href="/polydatainfo.pdf"
            target="_blank"
            className="inline-flex items-center px-1.5 py-0.5 bg-secondary/60 hover:bg-secondary/80 rounded-md text-foreground transition-colors"
          >
            products and services <ArrowUpRight className="w-3 h-3 mb-1" />
          </a>
          {' '}including Arkansas&apos; largest immigrant resources portal,
          an inactive voter identification system, election simulation models, and back-office automation tools.
        </p>
        <p className="pt-4">
          We ultimately closed our doors in 2024 because it was a model that was too small to fit the shoes it was trying to fill. We see a world where
          technology becomes a driving force in political operations, rather than just a slight advantage, and this company just wasn&apos;t ready to scale into a moonshot that could do that.
        </p>
        <p className="pt-4">
          From the ashes, we plan to build something new that will leverage and architect political technology from the ground up.
        </p>
        <p className="pt-4 flex items-center gap-1">
          - Dinesh Vasireddy
          <a
            href="https://twitter.com/dineshvasireddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-transparent rounded-md hover:bg-foreground/10 transition-colors"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/dineshvasireddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-transparent rounded-md hover:bg-foreground/10 transition-colors"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
        </p>

        {/* Partners section */}
        <div className="py-8 w-[470px] mx-auto overflow-hidden">
          <div className="animate-scroll flex gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-[120px] h-20 relative overflow-hidden rounded-xl"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}