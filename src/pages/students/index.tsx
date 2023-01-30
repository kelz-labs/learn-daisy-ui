import Layout from "../../components/Layout";
import { useFetch } from "../../hooks/useFetch";
import { StudentsListProps } from "../../types";

const Students = () => {
  const studentsList = useFetch(
    "https://api-blue-archive.vercel.app/api/characters/students"
  );

  return (
    <Layout>
      <section className="max-w-full border-2">
        <div className="gap-3 grid grid-rows-1 grid-cols-1 md:grid-cols-3 mt-4">
          {studentsList.map((student: StudentsListProps<string>) => (
            <div
              key={student._id}
              className="card overflow-hidden bg-base-100 w-96 card-compact"
            >
              <figure>
                <img
                  className="hover:scale-105 w-96 h-80 cursor-pointer transition-all ease-in-out"
                  src={student.photoUrl}
                  loading="lazy"
                />
              </figure>
              <div className="px-4 py-2">
                <h2 className="card-title">{`${student.names.firstName} ${student.names.lastName}(${student.names.japanName})`}</h2>
                <p className="mt-3">{student.background}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Students;
