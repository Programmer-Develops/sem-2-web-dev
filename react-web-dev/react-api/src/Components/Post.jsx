import {useState} from "react";

function Post() {
    const [post, setPost] = useState([]);
    const getData = () => {
        return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => 
            res.json() 
        ); // 1st .then() will get readable stream and convert it to json, 2nd .then() will get the actual data
    }

    const fetchAndGetPost = async ()=> {
        try {
            const data = await getData();
            console.log("data"); // [{},{}]
            setPost(data);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }

    return (
        <div>
            <h1>Welcome to Post App</h1>
            <button onClick = { fetchAndGetPost }>Get Post</button>
            <hr/>

            {post.map((el) => {
                return <div style = {{border: "1px solid white", margin: "10px", padding: "10px"}} key = {el.id}>
                    <h1>{el.id}</h1>
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                    <button>click</button>
                </div>
            })}
        </div>
    )
}

export default Post;