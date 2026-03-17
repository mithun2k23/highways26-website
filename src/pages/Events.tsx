import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

interface POC {
    name: string;
    phone: string;
}

interface EventDetail {
    id: number;
    title: string;
    category: string;
    day: number;
    date: string;
    time: string;
    location: string;
    color: string;
    image: string;
    description: string;
    rules: string[];
    prizePool: string;
    regType: 'Free' | 'Standard' | 'Premium';
    regFee?: string;
    teamSize: 'Solo' | 'Group' | 'Solo/Group';
    pocs: POC[];
}

const allEvents: EventDetail[] = [
  {
    "id": 1,
    "title": "Shoot and Broadcast",
    "category": "Curtain Call",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:00 PM",
    "location": "MPH",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "description": "Showcase your stage presence and versatility in this live theater event. From expressive acting to powerful monologues, every performance counts.",
    "rules": [
      "Registration is mandatory via the Highways'26 app.",
      "Costumes and props must be arranged by the participants.",
      "Obscene language or inappropriate attire will lead to disqualification.",
      "Performances will be judged on stage presence, acting, and impact.",
      "Team Format: Solo/Group."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo/Group",
    "pocs": [
      {
        "name": "Siddarth",
        "phone": "+91 63821 54728"
      }
    ]
  },
  {
    "id": 2,
    "title": "Mime",
    "category": "Curtain Call",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "MPH",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Silent but powerful. Tell a compelling story without a single word. Focus on facial expressions, body language, and coordination with your team.",
    "rules": [
      "Maximum of 10 people per team.",
      "Duration: 5-8 minutes per performance.",
      "Background music is allowed; live musicians are not.",
      "No verbal sounds or use of props with writing allowed.",
      "Costumes and face paint should be appropriate to the theme."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Vaishnavi",
        "phone": "+91 97914 90151"
      }
    ]
  },
  {
    "id": 3,
    "title": "AdZap",
    "category": "Curtain Call",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB301 & CB302",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Think fast, act faster. Create a hilarious or hard-hitting advertisement for an unconventional product or scenario given on the spot.",
    "rules": [
      "Team Format: 4-6 members.",
      "Products/Scenarios will be assigned at the venue.",
      "Judging will be based on humor, creativity, and punchlines.",
      "Vulgarity will lead to immediate disqualification.",
      "Preparation time: 5 minutes; Presentation: 3 minutes."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Nidish",
        "phone": "+91 91763 35831"
      }
    ]
  },
  {
    "id": 4,
    "title": "Freeze Frame",
    "category": "Curtain Call",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "Block 3 Fully (Ground Floor)",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "A live mannequin challenge where stillness tells the story. Capture a dramatic moment in time through unwavering poses and expressions.",
    "rules": [
      "Team Format: 5 members.",
      "Maintain a static pose for the specified time (up to 3 mins).",
      "Judging based on expression, costume detail, and stillness.",
      "Thematic setups are encouraged.",
      "Any intentional movement leads to points deduction."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Shyam Prasad",
        "phone": "+91 80562 31227"
      }
    ]
  },
  {
    "id": 5,
    "title": "Yonko's Treasure Market",
    "category": "Reading Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:30 AM",
    "location": "Block 5 (Ground Floor Area)",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000",
    "description": "Embark on an epic quest in Yonko's Treasure Market! Solve intricate riddles and cryptic clues to find the hidden 'One Piece' treasure scattered across the venue.",
    "rules": [
      "Must decode multiple riddle levels to progress.",
      "Physical and mental challenges integrated at key points.",
      "The first team to recover the final treasure wins.",
      "Coordination and speed are crucial for victory.",
      "Team Format: Solo/Group."
    ],
    "prizePool": "TBA",
    "regType": "Standard",
    "regFee": "Rs. 30/-",
    "teamSize": "Solo/Group",
    "pocs": [
      {
        "name": "Akshaya G",
        "phone": "+91 80560 62650"
      }
    ]
  },
  {
    "id": 6,
    "title": "Sorting Hat Conspiracy",
    "category": "Reading Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:00 PM",
    "location": "CB301",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000",
    "description": "Enter the wizarding world for a high-intensity trivia challenge. Test your knowledge of magical lore and literature to claim the top spot in your house.",
    "rules": [
      "Multiple rounds of literature and movie trivia.",
      "Higher stakes points for obscure lore questions.",
      "Final showdown between the top house representatives.",
      "No magical assistance allowed (electronic devices).",
      "Team Format: Solo/Group."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo/Group",
    "pocs": [
      {
        "name": "Surya Prabha",
        "phone": "+91 91507 97531"
      }
    ]
  },
  {
    "id": 7,
    "title": "Trust the Process",
    "category": "EWB",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:30 AM",
    "location": "CB522",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "A team-based technical challenge testing communication, interpretation, and execution. Roles include describing, identifying, and technically replicating mystery objects.",
    "rules": [
      "Role 1: Describe a mystery object clearly without naming it.",
      "Role 2: Interpret the description and identify the object.",
      "Role 3: Replicate the object using CAD software or manual drawing.",
      "Judge Criteria: Clarity, teamwork, creativity, technical accuracy, and time management.",
      "Team Format: 2-3 members."
    ],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "Rs. 50/Person",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Gayathri",
        "phone": "8838060188"
      }
    ]
  },
  {
    "id": 8,
    "title": "Chaos Director",
    "category": "EWB",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:30 AM",
    "location": "CB304 & CB324",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "High-energy campus-wide visual storytelling. Crews race across checkpoints shooting scenes or performing tasks based on random movie genres assigned to them.",
    "rules": [
      "4 Production Checkpoints sequencially spread across the venue.",
      "Shoot scenes, perform tasks, or interact with strangers at each point.",
      "Return to HQ with compiled footage or photo evidence.",
      "Winners judged on completion time and creative execution.",
      "Registration is first-come, first-served (10–12 teams allowed)."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Mariam",
        "phone": "7305711022"
      }
    ]
  },
  {
    "id": 9,
    "title": "Deii... Avan Sethutan da.. (Who's the Sus?)",
    "category": "ISTD",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB515 & CB516",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "A crime has happened. Clues are scattered. Witnesses tell different stories. Will your team uncover the truth... or will the mystery remain unsolved? Step into this interactive crime investigation challenge.",
    "rules": [
      "Team Format: 5 members.",
      "Analyze scattered clues and witness testimonies.",
      "Question the evidence and connect the dots before time runs out."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Thamizh",
        "phone": "93425 97576"
      }
    ]
  },
  {
    "id": 10,
    "title": "Unaku Avlo Thaan Limit'uh (Money Moves)",
    "category": "ISTD",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "CB515 & CB516",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "You get a salary. You face rent, EMIs, and daily expenses. Can you survive the month without going broke? Join our interactive financial simulation and experience real-world money management.",
    "rules": [
      "Team Format: 5 members.",
      "Participate in an interactive financial simulation.",
      "Manage real-world expenses and survive the month."
    ],
    "prizePool": "Rs. 1,500/-",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Rasiga P",
        "phone": "95002 40988"
      }
    ]
  },
  {
    "id": 11,
    "title": "Scavenger Hunt",
    "category": "RRC",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "CB501, CB507 & CB508",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "A competitive event designed to test knowledge, teamwork, speed, and observation. Progresses from a fun quiz to a classroom hunt and an intense mystery-solving finale.",
    "rules": [
      "Round 1: Fun Quiz – Interactive movie/song guessing and trivia.",
      "Round 2: Color Chit Movie Hunt – Find real clues among 40 chits. Rule: Walk on benches only.",
      "Round 3: Crime Scene Connection – Connect setup clues to identify a hidden object.",
      "Touching the floor in Round 2 leads to disqualification.",
      "Fastest teams to connect clues correctly win."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Jegatheesh",
        "phone": "9042685575"
      }
    ]
  },
  {
    "id": 12,
    "title": "GEN-Z JUNK",
    "category": "RRC",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:00 PM",
    "location": "CB524 & CB525",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Turn emotional support junk into a masterpiece. From logic paradoxes to the ultimate scrap-build, it is time to turn 'delulu' into 'realulu'. Prove you have the creative vision.",
    "rules": [
      "Round 1: The Unsolved Frame – Solve 5 logic paradoxes and guess 3 movie props.",
      "Round 2: The Prop Hunter – List creative applications for random items every 60s.",
      "Round 3: The Ultimate Mystery Build – Build the most useful/funnier invention from scrap.",
      "Scoring: Round 3 judged on Stability (45%), Creativity (45%), and Presentation (10%).",
      "No instructions, no gatekeeping—just pure ingenuity."
    ],
    "prizePool": "Rs. 3.000/-",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Oviya",
        "phone": "6383672435"
      }
    ]
  },
  {
    "id": 13,
    "title": "Human Knot",
    "category": "RRC",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB501 & CB502",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "A time-based team event designed to test precision, coordination, communication, and trust through unique physical and mental challenges.",
    "rules": [
      "Round 1: Free the Teammate – Complete 3 tasks (Ping pong, Coin slide, Noise Cancel) to release a tied member.",
      "Round 2: Trust Build – A blindfolded member builds a 3-tier cup pyramid guided by non-verbal taps.",
      "The pyramid must stand independently for at least three seconds.",
      "Teams that complete structures in the least time win.",
      "Exactly 4 members required per team."
    ],
    "prizePool": "Rs. 3,500/-",
    "regType": "Standard",
    "regFee": "Rs. 200/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Sakthi Purushuthaman",
        "phone": "7305940418"
      }
    ]
  },
  {
    "id": 14,
    "title": "Channel Surfing",
    "category": "Speakers Forum",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:00 PM",
    "location": "CB321",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "Test your versatility and improvisational skills by playing different 'channels' in a live TV simulation. Each member must adapt to a variety of roles and scenarios on cue.",
    "rules": [
      "Team Format: Exactly 4 members.",
      "One member acts as the 'remote' to zap between channels.",
      "Roles must be switched immediately upon changing the channel.",
      "Judging based on creativity, humor, and adaptability.",
      "Obscene language leads to disqualification."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Shawn Abraham",
        "phone": "9345985157"
      }
    ]
  },
  {
    "id": 15,
    "title": "Survival of the Fittest",
    "category": "Speakers Forum",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "Library 3rd Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "The ultimate test of persuasion and quick thinking. In a high-stakes scenario, only the most convincing speaker will survive.",
    "rules": [
      "Round 1: Shipwreck – Convince the captain why you deserve the only life jacket.",
      "Round 2: Turncoat – Switch between 'for' and 'against' a topic on the judge's command.",
      "Judging based on argument strength, presence, and fluency.",
      "Exactly 4 members per team.",
      "Solo/Group entry determined by the captain's choice."
    ],
    "prizePool": "Rs. 5,000/-",
    "regType": "Premium",
    "regFee": "Rs. 100/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Shawn Abraham",
        "phone": "9345985157"
      }
    ]
  },
  {
    "id": 16,
    "title": "Movie Screening",
    "category": "Shortfilm",
    "day": 1,
    "date": "April 09, 2026", // Note: The description says Apr 09, 10, 11
    "time": "9:00 AM",
    "location": "Library Seminar Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "Experience the magic of cinema on the big screen with a collection of captivating short films. Immerse yourself in powerful storytelling and creative visuals.",
    "rules": [
      "Entry ticket is applicable.",
      "Sit back, relax, and enjoy the narratives crafted by talented filmmakers.",
      "Sparks imagination through every frame."
    ],
    "prizePool": "N/A",
    "regType": "Standard",
    "regFee": "Rs. 35/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Jayasuriya",
        "phone": "8778994503"
      },
      {
        "name": "Sanjay Joshua",
        "phone": "7305764336"
      },
      {
        "name": "Shamritha",
        "phone": "98840 36973"
      }
    ]
  },
  {
    "id": 17,
    "title": "CineQuest",
    "category": "Shortfilm",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB521",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "A fast-paced cinematic challenge for movie buffs. Decode visual puzzles, identify soundtracks, and guess famous scenes from minimal clues.",
    "rules": [
      "Round 1: Puzzle Quiz – Identify movies from mixed visual puzzles.",
      "Round 2: BGM / Dialogue Guess – Recognize movie background music or dialogues.",
      "Round 3: Konjam Nadinga Boss – Recreate movie scenes by acting them out."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Vijayasarathy B",
        "phone": "8925310269"
      },
      {
        "name": "Sanchitha",
        "phone": "9787876126"
      }
    ]
  },
  {
    "id": 18,
    "title": "Short Film Contest",
    "category": "Shortfilm",
    "day": 3,
    "date": "April 11, 2026",
    "time": "1:00 PM",
    "location": "Library Seminar Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "Showcase your creativity and storytelling skills by creating a short film on an innovative theme. Let your unique vision come alive on screen.",
    "rules": [
      "Submit short films on innovative themes.",
      "Judged on creativity, storytelling, and unique vision.",
      "Showcase your technical filmmaking skills."
    ],
    "prizePool": "Rs. 10,000/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Sai Krishna",
        "phone": "7397365289"
      }
    ]
  },
  {
    "id": 19,
    "title": "Maathi Yosi",
    "category": "Tamil Mandram",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "CB505",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "A fun and interactive event designed to test quick thinking and creativity. Participants must challenge their brains with irrelevant answers and rapid role-switching.",
    "rules": [
      "Round 1: Irrelevant Answer Challenge – Participants must give unrelated answers to questions for 1 minute.",
      "Round 2: Support and Oppose – One supports and one opposes a topic; roles switch instantly on command.",
      "Team Format: 2 members.",
      "Quick thinking and creative improvisation are essential."
    ],
    "prizePool": "Rs. 1,500/-",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Dharsan P",
        "phone": "7358656668"
      }
    ]
  },
  {
    "id": 20,
    "title": "Thirai Suzhal",
    "category": "Tamil Mandram",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB511",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "An entertaining cinema and literature event testing acting skills, teamwork, and quick thinking across television-style segments.",
    "rules": [
      "Round 1: Dumb Charades – Act out Tamil literature or movie titles without speaking.",
      "Round 2: Scene Recreation with Emotion Twist – Switch genres and styles instantly like a TV remote.",
      "Team Format: 4 members.",
      "Judged on creativity, acting accuracy, and reaction speed."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Subash Chandra Bose",
        "phone": "8940454275"
      }
    ]
  },
  {
    "id": 21,
    "title": "Olunga paadu illana spray adichiruven",
    "category": "Tamil Mandram",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB505",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "A music-based event challenging song knowledge and recall. Failure to sing the correct lyrics results in the 'spray penalty'.",
    "rules": [
      "Round 1: Identify one missing word from a song line.",
      "Round 2: Identify two missing words from a song line.",
      "Round 3: Sing a completely missing line from a song.",
      "Team Format: 3 members. Each round must be played by a different member.",
      "Incorrect answers result in the spray penalty."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Ramkishore",
        "phone": "9566952026"
      }
    ]
  },
  {
    "id": 22,
    "title": "EPL - Entrepreneurship Pitching League",
    "category": "ECell",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "Biotech Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Where innovation and competition collide! Challenge your knowledge of the startup ecosystem, quick thinking, and persuasive pitching abilities across three engaging rounds.",
    "rules": [
      "Round 1: Startup ecosystem knowledge test.",
      "Round 2: Quick thinking and situational entrepreneurial response.",
      "Round 3: Persuasive pitching challenge.",
      "Judged on strategic thinking and presentation impact."
    ],
    "prizePool": "Rs. 4,500/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Dimple",
        "phone": "99516 61000"
      }
    ]
  },
  {
    "id": 23,
    "title": "Disasterpreneur",
    "category": "ECell",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "CB302",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Transform an ordinary or useless object into a viral, high-demand brand. It tests marketing intelligence, creativity, storytelling, and stage presence.",
    "rules": [
      "Round 1: Sell the Unsellable – Market a useless object as a ₹1 crore product in 60s.",
      "Round 2: Brand Creation – Pitch a complete brand concept (Name, Tagline, Story, Ad).",
      "Round 3: Go Viral – Create and perform a 30-second reel script live.",
      "Winners decided via audience engagement and voting QR polls.",
      "Team Format: 1-3 members."
    ],
    "prizePool": "Rs. 1000/-",
    "regType": "Standard",
    "regFee": "TBA",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Sudish M",
        "phone": "9150195835"
      }
    ]
  },
  {
    "id": 24,
    "title": "Startup War Room",
    "category": "ECell",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "CB507",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Live startup simulation where teams build, defend, pivot, and negotiate under pressure. Experience market disruptions and hostile VC negotiations.",
    "rules": [
      "Round 1: Idea Sprint – Create a startup using sector/constraint cards.",
      "Round 2: Market Attack – Respond to live business crises introduced by judges.",
      "Round 3: Investor Negotiation – Negotiate valuation/equity with simulated hostile VCs.",
      "Team Format: 2-4 members.",
      "Judged on strategic thinking, crisis management, and negotiation skills."
    ],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "TBA",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Abijith P",
        "phone": "63749 97429"
      }
    ]
  },
  {
    "id": 25,
    "title": "Shot on Highways",
    "category": "Photo Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "Whole Campus",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    "description": "A dynamic photography challenge where participants capture the vibrant energy and essence of the 'Highways' event through their lenses.",
    "rules": [
      "Registration is mandatory via the Highways'26 app.",
      "Entries must be captured during the event hours specifically.",
      "Editing is limited to basic color correction only.",
      "Photos must be submitted in the specified digital format.",
      "Decision of the judging panel will be final and binding."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Nithish",
        "phone": "+91 63747 48259"
      }
    ]
  },
  {
    "id": 26,
    "title": "Frame by words",
    "category": "Photo Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB301",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
    "description": "Test your photographic interpretation and storytelling. Participants are given a specific word or phrase and must capture an image that best represents it.",
    "rules": [
      "A specific word will be revealed at the venue.",
      "Participants have a fixed time to capture and submit one photo.",
      "Creativity and relevance to the prompt are key judging criteria.",
      "Only mobile photography or DSLR (without external lighting) allowed.",
      "Judges' decision is final."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Deepakraja",
        "phone": "+91 82485 53343"
      }
    ]
  },
  {
    "id": 27,
    "title": "Otakumania",
    "category": "Science Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "10:00 AM",
    "location": "Block 3 (2nd Floor Fully)",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "A dungeons and dragons based event where duos compete through a dungeon adventure filled with anime questions, card battles (HP/Pet/Power cards), and strategic gameplay.",
    "rules": [
      "Buy 5 cards: Character, Attack, Defence, Pet, and Power cards.",
      "Answering correctly grants movement across dungeon tiles/doors.",
      "Team paths intersect at battle points. Each team has 200 HP.",
      "Dungeon structure: Earth -> Mystic -> God's Dungeon (Final).",
      "Treasure chests contain cards, level-ups, or teleport keys."
    ],
    "prizePool": "Rs. 1,500/-",
    "regType": "Standard",
    "regFee": "TBA",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Nandhakumaran",
        "phone": "9344458074"
      }
    ]
  },
  {
    "id": 28,
    "title": "Greenscreen",
    "category": "Science Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB322",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "One member is blindfolded while a muted video plays behind them. Teammates must provide verbal clues (without naming characters/movies) to help them guess correctly.",
    "rules": [
      "Muted video features popular movie/series dialogues.",
      "Teammates provide clues; no direct names or titles allowed.",
      "Judged on creative expression and deductive teamwork.",
      "Vulgarity or inappropriate language leads to disqualification.",
      "Team Format: 3 members."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Mohammed Faraaz",
        "phone": "9445933053"
      }
    ]
  },
  {
    "id": 29,
    "title": "Power Play Arena",
    "category": "Science Club",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB313 & CB314",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Multi-round team competition where groups begin with tokens and grow their count through mini-games, strategy cards, and tactical bidding twists.",
    "rules": [
      "Challenges: Skill, speed, memory, puzzles, and strategy rounds.",
      "Grow token counts; top teams advance to high-stakes final.",
      "Bidding battles, auctions, and code-breaking twists included.",
      "Highest token count at the end determines the winner.",
      "Team Format: 3 members."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Neha Ramganesh",
        "phone": "98840 44954"
      }
    ]
  },
  {
    "id": 30,
    "title": "Tellus Abyss",
    "category": "Care",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "Biotech Seminar Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Environmental gladiatorial debate where participants represent nature-based species and argue for survival before 'Tellus', the Goddess of Earth.",
    "rules": [
      "Assigned nature-based characters must defend their ecological importance.",
      "Persuade the judge why your species deserves to survive over others.",
      "Round 1: Survival arguments; Round 2: Final defense.",
      "Judged on Knowledge, creativity, argument strength, and presentation.",
      "Team Format: Solo."
    ],
    "prizePool": "₹2,000/-",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Swetha",
        "phone": "7339335632"
      }
    ]
  },
  {
    "id": 31,
    "title": "Token Takeover",
    "category": "Care",
    "day": 3,
    "date": "April 11, 2026",
    "time": "9:00 AM",
    "location": "CB526, CB527 & CB528",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "An interactive arena event where participants spend and earn tokens through challenge stations. Compete for the highest token count on the leaderboard.",
    "rules": [
      "Use fixed initial tokens to attempt challenge stations.",
      "Stations include skill-based tasks, puzzles, and luck-based games.",
      "Successful completion rewards more tokens.",
      "Stations can be attempted multiple times if tokens are available.",
      "Live leaderboard tracks the highest scorers."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo/Group",
    "pocs": [
      {
        "name": "Nityaa",
        "phone": "93459 34690"
      }
    ]
  },
  {
    "id": 32,
    "title": "Survival Showdown (BGMI)",
    "category": "Care",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:00 AM",
    "location": "CB526",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "BGMI Battle Royale competition. Teams compete in custom room matches on Erangel to earn placement and elimination points.",
    "rules": [
      "Qualifiers divide teams into custom room matches.",
      "Point system based on placement and total eliminations/kills.",
      "Grand Finals combine points from multiple matches to find the champion.",
      "Mode: Squad (4 Players) on Erangel map.",
      "Fair play: Hacks or exploits result in immediate disqualification."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 100/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Hariram Bharathwaj",
        "phone": "9840429372"
      }
    ]
  },
  {
    "id": 33,
    "title": "Saregama",
    "category": "Rotaract",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:30 PM",
    "location": "OAT",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "An interactive, competitive musical quiz that tests your knowledge of songs, lyrics, and artists through engaging rounds.",
    "rules": [
      "Team Format: 2 members.",
      "Identified songs from snippets, instruments, or emojis.",
      "Complete the lyrics or guess the movie from a hummed tune.",
      "Final round involves rapid questions on musical legends.",
      "Obscene behavior leads to immediate disqualification."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Standard",
    "regFee": "Rs. 100/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Manoj M",
        "phone": "6380693806"
      }
    ]
  },
  {
    "id": 34,
    "title": "The Royal Gambit",
    "category": "Rotaract",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "Main Road Area",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "A grand live human chess tournament accompanied by a series of mini-games and challenges. Participants act as the pieces on a giant board in a strategic showdown.",
    "rules": [
      "Standard chess rules apply with human movement.",
      "Each 'capture' requires a mini-challenge win to confirm.",
      "Limited time per move to maintain pace.",
      "Teams can bring their own 'cheer' squads within limits.",
      "Strategic thinking and physical coordination are key."
    ],
    "prizePool": "Rs. 4,500/-",
    "regType": "Standard",
    "regFee": "Rs. 150/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Manoj M",
        "phone": "6380693806"
      }
    ]
  },
  {
    "id": 35,
    "title": "Overdrive (Battle of Bands)",
    "category": "Music Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "9:30 AM",
    "location": "MPH",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "description": "The stage is set, the amps are cranked, and the spotlight is waiting. This is more than a performance; it's a high-voltage war of melodies and metaphors. Bring your best originals or redefine the classics.",
    "rules": [
      "Participants must present a valid college ID card for eligibility.",
      "This is a single-round event; winners will be determined based on this performance.",
      "Each band must consist of 4 to 8 members.",
      "Total stage time is 15 minutes, including setup and sound check.",
      "Bands must provide their own instruments, with the exception of the drum kit.",
      "Performances may feature any genre, language, original compositions, or covers.",
      "Obscene language and inappropriate stage conduct are strictly forbidden.",
      "All decisions rendered by the judges and organizers are final and binding."
    ],
    "prizePool": "Rs. 10,000/-",
    "regType": "Premium",
    "regFee": "Rs. 800/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Parkavi V",
        "phone": "+919445717013"
      },
      {
        "name": "Dhanesh",
        "phone": "+91 63694 54641"
      }
    ]
  },
  {
    "id": 36,
    "title": "Crescendo (Solo Singing)",
    "category": "Music Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "1:30 PM",
    "location": "Library Seminar Hall",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "description": "Stripped back and unplugged, this is where pure talent meets raw emotion. No backup dancers, no distractions—just one voice and one microphone.",
    "rules": [
      "Participants must present a valid college ID card for eligibility.",
      "This is a single-round event; winners will be determined based on this solo performance.",
      "Total stage time is limited to 5 minutes, including setup and sound check.",
      "Use of instruments and metronomes is strictly prohibited.",
      "Karaoke, backing tracks or tanpura are permitted for accompaniment.",
      "Performances may feature any genre or language, with a preference for original compositions.",
      "Obscene language and inappropriate stage conduct are strictly forbidden.",
      "All decisions rendered by the judges and organizers are final and binding."
    ],
    "prizePool": "Rs. 6,000/-",
    "regType": "Premium",
    "regFee": "Rs. 200/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Kaustubh",
        "phone": "+919380001223"
      },
      {
        "name": "Sakthi Rasagnya",
        "phone": "+91 90006 96900"
      }
    ]
  },
  {
    "id": 37,
    "title": "Solography",
    "category": "Dance Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "MPH",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Individual dance competition where participants take complete ownership of the stage. Highlights creativity, technique, expression, and musicality.",
    "rules": [
      "Time Limit: 90s (Min) to 2m 30s (Max).",
      "All dance styles are allowed (Classical, Hip-hop, Contemporary, etc.).",
      "Vulgarity in movements, gestures, or music is strictly prohibited.",
      "Costumes must be decent; inappropriate attire leads to disqualification.",
      "Audio tracks must be submitted in advance in MP3 format.",
      "Judges' decision will be final."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Thanushka",
        "phone": "7395973335"
      }
    ]
  },
  {
    "id": 38,
    "title": "Groove Chemistry",
    "category": "Dance Club",
    "day": 2,
    "date": "April 10, 2026",
    "time": "9:00 AM",
    "location": "MPH",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Two-round dance challenge testing recognition of iconic hooksteps and the ability to adapt instantly to changing music segments.",
    "rules": [
      "Round 1: Hookstep Challenge – Perform signature moves for played songs.",
      "Round 2: Adaptune – Instantly adjust style to music switching every few seconds.",
      "Solo participation only. Time limit: 90s to 3m.",
      "All dance styles allowed. Judged on adaptability and execution.",
      "Vulgarity is strictly prohibited. Costumes must be decent.",
      "Judges' decision is final."
    ],
    "prizePool": "Rs. 4,000/-",
    "regType": "Premium",
    "regFee": "Rs. 150/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Kheerthi",
        "phone": "99403 18111"
      }
    ]
  },
  {
    "id": 39,
    "title": "Groovanza",
    "category": "Dance Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:00 PM",
    "location": "MPH",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Group dance competition focusing on coordination, teamwork, and synchronized creative expression as one unified unit.",
    "rules": [
      "Time Limit: 3m (Min) to 5m (Max).",
      "Team Requirement: 5 to 25 participants.",
      "All dance styles allowed (Classical, Hip-hop, Cinematic, etc.).",
      "Vulgarity in movements or music is strictly prohibited.",
      "Costumes must be decent; inappropriate attire leads to disqualification.",
      "Audio tracks must be submitted in advance in MP3 format.",
      "Judges' decision will be final and binding."
    ],
    "prizePool": "Rs. 12,000/-",
    "regType": "Premium",
    "regFee": "Rs. 1,000/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Abinav",
        "phone": "7338755434"
      },
      {
        "name": "Thanushka",
        "phone": "7395973335"
      }
    ]
  },
  {
    "id": 40,
    "title": "Pairfect",
    "category": "Dance Club",
    "day": 1,
    "date": "April 09, 2026",
    "time": "1:00 PM",
    "location": "MPH",
    "color": "#f8f8ff",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Dance competition performed by pairs, focusing on chemistry, synchronization, and creative connection between partners.",
    "rules": [
      "Time Limit: 2m (Min) to 4m (Max).",
      "Team Requirement: Exactly two participants.",
      "All dance styles allowed. Judged on synchronization and stage presence.",
      "Vulgarity is strictly prohibited. Costumes must be decent.",
      "Audio tracks must be submitted in advance in MP3 format.",
      "Judges' decision will be final."
    ],
    "prizePool": "Rs. 6,000/-",
    "regType": "Premium",
    "regFee": "Rs. 400/-",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Mridula",
        "phone": "86678 63040"
      },
      {
        "name": "Nivethetha",
        "phone": "7395973335"
      }
    ]
  },
  {
    "id": 41,
    "title": "UNIVIA",
    "category": "Youth Red Cross",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "Campus Venue",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "A three-round challenge mix of physical and mental agility by the Youth Red Cross.",
    "rules": [
      "Team Format: 4 members.",
      "Round 1: UNO Frenzy - UNO game with special challenge cards.",
      "Round 2: Drama & Deception - Mix of dumb charades and myth-busting.",
      "Round 3: Challenge Chase - Relay-style task completion race."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "YRC Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 42,
    "title": "Mr & Ms. Highways",
    "category": "Speakers Forum",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "OAT",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "The ultimate personality contest to find the faces of Highways'26 - celebrating charisma, talent, and intelligence.",
    "rules": [
      "Round 1: Introduction and Talent Round.",
      "Round 2: Situation Handling / Q&A Round.",
      "Judged on confidence, communication, and overall personality.",
      "Final titles: Mr. Highways and Ms. Highways.",
      "Solo participation only."
    ],
    "prizePool": "Rs. 10,000/-",
    "regType": "Premium",
    "regFee": "Rs. 200/-",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Shawn Abraham",
        "phone": "9345985157"
      }
    ]
  }
];

