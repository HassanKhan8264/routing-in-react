import {useState , useEffect} from 'react'
import "./index.css";
import {BsMoon,BsSun} from 'react-icons/bs'
import  Post from "./../post"
import axios from 'axios'

const Sidebar = (props) =>{
  return <div className="icon">
    <button type="button" onClick={props.toggleThemeMode}>{(props.Mode === "Lit")? <BsSun />: <BsMoon />}</button>

  </div>

}

function Home() {
  const[posts, setPosts] = useState([]);
      useEffect(() => {

        axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
        .then(response =>{
          console.log(response)
          setPosts(response.data)
        })
        .catch(error =>{
          console.log(error)

        })
      }, [])

    const [isLit, setLit] = useState("dark");
    
    const toggleThemeMode = () =>{
      if(isLit === "dark"){
          setLit("Lit")
      }else{
        setLit("dark")
      }

    }

  return (
    <div className = {`room ${(isLit === "dark" ? "dark": "Lit")}`}>
    {/* Room is {(isLit === "DARK" ? "dARK": "lIT")} */}

    <Sidebar toggleThemeMode={toggleThemeMode} Mode={isLit} />

    {
      posts.map((eachPost, i) =>(
        <>
        <Post
        profilepic={eachPost.profilePhoto} 
        name={eachPost.name}
        postText={eachPost.postText} 
        postImage={"https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/309922856_485168960319322_5861732367481310660_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=Ok4JQBfu3IYAX-rEs5f&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT96C_nvDTfxdEJiyMUeNrWptdtnwgKlXcgv8ufpmpt__A&oe=634D19A6"}></Post>
        </>
      ))

  
    }

    </div>
  );
}

 
export default Home;