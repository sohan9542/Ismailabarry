import { question1, question2, question3, question4, question5 } from "./question";

export let videos = [
  {
    id: 1,
    title: 'L’Organisation des Nations Unies (ONU)',
    description: 'Dans cette vidéo nous allons vous replonger au début du 20ème siècle, depuis la création de la Société des Nations jusqu’à la création de l’ONU en passant par les différentes conférences.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    progress: 0,
    subject: 'Histoire - Terminale L/S ',
    questions : question1,
    quiz: 0,
    category: 'Histoire'
    
  },
  {
    id: 2,
    title: 'La Dissertation Philosophique – Cas pratique',
    description: 'Voilà un sujet dialectique qui questionne encore l’intérêt de philosopher. Dans ce cas pratique, nous allons vous montrer pas à pas comment traiter ce genre de sujet et utiliser des illustrations pour appuyer vos propos.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    progress: 0,
    subject: 'Philosophie - Terminale L/S  ',
    questions : question2,
    quiz: 0,
    category: 'Philosophie'
  },

  {
    id: 3,
    title: 'Comment Faire un Raisonnement Scientifique en SVT',
    description: 'En science, pour arriver souvent à des conclusions, il faut partir d’hypothèses, les confirmer autant de fois que possible avant de valider les résultats et d’en faire une loi. Après cette vidéo, la démarche scientifique n’aura plus aucun secret pour vous.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
    progress: 0,
    subject: 'SVT – Terminale S',
    questions : question3,
    quiz: 0,
    category: 'Sciences'
  },
  {
    id: 4,
    title: 'La Chronologie en Géologie',
    description: 'Vous êtes-vous une fois demandé comment on pouvait calculer l’âge de la terre et donner les dates de certains évènements géologiques ? Dans cette vidéo nous allons vous montrer les différentes méthodes ainsi qu’un rappel historique des différentes ères jusqu’à celle que nous vivons. ',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    progress: 0,
    subject: 'SVT - Troisième',
    questions : question4,
    quiz: 0,
    category: 'Sciences'
  },
  {
    id: 5,
    title: 'Les rivalités coloniales',
    description: 'L’Afrique étant un continent avec de nombreuses richesses, les occidentaux ont voulu se partager « le gâteau » et cela a conduit à plusieurs heurts, d’où la conférence de Berlin pour éviter des confrontations futures sur le sol Africain et les conséquences se ressentent jusqu’à présent sur le continent.',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    progress: 0,
    subject: 'Histoire - Troisième',
    questions : question5,
    quiz: 0,
    category: 'Histoire'
  },
  {
    id: 6,
    title: 'Le conditionnel',
    description: 'If I had Jangflix while at school, I would have done better… Après visionnage de cette vidéo, le conditionnel en anglais ne sera plus un secret pour vous. Le professeur va vous guider pas à pas avec des exemples concrets. ',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    progress: 0,
    subject: 'Anglais - Troisième ',
    questions : question2,
    quiz: 0,
    category: 'Anglais'
  },

]