import Feed from "./Feed"
import { useState } from "react"

function CreatePostForm (props) {


    const [postComment, setPostComment] = useState("")

    const handleChange = (event) => {
        setPostComment(event.target.value)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault() // prevent form realoading the page

            if(postComment !== ""){
                // pass this data somewhere
                props.handleSubmit({content: postComment})
                setPostComment("")
            } else {
                alert("Post need a message")
            }
            }}>

            <label>
                <h3>Create your Post</h3>
                <input type="text" onChange={handleChange} value={postComment}/>
            </label>

            <input type="submit" />
        </form>
    )

}
export default CreatePostForm