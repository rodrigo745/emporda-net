// Componentes
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MainUno from "@/components/MainUno";
import MainDos from "@/components/MainDos";

export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <hr className="border-blue-200 mx-10 mt-10"/>
      <MainUno/>
      <MainDos/>
    </main>
  );
}
