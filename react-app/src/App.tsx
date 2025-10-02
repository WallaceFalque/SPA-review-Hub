import Header from "./Page/Header";
import Layout from "./Page/layout";
import Footer from "./Page/Footer";
import hollowKnight from "./assets/hollow-knight.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${hollowKnight}')`,
      }}
    >
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
