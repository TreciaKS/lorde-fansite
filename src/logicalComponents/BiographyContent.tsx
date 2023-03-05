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
    <main key={biography.id} className="grid h-screen place-items-center">
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
        <section className="relative col-span-1 font-bold text-center rounded-lg shadow-lg text-md md:col-span-2">
          <h1 className="mb-4 text-lg text-black">
            <h2>{biography.title}</h2>
          </h1>

          <p>{biography.description}</p>
          <button className="flex p-3 m-auto mt-3 -mb-4 border-2">
            Click Me
          </button>
        </section>

        <section className="object-contain w-full h-96">
          <img
            className="w-full h-full rounded-lg shadow-lg "
            src={biography.monarchImgURL}
            alt="hello world"
          />
        </section>
        <section className="row-span-1 p-10 font-bold text-center rounded-lg shadow-lg text-md md:row-span-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cumque
          cum dolor non inventore ipsum, vel ullam asperiores quam numquam sit
          voluptatibus dolores nobis fugiat quae est deleniti. Impedit, iusto!
        </section>
        <section>
          <img
            className="object-cover h-full min-w-full rounded-lg shadow-lg"
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
}

export default BiographyContent;
