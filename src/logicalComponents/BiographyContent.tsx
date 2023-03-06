import Faq from "../component/Faq";

type Props = {
  biography: {
    id: number;
    title: string;
    description: string;
    randomFact: string;
    lordeTradeMarks: string[];
    melodramaImgURL?: string;
    monarchImgURL: string;
  };
};
const BiographyContent = ({ biography }: Props): JSX.Element => {
  return (
    <main key={biography.id} className="grid h-fit place-items-center">
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
        <section className="object-contain w-full max-lg:hidden max-md:block">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[720px] lg:object-top"
            src={biography.monarchImgURL}
            alt="Lorde dressed in Victorian style orange dress with big emerald earrings and long brown hair."
            loading='lazy'
          />
        </section>

        <section className="relative grid col-span-1 px-8 font-bold tracking-wide text-center max-lg:col-span-2 max-md:col-span-1 place-content-center max-lg:text-sm border-">
          <h1 className="mb-4 text-3xl text-black">{biography.title}</h1>

          <div className="flex justify-center mx-auto mt-3 mb-6">
            <span className="inline-block w-12 h-1 rounded-full bg-melo-rainy-blue"></span>
            <span className="inline-block w-32 h-1 mx-1 rounded-full bg-pure-grey"></span>
            <span className="inline-block w-10 h-1 rounded-full bg-melo-rainy-blue"></span>
          </div>

          <p className="text-md">{biography.description}</p>
        </section>

        <section className="object-contain">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96 lg:h-[720px] lg:object-top"
            src={biography.melodramaImgURL}
            alt="Lorde dressed with a black, shiny leather jacket, black trousers with her hand in her pocket, staring at the camera sideways with long blown brown hair."
            loading='lazy'
          />
        </section>
        <section className="row-span-1 p-10 font-bold text-center rounded-lg shadow-md text-md md:row-span-1 bg-pure-black shadow-pure-black">
          <h1 className="text-solar-sea-blue">Did You Know? 🎉</h1>
          <div className="flex justify-center mx-auto mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-solar-mustard"></span>
            <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-brown"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-solar-sea-blue"></span>
          </div>
          <p className="mt-3 text-sm text-pure-white">{biography.randomFact}</p>
          <h1 className="mt-7 text-solar-sea-blue">Trademarks ™</h1>
          <div className="flex justify-center mx-auto mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-melo-sky-blue"></span>
            <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-mustard"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-pure-black"></span>
          </div>
          <p className="mt-3 text-sm tracking-wider text-md text-pure-white">
            {biography.lordeTradeMarks.join(" • ")}
          </p>
        </section>

        <section className="relative col-span-1 text-center rounded-md shadow-md text-md md:col-span-2 md:overflow-y-scroll shadow-pure-grey md:max-h-96">
          <Faq />
        </section>
      </div>
    </main>
  );
};

export default BiographyContent;
