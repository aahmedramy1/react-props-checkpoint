import Profile from "./profile/profile"
import './App.css';

function App() {


  return (
    
    <Profile fullName = "Ahmed Ramy"
     bio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit esse aliquam rem deserunt culpa qui provident natus animi consectetur."
     profession = "Software Engineer"
     >
      <img src = "./elonmusk.jpg" className="card-img-top" alt = "Elon musk" />
    </Profile>
  );


}

export default App;
