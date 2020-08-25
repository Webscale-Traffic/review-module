import Reviews from "../client/src/Components/Reviews.jsx";

describe("reviews components renders", () => {
  it("should render the reviews component", () => {
    let users = [
      {id: 1, name: 'Bill'},
      {id: 2, name: 'Bob'},
      {id: 3, name: 'Ben'},
      {id: 4, name: 'Blake'},
      {id: 5, name: 'Beck'},
      {id: 6, name: 'Barb'},
    ];
    let reviews = [
      {id: 1, review: "Hi"},
      {id: 2, review: "Hi"},
      {id: 3, review: "Hi"},
      {id: 4, review: "Hi"},
      {id: 5, review: "Hi"},
      {id: 6, review: "Hi"},
    ];
    let currentHouse = 1;
    let component = shallow(<Reviews users={users} reviews={reviews} currentHouse={currentHouse}/>);
    expect(component.exists()).toBe(true);
  });
});