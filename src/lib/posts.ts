 import { supabase } from '@/utils/supabase';
import { allPosts as POSTS } from 'contentlayer/generated'


export async function getSupaPosts(){
    const {data: posts} = await supabase
    .from('blogposts')
    .select('id, title, quote, date, slug, category, content')

    return posts; 
}
 


// get all posts (simulating an API or database)
export function getPosts() {
    return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string){
    // this finds the post item/element in the posts array that has a slug that is is equal to the slug passed into the function and returns that item
    return POSTS.find((post)=>post.slug === slug)
}

// get all categories filtered by a category (simulating an API or database)
export function getCategories() {
   const categories = POSTS.map((post) =>{
        return(post.category)
    })
    return Array.from(new Set(categories))
}


// get all posts filtered by a category (simulating an API or database)
export function getPostBycategorySlug(categorySlug: string) {

    return POSTS.filter((post)=>post.category === categorySlug)
}

