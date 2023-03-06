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
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96"
            src={biography.monarchImgURL}
            alt="hello world"
          />
        </section>

        <section className="relative grid col-span-1 font-bold text-center rounded-lg shadow-lg text-md max-lg:col-span-2 max-md:col-span-1 place-content-center">
          <div className="">
            <h1 className="mb-4 text-lg text-black">{biography.title}</h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 rounded-full bg-solar-sea-blue"></span>
              <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-brown"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-solar-sea-blue"></span>
            </div>

            <p>{biography.description}</p>
          </div>
        </section>

        <section className="object-contain">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96"
            src={biography.melodramaImgURL}
            alt="Hello lorde is the "
          />
        </section>
        <section className="row-span-1 p-10 font-bold text-center rounded-lg shadow-md text-md md:row-span-1 bg-pure-black shadow-pure-black">
          <h1 className="text-solar-sea-blue">Did You Know? 🎉</h1>
          <div className="flex justify-center mx-auto mt-2">
            <span className="inline-block w-40 h-1 rounded-full bg-solar-mustard"></span>
            <span className="inline-block w-3 h-1 mx-1 rounded-full bg-solar-brown"></span>
            <span className="inline-block w-1 h-1 rounded-full bg-solar-sea-blue"></span>
          </div>
          <p className="mt-3 text-sm text-pure-white">
            {biography.randomFact} 
          </p>
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

        <section className="relative col-span-1 text-center border-2 text-md md:col-span-2 md:overflow-y-scroll md:max-h-80">
          <Faq />
        </section>
      </div>
    </main>
  );
};

export default BiographyContent;