const categoriesList = ["All","Curtain Call","Reading Club","EWB","ISTD","RRC","Speakers Forum","Shortfilm","Tamil Mandram","ECell","Photo Club","Science Club","Care","Rotaract","Music Club","Dance Club","Youth Red Cross"];
const dayThemes = [
    {
        id: 1,
        name: "IGNITION",
        label: "THE SPARK",
        color: "#ffb7c5",
        kanji: "始",
        bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
        tagline: "WHERE THE ROAD BEGINS",
        style: "cybernetic",
        displayFont: '"Orbitron", sans-serif',
        bodyFont: '"Rajdhani", sans-serif',
        buttonText: "#1c0f14"
    },
    {
        id: 2,
        name: "OVERDRIVE",
        label: "THE VELOCITY",
        color: "#f8f8ff",
        kanji: "速",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        tagline: "RIDING THE LIGHTNING",
        style: "cybernetic",
        displayFont: '"Orbitron", sans-serif',
        bodyFont: '"Rajdhani", sans-serif',
        buttonText: "#1c0f14"
    },
    {
        id: 3,
        name: "DESTINY",
        label: "THE LEGEND",
        color: "#ff0000",
        kanji: "終",
        bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
        tagline: "BEYOND THE HORIZON",
        style: "cybernetic",
        displayFont: '"Orbitron", sans-serif',
        bodyFont: '"Rajdhani", sans-serif',
        buttonText: "#ffffff"
    }
];

