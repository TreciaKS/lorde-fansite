type Props ={
  biography: {
    "id": number;
    "title": string;
    "description": string;
    "randomFact": string;
    "lordeTradeMarks": string[];
    "melodramaImgURL"?: string;
    "monarchImgURL": string;
  }
}
const BiographyContent = ({ biography }: Props): JSX.Element => {
  return (
    <>
          <div key={biography.id}>
            <h2>{biography.title}</h2>
            <p>{biography.description}</p>
            <p>{biography.randomFact}</p>
            <p>{biography.lordeTradeMarks.join(", ")}</p>
            <img src={biography.melodramaImgURL} alt="melodrama" />
            <img src={biography.monarchImgURL} alt="monarch" />
          </div>
    </>
  );
}

export default BiographyContent