import Image from 'next/image'

const logos = [
  { src: '/assets/hero/aws-startup.png', alt: 'AWS Startup Programs' },
  { src: '/assets/hero/microsoft-startups.png', alt: 'Microsoft for Startups' },
  { src: '/assets/hero/nvidia.png', alt: 'NVIDIA Inception Program' },
  { src: '/assets/hero/unicef-startup-lab.png', alt: 'UNICEF Startup Lab', scale: 1.3 },
]

export default function PartnerCarousel() {
  const looped = [...logos, ...logos]

  return (
    <section className="partner-carousel" aria-label="Trusted partners">
      <div className="partner-carousel-inner">
        <div aria-hidden="true" className="partner-fade partner-fade-left" />
        <div aria-hidden="true" className="partner-fade partner-fade-right" />

        <div className="partner-track animate-marquee">
          {looped.map((logo, i) => (
            <div key={`${logo.src}-${i}`} className="partner-logo-wrap">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={56}
                className="partner-logo"
                style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partner-carousel {
          background: transparent;
          padding: 0;
        }

        .partner-carousel-inner {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          padding: 0;
        }

        .partner-fade {
          pointer-events: none;
          position: absolute;
          inset-block: 0;
          z-index: 10;
          width: 8rem;
        }

        .partner-fade-left {
          left: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(255, 255, 255, 0) 100%);
        }

        .partner-fade-right {
          right: 0;
          background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 55%, rgba(255, 255, 255, 0) 100%);
        }

        .partner-track {
          display: flex;
          width: max-content;
          gap: 5rem;
        }

        .partner-logo-wrap {
          display: flex;
          height: 3.5rem;
          width: 10rem;
          align-items: center;
          justify-content: center;
        }

        .partner-logo {
          height: 100%;
          width: 100%;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .partner-carousel {
            padding: 0;
          }

          .partner-fade {
            width: 4.5rem;
          }

          .partner-track {
            gap: 2.5rem;
          }

          .partner-logo-wrap {
            width: 8rem;
            height: 2.8rem;
          }
        }
      `}</style>
    </section>
  )
}