const EventModal = ({ event, isOpen, onClose, activeTheme }: { event: EventDetail | null, isOpen: boolean, onClose: () => void, activeTheme: (typeof dayThemes)[number] }) => {
    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay" style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(15px)' }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="event-modal-container"
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '1000px',
                            maxHeight: '90vh',
                            background: '#0a0a0a',
                            borderRadius: '40px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'row',
                            border: `1px solid ${activeTheme.color}33`,
                            boxShadow: `0 30px 100px -20px rgba(0,0,0,1), 0 0 50px ${activeTheme.color}11`,
                            fontFamily: activeTheme.bodyFont
                        }}
                    >
                        {/* Premium Close Button */}
                        <motion.button
                            onClick={onClose}
                          whileHover={{ scale: 1.08, backgroundColor: activeTheme.color, color: activeTheme.buttonText }}
                            whileTap={{ scale: 0.9 }}
                          aria-label="Close event details"
                            style={{
                                position: 'absolute',
                                top: '25px',
                                right: '25px',
                            background: 'rgba(0,0,0,0.72)',
                            border: `1px solid ${activeTheme.color}66`,
                            color: activeTheme.color,
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10000,
                                backdropFilter: 'blur(10px)',
                            boxShadow: `0 10px 20px rgba(0,0,0,0.5), 0 0 16px ${activeTheme.color}33`,
                            fontSize: '2rem',
                            fontWeight: 800,
                            lineHeight: 1,
                            fontFamily: activeTheme.displayFont,
                            textShadow: '0 1px 2px rgba(0,0,0,0.6)'
                            }}
                        >
                          <span aria-hidden="true">×</span>
                        </motion.button>

                        {/* Left Side: Image */}
                        <div className="event-modal-image-panel" style={{ width: '40%', position: 'relative', overflow: 'hidden' }}>
                            <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="modal-gradient-overlay" style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, transparent, #0a0a0a)` }} />
                            <div style={{ position: 'absolute', top: '30px', left: '30px', zIndex: 10 }}>
                                <span style={{ background: 'rgba(0,0,0,0.8)', padding: '8px 20px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 900, color: activeTheme.color }}>CHAPTER 0{event.day}</span>
                            </div>
                        </div>

                        {/* Right Side: Details */}
                        <div className="event-modal-content-panel modal-scroll-area" style={{ width: '60%', padding: '4rem', overflowY: 'auto', position: 'relative' }}>
                            <span style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '5px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>{event.category}</span>
                            <h2 style={{ fontSize: '3.5rem', fontWeight: 950, margin: '1rem 0', color: 'white', lineHeight: 0.9, fontFamily: activeTheme.displayFont }}>{event.title}</h2>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '2rem 0', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Venue</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.location}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Time & Date</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.time} | {event.date}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Registration</p>
                                    <p style={{ color: event.regType === 'Free' ? '#4ade80' : activeTheme.color, fontWeight: 700 }}>{event.regType} {event.regFee && `(${event.regFee})`}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', fontWeight: 900, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Team Format</p>
                                    <p style={{ color: 'white', fontWeight: 700 }}>{event.teamSize}</p>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>DESCRIPTION</h4>
                                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{event.description}</p>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>RULES & GUIDELINES</h4>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    {event.rules.map((rule, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                                            <span style={{ color: activeTheme.color }}>0{i + 1}</span> {rule}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {event.regType !== 'Free' && (
                                <div style={{ marginBottom: '3rem', background: `linear-gradient(45deg, ${activeTheme.color}22, transparent)`, padding: '2rem', borderRadius: '24px', borderLeft: `4px solid ${activeTheme.color}` }}>
                                    <h4 style={{ color: 'white', fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '0.5rem' }}>TOTAL PRIZE POOL</h4>
                                    <p style={{ fontSize: '2.5rem', fontWeight: 950, color: 'white' }}>{event.prizePool}</p>
                                </div>
                            )}

                            <div style={{ marginBottom: '3rem' }}>
                                <h4 style={{ color: activeTheme.color, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '2px', marginBottom: '1rem', fontFamily: activeTheme.displayFont }}>CONTACT ORGANIZERS</h4>
                                <div style={{ display: 'flex', gap: '3rem' }}>
                                    {event.pocs.map((poc, i) => (
                                        <div key={i}>
                                            <p style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>{poc.name}</p>
                                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{poc.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: activeTheme.color, color: activeTheme.buttonText }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    width: '100%',
                                    background: activeTheme.color,
                                    color: activeTheme.buttonText,
                                    border: 'none',
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    fontWeight: 950,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '4px',
                                  textTransform: 'uppercase',
                                  fontFamily: activeTheme.displayFont
                                }}
                            >
                                PROCEED TO REGISTER
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const BackgroundElements = ({ themeColor, activeKanji, dayId }: { themeColor: string, activeKanji: string, dayId: number }) => {
    const activeDayTheme = dayThemes.find(t => t.id === dayId) || dayThemes[0];

    return (
        <div className="background-decorations" style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={dayId}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${activeDayTheme.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'grayscale(1) brightness(0.08) contrast(1.1)',
                        opacity: 0.2
                    }}
                />
            </AnimatePresence>

            {/* Chapter Specific Overlay Layers */}
            <AnimatePresence mode="wait">
                {dayId === 1 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 10% 10%, rgba(255,183,197,0.05) 0%, transparent 50%)' }}
                    />
                )}
                {dayId === 2 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="cyber-grid"
                        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,210,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
                    />
                )}
                {dayId === 3 && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at bottom, rgba(255,0,0,0.1) 0%, transparent 70%)' }}
                    />
                )}
            </AnimatePresence>

            <motion.div animate={{ x: [0, 80, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '5%', right: '5%', width: '500px', height: '500px', background: `radial-gradient(circle, ${themeColor}22 0%, transparent 70%)`, filter: 'blur(100px)' }} />

            <motion.div key={activeKanji} initial={{ opacity: 0, scale: 0.8, x: -100 }} animate={{ opacity: 0.05, scale: 1, x: 0 }} transition={{ duration: 2 }}
                style={{ position: 'absolute', top: '15%', left: '5%', fontSize: '25rem', fontWeight: 900, color: 'white', fontFamily: '"Noto Sans JP", sans-serif' }}>
                {activeKanji}
            </motion.div>

            <div className="grid-overlay" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>
    );
};

