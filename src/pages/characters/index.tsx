import { Suspense, lazy } from "react";
import Layout from "../../components/Layout";
import { useFetch } from "../../hooks/useFetch";
import { CharacterProps } from "../../types";

const Card = lazy(() => import("../../components/Card"));

const Characters = () => {
  const charactersList = useFetch(
    "https://api-blue-archive.vercel.app/api/characters"
  );

  return (
    <Layout>
      <Suspense
        fallback={<p className="text-3xl font-bold text-black">Adssdfsdfsdf</p>}
      >
        <section>
          <div className="gap-3 grid grid-rows-1 grid-cols-1 md:grid-cols-3 mt-4">
            {charactersList.map((char: any) => (
              <Card key={char._id} char={char} />
            ))}
          </div>
        </section>
      </Suspense>
    </Layout>
  );
};

export default Characters;
