import VirtualList from "./components/VirtualList";
import ticketData from './TicketData/tickets.json'

function App() {

  return (
    <>
      <VirtualList ticketData={ticketData} itemHeight={70} containerHeight={700} />
    </>
  )
}

export default App
