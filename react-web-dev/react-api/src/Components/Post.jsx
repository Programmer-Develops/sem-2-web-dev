function Post() {
    const getData = () => {
        return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => 
            res.json() 
        ); // 1st .then() will get readable stream and convert it to json, 2nd .then() will get the actual data
    }

    const fetchAndGetPost = async ()=> {
        try {
            const data = await getData();
            console.log("Fetched post data:", data);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }

    return (
        <div>
            <h1>Welcome to Post App</h1>
            <button onClick = { fetchAndGetPost }>Get Post</button>
        </div>
    )
}

export default Post;