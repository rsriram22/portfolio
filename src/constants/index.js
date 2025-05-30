import thumb1 from "./src/assets/thumb1.jpg"
import thumb2 from "../assets/thumb2.jpg"
import thumb3 from "../assets/thumb3.jpg"
import thumb4 from "../assets/thumb4.jpg"
import thumb5 from "../assets/thumb5.jpg"
import workout from "../assets/work.jpg"
import law from "../assets/law.jpg"
import food1 from "../assets/food/Screenshot (67).png"
import food2 from "../assets/food/Screenshot (68).png"
import food3 from "../assets/food/Screenshot (69).png"
import food4 from "../assets/food/Screenshot (70).png"
import food5 from "../assets/food/Screenshot (71).png"
import food6 from "../assets/food/Screenshot (72).png"
import food7 from "../assets/food/Screenshot (73).png"
import food8 from "../assets/food/Screenshot (73).png"
import food9 from "../assets/food/Screenshot (75).png"
import food10 from "../assets/food/Screenshot (76).png"
import music1 from "../assets/music/Screenshot (107).png"
import music2 from "../assets/music/Screenshot (108).png"
import music3 from "../assets/music/Screenshot (109).png"
import music4 from "../assets/music/Screenshot (110).png"
import work1 from "../assets/workout/Screenshot (95).png"
import work2 from "../assets/workout/Screenshot (96).png"
import work3 from "../assets/workout/Screenshot (97).png"
import work4 from "../assets/workout/Screenshot (98).png"
import work5 from "../assets/workout/Screenshot (99).png"
import work6 from "../assets/workout/Screenshot (100).png"
import work7 from "../assets/workout/Screenshot (101).png"
import work8 from "../assets/workout/Screenshot (102).png"
import work9 from "../assets/workout/Screenshot (103).png"
import cycle1 from "../assets/cycle/cycle.jpg"
import cycle2 from "../assets/cycle/cycle2.jpg"
import cycle3 from "../assets/cycle/photo3.jpg"
import cycle4 from "../assets/cycle/photo4.jpg"
import cycle5 from "../assets/cycle/Screenshot (29).png"
import cycle6 from "../assets/cycle/Screenshot (30).png"
import cycle7 from "../assets/cycle/Screenshot (31).png"
import cycle8 from "../assets/cycle/Screenshot (32).png"
import cycle9 from "../assets/cycle/Screenshot (33).png"
import cycle10 from "../assets/cycle/Screenshot (46).png"
import cycle11 from "../assets/cycle/Screenshot (48).png"
import cycle12 from "../assets/cycle/Screenshot (34).png"
import law1 from "../assets/law/law1.jpg"
import law2 from "../assets/law/law2.jpg"
import law3 from "../assets/law/law3.jpg"
import law4 from "../assets/law/Screenshot (19).png"
import law5 from "../assets/law/Screenshot (20).png"
import law6 from "../assets/law/Screenshot (21).png"
export const data = [
    {
        id:'1',
        name:'Food Receipe websites',
        langauges:[
            {
                id:'1',
                name:"react"
            },
            {
                id:'2',
                name:"Tailwind css"
            }

    
    ],

    description:"I am creating a food recipe app using React and Tailwind CSS for the frontend. Users can view various food items and utilize functions such as adding items to their cart. Once an item is added to the cart, if the user attempts to add it again, a border will appear around the item and an alert box will notify the user that the item is already in the cart. Additionally, the website is responsive, ensuring a seamless experience across different devices.",
        img:thumb1,
        Category:"Frontend",

        href:"https://splendorous-squirrel-74f64b.netlify.app/",
    images:[
       food1,food2,food3,food4,food5,food6,food7,food8,food9,food10
    ]    ,

    animation:"fade-right",
    github:"https://github.com/jddesign17/foodapp"
    },

   
    {
        id:'2',
        name:'Excersize Website using (Rapid Api)',
        langauges:[
            {
                id:'1',
                name:"react"
            },
            {
                id:'2',
                name:"Tailwind css"
            }
    
    ],
        img:thumb2,
        images:[work1,work2,work3,work4,work5,work6,work7,work8,work9],
        description:"exercise website uses the Rapid API Exercise Database. It fetches all exercise data and organizes them into categories. Users can click on an exercise to see instructions and start their workout easily. The website works on all devices and is built with React and Tailwind CSS.",
        Category:"Frontend",
        animation:"fade-left",
        github:"https://github.com/jddesign17/excersizewebsite"
    },
    {
        id:'3',
        name:'Simple Music Player',
        langauges:[
            {
                id:'1',
                name:"react"
            },
            {
                id:'2',
                name:"Tailwind css"
            }
    
    ],
        img:thumb3,
        Category:"Frontend",
        href:"https://benevolent-dragon-d59056.netlify.app/",
        description:"This music player is made using React.js and Tailwind CSS. It's easy to use - just click to play or pause songs on the website. It works well on any device, like computers, tablets, or phones. You can listen to your favorite songs wherever you are. It's simple and works great for music lovers",

         images:[
       music1,music2,music3,music4
    ]    ,
    animation:"fade-right",
    github:"https://github.com/jddesign17/musicwebsite"
    },
   
    
    {
        id:'4',
        name:'Cycle Ecommerce App',
        langauges:[
            {
                id:'1',
                name:"react"
            },
            {
                id:'2',
                name:"Tailwind css"
            },
            {
                id:'3',
                name:"React Native"
            },
            {
                id:'4',
                name:"Express js"
            },
            {
                id:'4',
                name:"MongoDb"
            }
    
    ],
        img:thumb4,
        description:"This is a full-stack application with two modules: admin and user. The user module is for the app, where users can view products, order cycles, and message the admin. The admin module is for managing the website. Admins have access to adding, updating, and deleting products, viewing user order details, and managing total cycles and brands. They can also send messages to users. The project is developed using React, React Native, Tailwind CSS, Express, and MongoDB",

        images:[cycle1,cycle2,cycle3,cycle4,cycle5,cycle6,cycle7,cycle8,cycle9,cycle10,cycle11,cycle12],
        Category:"Frontend & Backend",
        animation:"fade-left",
        github:"https://github.com/jddesign17/cycleapp"
    },
    {
        id:'5',
        name:'Law App ',
        langauges:[
            {
                id:'1',
                name:"react"
            },
            {
                id:'2',
                name:"Tailwind css"
            },
            {
                id:'3',
                name:"React Native"
            },
            {
                id:'4',
                name:"Express js"
            },
            {
                id:'4',
                name:"MongoDb"
            }
    
    ],
        img:thumb5,
        Category:"Frontend & Backend",
        description:"Law consultation is used to consulting with lawyers. Through this app the user can refer all major acts that are used in our day-to-day life. This may act as a bridge between Lawyers and common people. Some people may not know where to get consulting for any issues based on laws. This app would provide will be the solution for all the issues or doubts araised based on laws. The Law consultation app is a comprehensive platform designed to empower individuals and businesses in making informed legal decisions through expert consultation. This app bridges the gap between legal expertise and those in need of guidance, providing a user-friendly interface for seamless interaction. This app aims to democratize access to legal expertise, empowering individuals, and businesses to navigate legal challenges with confidence and clarity. Whether seeking advice on a specific legal  matter or looking to understand legal rights and obligations, the app serves as a trusted companion on the journey towards informed decision-making in the legal realm.",

        images:[
      law1,law2,law3,law4,law5,law6
   ]   ,
   animation:"fade-right",
   github:"https://github.com/jddesign17/lawfriend"
    },

    


]