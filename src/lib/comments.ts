import { WEBSITE_URL} from "config"

import short from "short-uuid";
import { kv } from "@vercel/kv";

export async function saveComment(username: string, comment: string, slug: string) {
 //this is only really relevant if you want to mimic a rdb in kv stores

 // generate a unique ID for this comment
    const uuid = short.generate();

    // stringify our comment object
    const commentObject = JSON.stringify({
        username,
        comment,
        uuid
    });

    //add the comment to the kv store - comment:12345
    // this is the kv function to save a key value pair set(key, value)
    kv.set(`comment:${uuid}`, commentObject)

    const commentsList = await kv.lpush(`comments:${slug}`, uuid) // list will look something like: commments: post-one 12345 123456 3456
    // return the uuid in case needed when made the comment. 
    return uuid
}


export async function getComments(slug: string) {
    // lrange is an array in the range of the key, the 0 to all (-1)
    const commentIds = await kv.lrange(`comments:${slug}`, 0, -1)
    
    // map through the comment ids and put into the new array of the ids
    const commentKeys = commentIds.map(id => `comment:${id}`); // [1234, 23456. 3245]

    //  // If there are no commentIds, return an empty array.
     if (commentIds.length === 0) {
        return [];
    }
    

    const comments = await kv.mget(...commentKeys)

    return comments;
}