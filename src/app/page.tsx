"use client";
import { useRouter } from "next/navigation";
import Header from "../components/header";

function App() {
  const router = useRouter();
  router.push("/home");

  return (
    <>
      <Header />
    </>
  );
}
export default App;
