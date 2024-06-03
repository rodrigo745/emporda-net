// Componentes
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import MainUno from "@/components/MainUno";


export default function Home() {
  return (
    <main className="">
      <NavBar/>
      <Header/>
      <hr className="border-blue-200 mx-12"/>
      <MainUno/>

    </main>
  );
}
