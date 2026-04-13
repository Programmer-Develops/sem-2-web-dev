import {useState, useEffect} from "react";

function Post() {
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(false);
    const [page, setPage] = useState(1)

    const getData = (api) => {
        return fetch(api).then((res) => 
            res.json() 
        ); // 1st .then() will get readable stream and convert it to json, 2nd .then() will get the actual data
    }
    const handlePage=(val) => {
        const newPage = page+val;
        setPage(newPage)
    }
    const getData = (api) => {
        return fetch(api).then((res) => 
            res.json() 
        ); // 1st .then() will get readable stream and convert it to json, 2nd .then() will get the actual data
    }

    // Mount phase
    useEffect(()=>{
        const fetchAndGetPost = async ()=> {
            try {
                setLoad(true)
                const data = await getData(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
                console.log("data"); // [{},{}]
                setPost(data);
                setLoad(false);
            } catch (error) {
                setErr(true)
                setLoad(false);
                console.error("Error fetching post:", error);
            }
        }
        
        (async () => {
            await fetchAndGetPost();
        })();
    }, [page]);

    if (load) {
        return <h1> Loading...</h1>
    }

    if (err) {
        return <h1>Error</h1>
    }
    return (
        <div>
            <h1>Welcome to Post App</h1>
            {/* <button onClick = { fetchAndGetPost }>Get Post</button> */}
            <hr/>

            {post.map((el) => {
                return <div style = {{border: "1px solid white", margin: "10px", padding: "10px"}} key = {el.id}>
                    <h1>{el.id}</h1>
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                    <button>click</button>
                </div>
            })}

            <button onClick={handlePage(-1)}>Previous</button>
            <button onClick={page}>current</button>
            <button onClick={handlePage(1)}>Next</button>
        </div>
    )
}

export default Post;