import "./index.css";
import { useState } from "react";

/*
Core Concept: 
1. Identify the State: Determine the state that needs to be controlled 
and managed at a higher level (typically in a parent component).

2. Lift State Up: Move the state to a higher-level parent component that can manage it.

3. Pass State as Props: Pass the state and any necessary callback functions 
down to the child components as props.

4. Update State via Callbacks: Use the callback functions passed down as 
props to update the state in the parent component when necessary.

5. Use State Props: In the child components, use the props received to determine
 their behavior and appearance based on the state passed down from the parent.

*/

export default function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

function Container() {
  const [selectOpen, setSelectOpen] = useState(0);
  // Function to update selectOpen state
  const handleCardClick = (index) => {
    setSelectOpen(index);
  };
  return (
    <div className="container">
      <Card
        index={0}
        selectOpen={selectOpen}
        onClick={() => handleCardClick(0)}
        url="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
        Explore the World
      </Card>
      <Card
        index={1}
        selectOpen={selectOpen}
        onClick={() => handleCardClick(1)}
        url="https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
        Wild Forest
      </Card>
      <Card
        index={2}
        selectOpen={selectOpen}
        onClick={() => handleCardClick(2)}
        url="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
      >
        Sunny Beach
      </Card>
      <Card
        index={3}
        selectOpen={selectOpen}
        onClick={() => handleCardClick(3)}
        url="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
      >
        City on Winter
      </Card>
      <Card
        index={4}
        selectOpen={selectOpen}
        onClick={() => handleCardClick(4)}
        url="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      >
        Mountains - Clouds
      </Card>
    </div>
  );
}

function Card({ url, onClick, selectOpen, index, children }) {
  const isOpen = index === selectOpen;
  return (
    <div
      className={`panel ${isOpen ? "active" : ""}`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      onClick={onClick}
    >
      <h3>{children}</h3>
    </div>
  );
}
