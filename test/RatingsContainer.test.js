import RatingsContainer from "../client/src/Components/RatingsContainer.jsx";
import RatingsBar from "../client/src/Components/RatingsBar.jsx";

let reviews = [
  {id: 1, reviews: "Great View"},
  {id: 2, reviews: "Great Price"}
];

let currentHouse = 1;

describe("<RatingsContainer /> rendering", () => {
  it("should have an RatingsContainer component", () => {
    let component = shallow(<RatingsContainer reviews={reviews} currentHouse={currentHouse}/>);
    expect(component.exists()).toBe(true);
  });
});

describe("<RatingsBar/> rendering", () => {
  it("should have an RatingsBar component", () => {
    let component = shallow(<RatingsBar />);
    expect(component.exists()).toBe(true);
  });
});

describe("ratings categor", () => {
  it("should have six different ratings category", () => {
    let component = shallow(<RatingsContainer reviews={reviews} currentHouse={currentHouse}/>);
    expect(component.children("div")).toHaveLength(6);
  });
});
