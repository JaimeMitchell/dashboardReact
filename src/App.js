import "./App.css";

// pp, sidebar, reviews, average rating, sentiment analysis, website visitors
const SideBar = (props) => {
  return (
    <div className="SideBar">
      <h2>Side Bar</h2>
    </div>
  );
};

const Reviews = (props) => {
  return (
    <div className="Reviews">
      <h2>Reviews</h2>
    </div>
  );
};

const AverageRating = (props) => {
  return (
    <div className="AverageRating">
      <h2>AverageRating</h2>
    </div>
  );
};

const SentimentAnalysis = (props) => {
  return (
    <div className="SentimentAnalysis">
      <h2>SentimentAnalysis</h2>
    </div>
  );
};

const WebsiteVisitors = (props) => {
  return (
    <div className="WebsiteVisitors">
      <h2 className="Text">WebsiteVisitors</h2>
      <div className="Box"></div>
    </div>
  );
};

function App() {
  return (
    <div className="root">
      <SideBar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
