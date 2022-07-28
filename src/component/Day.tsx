import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import { IWord } from "./Word.tsx";
import Word from "./Word.tsx";

export default function Day() {
  const { day } = useParams<{ day: string }>();
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
