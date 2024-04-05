import React from "react"
import Post from "./Post"

function Feed(props) {

    let renderPost = () => {

        return props.data.map( (data, index) => {
            return <Post key={index} content={data.content} />
        })
    }

    return(

        <div>

            {renderPost()}
            <Post content="This is a test post!" />
            <Post content="This is another test post!" />

            


        </div>
    )
}
export default Feed