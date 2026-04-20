import Image, { StaticImageData } from 'next/image';
import heroPrincipal from '@/public/images/hero/hero-sede-principal-faccade.png';
import heroSur from '@/public/images/hero/hero-transparent-bg.png';

type CampusVariant = 'principal' | 'sur';

type CampusHeroConfig = {
  image: StaticImageData;
  alt: string;
  imageWrapperClass: string;
  imageClass?: string;
  desktopTitle: string;
  desktopTitleClass?: string;
  mobileTitleLines: [string, string];
  layout?: string;
};

const campusConfigs: Record<CampusVariant, CampusHeroConfig> = {
  principal: {
    image: heroPrincipal,
    alt: 'Fachada de la Sede Principal de Valencia School en Residencial Valencia, Tegucigalpa',
    layout: 'principal',
    imageWrapperClass: 'mx-auto aspect-[1185/502] w-full max-w-5xl',
    imageClass: 'object-contain',
    desktopTitle: 'Sede Principal',
    desktopTitleClass: '',
    mobileTitleLines: ['Sede', 'Principal'],
  },
  sur: {
    image: heroSur,
    alt: 'Campus moderno de la Sede Sur de Valencia School en Los Hidalgos, Comayagüela',
    imageWrapperClass: '-translate-x-4 sm:-translate-x-6 md:w-[75%] md:-translate-x-8 lg:w-[70%] lg:-translate-x-12 xl:-translate-x-16',
    imageClass: 'translate-x-[-20%] md:translate-x-[0%] lg:translate-x-[0%]',
    desktopTitle: 'Sede Sur',
    desktopTitleClass: 'pb-32',
    mobileTitleLines: ['Sede', 'Sur'],
  },
};

const sectionClasses =
  'relative w-full overflow-hidden bg-white border-b border-valencia-blue/15 shadow-[0_12px_28px_-16px_rgba(0,55,110,0.35)]';
const sectionInnerClasses = 'relative mx-auto w-full max-w-screen-2xl';
const imageWrapperBase = 'relative aspect-[3/2] w-full';
const titleWrapperBaseSur =
  'pointer-events-none absolute inset-0 z-10 flex items-start justify-end px-4 pt-10 text-right sm:px-6 sm:pt-12 md:px-10 md:pt-12 lg:px-20 lg:items-center lg:pt-0';
const titleWrapperBasePrincipal =
  'relative z-10 flex w-full flex-col items-center justify-center px-6 pt-10 text-center sm:px-10 sm:pt-12 lg:px-20 lg:pt-16';
const titleBaseClasses =
  'font-urbanist font-semibold leading-tight text-valencia-blue text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]';

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function CampusHero({ variant }: { variant: CampusVariant }) {
  const config = campusConfigs[variant];

  return (
    <section id="inicio" className={sectionClasses}>
      <div className={sectionInnerClasses}>
        {config.layout === 'principal' ? (
          <div className="flex w-full flex-col items-center justify-between gap-8">
            <div className={titleWrapperBasePrincipal}>
              <h1 className={titleBaseClasses}>
                <span className="block">Sede Principal</span>
              </h1>
            </div>
            <div className={classNames('relative w-full', config.imageWrapperClass)}>
              <Image
                src={config.image}
                alt={config.alt}
                fill
                className={classNames('object-contain object-bottom', config.imageClass)}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 60vw"
              />
            </div>
          </div>
        ) : (
          <div className="relative flex w-full justify-start">
            <div className={classNames(imageWrapperBase, config.imageWrapperClass)}>
              <Image
                src={config.image}
                alt={config.alt}
                fill
                className={classNames('object-contain object-left-bottom', config.imageClass)}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 60vw"
              />
            </div>

            <div className={titleWrapperBaseSur}>
              <h1 className={titleBaseClasses}>
                <span className={classNames('block sm:hidden lg:block', config.desktopTitleClass)}>{config.desktopTitle}</span>
                <span className="hidden sm:block lg:hidden">
                  {config.mobileTitleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </h1>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function HeroSedePrincipalHero() {
  return <CampusHero variant="principal" />;
}

export function HeroSedeSurHero() {
  return <CampusHero variant="sur" />;
}
