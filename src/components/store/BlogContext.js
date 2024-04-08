import { createContext } from "react";

const allDetails = [{
        id:1,
        topic:'Cooking',
        shortDescp:'Dive into delicious recipes and culinary delights to ignite your passion for cooking.',
        detailedDescp:'Embark on culinary adventures with a myriad of flavors that tantalize your taste buds. From savory to sweet, explore diverse cuisines and recipes that ignite your passion for cooking. Dive into the art of gastronomy, where every dish is a masterpiece waiting to be discovered. Elevate your culinary skills as you experiment with new ingredients and techniques, turning ordinary meals into extraordinary experiences. Immerse yourself in the world of cooking and unleash your creativity in the kitchen.',
        date:"16 Feb'24"
    },
    {
        id:2,
        topic:'Cyber Attack',
        shortDescp:'Explore cybersecurity threats and strategies to safeguard against digital breaches.',
        detailedDescp:'Navigate the intricate labyrinth of cybersecurity threats and defenses in the digital age. From phishing scams to malware attacks, the cyber landscape is fraught with peril, requiring vigilance, expertise, and innovative solutions to safeguard sensitive information and preserve digital integrity. Explore the dark recesses of the web, where hackers lurk in the shadows, and discover the evolving tactics and technologies shaping the battle against cyber threats.',
        date:"08 Jan'24"
    },
    {
        id:3,
        topic:'Dancing',
        shortDescp:'Discover the joy of expression through the captivating art of dance and movement.',
        detailedDescp:"Dive into the captivating world of dance, where rhythm, movement, and emotion intertwine to create a mesmerizing tapestry of expression. From the graceful elegance of ballet to the infectious energy of hip-hop, dance transcends language and culture, offering a universal language of communication and connection. Whether you're pirouetting on stage or grooving on the dance floor, dance is an exhilarating journey of self-discovery and artistic exploration.",
        date:"12 Dec'23"
    },
    {
        id:4,
        topic:'Entertainment',
        shortDescp:'Indulge in endless entmt and escape into a world of captivating stories and adventures.',
        detailedDescp:'Immerse yourself in a kaleidoscope of entertainment, where imagination knows no bounds and every moment is filled with wonder and excitement. From blockbuster movies to chart-topping music, from thrilling novels to captivating games, entertainment is a vibrant tapestry of creativity and storytelling that captivates hearts and minds around the globe. Step into the spotlight and let your imagination take flight on a journey of endless possibilities.',
        date:"09 Nov'23"
    },
    {
        id:5,
        topic:'Northen Lights',
        shortDescp:'Embark on a journey to witness the breathtaking beauty of the Northern Lights.',
        detailedDescp:"Witness the ethereal dance of the Northern Lights as they illuminate the polar skies with their shimmering hues of green, purple, and blue. A celestial spectacle steeped in mystery and magic, the aurora borealis captivates the imagination and inspires awe in all who behold its radiant beauty. From the remote wilderness of the Arctic to the far reaches of the Antarctic, the Northern Lights beckon adventurers to witness nature's most dazzling light show.",
        date:"27 Aug'23"
    },
    {
        id:6,
        topic:'PhotoGraphy',
        shortDescp:"Capture life's moments and unleash your creativity with the captivating art of PG.",
        detailedDescp:"Capture the essence of life in a single frame and preserve fleeting moments for eternity with the art of photography. From breathtaking landscapes to intimate portraits, photography is a powerful medium of expression that transcends words and speaks to the soul. Through the lens of a camera, ordinary scenes become extraordinary, and fleeting moments are immortalized in time. Whether you're an amateur enthusiast or a seasoned professional, photography is a journey of discovery, creativity, and self-expression.",
        date:"06 Aug'23"
    },
    {
        id:7,
        topic:'Programming',
        shortDescp:'Master the language of computers and unlock endless possibilities in programming.',
        detailedDescp:'Embark on a journey into the realm of code, where logic meets creativity and innovation knows no bounds. As a programmer, you wield the power to transform ideas into reality, crafting software solutions that shape the world around us. From building sleek websites to developing complex algorithms, programming is a dynamic and ever-evolving field that offers endless opportunities for learning, growth, and innovation. Join the ranks of the digital pioneers and unleash your potential as a master of code.',
        date:"25 June'23"
    },
    {
        id:8,
        topic:'Quality Time',
        shortDescp:'Create cherished memories and meaningful experiences with loved ones.',
        detailedDescp:"Amidst the hustle and bustle of modern life, carve out moments of serenity and connection with quality time. Whether it's a leisurely stroll in the park, a cozy evening by the fire, or a heartfelt conversation with a loved one, quality time nourishes the soul and strengthens the bonds that unite us. In a world filled with distractions, cherish the simple pleasures of companionship, laughter, and shared experiences. From intimate moments with family to cherished memories with friends, quality time is the cornerstone of a fulfilling and balanced life.",
        date:"10 Apr'23"
    },
    {
        id:9,
        topic:'React Js',
        shortDescp:'Transform your web development journey with the flexibility and power of ReactJS.',
        detailedDescp:"Dive into the world of React.js and unlock endless possibilities for web development. Harness the power of this dynamic JavaScript library to build interactive user interfaces with ease. From simple components to complex applications, React.js offers a streamlined approach to front-end development, enabling developers to create responsive, efficient, and scalable web applications. With its declarative syntax and component-based architecture, React.js empowers developers to modularize their code, enhance code reusability, and optimize performance. Whether you're a seasoned developer or just getting started, React.js provides a flexible and intuitive framework for crafting modern web experiences. Join the thriving community of React.js developers, explore its vast ecosystem of libraries and tools, and elevate your web development skills to new heights.",
        date:"02 Mar'23"
    },
    {
        id:10,
        topic:'Social Media',
        shortDescp:'Transform your workspace into a productive environment conducive to success.',
        detailedDescp:"Embark on a journey through the dynamic realm of social media and discover the ever-evolving landscape of online connectivity. From networking platforms to multimedia sharing hubs, social media platforms have revolutionized the way we communicate, collaborate, and engage with the world. Explore the diverse array of social media platforms, each offering unique features and functionalities tailored to specific user needs and interests. Whether you're connecting with friends and family, sharing moments of inspiration, or engaging with global communities, social media platforms provide a virtual playground for expression and interaction. Delve into the intricacies of social media algorithms, user engagement strategies, and content creation techniques to unlock the full potential of these digital ecosystems. Stay informed about emerging trends, navigate the complexities of online discourse, and leverage the power of social media to foster meaningful connections and drive positive change in the digital age.",
        date:"17 Jan'23"
    },
    {
        id:11,
        topic:'Time Table',
        shortDescp:'Organize your schedule and manage your time effectively for optimal productivity.',
        detailedDescp:"Master the art of time management and unlock the key to productivity, balance, and success with an effective time table. From prioritizing tasks to allocating resources, a well-crafted time table empowers you to make the most of every moment and achieve your goals with clarity and purpose. Whether you're a student juggling coursework, a professional managing deadlines, or an entrepreneur charting your path to success, a time table is your roadmap to efficiency, focus, and achievement. Organize your days, seize the opportunity, and make every moment count with a time table that works for you.",
        date:"24 Dec'22"
    },
    {
        id:12,
        topic:'Travelling',
        shortDescp:'Embark on unforgettable adventures and explore new destinations around the globe.',
        detailedDescp:"Embark on a journey of discovery, adventure, and cultural immersion as you explore the wonders of the world through travel. From the sun-drenched beaches of tropical paradises to the snow-capped peaks of majestic mountains, from the bustling streets of vibrant cities to the tranquil serenity of remote landscapes, travel opens doors to new experiences, perspectives, and memories. Whether you're a seasoned globetrotter or a first-time explorer, each journey is a tapestry of moments that enrich the soul and broaden the mind.",
        date:"16 Oct'22"
    },
    {
        id:13,
        topic:'Video Gaming',
        shortDescp:'Immerse yourself in captivating virtual worlds and thrilling gaming experiences.',
        detailedDescp:"Dive into immersive worlds of adventure and competition, where every level conquered and every quest completed brings a sense of accomplishment. Whether you're battling foes in action-packed shooters or strategizing your next move in complex RPGs, video gaming offers endless thrills and excitement. Explore vast virtual landscapes, forge alliances with fellow gamers, and experience the adrenaline rush of multiplayer showdowns. With a diverse array of genres and platforms to choose from, video gaming provides a dynamic and captivating escape into realms limited only by imagination",
        date:"03 Sep'22"
    },
    {
        id:14,
        topic:'Walking',
        shortDescp:'Take a stroll outdoors and reconnect with nature through the simple joy of walking.',
        detailedDescp:'Embark on a journey of exploration and discovery with the simple yet profound act of walking. Whether strolling through bustling city streets or meandering along tranquil nature trails, walking offers a chance to reconnect with oneself and the world around. Feel the rhythm of each step, breathe in the fresh air, and let the sights and sounds of your surroundings wash over you. From scenic vistas to hidden gems waiting to be uncovered, every walk brings new experiences and perspectives. So lace up your shoes, set out on foot, and embrace the joy of wandering wherever the path may lead.',
        date:"16 Aug'22"
    },
    {
        id:15,
        topic:'Workout',
        shortDescp:'Elevate your fitness routine and achieve your health goals with energizing workouts.',
        detailedDescp:'Elevate your physical and mental well-being with the transformative power of exercise. Engage in a variety of workouts tailored to your preferences and goals, from high-intensity cardio sessions to strength training routines and calming yoga flows. Each workout offers an opportunity to challenge yourself, build strength, and cultivate resilience. Feel the rush of endorphins coursing through your body as you push past limits and unlock your full potential. Whether breaking a sweat at the gym, hitting the trails for a run, or practicing mindfulness in a yoga studio, every workout is a step towards greater health and vitality. Commit to your fitness journey, embrace the journey of self-improvement, and reap the rewards of a stronger, healthier you.',
        date:"20 July'22"
    },
    {
        id:16,
        topic:'WorkSpace',
        shortDescp:'Transform your workspace into a productive environment conducive to success.',
        detailedDescp:'Craft your workspace to inspire productivity and creativity. Surround yourself with tools and resources that fuel your passion and facilitate seamless workflow. From ergonomic furniture to personalized decor, curate an environment that enhances focus and concentration. Integrate smart technology and efficient organization systems to streamline tasks and optimize productivity. With a thoughtfully designed workspace, you can unlock your full potential and achieve your goals with confidence.',
        date:"06 May'22"
    },

]

// const allDetails =[]

export const BlogContext = createContext(allDetails)