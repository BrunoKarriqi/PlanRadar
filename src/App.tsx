import './App.css'
import ticketData from '../TicketData/tickets.json';

function App() {

  return (
    <>
      <div>
        <h1>Tickets List</h1>
        <div className={'listContainer'}>
          {ticketData.map((item) => (
            <div className={'listItem'}>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
