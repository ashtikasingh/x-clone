const randInt = (max) => Math.floor(Math.random() * max);

// Seed users pool (add or swap to taste)
const USERS = [
    {
        name: "Priya Patel",
        id: "@priya_ui",
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
        name: "Lucas Zhang",
        id: "@lucas_dev",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
        name: "Emma Thompson",
        id: "@emma_codes",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        name: "Jamal Brooks",
        id: "@jamal_js",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        name: "Natalia García",
        id: "@natalia_ai",
        avatar: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
        name: "Tomáš Novák",
        id: "@tomas_fullstack",
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    },
    {
        name: "Aisha Khan",
        id: "@aisha_cloud",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
        name: "Brian O'Connor",
        id: "@brian_devops",
        avatar: "https://randomuser.me/api/portraits/men/97.jpg",
    },
    {
        name: "Chloe Martin",
        id: "@chloe_designs",
        avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    },
    {
        name: "Kenji Tanaka",
        id: "@kenji_ml",
        avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    },
];

// Single suggestion factory
export const generateFollowingSuggestion = () => {
    const user = USERS[randInt(USERS.length)];
    return {
        profile_image: user.avatar,
        user_name: user.name,
        twitter_id: user.id,
    };
};

// Bulk generator
export const generateMockFollowingBar = (count = 6) =>
    Array.from({ length: count }, generateFollowingSuggestion);

// Default export: quick sample list
export default generateMockFollowingBar(3);