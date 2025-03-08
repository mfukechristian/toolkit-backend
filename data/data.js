const data = [
  {
    name: "Coolify",
    description:
      "Coolify is an open-source, self-hostable alternative to platforms like Heroku, Netlify, and Vercel. It supports numerous languages and allows deployment to any server with an SSH connection. Features include Git integration, free SSL certificates, automatic database backups, webhooks, a powerful API, and real-time terminal access.",
    category: "Directory",
    image: "data/images/coolify.png",
    url: "https://coolify.io/",
  },
  {
    name: "OSS Gallery",
    description:
      "OSS Gallery is a crowdsourced platform that showcases the best open-source projects on the internet. Built with the Dub TypeScript SDK, it helps developers and designers discover and access various open-source tools, frameworks, and APIs for their projects",
    category: "Directory",
    image: "data/images/oss-galery.png",
    url: "https://oss.gallery/",
  },
  {
    name: "Super",
    description:
      "Super.so turns Notion pages into fully customized websites with high performance and SEO optimization. It allows users to create professional sites in minutes without coding, focusing on content creation while Super handles hosting, security, and scaling.",
    category: "No Code Tool",
    image: "data/images/super.png",
    url: "https://super.so/",
  },
  {
    name: "Open Alternative",
    description:
      "OpenAlternative.co is a curated directory of open-source alternatives to popular SaaS products, designed to help users save money with reliable, hand-picked tools. It features projects like Strapi, Supabase, and NocoDB, offering alternatives to platforms like Airtable and Notion.",
    category: "Directory",
    image: "data/images/openalternative.png",
    url: "https://openalternative.co/",
  },
  {
    name: "Fontpair",
    description:
      "Fontpair.co helps designers choose the perfect font combinations for their projects. It showcases various pairings and allows users to visualize these fonts in editable text blocks. It also highlights free, open-source fonts, making it a valuable resource for typography inspiration.",
    category: "Design",
    image: "data/images/fontpair.png",
    url: "https://www.fontpair.co/",
  },
  {
    name: "Maneken",
    description:
      "Maneken is a browser-powered mockup editor that simplifies showcasing content across various mediums. It allows users to drag and drop media, edit with fine-grain controls, and export web-ready assets. With an extensive catalog and features like Multi Slots and a Dynamic Color Picker, Maneken streamlines the design process.",
    category: "Design",
    image: "data/images/maneken.png",
    url: "https://maneken.app/",
  },
  {
    name: "Vidclue",
    description:
      "VidClue is a video idea library offering inspiration for short-form videos for brands and businesses. It provides numerous video ideas across categories like interactive engagement, educational styles, comedy formats, internet trends, creative devices, and various video and motion techniques.",
    category: "Inspiration",
    image: "data/images/Vidclue.png",
    url: "https://vidclue.com/",
  },
  {
    name: "Shots",
    description:
      "Shots.so is a website that helps you create aesthetically pleasing device mockups of your website or app screenshots. It allows you to showcase your designs in a professional and visually appealing way.",
    category: "Design",
    image: "data/images/Shots.png",
    url: "https://shots.so/",
  },
  {
    name: "Visual Electric",
    description:
      "Visual Electric appears to be a platform that uses AI to generate images from text prompts. It showcases various styles, such as fashion and product photography, and allows users to create visuals based on specific descriptions.",
    category: "AI",
    image: "",
    url: "https://visualelectric.com/",
  },
  {
    name: "Dev Resources",
    description:
      "Devresourc.es is a curated directory of resources for developers, covering tools, templates, and services. It includes categories like AI, code snippets, marketing, and productivity, helping developers discover tools to improve their workflow and build better projects.",
    category: "Directory",
    image: "data/images/devresources.png",
    url: "https://devresourc.es/",
  },
  {
    name: "Public Api",
    description:
      "Public APIs is a comprehensive directory of free and freemium APIs across various categories. It helps developers discover and utilize APIs for their projects, offering information on authentication, CORS support, and HTTPS. It includes a wide range of APIs from finance and weather to anime and government data.",
    category: "Directory",
    image: "data/images/publicapi.png",
    url: "https://publicapis.dev",
  },
  {
    name: "ZATech",
    description:
      "ZATech is a South African tech community on Slack. It's a space for professionals to connect, share knowledge, and learn from each other. To join, prospective members must email invite@zatech.co.za with their details, occupation, and a reason for joining, along with a link to their professional profile.",
    category: "Community",
    image: "data/images/zatech.png",
    url: "https://zatech.co.za/",
  },
  {
    name: "Code Your Future",
    description:
      "CodeYourFuture offers free tech training for refugees and disadvantaged individuals, helping them learn tech skills and change their lives. The organization boasts a high trainee satisfaction rate and helps many graduates find employment in the tech industry.",
    category: "Learn",
    image: "",
    url: "https://codeyourfuture.io",
  },
  {
    name: "Boring Cash Cow",
    description:
      'BoringCashCow.com showcases "boring" but profitable business ideas. It helps entrepreneurs discover and learn about unglamorous yet successful ventures. The platform offers insights and reports for building these kinds of businesses and has a community of over 7000 founder',
    category: "Directory",
    image: "data/images/boringcashcow.png",
    url: "https://boringcashcow.com/",
  },
  {
    name: "Mobbin",
    description:
      "Mobbin.com is a UI & UX pattern library showcasing mobile and web app designs. It provides a searchable collection of interfaces, user flows, and design examples from various apps like Todoist, helping designers find inspiration and best practices for their projects.",
    category: "Inspiration",
    image: "data/images/mobbin.png",
    url: "https://mobbin.com",
  },
  {
    name: "Devpost",
    description:
      "Devpost is a leading platform for hackathons, enabling developers to build products, learn new technologies, and grow their networks. It supports both in-person and virtual events, offering a user-friendly interface and a large community for software engineers to showcase their projects and compete for prizes.",
    category: "Community",
    image: "data/images/devpost.png",
    url: "https://devpost.com/",
  },
  {
    name: "Free Figma Templates",
    description:
      "Free Figma Templates offers a collection of high-quality, carefully selected resources for designers, including website templates, plugins, and UI elements, providing a wide array of content to enhance design projects without needing to create everything from scratch. This platform is ideal for those looking to streamline their workflow and improve efficiency in design tasks.",
    category: "Inspiration",
    image: "data/images/freefigmatemplates.png",
    url: "https://www.freefigmatemplates.com/",
  },
  {
    name: "Generative ai for beginners",
    description:
      'The "Generative AI for Beginners" repository by Microsoft offers a comprehensive course designed to teach the fundamentals of building Generative AI applications. It features 21 lessons that cover everything from basic concepts to advanced techniques, guiding learners through the process of implementing Generative AI into projects, including text generation and more.',
    category: "Learn",
    image: "data/images/generativeaiforbeginner.png",
    url: "https://microsoft.github.io/generative-ai-for-beginners/#/",
  },
  {
    name: "Brad Traversy",
    description:
      "Traversy Media is a prominent YouTube channel focused on web development and programming tutorials, boasting over 2.2 million subscribers and more than 973 videos covering various web technologies. It's highly regarded as one of the best resources for learning web development, with total views exceeding 200 million. The channel provides both beginner-friendly content and advanced topics, making it suitable for developers at all levels.",
    category: "Who to Follow",
    image: "data/images/bradtraversy.png",
    url: "https://www.youtube.com/traversymedia",
  },
  {
    name: "Florin Pop",
    description:
      "Florin Pop's YouTube channel, started in 2019, focuses on sharing knowledge about web development, particularly FrontEnd technologies like HTML, CSS, and JavaScript. Florin creates content aimed at teaching programming while also streaming regularly on Twitch. Initially setting a goal to reach 100,000 subscribers in 2020, he has continued to grow his audience by sharing valuable insights and projects.",
    category: "Who to Follow",
    image: "data/images/florinpop.png",
    url: "https://www.youtube.com/@FlorinPop",
  },
  {
    name: "ApyHub",
    description:
      "ApyHub is a platform that brings everything you need to work with APIs into one place, designed for developers, people who don't code, testers, and product creators. It provides a carefully selected collection of trustworthy APIs that can be used for many different purposes, making it quicker and simpler for users to complete their projects.",
    category: "No Code Tool",
    image: "data/images/apyhub.png",
    url: "https://apyhub.com/",
  },
  {
    name: "Pinokio",
    description:
      "Pinokio is a tool that simplifies the installation process of various open-source AI applications, making it accessible even for those without programming experience. It supports multiple platforms including Windows, Mac, and Linux, offering a seamless way to install, run, and manage AI tools with isolation between them to prevent conflicts during updates.",
    category: "AI",
    image: "data/images/pinokio.png",
    url: "https://pinokio.computer/",
  },
  {
    name: "Tldraw",
    description:
      "tldraw is a browser-based open-source drawing application that allows users to create sketches, diagrams, and prototypes on an infinite canvas with real-time collaboration features.",
    category: "Design",
    image: "data/images/tldraw.png",
    url: "https://www.tldraw.com/",
  },
  {
    name: "unwind ai",
    description:
      "Unwind AI is a platform designed to make AI knowledge usable for everyone, offering the latest developments and tutorials in AI, catering to an ecosystem of over 75k AI professionals. It provides resources like newsletters, dispatched every weekday, and social media engagement aimed at both beginners and experts in AI integration.",
    category: "AI",
    image: "data/images/unwindai.png",
    url: "https://www.theunwindai.com/",
  },
  {
    name: "Hugging Face Chat",
    description:
      "Hugging Face Chat is an open-source platform providing access to advanced AI chat models. It supports tools like web search, multimodal inputs (e.g., images), and function calling, enabling users to interact with generative AI applications.",
    category: "AI",
    image: "data/images/hugginFaceChat.png",
    url: "https://huggingface.co/chat/",
  },
  {
    name: "OpenRouter",
    description:
      "OpenRouter is a unified API gateway that provides access to a wide range of AI models from providers like OpenAI, Anthropic, Google, and Meta. It simplifies AI integration by offering a single API key for multiple models, cost-effective pricing, and seamless switching between models for diverse applications such as content creation, coding, and research.",
    category: "AI",
    image: "data/images/openRouter.png",
    url: "https://openrouter.ai/",
  },
  {
    name: "Piclumen",
    description:
      "PicLumen is an advanced AI-powered image generation platform that transforms text prompts or photo inputs into stunning visuals. It offers diverse creative tools, including realistic image generation, anime-style artwork, and illustrations for branding, fashion, architecture, and more. Features like background removal, upscaling, and customizable styles make it ideal for artists and designers",
    category: "AI",
    image: "data/images/piclumen.png",
    url: "https://www.piclumen.com/",
  },
  {
    name: "Le Chat by Mistral",
    description:
      "Le Chat by Mistral AI is a cutting-edge AI chatbot that generates human-like responses, serving as a versatile work assistant for creative tasks, coding, and more.",
    category: "AI",
    image: "data/images/lechat.png",
    url: "https://chat.mistral.ai/chat",
  },
  {
    name: "Theres an Ai for That",
    description:
      "There's An AI For That is a platform that aggregates AI tools for various tasks, helping users find the right solution for their needs. It is widely used by people looking to leverage AI for content generation, data analysis, and more, with over 50 million visitors seeking appropriate tools for different use cases",
    category: "AI",
    image: "data/images/theresanaiforthat.png",
    url: "https://theresanaiforthat.com/",
  },
  {
    name: "Brad Fetch",
    description:
      "Brandfetch is a comprehensive platform serving as the internet's primary source for logos and brand assets, hosting over 22 million brands globally",
    category: "Directory",
    image: "data/images/brandfetch.png",
    url: "https://brandfetch.com/",
  },
  {
    name: "Grep by Vercel",
    description:
      "grep.app is a powerful code search engine that indexes over 500,000 GitHub repositories, enabling users to search for code snippets in multiple programming languages such as C, C++, PHP, GO, Python, and JavaScript. Acquired by Vercel, it is known for its speed and efficiency in searching through open-source projects",
    category: "AI",
    image: "data/images/grep.png",
    url: "https://grep.app/",
  },
];

export default data;
