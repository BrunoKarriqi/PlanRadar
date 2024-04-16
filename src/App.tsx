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
  const visibleItems = ticketData.slice(startIndex, endIndex);

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
            style={{
              position: "relative",
              height: `${visibleItems.length * itemHeight}px`,
              top: `${startIndex * itemHeight}px`,
            }}
          >
            {visibleItems.map((item) => (
              <div key={item._id} className={'listItem'} style={{height: `${itemHeight}px`}}>
                <div className={'leftSide'}>
                  <h3>{item.date}</h3>
                  <p>{item.month}</p>
                </div>
                <div className={'rightSide'}>
                  <h3>{item.name}</h3>
                  <p>{item.time} | {item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
