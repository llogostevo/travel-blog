export default function Comments() {
    return (
        <div>
            <form className="prose" action={`/api/comments`}>
                <label htmlFor="username">Name</label>
                <input className="border" name="username" />
                <br />
                <br />

                <label  htmlFor="comment">Comment</label>
                <textarea className="border" name="comment" cols={30} rows={5} />
                <br />
                <br />

                <button className="border p-1" type="submit">Send Comment</button>
            </form>


            <div>this will be the previous comments</div>
        </div>
    )
}
