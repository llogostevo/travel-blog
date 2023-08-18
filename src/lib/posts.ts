const POSTS = [
    {
        title: "Berlin", 
        slug: "berlin-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:['✈️ A Whirlwind Journey Through Berlin! ✈️',
    'Day 1: Touchdown in Berlin','Day 2: History Comes Alive','Day 3: Museum Island & Modern Art','Day 4: Venturing Beyond the City','Day 5: The Vibrant Berlin Nightlife', 'Final Thoughts:'],
        blogDescription:['Berlin, with its rich history and vibrant cultural scene, had always been on my bucket list. Last month, I finally took the plunge and embarked on a week-long adventure to this German metropolis.',
        'As the plane descended into Tegel Airport, the iconic Fernsehturm (TV Tower) pierced the Berlin skyline, beckoning me to explore the city. After settling into my cozy Airbnb in the Kreuzberg district, I decided to stroll around and get a feel for the neighborhood. Streets filled with quirky art galleries, eclectic bars, and tantalizing food stalls welcomed me. Dinner was at a local Döner kebab shop – an absolute must-try when in Berlin.',
        'The day was dedicated to the city&apos;s turbulent history. I started at the Brandenburg Gate, a symbol of unity and peace, before heading to the Berlin Wall Memorial. Walking alongside remnants of the Wall, I felt the weight of Berlin&apos;s divided past. The Checkpoint Charlie Museum provided further insights into the Cold War era.',
        'Berlin boasts an impressive collection of museums. I began at Museum Island, losing myself in the ancient treasures of the Pergamon Museum. Later, the contemporary art at the Hamburger Bahnhof museum left me both intrigued and inspired.',
        'A short train ride took me to Potsdam, home to the exquisite Sanssouci Palace. The palace gardens in spring bloom were a sight to behold. Returning to Berlin, I dined at a riverside restaurant, watching the sun set over the Spree.',
        'The day was reserved for relaxation at Tiergarten, Berlin&apos;s expansive central park. But as night fell, Berlin&apos;s famed nightlife beckoned. I danced the night away at a techno club in Friedrichshain, truly immersing myself in Berlin&apos;s modern beats.',
        'Berlin proved to be a delightful blend of old and new. Its resilience and transformation are evident in every corner. From its haunting history to its avant-garde art scene, Berlin promises an enriching experience for every traveler.'
    ],

    },
    {
        title: "Brussels", 
        slug: "brussels-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing", 
        blogTitle:[],
        blogDescription:[]
    },
    {
        title: "Chicago", 
        slug: "chicago-marathon-2022", 
        content: "this is my blog",
        month: 'October',
        year: '2022',
        category: "sport",
        blogTitle:[],
        blogDescription:[] 
    },
    {
        title: "Cologne", 
        slug: "cologne-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:[],
        blogDescription:[] 
    },
    {
        title: "Lausanne", 
        slug: "lausanne-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:[],
        blogDescription:[] 
    },
    {
        title: "Milan", 
        slug: "milan-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:[],
        blogDescription:[] 
    },
    {
        title: "Paris", 
        slug: "paris-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:[],
        blogDescription:[] 
    },
    {
        title: "Venice", 
        slug: "venice-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:['Floating in Venice', 'Day1: Lost in the madness', 'Day2: Such a Run time'],
        blogDescription:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        ] 
    },
    {
        title: "Vienna", 
        slug: "vienna-interailing-2023", 
        content: "this is my blog",
        month: 'August',
        year: '2023',
        category: "interailing",
        blogTitle:['Ahhhhhhhhhh Viennnnnaaaaaaaa'],
        blogDescription:[]
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

