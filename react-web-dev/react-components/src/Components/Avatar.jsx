function Avatar() {
    return (
        <div>
            <div style = {{border: "1px solid red", padding: "10px", margin: "10px"}}>
                <img src="https://i.kym-cdn.com/photos/images/original/001/478/346/c55.jpg" alt = "Avatar1" />
                <h1>Title 1</h1>
                <button>Click Me!</button>
            </div>
            <div style = {{border: "1px solid black", padding: "10px", margin: "10px"}}>
                <img src="https://i.kym-cdn.com/photos/images/original/001/478/352/cd5.jpg" alt = "Avatar2" />
                <h1>Title 2</h1>
                <button>Click Me!</button>
            </div>
        </div>
    )
}

export default Avatar;