const Events = () => {
    const isLocked = false;
    const [filter, setFilter] = useState({ category: "All", day: 1 });
    const { scrollY } = useScroll();
    const yHero = useTransform(scrollY, [0, 500], [0, -120]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const springX = useSpring(0, { stiffness: 100, damping: 30 });
    const springY = useSpring(0, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            springX.set(e.clientX - 400);
            springY.set(e.clientY - 400);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [springX, springY]);

    const activeTheme = useMemo(() => {
        return dayThemes.find(t => t.id === filter.day) || dayThemes[0];
    }, [filter.day]);

    const filteredEvents = useMemo(() => {
        return allEvents.filter(event => {
            const categoryMatch = filter.category === "All" || event.category === filter.category;
            const dayMatch = filter.day === 0 || event.day === filter.day;
            return categoryMatch && dayMatch;
        });
    }, [filter]);

    const handleOpenModal = (event: EventDetail) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <section className={`events-cinematic-page style-${activeTheme.style}`} style={{
            paddingTop: '180px',
            minHeight: '100vh',
            paddingBottom: '150px',
            background: filter.day === 3 ? '#080000' : (filter.day === 2 ? '#000810' : '#030303'),
            position: 'relative',
            overflow: 'hidden',
        fontFamily: activeTheme.bodyFont,
        }}>
            <BackgroundElements themeColor={activeTheme.color} activeKanji={activeTheme.kanji} dayId={filter.day} />

            <motion.div style={{ position: 'fixed', width: '800px', height: '800px', background: `radial-gradient(circle, ${activeTheme.color}10 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none', zIndex: 0, filter: 'blur(60px)', x: springX, y: springY }} />

            <div className="container">
                <motion.div className="events-header-premium" style={{ textAlign: 'center', marginBottom: '8rem', position: 'relative', y: yHero, opacity: opacityHero }}>
                    <AnimatePresence mode="wait">
                        <motion.div key={filter.day} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
                            <span style={{ color: activeTheme.color, fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '1rem', letterSpacing: '8px' }}>{activeTheme.tagline}</span>
                            <h1 style={{
                                fontSize: 'clamp(5rem, 15vw, 10rem)',
                                fontWeight: 950,
                                textTransform: 'uppercase',
                                letterSpacing: filter.day === 1 ? '10px' : (filter.day === 3 ? '-8px' : '-4px'),
                                lineHeight: 0.8,
                              transition: 'all 1s ease',
                              fontFamily: activeTheme.displayFont
                            }}>
                                EVENT <span style={{ color: activeTheme.color, transition: 'all 1s ease' }}>SAGA</span>
                            </h1>
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ position: 'absolute', width: '200%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
                        <span style={{ fontSize: '20vw', fontWeight: 950, color: 'transparent', WebkitTextStroke: `2px ${activeTheme.color}`, opacity: 0.3, transition: 'all 1.5s ease' }}>{activeTheme.name}</span>
                    </div>
                </motion.div>

                {/* Day Chapters */}
                <div className="day-navigator" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '6rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
                    {dayThemes.map((day) => (
                        <motion.button key={day.id} onClick={() => setFilter(prev => ({ ...prev, day: day.id }))} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}
                            style={{
                                background: filter.day === day.id ? day.color : 'rgba(255,255,255,0.02)',
                              color: filter.day === day.id ? day.buttonText : 'rgba(255,255,255,0.55)',
                                border: `1px solid ${filter.day === day.id ? day.color : 'rgba(255,255,255,0.05)'}`,
                              padding: '1.5rem 2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '220px', cursor: 'pointer', transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)', backdropFilter: 'blur(20px)', boxShadow: filter.day === day.id ? `0 20px 40px ${day.color}44` : 'none', fontFamily: day.displayFont
                            }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: 900, letterSpacing: '3px', opacity: 0.6, marginBottom: '0.4rem' }}>{day.label}</span>
                            <span style={{ fontSize: '1.4rem', fontWeight: 950 }}>{day.name}</span>
                        </motion.button>
                    ))}
                </div>

                <div style={{ position: 'relative' }}>
                    {isLocked && (
                        <div style={{
                            position: 'relative',
                            zIndex: 500,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(60px) saturate(1.5)',
                            textAlign: 'center',
                            padding: '10rem 2.5rem',
                            borderRadius: '80px',
                            minHeight: '800px',
                            border: '1px solid rgba(255,255,255,0.03)',
                            overflow: 'hidden',
                            boxShadow: `0 0 100px ${activeTheme.color}11`
                        }}>
                            {/* Dramatic Symbolic Lock - No Text UI */}
                            <div style={{ position: 'relative', width: '300px', height: '300px', perspective: '1000px' }}>
                                {/* Outer Rotating Rings */}
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: 0, border: `2px solid ${activeTheme.color}22`, borderRadius: '50%', borderTopColor: activeTheme.color, filter: 'blur(1px)' }} />
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', inset: '20px', border: `1px dashed ${activeTheme.color}33`, borderRadius: '50%', filter: 'blur(2px)' }} />
                                
                                {/* Inner Orbitals */}
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ 
                                            rotateX: [0, 360],
                                            rotateY: [0, 360],
                                            scale: [1, 1.2, 1]
                                        }}
                                        transition={{ 
                                            duration: 10 + i * 5, 
                                            repeat: Infinity, 
                                            ease: "easeInOut" 
                                        }}
                                        style={{
                                            position: 'absolute',
                                            inset: '60px',
                                            border: `1px solid ${activeTheme.color}44`,
                                            borderRadius: '50%',
                                            opacity: 0.3
                                        }}
                                    />
                                ))}

                                {/* The Core Singularity */}
                                <div style={{ position: 'absolute', inset: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.4, 0.8, 0.4],
                                            filter: [`blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`, `blur(15px) drop-shadow(0 0 50px ${activeTheme.color})`, `blur(10px) drop-shadow(0 0 20px ${activeTheme.color})`]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            background: activeTheme.color,
                                            borderRadius: '50%',
                                            zIndex: 2
                                        }}
                                    />
                                    {/* Glitch Overlay Over Core */}
                                    <motion.div
                                        animate={{ 
                                            opacity: [0, 0.2, 0, 0.4, 0],
                                            x: [-5, 5, -5, 10, -10, 0],
                                            scaleX: [1, 2, 0.5, 1.5, 1]
                                        }}
                                        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
                                        style={{ position: 'absolute', width: '150px', height: '2px', background: 'white', filter: 'blur(10px)', zIndex: 3 }}
                                    />
                                </div>
                            </div>

                            {/* Minimal Symbolic Footer */}
                            <div style={{ marginTop: '5rem', display: 'flex', gap: '3rem', opacity: 0.3 }}>
                                <i className="fas fa-barcode" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                                <i className="fas fa-microchip" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                                <div style={{ height: '40px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                                <i className="fas fa-fingerprint" style={{ fontSize: '2rem', color: activeTheme.color }}></i>
                            </div>

                            {/* Scanning Glitch Effect */}
                            <motion.div 
                                animate={{ top: ['-10%', '110%'] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    height: '300px',
                                    background: `linear-gradient(transparent, ${activeTheme.color}05, transparent)`,
                                    pointerEvents: 'none',
                                    zIndex: 1
                                }}
                            />
                        </div>
                    )}

                    <div style={{ opacity: isLocked ? 0 : 1, pointerEvents: isLocked ? 'none' : 'auto', visibility: isLocked ? 'hidden' : 'visible', height: isLocked ? '600px' : 'auto', overflow: 'hidden' }}>

                <div className="classification-carousel" style={{ marginBottom: '8rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none' }}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', minWidth: 'max-content', padding: '0 2rem' }}>
                        {categoriesList.map(c => (
                            <motion.button key={c} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setFilter(prev => ({ ...prev, category: c }))}
                                style={{
                                  background: filter.category === c ? `${activeTheme.color}` : 'rgba(255,255,255,0.03)',
                                  color: filter.category === c ? activeTheme.buttonText : 'rgba(255,255,255,0.72)',
                                  border: `1px solid ${filter.category === c ? activeTheme.color : 'rgba(255,255,255,0.1)'}`,
                                  padding: '0.8rem 2.5rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: 'all 0.4s ease', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont
                                }}>{c}</motion.button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="events-grid-system" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.div layout key={event.id} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, margin: "-20px" }} transition={{ duration: 0.6, delay: (index % 4) * 0.1 }} className="event-premium-card"
                                style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '30px', overflow: 'hidden', position: 'relative', height: '480px', display: 'flex', flexDirection: 'column', border: `1px solid ${activeTheme.color}2f`, backdropFilter: 'blur(20px)' }}>
                                <div className="card-visual-header" style={{ height: '55%', position: 'relative', overflow: 'hidden' }}>
                                    <motion.img whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }} src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                                        <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', padding: '5px 15px', borderRadius: '100px', fontSize: '0.6rem', fontWeight: 950, color: activeTheme.color, border: `1px solid ${activeTheme.color}44` }}>CH 0{event.day}</div>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 10%, transparent 100%)' }} />
                                </div>
                                <div className="card-content-body" style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.4rem' }}>
                                            <span style={{ color: activeTheme.color, fontSize: '0.65rem', fontWeight: 950, letterSpacing: '4px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>{event.category}</span>
                                            <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${activeTheme.color}55, transparent)` }} />
                                        </div>
                                          <h3 style={{ fontSize: '1.6rem', fontWeight: 950, margin: '0.3rem 0 1rem', color: 'white', lineHeight: 1.1, fontFamily: activeTheme.displayFont }}>{event.title}</h3>
                                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.78)', fontSize: '0.8rem', fontWeight: 700 }}>
                                            <span><i className="far fa-clock" style={{ color: activeTheme.color }}></i> {event.time}</span>
                                            <span><i className="fas fa-map-marker-alt" style={{ color: activeTheme.color }}></i> {event.location}</span>
                                        </div>
                                    </div>
                                        <motion.button onClick={() => handleOpenModal(event)} whileHover={{ scale: 1.02, backgroundColor: activeTheme.color, color: activeTheme.buttonText }} whileTap={{ scale: 0.98 }}
                                          style={{ background: 'rgba(255,255,255,0.03)', color: 'white', border: `1px solid ${activeTheme.color}66`, padding: '1rem', borderRadius: '15px', fontWeight: 950, fontSize: '0.75rem', marginTop: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: activeTheme.displayFont }}>
                                        VIEW DETAILS
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                    </div>
                </div>
            </div>

            <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} activeTheme={activeTheme} />

            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Bebas+Neue&family=Nunito+Sans:wght@400;700;900&family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;700&family=Sawarabi+Mincho&display=swap');

                .container { max-width: 1700px !important; width: 95%; margin: 0 auto; }
                .event-premium-card:hover { border-color: ${activeTheme.color}66 !important; box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8), 0 0 40px ${activeTheme.color}15; transform: translateY(-8px) !important; }

              .events-cinematic-page {
                font-family: ${activeTheme.bodyFont};
              }

              .events-cinematic-page h1,
              .events-cinematic-page h2,
              .events-cinematic-page h3,
              .events-cinematic-page h4,
              .events-cinematic-page .day-navigator button,
              .events-cinematic-page .classification-carousel button,
              .events-cinematic-page .card-content-body button,
              .events-cinematic-page .events-header-premium > div > span {
                font-family: ${activeTheme.displayFont};
              }
                
                /* Mobile Navigation Scrollbar Hiding */
                .day-navigator::-webkit-scrollbar, .classification-carousel::-webkit-scrollbar { display: none; }
                .day-navigator, .classification-carousel { -ms-overflow-style: none; scrollbar-width: none; }

                /* Global Cybernetic Typography */
                .style-cybernetic h1 { font-family: "Orbitron", sans-serif !important; font-weight: 900 !important; text-shadow: 0 0 15px ${activeTheme.color}88, 0 0 30px ${activeTheme.color}44; letter-spacing: 2px !important; }
                .style-cybernetic h2 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h3 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }
                .style-cybernetic h4 { font-family: "Orbitron", sans-serif !important; letter-spacing: 1px; }

                @media (max-width: 1400px) { .events-grid-system { grid-template-columns: repeat(3, 1fr) !important; } }
                @media (max-width: 1024px) { .events-grid-system { grid-template-columns: repeat(2, 1fr) !important; gap: 2rem !important; } }
                
                @media (max-width: 768px) {
                    .events-cinematic-page { padding-top: 100px !important; padding-bottom: 80px !important; }
                    .events-header-premium { margin-bottom: 4rem !important; }
                    .events-header-premium h1 { font-size: 3rem !important; letter-spacing: 0 !important; }
                    .events-header-premium span { font-size: 0.6rem !important; letter-spacing: 4px !important; }
                    
                    .day-navigator { 
                        justify-content: flex-start !important; 
                        overflow-x: auto !important; 
                        padding: 0 1.5rem 1rem !important; 
                        gap: 1rem !important;
                    }
                    .day-navigator button { min-width: 160px !important; padding: 1rem !important; border-radius: 12px !important; }
                    .day-navigator button span:last-child { font-size: 1.1rem !important; }
                    
                    .classification-carousel { margin-bottom: 3rem !important; }
                    .classification-carousel > div { justify-content: flex-start !important; padding: 0 1rem !important; gap: 0.6rem !important; }
                    .classification-carousel button { padding: 0.6rem 1.5rem !important; font-size: 0.7rem !important; }

                    .events-grid-system { 
                        grid-template-columns: 1fr !important; 
                        gap: 1.5rem !important; 
                        padding: 0 1.5rem !important;
                    }
                    .event-premium-card { height: auto !important; min-height: 450px !important; border-radius: 20px !important; }
                    .card-visual-header { height: 250px !important; }
                    .card-content-body { padding: 1.5rem !important; }
                    .card-content-body h3 { font-size: 1.4rem !important; line-height: 1.2 !important; margin: 0.5rem 0 !important; }
                    .card-content-body span { font-size: 0.65rem !important; letter-spacing: 3px !important; }
                    
                    /* Lock Screen Mobile Adjustments */
                    div[style*="minHeight: '800px'"] { min-height: 600px !important; padding: 4rem 1.5rem !important; }
                    div[style*="width: '300px'"] { width: 200px !important; height: 200px !important; }
                    div[style*="inset: '100px'"] { inset: 60px !important; }
                    div[style*="marginTop: '5rem'"] { gap: 1.5rem !important; margin-top: 3rem !important; }
                }

                @media (max-width: 900px) {
                    .event-modal-container {
                        flex-direction: column !important;
                        overflow-y: auto !important;
                    }
                    .event-modal-image-panel {
                        width: 100% !important;
                        height: 250px !important;
                        flex-shrink: 0 !important;
                    }
                    .modal-gradient-overlay {
                        background: linear-gradient(to bottom, transparent, #0a0a0a) !important;
                    }
                    .event-modal-content-panel {
                        width: 100% !important;
                        padding: 2rem !important;
                        overflow-y: visible !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Events;
