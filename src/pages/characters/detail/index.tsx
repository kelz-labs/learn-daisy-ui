import { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import { useFetch } from "../../../hooks/useFetch";
import { CharacterProps } from "../../../types";

const DetailCharacter = lazy(
  () => import("../../../components/DetailCharacter")
);

const Detail = () => {
  const { name } = useParams();

  const detailCharacter = useFetch(
    `https://api-blue-archive.vercel.app/api/characters?name=${name}`
  );

  return (
    <Layout>
      <Suspense fallback={<p>Loading....</p>}>
        <section>
          {detailCharacter.map((character: CharacterProps<string>) => (
            <DetailCharacter key={character._id} character={character} />
          ))}
        </section>
      </Suspense>
    </Layout>
  );
};

export default Detail;
