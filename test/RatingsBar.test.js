import RatingsBar from "../client/src/Components/RatingsBar.jsx";


describe("<RatingsBar /> rendering", () => {
  it("should show a bar that shows avg rating", () => {
    let component = shallow(<RatingsBar />);
    expect(component.exists()).toBe(true);
  });
});