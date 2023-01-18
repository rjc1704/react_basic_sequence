import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getNowPlaying } from "../api";

export default function Home() {
  console.log("Home 컴포넌트 최상단 / 렌더링 시작!");
  const [string, setString] = useState("초기값");
  const [number, setNumber] = useState(0);
  console.log("string:", string);
  console.log("number:", number);

  //   const { data, isLoading } = useQuery("NowPlaying", getNowPlaying);
  //   console.log("data:", data);
  //   console.log("isLoading:", isLoading);

  //   useEffect(() => {
  //     console.log("componentDidMount"); // 컴포넌트 마운트 직후 실행
  //     setString("변경값");
  //     setNumber(100);
  //     console.log("비동기 테스트");

  //     return () => {
  //       console.log("componentWillUnmount"); // 컴포넌트 언마운트 직전 실행
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log("componentDidMount or componentDidUpdate");
  //   }, [string]);

  return (
    <div>
      {console.log("return jsx")}
      <h1>Home</h1>
      <Link to="/company">Go To Company Page</Link>
    </div>
  );
}
