import World from "./World";

const Hello = () => {
  const showName = () => {
    console.log("Suri");
  };

  const showAge = (age) => {
    console.log(age);
  };

  const showText = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Hello</h1>
      <World />
      <button onClick={showName}>Show Name</button>
      <button
        onClick={() => {
          console.log(4);
        }}
      >
        Show Age
      </button>
      <button
        onClick={() => {
          showAge(10);
        }}
      >
        Show Age 2
      </button>
      <input type="text" onChange={showText} />
    </div>
  );
};

export default Hello;
