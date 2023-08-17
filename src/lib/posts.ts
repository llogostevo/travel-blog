const POSTS = [
    {
        title: "Berlin", 
        slug: "berlin-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
    },
    {
        title: "Brussels", 
        slug: "brussels-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Chicago", 
        slug: "chicago-marathon-2022", 
        content: "this is my blog",
        month: 'October',
        year: '2022',
        category: "sport", 
    },
    {
        title: "Cologne", 
        slug: "cologne-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Lausanne", 
        slug: "lausanne-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Milan", 
        slug: "milan-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Paris", 
        slug: "paris-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Venice", 
        slug: "venice-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
    },
    {
        title: "Vienna", 
        slug: "vienna-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
    },
]

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

