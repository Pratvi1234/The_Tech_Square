const newsItems = [
  "Local Store Now Open",
  "Trusted by Thousands",
  "Big Savings on Tech",
  "Latest Smartphones Available",
];

const NewsTicker = () => {
  return (
    <div className="news_ticker_wrapper">
      <div className="news_ticker">
        {newsItems.map((item, index) => (
          <span key={index} className="news_item">
            {item} &nbsp; • &nbsp;
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {newsItems.map((item, index) => (
          <span key={index + newsItems.length} className="news_item">
            {item} &nbsp; • &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
