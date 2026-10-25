import { MENTORES } from "../data/mentoresData";

export default function Mentores() {
  const mentores = Array.isArray(MENTORES) ? MENTORES : [];

  return (
    <section id="mentores" className="section">
      <div className="container">
        <h2>Nuestros mentores</h2>

        <p>
          Conoce a quienes comparten su experiencia y acompañan la formación
          académica de los estudiantes de Médico Cirujano de la DACS-UJAT.
        </p>

        {mentores.length > 0 ? (
          <div className="mentores-grid">
            {mentores.map((mentor, index) => (
              <article
                className="mentor-card"
                key={mentor.id ?? index}
              >
                {mentor.foto && (
                  <img
                    src={
                      mentor.foto.startsWith("http")
                        ? mentor.foto
                        : `/images/${mentor.foto}`
                    }
                    alt={mentor.nombre || "Mentor del programa"}
                    loading="lazy"
                  />
                )}

                <h3>{mentor.nombre || "Mentor del programa"}</h3>

                {mentor.semestre && <p>{mentor.semestre}</p>}
                {mentor.area && <p>{mentor.area}</p>}
                {mentor.descripcion && <p>{mentor.descripcion}</p>}
              </article>
            ))}
          </div>
        ) : (
          <p>
            Próximamente se publicará el directorio de mentores del programa.
          </p>
        )}
      </div>
    </section>
  );
}
