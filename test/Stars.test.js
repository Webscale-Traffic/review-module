import Stars from "../client/src/Components/Stars.jsx";


describe("<Stars /> rendering", () => {
  it("should have an Stars component", () => {
    let reviews = [
      {
        cleanRating: 3,
        accRating: 3,
        commRating: 3,
        locationRating: 5,
        checkInRating: 5,
        valueRating: 5,
      },
      {
        cleanRating: 3,
        accRating: 5,
        commRating: 3,
        locationRating: 4,
        checkInRating: 4,
        valueRating: 3,
      }
    ];

    let currentHouse = 1;

    let component = shallow(<Stars reviews={reviews} currentHouse={currentHouse}/>);
    expect(component.exists()).toBe(true);
  });
});