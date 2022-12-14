import { useNavigate } from "react-router";
import React, { useRef, useState } from "react";
import useFetch from "../hooks/useFetch.ts";
import { IDay } from "./DayList";

export default function CreateWord() {
  const days: IDay[] = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  // 통신중에는 여러번 버튼 클릭해도 작동하지 않게, 느린 컴퓨터에서
  const [isLoading, setIsLoading] = useState(false);

  // Create
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 새로고침이 발생하지 않도록 함

    // dayRef.current 등이 없으면 아래는 실행 안됨
    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다.");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  };

  // ref연결해주면 돔 요소가 생성된 후 접근할 수 있다.
  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.5 : 1,
        }}
      >
        {isLoading ? "저장중..." : "저장"}
      </button>
    </form>
  );
}
