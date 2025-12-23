export interface BlogPost {
  id: string;
  category: string;
  label: string;
  title: string;
  author: string;
  date?: string;
  timeAgo?: string;
  image: string;
  content: string[];
}

// All blog posts data
export const allBlogPosts: BlogPost[] = [
  {
    id: "cricket-india-world-cup",
    category: "Cricket",
    label: "Cricket",
    title: "India Beat Australia in World Cup: Virat Kohli Scored Century",
    author: "Rohit Sharma",
    date: "August 12, 2024",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Indian cricket team won a great match against Australia in the World Cup today. Virat Kohli scored a brilliant century to help the team win.",
      "At the start of the match, Australia batted first and scored 280 runs. Indian bowlers did well, but Australia's batting was strong.",
      "In response, India had a great start. Rohit Sharma and Shubman Gill made an 80-run partnership for the first wicket. Then Virat Kohli came to bat and surprised everyone with his great batting.",
      "Virat Kohli scored 128 runs in 120 balls, with 12 fours and 3 sixes. His century was important for India's win.",
      "Finally, India won by 5 wickets and continued their winning streak in the World Cup. This win is very important for the Indian team as it takes them closer to the semifinals."
    ]
  },
  {
    id: "health-yoga-meditation",
    category: "Health",
    label: "Health",
    title: "Yoga and Meditation: Best Ways to Live a Healthy Life",
    author: "Dr. Priya Singh",
    date: "August 11, 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Yoga and meditation are the most effective ways to bring peace and health into our lives. Doing yoga daily not only improves physical health but also brings mental peace.",
      "Yoga has many benefits - it makes our muscles strong, increases flexibility, and reduces stress. Doing yoga in the morning is considered best because our mind is calm and fresh at this time.",
      "Meditation is a powerful way to calm our mind and find inner peace. Doing 10-15 minutes of meditation daily increases our concentration and reduces stress.",
      "Including yoga and meditation in our daily routine makes our life better. It is not only good for our physical health but also beneficial for our mental and emotional health.",
      "To get started, you can do 15-20 minutes of yoga in the morning and 10 minutes of meditation in the evening. Slowly you can increase it and see positive changes in your life."
    ]
  },
  {
    id: "tech-ai-ml",
    category: "Tech",
    label: "Tech",
    title: "AI and Machine Learning: How Future Technology is Changing",
    author: "Amit Kumar",
    date: "August 12",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    content: [
      "Artificial Intelligence (AI) and Machine Learning are the fastest growing technologies today. These technologies are affecting every area of our lives - whether it's healthcare, education, or business.",
      "Through AI and Machine Learning, we can create machines that can learn and improve themselves. This technology analyzes data to find patterns and makes predictions based on that.",
      "In the medical field, AI is helping to detect diseases and provide treatment. In education, AI is helping to provide personalized learning to students.",
      "In business, AI is helping to improve customer service, increase sales, and automate processes. This technology is not only making companies more efficient but also creating new opportunities.",
      "In the future, AI and Machine Learning will develop even more and make our lives easier. We should adopt this technology and move forward with it."
    ]
  },
  {
    id: "fitness-weight-loss",
    category: "Fitness",
    label: "Fitness",
    title: "10 Easy Exercises to Lose Weight at Home",
    author: "Rajesh Yadav",
    date: "August 12",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    content: [
      "Losing weight and staying fit is everyone's dream, but there's no time to go to the gym. The good thing is that you can lose weight by doing many easy exercises at home.",
      "The first exercise is squats - it makes your thighs and hips strong. Second is push-ups, which make your chest and arms strong. Third is plank, which makes your whole body strong.",
      "The fourth exercise is burpees, which is a full-body exercise and very effective in burning calories. Fifth is jumping jacks, which is good for your heart health and helps burn calories.",
      "The sixth exercise is lunges, which makes your thighs strong. Seventh is mountain climbers, which makes your stomach and shoulders strong. Eighth is side plank, which makes your stomach muscles strong.",
      "The ninth exercise is high knees, which is good for your heart health. The tenth and final exercise is dead bug, which makes your stomach muscles strong. Doing these exercises for 20-30 minutes daily can help you lose weight and stay fit."
    ]
  },
  {
    id: "news-education-policy",
    category: "News",
    label: "News",
    title: "New Education Policy in Country: What Changes for Students",
    author: "Seema Verma",
    date: "August 11",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    content: [
      "The central government has implemented a new education policy that is bringing big changes to the country's education system. This policy gives students more flexibility and choices.",
      "Under the new education policy, students can now choose subjects according to their interest. There won't be a strict division between Science, Commerce, and Arts like before. Students can now study different subjects together.",
      "This policy also focuses on vocational education. Students can now learn vocational skills from class 6. This will help them get jobs in the future.",
      "The new education policy also pays special attention to technical education. Students will be taught computers, coding, and digital skills. This will prepare them for the digital age.",
      "The main goal of this policy is to focus on understanding rather than memorizing. Now exams will test students' understanding and creativity instead of memorized facts. This change will be very beneficial for students."
    ]
  },
  {
    id: "health-mental-health",
    category: "Health",
    label: "Health",
    title: "Mental Health: How to Deal with Stress and Stay Happy",
    author: "Dr. Anil Sharma",
    date: "August 10",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    content: [
      "Mental health is an important part of our overall health. In today's fast-moving world, stress and anxiety have become common problems. But we can overcome these problems by dealing with them in the right way.",
      "To deal with stress, first we need to make changes in our daily routine. Regular exercise, enough sleep, and healthy diet are very important for mental health.",
      "Meditation and yoga also help improve mental health. Doing 10-15 minutes of meditation daily calms our mind and reduces stress.",
      "Spending time with friends and family is also very good for mental health. When we share our problems with someone, we feel better.",
      "If stress is too much and you can't handle it yourself, it's very important to get help from a psychologist or counselor. Talking about mental health is not something to be ashamed of, it's a brave step."
    ]
  },
  {
    id: "cricket-india-win",
    category: "Cricket",
    label: "Cricket",
    title: "IPL 2024: Mumbai Indians Beat Chennai Super Kings",
    author: "Vikash Gupta",
    timeAgo: "32 minutes ago",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
    content: [
      "Mumbai Indians beat Chennai Super Kings by 5 wickets in an exciting match of IPL 2024 tonight. The match was played at Wankhede Stadium and the audience saw a great match.",
      "Chennai Super Kings batted first and scored 185 runs in 20 overs. Ruturaj Gaikwad scored 65 runs, while MS Dhoni scored 25 runs at the end to give the team a good score.",
      "In response, Mumbai Indians had a great start. Rohit Sharma and Ishan Kishan made a 90-run partnership for the first wicket. Then Suryakumar Yadav scored 45 runs to take the team close to victory.",
      "In the final over, Mumbai Indians needed 12 runs and Hardik Pandya played brilliantly to win the match for the team. He scored 15 runs in the final over and Mumbai Indians won the match.",
      "This win is very important for Mumbai Indians as it takes them closer to the playoffs. On the other hand, Chennai Super Kings now need a win in their next match."
    ]
  },
  {
    id: "tech-ai-update",
    category: "Tech",
    label: "Tech",
    title: "ChatGPT New Update: Now Works Better in Hindi",
    author: "Neelam Pandey",
    timeAgo: "2 hours ago",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    content: [
      "OpenAI has released a new update for ChatGPT that now works better in Hindi language. This update is great news for Indian users.",
      "In the new update, ChatGPT can now give more accurate and natural answers in Hindi. It understands Hindi grammar better and provides more context-appropriate responses.",
      "With this update, ChatGPT can now write articles in Hindi, translate, and answer complex questions. This will be very useful for students, professionals, and business people.",
      "This ChatGPT update not only works better in Hindi but also has improvements in other Indian languages like Bengali, Tamil, Telugu, etc. This is a big step in AI technology for Indian languages.",
      "In the future, OpenAI is planning to make ChatGPT better in even more Indian languages. This will make AI technology more accessible for Indian users."
    ]
  },
  {
    id: "fitness-home-workout",
    category: "Fitness",
    label: "Fitness",
    title: "Best Exercises to Build Strong Muscles at Home",
    author: "Arjun Malhotra",
    timeAgo: "3 hours ago",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    content: [
      "Strong muscles not only help you look good but are also very important for your overall health. The good thing is that you can build strong muscles at home without any equipment.",
      "Push-ups are the best exercises to make your chest, shoulders, and arms strong. You can do them in different ways - normal push-ups, wide push-ups, or diamond push-ups.",
      "Squats are very effective in making your thighs, hips, and glutes strong. You can do normal squats, jump squats, or pistol squats.",
      "Plank is an excellent exercise to make your whole body strong. It makes your stomach, shoulders, back, and legs strong. You can do normal plank, side plank, or reverse plank.",
      "Lunges are very good for making your thighs and hips strong. You can do forward lunges, reverse lunges, or side lunges. Doing these exercises regularly can help you build strong muscles at home."
    ]
  },
  {
    id: "news-education",
    category: "News",
    label: "News",
    title: "Central Government Announces New Health Scheme",
    author: "Anita Das",
    timeAgo: "4 hours ago",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
    content: [
      "The central government announced a new health scheme today that will provide free healthcare services to all citizens of the country. This scheme is made especially for poor and middle-class families.",
      "Under this scheme, all citizens will get free medical checkups, medicines, and hospital treatment. This scheme will focus especially on treating serious diseases like cancer, heart disease, and diabetes.",
      "The government has allocated a budget of 50,000 crores for this scheme. This scheme will be implemented from next month and will be applied in all districts of the country.",
      "To benefit from this scheme, citizens will need to register at their nearest health center. Aadhar card and ration card will be required for registration.",
      "This scheme will bring a big change in the country's healthcare sector and provide quality healthcare services to all citizens. This scheme will prove very beneficial especially for people in rural areas."
    ]
  },
  {
    id: "health-nutrition",
    category: "Health",
    label: "Health",
    title: "Healthy Diet: Protein Rich Indian Foods",
    author: "Dr. Rita Jain",
    timeAgo: "5 hours ago",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    content: [
      "Protein is very important for our body - it makes our muscles strong, keeps our hair and nails healthy, and helps repair our body. Indian foods have plenty of protein.",
      "Lentils are an excellent source of protein. Toor dal, moong dal, urad dal, and masoor dal are all rich in protein. Eating these daily can give you enough protein.",
      "Chickpeas and kidney beans are also very good sources of protein. You can eat them as salad, curry, or snacks. Soybeans and tofu are also rich in protein and very good for vegetarians.",
      "Milk and milk products like paneer, yogurt, and buttermilk are also good sources of protein. Eggs and chicken are also rich in protein, but they are not vegetarian.",
      "Nuts and seeds like almonds, walnuts, peanuts, and sesame are also good sources of protein. You can increase your protein intake by eating them as snacks or including them in your meals. A balanced diet that includes all these foods will provide you with enough protein."
    ]
  },
  {
    id: "cricket-world-cup",
    category: "Cricket",
    label: "Cricket",
    title: "T20 World Cup 2024: India Team Full Schedule Released",
    author: "Mohit Sharma",
    timeAgo: "8 hours ago",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
    content: [
      "ICC has released the full schedule for T20 World Cup 2024. The Indian team is ready to give their best performance in this tournament.",
      "India's first match will be against Pakistan, which will be played on October 15. This match has always been one of the most exciting matches and this time too the audience is expecting a great match.",
      "After that, India will have matches against Australia, England, New Zealand, and South Africa. The Indian team has started their preparation and all players are in their best form.",
      "Indian team captain Rohit Sharma said that the team is fully ready to win this tournament. He said that the team has the right mix of young and experienced players.",
      "Everyone's eyes are on the Indian team's performance in T20 World Cup 2024. Indian fans are expecting their team to win this tournament. This tournament will run from October to December and the final will be played on December 15."
    ]
  }
];

// Function to get blog post by ID
export function getBlogPostById(id: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.id === id);
}

// Function to get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase() ||
    post.label.toLowerCase() === category.toLowerCase()
  );
}

// Function to generate category slug from label
export function getCategorySlug(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "posts";
}

