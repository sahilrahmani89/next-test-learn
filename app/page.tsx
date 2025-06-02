"use client"
import Image from "next/image";
import useOnline from "./hooks/useOnline";

export default function Home() {
  const {online} = useOnline()
  return (
    <div>
      Homepage
      <h4>
        {`your device is ${online? 'online':'offline'}`}
      </h4>
    </div>

  );
}
