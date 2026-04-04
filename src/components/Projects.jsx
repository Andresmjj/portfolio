import projects from '../data/projects.json'


export default function Projects() {
    return (
        <section>
            <h1>Proyectos</h1>

            {projects.map((projects) =>
                <div key={projects.id}>
                    <h3>{projects.name}</h3>
                    <p>{projects.summary}</p>
                </div>
            )}

        </section>

    )
}