import './App.css'
import ticketData from '../TicketData/tickets.json';
import {useState} from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  const itemHeight = 70;
  const containerHeight = 700;
  const startIndex = Math.floor(scroll / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    ticketData.length
  );

  const handleScroll = (event) => {
    setScroll(event.target.scrollTop);
  }

  return (
    <>
      <h1>Ticket List</h1>
      <div
        onScroll={handleScroll}
        style={{ height: `${containerHeight}px`, overflowY: "scroll" }}
      >
        <div style={{ height: `${ticketData.length * itemHeight}px` }}>
          <div
            className={'listContainer'}
          >
            {ticketData.map((item) => (
              <div key={item._id} className={'listItem'} style={{height: `${itemHeight}px`}}>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
