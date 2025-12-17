import { Category, Project } from './types';

export const PROFILE = {
  name: "Jonathan Bown",
  title: "Principal Machine Learning Engineer",
  company: "WGU",
  location: "North Carolina, USA",
  bio: "Machine Learning Engineer at WGU and recent MSCS graduate at UT Austin, with a broader background in Mathematics, Statistics, and Computer Science. Previous experience across various domains including banking, fintech, marketing, higher education, and sports. Machine Learning/AI competitor and enthusiast. Open source contributor. Proficient in Python, C#, SQL, Java, R, and other languages. Always eager to explore, learn, and share insights in the vast realm of science and technology.",
  education: [
    "Masters of Science, Computer Science, UT Austin (2023)",
    "Masters of Statistics, University of Utah (2019)",
    "Bachelors of Science in Mathematics, University of Utah (2018)"
  ],
  links: {
    kaggle: "https://www.kaggle.com/jonbown",
    github: "https://github.com/Jon-bown",
    medium: "https://medium.com/@jonbown",
    linkedin: "https://www.linkedin.com/in/jonathan-bown/",
    email: "mailto:Jonathan.k.bown@gmail.com",
    hackerrank: "https://www.hackerrank.com/profile/jonvzw6"
  }
};

export const PROJECTS: Project[] = [
    {
    id: 'app-5',
    title: "Code Rank",
    description: "Google DeepMind Hackathon Project",
    category: Category.Apps,
    link: "https://www.kaggle.com/competitions/gemini-3/writeups/code-rank-ai-gamified-learning-experience$0",
    githubLink: "https://github.com/jon-bown/code-rank",
    imageUrl: "https://img.youtube.com/vi/KiwMM6cMxVI/maxresdefault.jpg"
  },
  // Presentations
  {
    id: 'pres-1',
    title: "The MLOps Platform at WGU",
    description: "Co-Presenter - Databricks Data + AI Summit 2024",
    category: Category.Presentations,
    link: "https://youtu.be/15p8g09Rt-E?si=i_djW5SnZjhVv8KT", 
    imageUrl: "https://img.youtube.com/vi/15p8g09Rt-E/maxresdefault.jpg",
    badge: "Speaker"
  },
  // Certifications
  {
    id: 'cert-1',
    title: "Databricks Certified Generative AI Engineer Associate",
    description: "Asseses an individual’s ability to design and implement LLM-enabled solutions using Databricks.",
    category: Category.Certifications,
    link: "https://credentials.databricks.com/5b59a018-904b-45b7-b9d9-c604995bc987#acc.I83XhPfF$0",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84uCXz1RviFLTEGfl0gahVbwue0MT1f2tZA&s$0",
    badge: "Specialty"
  },
  {
    id: 'cert-3',
    title: "Deep Learning Specialization",
    description: "Coursera / DeepLearning.AI. Mastered the fundamentals of deep learning, neural networks, and backpropagation.",
    category: Category.Certifications,
    link: "https://www.coursera.org/specializations/deep-learning",
    imageUrl: "https://cdn-1.webcatalog.io/catalog/deeplearning-ai/deeplearning-ai-social-preview.png?v=1718611604869"
  },
  // Mathematics
  {
    id: 'math-1',
    title: "Masters Thesis",
    description: "Structural Change Point Testing with Application to Stock Returns.",
    category: Category.Mathematics,
    link: "https://github.com/jon-bown/jon-bown.github.io/blob/main/pages/source/Structural_Change_Points_bown_2019.pdf",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/GPRO_price_stoptime.png?raw=true"
  },
  {
    id: 'math-2',
    title: "Conversion Rate Quality",
    description: "Structural Change Point Testing with Application to Stock Returns (Applied).",
    category: Category.Mathematics,
    link: "https://github.com/jon-bown/jon-bown.github.io/blob/main/pages/source/Conversion_rate_qual_summary.pdf$0",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/distribution.png?raw=true"
  },
  {
    id: 'math-3',
    title: "NBA Player Evaluations",
    description: "Utah Jazz trade evaluations using sports economics.",
    category: Category.Mathematics,
    link: "https://github.com/jon-bown/jon-bown.github.io/blob/main/pages/source/NBA_Player_Valuations_2019.pdf",
    githubLink: "https://github.com/jon-bown/jon-bown.github.io/blob/main/pages/source/NBA_Player_Valuations_2019.pdf",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/Utah_Jazz_Logo.png?raw=true"
  },
  {
    id: 'math-4',
    title: "NBA Player Metrics",
    description: "Comparison of different sports economics metrics for player comparison.",
    category: Category.Mathematics,
    link: "./pages/source/NBA_Player_Valuations_2019.html",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/nba_logo.jpg?raw=true"
  },
  {
    id: 'math-5',
    title: "Euclid's Elements",
    description: "Propositions 1-20 of Euclid's Elements implemented in Python.",
    category: Category.Mathematics,
    link: "https://www.kaggle.com/code/jonbown/euclid-s-elements-book-1-props-1-20",
    githubLink: "https://github.com/jon-bown/euclid",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/euclid.png?raw=true$0"
  },
  {
    id: 'math-6',
    title: "Credit Risk Similarity",
    description: "Exploration of Fannie Mae Credit Data.",
    category: Category.Mathematics,
    link: "/pages/cr_similarity.pdf",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/crs.png?raw=true$0"
  },
  {
    id: 'math-7',
    title: "Probability of a Revolution",
    description: "Analysis of rare event in the card game The Great Dalmuti.",
    category: Category.Mathematics,
    link: "https://github.com/jon-bown/dalmuti",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/dalmuti.png?raw=true$0"
  },
  {
    id: 'math-8',
    title: "Game Theory & Spider-man",
    description: "Application of Game Theory to Sony/Marvel Studios negotiations.",
    category: Category.Mathematics,
    link: "/pages/gt_spiderman.pdf",
    githubLink: "https://github.com/jon-bown/game-theory-spider-man",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/disney_sony.jpg?raw=true$0"
  },
  // Machine Learning
  {
    id: 'ml-1',
    title: "Adversarial Super Bowl",
    description: "Improving QA ability of ELECTRA-small with adversarial data.",
    category: Category.MachineLearning,
    link: "/pages/source/adversarial_super_bowl.pdf",
    kaggleLink: "https://www.kaggle.com/datasets/jonbown/adv-qa",
    githubLink: "https://github.com/jon-bown/nlp-utaustin-FA23/blob/main/final-nlp-project.ipynb",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/v2_before-sqadv.png?raw=true"
  },
  {
    id: 'ml-2',
    title: "Constrained Language Learning",
    description: "Feedback Prize: Kaggle Competition Methodology.",
    category: Category.MachineLearning,
    link: "https://github.com/jon-bown/jon-bown.github.io/blob/main/pages/source/feedback_prize_final_report.pdf$0",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/pca-cll.png?raw=true"
  },
  // Datasets
  {
    id: 'ds-1',
    title: "AdvQA",
    description: "Balanced Adversarial Dataset for Question-Answer LLMs.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/adv-qa",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/qa-cover.jpg?raw=true"
  },
  {
    id: 'ds-2',
    title: "Metallica Songs",
    description: "Metallica Spotify Dataset.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/metallica-songs",
    githubLink: "https://github.com/jon-bown/metallica",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/72-seasons.jpg?raw=true"
  },
  {
    id: 'ds-3',
    title: "Simpsons Episodes & Ratings",
    description: "Comprehensive dataset of Simpsons episodes.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/simpsons-episodes-2016",
    githubLink: "https://github.com/jon-bown/simpsons",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/simpsons.jpg?raw=true"
  },
  {
    id: 'ds-4',
    title: "Marvel Character Screen Time",
    description: "Screen time data for MCU characters.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/marvel-screen-time",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/marvel.jpg?raw=true"
  },
  {
    id: 'ds-5',
    title: "Christmas Movies",
    description: "Dataset of popular Christmas movies.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/christmas-movies",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/christmas.jpg?raw=true"
  },
  {
    id: 'ds-6',
    title: "London Underground Usage",
    description: "Station usage statistics from 2007-2017.",
    category: Category.Datasets,
    link: "https://www.kaggle.com/datasets/jonbown/london-tube-station-usage",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/london.png?raw=true"
  },
  // Notebooks
  {
    id: 'nb-1',
    title: "Metallica Songs Analysis",
    description: "Metallica Spotify Data Analytics and Visualizations.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/metallica-visualize-em-all",
    githubLink: "https://github.com/jon-bown/metallica",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/72-seasons.jpg?raw=true"
  },
  {
    id: 'nb-2',
    title: "Formula 1 Summary",
    description: "Formula 1 Post-Race Report Generator.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/formula-1-post-race-summary",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/F1-logo.png?raw=true"
  },
  {
    id: 'nb-3',
    title: "Weekend Box Office",
    description: "Weekly summary of box office trends via web scraping.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/u-s-weekend-box-office-report",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/movie-theater-popcorn.jpg?raw=true"
  },
  {
    id: 'nb-4',
    title: "Economics of Data Careers",
    description: "Exploration of data career salaries dataset.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/economics-of-data-careers",
    imageUrl: "https://picsum.photos/seed/careers/400/300"
  },
  {
    id: 'nb-5',
    title: "STEM Income Disparity",
    description: "Testing claims about racial disparities in tech salaries.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/stem-income-disparity-does-it-exist",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/fulls/stem.png?raw=true"
  },
  {
    id: 'nb-6',
    title: "Utah Drought Forecast",
    description: "Time Series Analysis of Utah Drought Data.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/forecasting-utah-drought-conditions",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/thumbs/drought.jpg?raw=true"
  },
  {
    id: 'nb-7',
    title: "Web Scraping Tutorial",
    description: "Instructions for scraping box office data using Python.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/web-scraping-box-office-data-with-python",
    imageUrl: "https://picsum.photos/seed/scrape/400/300"
  },
  {
    id: 'nb-8',
    title: "Box Office Data Pipeline",
    description: "Automated webscraping to build a Kaggle dataset on a scheduler.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/worldwide-box-office-data-generator",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/fulls/movie-theater-popcorn.jpg?raw=true"
  },
  {
    id: 'nb-9',
    title: "Feature Testing Pipeline",
    description: "Quickly test features for ML competitions.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/feature-testing-pipeline-ps-s3e13",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/feature_test_pipe.png?raw=true"
  },
  {
    id: 'nb-10',
    title: "Linear Regression Comp",
    description: "Comparing complexity of different linear regression approaches.",
    category: Category.Notebooks,
    link: "https://www.kaggle.com/code/jonbown/comparing-linear-regression-algorithms",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/lin_reg.png?raw=true"
  },
  // Apps
  {
    id: 'app-1',
    title: "Watchlist",
    description: "Custom Watchlists on Android.",
    category: Category.Apps,
    link: "https://github.com/jon-bown/watchlist",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/fulls/watchlist.png?raw=true"
  },
  {
    id: 'app-2',
    title: "Beach Ball Runner",
    description: "iOS Game built with Unity.",
    category: Category.Apps,
    link: "https://apps.apple.com/us/app/beach-ball-runner/id1514274329",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/fulls/beach.png?raw=true"
  },
  {
    id: 'app-3',
    title: "False Positive",
    description: "False Positive Calculator on iOS.",
    category: Category.Apps,
    link: "https://apps.apple.com/us/app/beach-ball-runner/id1514274329", // Link from original source seems duplicated but kept
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/false_positive.png?raw=true"
  },
  {
    id: 'app-4',
    title: "Minutes",
    description: "iOS Productivity App.",
    category: Category.Apps,
    link: "https://testflight.apple.com/join/r5LJoIFd",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/minutes_logo.png?raw=true",
    badge: "Beta"
  },
  // Repos
  {
    id: 'repo-1',
    title: "Kaggle Data Pipeline",
    description: "Everything you need to build Kaggle dataset pipelines.",
    category: Category.Repos,
    link: "https://github.com/jon-bown/kaggle-data-pipeline",
    imageUrl: "https://github.com/jon-bown/jon-bown.github.io/blob/main/images/fulls/kdp.jpg?raw=true"
  }
];