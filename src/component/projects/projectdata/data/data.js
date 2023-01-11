import country from '../images/Countries-App.png'
import Quizzical from '../images/Quizzical.png'
import Todo from '../images/TODOApp.png'
import space from '../images/Space-Tourism.png'
import shortly from '../images/Shortly.png'
import memory from '../images/Memory-Game.png'

const data = [
  {
    projectType: 'Personal Project',
    projectName: 'Country Wiki App',
    projetcImage: country,
    projectDescription: "<p>This is my solution to the Advanced Challenge on the frontend mentor program. This project is a simple country wiki app that fetches its data using the Redux createAsyncThunk from the <a target='_blank' href='https://restcountries.com/' >REST COUNTRIES API</a>. and a React skeleton was used for the loading animation when fetching is slow. A search and filiter functionality was also implemented. Framer motion is used to handle the page transition and basic animation.</p>",
    projectTech: [
      'React',
      'Framer motion',
      'Redux toolkit',
      'Tailwind'
    ],
    projectLivesite: 'https://country-wiki-4f2ff6.netlify.app/',
    projectCodelink: 'https://github.com/nick335/Rest-Countries-Api' 
  },
  {
    projectType: 'Personal Project',
    projectName: 'Quizzical',
    projetcImage: Quizzical,
    projectDescription: 'This is my solution to the last challenge from the 12-hour FreeCodeCamp React course, which you can check out <a target="_blank" href="https://www.youtube.com/watch?v=bMknfKXIFA8">here</a>. The project is a simple version of a quiz app where you answer random questions that are pulled from the <a target="_blank" href="https://opentdb.com/api_config.php">Trivia API</a>. I took it further by giving the user the ability to select the category, difficulty level, number, and type of question he or she would like to be asked.',
    projectTech: [
      'React',
      'CSS',
      'Redux Toolkit',
      'React Router'
    ],
    projectLivesite: 'https://quizzical-1.netlify.app/',
    projectCodelink: 'https://github.com/nick335/quiz-app' 
  },
  {
    projectType: 'Personal Project',
    projectName: 'Todo App',
    projetcImage: Todo,
    projectDescription: "This is a simple to-do app where users are able to add new to-dos to the list, Mark the tasks as completed.Delete to-dos from the list, Filter by all active or completed to-dos, Remove all completed to-dos,You can switch between light and dark modes.<p>I also implemented a drag and drop functionality, giving the user the ability to reorder the list with <a target='_blank' href='https://react-dnd.github.io/react-dnd/about' >React DnD</a>. </p>",
    projectTech: [
      'React',
      'SCSS',
      'React DnD',
    ],
    projectLivesite: 'https://tourmaline-pasca-961af3.netlify.app/',
    projectCodelink: 'https://github.com/nick335/todo-app-react' 
  },
  {
    projectType: 'Personal Project',
    projectName: 'Space Tourism',
    projetcImage: space,
    projectDescription: "This is a solution to the <a target='_blank' href='https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3'> Intermediate Challenge</a> from the Frontend Mentor Site. The project is a multipage space tourism website that provides information on some planets, crew members, and technology used in space exploration. I added slider functionality to improve the reader experience.",
    projectTech: [
      'React',
      'SCSS',
      'React Router'
    ],
    projectLivesite: 'https://resplendent-meringue-dc4e43.netlify.app/',
    projectCodelink: 'https://github.com/nick335/SpaceTourism-multiPage' 
  },
  {
    projectType: 'Personal Project',
    projectName: 'Shortly',
    projetcImage: shortly,
    projectDescription: "This is a solution to the <a target='_blank' href='https://www.frontendmentor.io/solutions/react-sass-nanoid-flex-D9zPIdTdxz'> Intermediate Challenge</a> from the Fontend mentor site. Shortly is a single-page website that helps users shorten any valid link with the help of the <a target='_blank' href='https://shrtco.de//docs'>shrtcode URL shortening API</a>.  The shortened link is saved in a list format, which can still be seen upon refreshing the page due to the use of the browser's local storage.",
    projectTech: [
      'React',
      'SCSS',
    ],
    projectLivesite: 'https://rad-kleicha-5d6037.netlify.app/',
    projectCodelink: 'https://github.com/nick335/url-shortening-page' 
  },
  {
    projectType: 'Personal Project',
    projectName: 'Memory Game',
    projetcImage: memory,
    projectDescription: "A simple image memory game where cards of multiple sets of images are shown for a brief amount of time, then the user tries to get a set of images",
    projectTech: [
      'HTML',
      'SCSS',
      'JavaScript'
    ],
    projectLivesite: 'https://nick335.github.io/memoryGame/',
    projectCodelink: 'https://github.com/nick335/memoryGame' 
  }
]

export default data;