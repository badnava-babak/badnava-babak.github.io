export interface Service {
  title: string
  description: string
  icon: 'network' | 'book-open' | 'layers'
}

export interface Project {
  name: string
  description: string
  tags: string[]
  highlights: string[]
  image?: string
  githubUrl?: string
  paperUrl?: string
}

export interface WorkExperience {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export interface Publication {
  title: string
  authors: string
  venue: string
  year: string
  type: 'journal' | 'conference'
  doi?: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  period: string
  thesis?: string
}

export const services: Service[] = [
  {
    title: 'ML Pipeline Development',
    description:
      'End-to-end machine learning systems, from data ingestion and preprocessing to model training, evaluation, and deployment. Expertise in PyTorch, TensorFlow, and modern MLOps practices.',
    icon: 'network',
  },
  {
    title: 'Research Consulting',
    description:
      'Translating cutting-edge research into practical solutions. Deep expertise in reinforcement learning, edge computing, resource allocation, and wireless systems. Published in IEEE GLOBECOM, ISIT, and more.',
    icon: 'book-open',
  },
  {
    title: 'AI Product Prototyping',
    description:
      'Rapidly prototype AI-powered products and proof-of-concepts. From idea to working demo — whether it\'s a custom LLM integration, a computer vision pipeline, or an intelligent decision-making system.',
    icon: 'layers',
  },
]

export const projects: Project[] = [
  {
    name: 'Synthetic Defect Image Generation',
    image: '/images/projects/defect-generation.jpg',
    description:
      'An end-to-end pipeline for fine-tuning Stable Diffusion XL to generate synthetic manufacturing defect images. Uses LoRA and Textual Inversion for efficient model customization, with automated quality evaluation.',
    tags: ['Python', 'Stable Diffusion XL', 'LoRA', 'Textual Inversion', 'PyTorch'],
    highlights: [
      '~31% FID improvement over the pre-trained baseline',
      'Distributed data loader with few-shot sampling',
      'Automated quality evaluation (FID, KID, ISC, Precision & Recall)',
    ],
    githubUrl: 'https://github.com/badnava-babak/defect-image-generation',
  },
]

export const experience: WorkExperience[] = [
  {
    title: 'AI Research Assistant',
    company: 'Siemens Energy',
    location: 'Orlando, FL',
    period: 'Oct 2025 – Present',
    bullets: [
      'Developing AI solutions for power grid management, including topology optimization and power redispatch.',
      'Reduced RL training time to 1/4 of the original by redesigning the training pipeline with multi-processing techniques.',
      'Set up and managed HPC clusters using SLURM for large-scale distributed training workloads.',
    ],
  },
  {
    title: 'Graduate Research & Teaching Assistant',
    company: 'University of Kansas',
    location: 'Lawrence, KS',
    period: '2020 – 2024',
    bullets: [
      'Developed PPO and PPG algorithms for rate adaptation in 3D video streaming, improving user quality of experience over mmWave networks.',
      'Built DQN, UCB, and contextual UCB algorithms for task offloading in edge computing platforms.',
      'Simulated wireless 3D video streaming using real-world network and video datasets in Python.',
      'Collaborated on LSTM, RNN, GRU, and Transformer models for wind power forecasting.',
      'Authored and presented 7+ papers at IEEE GLOBECOM, IEEE ISIT, and IEEE/ACM SEC.',
      'Taught undergraduate labs on C and MATLAB programming, circuit design, and college algebra.',
    ],
  },
  {
    title: 'Software Engineer & Senior Python Developer',
    company: 'System Negar Saina',
    location: 'Tehran, Iran',
    period: '2019 – 2020',
    bullets: [
      'Refactored the News Box software stack, reducing deployment costs by 50%.',
      'Boosted software performance by 500% by redesigning the stack using microservices architecture.',
    ],
  },
  {
    title: 'Java/J2EE Developer',
    company: 'Dotin (Fanap)',
    location: 'Tehran, Iran',
    period: '2015 – 2018',
    bullets: [
      'Developed and maintained multiple subsystems of enterprise insurance software.',
      'Optimized SQL queries to improve performance and user experience.',
      'Collaborated with business analysts to devise features aligned with customer needs.',
      'Built tools for generating financial and business charts and reports.',
    ],
  },
  {
    title: 'Web & Android Developer',
    company: 'Freelance',
    location: 'Yazd, Iran',
    period: '2014 – 2015',
    bullets: [
      'Developed WordPress websites, plugins, and an Android application connecting teachers and parents.',
    ],
  },
]

export const publications: Publication[] = [
  // Journal
  {
    title: 'Neural-Enhanced Rate Adaptation and Computation Distribution for Emerging mmWave Multi-User 3D Video Streaming Systems',
    authors: 'Babak Badnava, Jacob Chakareski, Morteza Hashemi',
    venue: 'IEEE Transactions on Multimedia',
    year: 'Under Review',
    type: 'journal',
  },
  {
    title: 'Improving Demand-Response Scheme in Smart Grids using Reinforcement Learning',
    authors: 'Reza Bagherpour, Nasser Mozayani, Babak Badnava',
    venue: 'International Journal of Energy Research',
    year: '2021',
    type: 'journal',
    doi: 'https://doi.org/10.1002/er.7165',
  },
  // Conference
  {
    title: 'Joint Communication and Computation Resource Allocation for Emerging mmWave Multi-User 3D Video Streaming Systems',
    authors: 'Babak Badnava, Jacob Chakareski, Morteza Hashemi',
    venue: 'IEEE Global Communications Conference (IEEE GLOBECOM)',
    year: 'Under Review',
    type: 'conference',
  },
  {
    title: 'Multi-Task Decision-Making for Multi-User 360 Video Processing over Wireless Networks',
    authors: 'Babak Badnava, Jacob Chakareski, Morteza Hashemi',
    venue: 'IEEE International Conference on Multimedia Information Processing and Retrieval (MIPR)',
    year: '2024',
    type: 'conference',
  },
  {
    title: 'Energy-Efficient Deadline-Aware Edge Computing: Bandit Learning with Partial Observations in Multi-Channel Systems',
    authors: 'Babak Badnava, Keenan Roach, Kenny Cheung, Morteza Hashemi, Ness B Shroff',
    venue: 'IEEE Global Communications Conference (IEEE GLOBECOM)',
    year: '2023',
    type: 'conference',
    doi: 'https://ieeexplore.ieee.org/abstract/document/10437602',
  },
  {
    title: 'QoE-Centric Multi-User mmWave Scheduling: A Beam Alignment and Buffer Predictive Approach',
    authors: 'Babak Badnava, Sravan Reddy Chintareddy, Morteza Hashemi',
    venue: 'IEEE International Symposium on Information Theory (ISIT)',
    year: '2022',
    type: 'conference',
    doi: 'https://doi.org/10.1109/ISIT50566.2022.9834463',
  },
  {
    title: 'Deep Reinforcement Learning for Online Latency Aware Workload Offloading in Mobile Edge Computing',
    authors: 'Zeinab Akhavan, Mona Esmaeili, Babak Badnava, Mohammad Yousefi, Xiang Sun, Michael Devetsikiotis, Payman Zarkesh-Ha',
    venue: 'IEEE Global Communications Conference (IEEE GLOBECOM)',
    year: '2022',
    type: 'conference',
    doi: 'https://doi.org/10.1109/GLOBECOM48099.2022.10001678',
  },
  {
    title: 'Sampling-Based Nonlinear MPC of Neural Network Dynamics with Application to Autonomous Vehicle Motion Planning',
    authors: 'Iman Askari, Babak Badnava, Thomas Woodruff, Shen Zeng, Huazhen Fang',
    venue: 'American Control Conference (ACC)',
    year: '2022',
    type: 'conference',
    doi: 'https://doi.org/10.23919/ACC53348.2022.9867324',
  },
  {
    title: 'Spectrum-Aware Mobile Edge Computing for UAVs Using Reinforcement Learning',
    authors: 'Babak Badnava, Taejoon Kim, Kenny Cheung, Zaheer Ali, Morteza Hashemi',
    venue: 'IEEE/ACM Symposium on Edge Computing (SEC)',
    year: '2021',
    type: 'conference',
    doi: 'https://doi.org/10.1145/3453142.3491414',
  },
  {
    title: 'Optimizing Dynamic Pricing Demand Response Algorithm Using Reinforcement Learning in Smart Grid',
    authors: 'Reza Bagherpour, Nasser Mozayani, Babak Badnava',
    venue: '25th International Computer Conference, Computer Society of Iran (CSICC)',
    year: '2020',
    type: 'conference',
    doi: 'https://doi.org/10.1109/CSICC49403.2020.9050115',
  },
]

export const education: Education[] = [
  {
    degree: 'Ph.D. in Computer Science',
    institution: 'University of Kansas',
    location: 'Lawrence, KS',
    period: '2020 – 2024',
    thesis: 'Joint Communication and Computation Resource Allocation for Next Generation Wireless Communication Networks',
  },
  {
    degree: 'M.Sc. in Artificial Intelligence & Robotics',
    institution: 'Iran University of Science and Technology',
    location: 'Tehran, Iran',
    period: '2015 – 2017',
    thesis: 'Potential Based Reward Shaping in Reinforcement Learning Agents',
  },
  {
    degree: 'B.Sc. in Computer Engineering',
    institution: 'Payame Noor University',
    location: 'Yazd, Iran',
    period: '2010 – 2014',
  },
]
