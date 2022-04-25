import Ad from "../components/ad";
//hi

export default function Ads({ ads }) {
  const rev_ads = ads.slice().reverse();
  return (
    <div>
      {rev_ads.map((a) => (
        <div style={{ paddingBottom: 10 }}>
          <Ad ad={a} />
        </div>
      ))}
    </div>
  );
}
