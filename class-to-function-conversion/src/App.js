import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickHandle = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={onClickHandle}>Click me</button>
    </div>
  );
};

export default App;

// Class To Function Conversion With Hooks
// Convert this code into a functional component that uses hooks:

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }
