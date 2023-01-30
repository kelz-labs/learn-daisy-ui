import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black">Pilih yang mana?</h1>
        <div className="mt-3 space-x-3">
          <Link to="/characters">
            <button className="btn btn-primary" type="button">
              Characters List
            </button>
          </Link>
          <Link to="/students">
            <button className="btn btn-secondary" type="button">
              Students List
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
