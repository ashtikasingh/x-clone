const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Mini helpers
const randInt = (max) => Math.floor(Math.random() * max);
const randBool = (p = 0.5) => Math.random() < p;

const formatCount = (n) =>
    n > 999 ? `${(n / 1000).toFixed(n % 1000 < 100 ? 1 : 0)}k` : `${n}`;

// Re‑usable pools of fake user profiles, tweet texts & images
const USERS = [
    {
        name: "Alice Johnson",
        id: "@alice_in_devland",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Ravi Sharma",
        id: "@ravi_codes",
        avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
        name: "Sarah Lee",
        id: "@sarah_frontend",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Diego Martínez",
        id: "@diego_js",
        avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
        name: "Mina Cho",
        id: "@mina_designs",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
];

const TWEETS = [
    "Shipping my first full‑stack side project tonight. Fingers crossed! 🚀",
    "Pro tip: use `npm diff` before those big upgrades. Saved me again. ✨",
    "Dark mode just *hits* different, doesn’t it? 🌑",
    "Passed the 1K ⭐ mark on GitHub today — thank you, dev community! 💜",
    "Debugging ⛏️: 90% staring at the screen, 10% realizing you missed a semicolon.",
    "GraphQL or REST for the next project? Cast your vote! 🗳️",
];

const TWEET_IMAGES = [
    "https://picsum.photos/seed/tweet1/800/450",
    "https://picsum.photos/seed/tweet2/800/450",
    "https://picsum.photos/seed/tweet3/800/450",
    "https://picsum.photos/seed/tweet4/800/450",
];

const randomTimestamp = () => {
    const hrs = randInt(48); // 0–47 hours ago
    if (hrs < 24) return `${hrs}h`;
    const date = new Date(Date.now() - hrs * 60 * 60 * 1000);
    return `${MONTHS[date.getMonth()]} ${date.getDate()}`;
};

export const generateMockTweet = () => {
    const user = USERS[randInt(USERS.length)];

    return {
        profile_image: user.avatar,
        user_name: user.name,
        twitter_id: user.id,
        timestamp: randomTimestamp(),
        tweet: TWEETS[randInt(TWEETS.length)],
        tweet_image: randBool(0.6) ? TWEET_IMAGES[randInt(TWEET_IMAGES.length)] : "",
        comments: formatCount(randInt(2000)),
        retweets: formatCount(randInt(5000)),
        likes: formatCount(randInt(20000)),
        insights: formatCount(randInt(20000)),
    };
};

// export default generateMockTweets(3);

// Bulk tweet generator
export const generateMockTweets = (count = 5) =>
    Array.from({ length: count }, generateMockTweet);

export default generateMockTweets(5);