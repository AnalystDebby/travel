import { Nav } from "./component/nav";
import { Main } from "./component/main";
import { Data } from "./component/data";
import "./App.scss";

export const App = () => {
  const cards = Data.map((item) => {
    return (
      <Main
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });
  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
};
