import App from '../client/src/Components/App.jsx';

describe("<App /> rendering", () => {
  it("should have an App component", () => {
    let component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});

describe("button reviews", () => {
  it("should have a button that show current number of reviews", () => {
    let component = shallow(<App />);
    expect(component.children("button")).toHaveLength(1);
  });
});


