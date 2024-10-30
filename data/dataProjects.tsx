import { ProjectDTO } from "@/components/projects"


export const projects: ProjectDTO[] = [
    {
        'id': 1,
        'name': 'Countries Around the Globe',
        'url': "https://man-countries.netlify.app/",
        'source': 'https://github.com/primado/man-countries',
        "description": "A project that calls the Countries REST API v2 to provide and display information to know more about any countries. The web app is very responsive on all screen size and it also comes with a theme switcher.",
        "imagePath": "/assets/man-countries.png"

    },
    {
        'id': 2,
        'name': 'Recipe Management System',
        'source': "https://github.com/primado/recipe-web/",
        "description": "I built a full stack Recipe Management System. I built the APIs in Django and integrated the APIs by building the web app using Nextjs.",
        "imagePath": "/assets/recipeApp.png"

    },
    {
        'id': 3,
        'name': 'The Journal Blog',
        'url': 'https://journal-blog-pa.vercel.app/',
        'demo': 'https://www.linkedin.com/posts/primado_nextjs-next-developer-activity-7255989802112618497-IHAH?utm_source=share&utm_medium=member_desktop',
        // 'source': "https://github.com/primado/recipe-web/",
        "description": "A Nextjs blog built with Sanity CMS.",
        "imagePath": "/assets/journal.png"

    },
]