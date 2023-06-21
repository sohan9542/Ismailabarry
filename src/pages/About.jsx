const people = [
  {
    name: "Ismaila Barry",
    role: "Fondateur & CEO",
    imageUrl:
      "/DXT41219.jpg",
  },
  {
    name: "Amadou Sy",
    role: "Chargé des programmes",
    imageUrl:
      "/Amadou Sy.jpeg",
  },
  {
    name: "Abdallah Mbaye",
    role: "Professeur d’Histoire",
    imageUrl:
      "/Abdallah Mbaye.png",
  },
  {
    name: "Adja Ndiaye",
    role: "Professeur de SVT",
    imageUrl:
      "/Adja Ndiaye.jpeg",
  },
  {
    name: "Médinatou Diop",
    role: "Professeur d’Anglais",
    imageUrl:
      "/Medinatou.jpeg",
  },
  {
    name: "Robert Sene",
    role: "Professeur de Philosophie",
    imageUrl:
      "/Robert Sene.jpeg",
  },
  // More people...
];

export default function About() {
  return (
    <div className="bg-white py-24 ">
      <div className="mx-auto mt-20 grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 grid-cols-1">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Faites connaissance avec l’équipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <span className="text-pr font-bold">« L'éducation est l'arme la plus puissante que l'on puisse utiliser
            pour changer le monde » –</span> Nelson Mandela.
          </p>
        
          <p className="mt-6 text-lg leading-8 text-gray-600">
          <span className="text-pr font-bold"> »</span> Jangflix est une plateforme de streaming de contenus éducatifs de
            haute qualité dans le but de doter le plus d'étudiants possible d'un
            passeport éducatif performant.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          <span className="text-pr font-bold"> »</span> Notre mission est de créer une approche amusante, créative et
            pratique de l'apprentissage, en utilisant des méthodes
            d'enseignement modernes.
          </p>
        </div>
        <ul
          role="list"
          className=" gap-x-8 gap-y-12 grid grid-cols-1 lg:grid-cols-3  "
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
              <img src={person.imageUrl} className="w-20 h-20 object-cover rounded-full" alt="" />
                <div>
                  <h3 className="text-base font-bold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-bold leading-6 text-pr">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
