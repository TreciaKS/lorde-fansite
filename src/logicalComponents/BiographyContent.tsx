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
    <main
      key={biography.id}
      className="relative grid mb-12 max-lg:-mb-0 place-items-center max-sm:border-melo-sky-blue h-fit"
    >
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
        <section className="object-contain w-full">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96"
            src={biography.monarchImgURL}
            alt="hello world"
          />
        </section>
        <section className="relative col-span-1 p-6 font-bold text-center rounded-lg shadow-lg text-md">
          <h1 className="mb-4 text-lg text-black">
            <h2>{biography.title}</h2>
          </h1>

          <p>{biography.description}</p>
          <button className="flex p-3 m-auto mt-3 -mb-4 border-2">
            Click Me
          </button>
        </section>

        <section className="object-contain">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96"
            src={biography.melodramaImgURL}
            alt="Hello lorde is the "
          />
        </section>
        <section className="relative row-span-1 p-10 font-bold text-center rounded-lg shadow-lg text-md md:row-span-1 h-fit">
          <p>{biography.randomFact}</p>
          <p>{biography.lordeTradeMarks.join(", ")}</p>
        </section>

        <section className="relative col-span-1 text-center border-2 h-fit text-md md:col-span-2 md:overflow-y-scroll md:max-h-80">
          <Faq />
        </section>
      </div>
    </main>
  );
}

export default BiographyContent;
