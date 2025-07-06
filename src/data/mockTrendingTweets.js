const randInt = (max) => Math.floor(Math.random() * max);
const formatCount = (n) =>
    n > 999 ? `${(n / 1000).toFixed(n % 1000 < 100 ? 1 : 0)}k` : `${n}`;

// Seed data pools
const PLACES = [
    "Worldwide",
    "India",
    "United States",
    "Japan",
    "United Kingdom",
    "Brazil",
    "Germany",
    "Australia",
    "Canada",
    "France",
];

const HASHTAGS = [
    "#JavaScript",
    "#ReactJS",
    "#TechNews",
    "#StartupLife",
    "#AI",
    "#OpenSource",
    "#WebDev",
    "#Design",
    "#Gaming",
    "#Cryptocurrency",
    "#ClimateAction",
    "#Travel",
    "#Fitness",
    "#Music",
    "#Foodie",
];

// Single topic factory
export const generateTrendingTopic = () => ({
    trending_place: PLACES[randInt(PLACES.length)],
    trending_hashtag: HASHTAGS[randInt(HASHTAGS.length)],
    post_count: formatCount(randInt(500000)), // up to ~500k posts
});

// Bulk generator
export const generateMockTrendingTopics = (count = 10) =>
    Array.from({ length: count }, generateTrendingTopic);

// Default export: quick sample list
// export default generateMockTrendingTopics(4);