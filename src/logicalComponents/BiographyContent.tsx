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

        <section className="relative col-span-1 font-bold text-center rounded-lg shadow-lg text-md max-lg:col-span-2 max-md:col-span-1">
          <h1 className="mb-4 text-lg text-black">
            <h2>{biography.title}</h2>
          </h1>

          <p>{biography.description}</p>
        </section>

        <section className="object-contain">
          <img
            className="relative object-cover h-full min-w-full max-md:object-top max-md:h-96"
            src={biography.melodramaImgURL}
            alt="Hello lorde is the "
          />
        </section>
        <section className="row-span-1 p-10 font-bold text-center rounded-lg shadow-lg text-md md:row-span-1">
          <p>{biography.randomFact}</p>
          <p>{biography.lordeTradeMarks.join(", ")}</p>
        </section>

        <section className="relative col-span-1 text-center border-2 text-md md:col-span-2 md:overflow-y-scroll md:max-h-80">
          <Faq />
        </section>
      </div>
    </main>
  );
};

export default BiographyContent;
