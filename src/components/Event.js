import { useParams } from "react-router-dom";
const Event = () => {
  const { id } = useParams();
  console.log(id);

  return <div>Event</div>;
};

export default Event;