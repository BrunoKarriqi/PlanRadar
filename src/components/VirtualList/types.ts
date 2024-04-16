type TicketData = {
  _id: string;
  name: string;
  date: number;
  month: string;
  time: string;
  location: string;
}

type PropTypes = {
  ticketData: TicketData[];
  itemHeight: number;
  containerHeight: number;
};

export { type PropTypes };