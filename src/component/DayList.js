import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // const [days, setDays] = useState([]);

  // // // API 호출
  // // useEffect(() => {
  // //   fetch("http://localhost:3001/days")
  // //     .then((res) => {
  // //       return res.json();
  // //     })
  // //     .then((data) => {
  // //       setDays(data);
  // //     });
  // // }, []);

  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading....</span>;
  }

  return (
    <ul className="list_day">
      {days.map((day) => (
        <Link to={`/day/${day.day}`}>
          <li key={day.id}>Day {day.day}</li>
        </Link>
      ))}
    </ul>
  );
}
