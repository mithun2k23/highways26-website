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
    "category": "Drama",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "CB312",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Focusing on Shoot and Broadcast, this Curtain Call event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Curtain Call Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 2,
    "title": "Mime",
    "category": "Drama",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "MPH",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Focusing on Mime, this Curtain Call event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹4.5K",
    "regType": "Premium",
    "regFee": "₹400/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Curtain Call Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 3,
    "title": "Adzap",
    "category": "Drama",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB301",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Focusing on Adzap, this Curtain Call event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Curtain Call Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 4,
    "title": "Freeze Frame",
    "category": "Drama",
    "day": 3,
    "date": "April 11, 2026",
    "time": "02:00 PM",
    "location": "Campus Venue",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1541179619977-1b0394018282?q=80&w=1000",
    "description": "Focusing on Freeze Frame, this Curtain Call event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Curtain Call Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 5,
    "title": "IPL Auction",
    "category": "Speech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "Campus Venue",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "Focusing on IPL Auction, this Reading Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Reading Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 6,
    "title": "Sorting Hat Conspiracy",
    "category": "Speech",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "Block 5 (1st Floor)",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "Focusing on Sorting Hat Conspiracy, this Reading Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Reading Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 7,
    "title": "Trust the Process",
    "category": "Tech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "CB513",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Trust the Process, this EWB event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹50/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "EWB Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 8,
    "title": "Chaos Director",
    "category": "Tech",
    "day": 2,
    "date": "April 10, 2026",
    "time": "Full Day",
    "location": "CB 304",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Chaos Director, this EWB event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "EWB Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 9,
    "title": "Who the sus",
    "category": "Tech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "CB515 & CB516",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Who the sus, this ISTD event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "ISTD Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 10,
    "title": "Money moves in your hand",
    "category": "Tech",
    "day": 2,
    "date": "April 10, 2026",
    "time": "Full Day",
    "location": "CB515 & CB516",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Money moves in your hand, this ISTD event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "ISTD Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 11,
    "title": "Scavenger Hunt",
    "category": "Social",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "CB501, 507 & 508",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Scavenger Hunt, this RRC event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "RRC Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 12,
    "title": "Mystry Box challenge",
    "category": "Social",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB311 & CB314",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Mystry Box challenge, this RRC event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Standard",
    "regFee": "₹200",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "RRC Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 13,
    "title": "Human Knot",
    "category": "Social",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB501 & CB502",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Human Knot, this RRC event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "RRC Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 14,
    "title": "Channel Surfing",
    "category": "Speech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "Campus Venue",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "Focusing on Channel Surfing, this Speakers Forum event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Speakers Forum Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 15,
    "title": "Survival of the fittest",
    "category": "Speech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "Library 3rd Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000",
    "description": "Focusing on Survival of the fittest, this Speakers Forum event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹5K",
    "regType": "Premium",
    "regFee": "₹100/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Speakers Forum Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 16,
    "title": "Movie Screening",
    "category": "Media",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "Library Seminar Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "Focusing on Movie Screening, this Shortfilm event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Standard",
    "regFee": "₹30/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Shortfilm Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 17,
    "title": "Cinequest",
    "category": "Media",
    "day": 2,
    "date": "April 10, 2026",
    "time": "Full Day",
    "location": "CB521",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "Focusing on Cinequest, this Shortfilm event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Shortfilm Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 18,
    "title": "Short Film contest",
    "category": "Media",
    "day": 3,
    "date": "April 11, 2026",
    "time": "02:00 PM",
    "location": "Library Seminar Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000",
    "description": "Focusing on Short Film contest, this Shortfilm event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Premium",
    "regFee": "₹200",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Shortfilm Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 19,
    "title": "Mathi Yoshi",
    "category": "Cultural",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "CB504 & CB505",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "Focusing on Mathi Yoshi, this Tamil Mandram event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Tamil Mandram Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 20,
    "title": "Thirai Suzhal",
    "category": "Cultural",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB504 & CB505",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "Focusing on Thirai Suzhal, this Tamil Mandram event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹50/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Tamil Mandram Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 21,
    "title": "Olunga Paadu illana sprey adichiduvan",
    "category": "Cultural",
    "day": 3,
    "date": "April 11, 2026",
    "time": "Full Day",
    "location": "CB504 & CB505",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000",
    "description": "Focusing on Olunga Paadu illana sprey adichiduvan, this Tamil Mandram event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Tamil Mandram Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 22,
    "title": "EPL",
    "category": "Business",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "Biotech Hall",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Focusing on EPL, this ECell event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹4.5K",
    "regType": "Premium",
    "regFee": "₹150/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "ECell Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 23,
    "title": "Disasterpeneur",
    "category": "Business",
    "day": 2,
    "date": "April 10, 2026",
    "time": "02:00 PM",
    "location": "CB302",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Focusing on Disasterpeneur, this ECell event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1K",
    "regType": "Standard",
    "regFee": "₹75/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "ECell Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 24,
    "title": "Start up war",
    "category": "Business",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB303",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
    "description": "Focusing on Start up war, this ECell event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹75/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "ECell Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 25,
    "title": "Shot on Highways",
    "category": "Art",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Virtual",
    "location": "CB301",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
    "description": "Focusing on Shot on Highways, this Photo Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹100/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Photo Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 26,
    "title": "Frame by words",
    "category": "Art",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "CB303",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000",
    "description": "Focusing on Frame by words, this Photo Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹50/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Photo Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 27,
    "title": "Otakumania",
    "category": "Tech",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "CB 321, CB322, CB323 & CB324",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Otakumania, this Science Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹1.5K",
    "regType": "Standard",
    "regFee": "₹100/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Science Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 28,
    "title": "Greenscreen",
    "category": "Tech",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB322 & CB323",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Greenscreen, this Science Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Science Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 29,
    "title": "Powerplay Arena",
    "category": "Tech",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB313 & CB314",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    "description": "Focusing on Powerplay Arena, this Science Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Science Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 30,
    "title": "Tellus Abyss",
    "category": "Social",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "CB525",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Tellus Abyss, this Care event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Standard",
    "regFee": "₹200",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Care Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 31,
    "title": "Token Takeover",
    "category": "Social",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "CB526, CB527 & CB528",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Token Takeover, this Care event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Care Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 32,
    "title": "Clash Troxphy",
    "category": "Social",
    "day": 3,
    "date": "April 11, 2026",
    "time": "10:00 AM",
    "location": "CB526, CB527 & CB528",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Clash Troxphy, this Care event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Premium",
    "regFee": "₹200",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Care Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 33,
    "title": "Saregama",
    "category": "Social",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "CB536",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on Saregama, this Rotaract event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Rotaract Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 34,
    "title": "The Royal Gambit",
    "category": "Social",
    "day": 2,
    "date": "April 10, 2026",
    "time": "Full Day",
    "location": "Block 5 (3rd Floor) & (Ground Floor Area)",
    "color": "#ffb7c5",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000",
    "description": "Focusing on The Royal Gambit, this Rotaract event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "TBA",
    "regType": "Free",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Rotaract Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 35,
    "title": "Overdrive",
    "category": "Music",
    "day": 1,
    "date": "April 9, 2026",
    "time": "Full Day",
    "location": "MPH",
    "color": "#00d2ff",
    "image": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "description": "Focusing on Overdrive, this Music Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹10K",
    "regType": "Premium",
    "regFee": "₹1000/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Music Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 36,
    "title": "Crescendo",
    "category": "Music",
    "day": 2,
    "date": "April 10, 2026",
    "time": "02:00 PM",
    "location": "Library Seminar Hall",
    "color": "#00d2ff",
    "image": "https://images.unsplash.com/photo-1514525253361-bee8d48700df?q=80&w=1000",
    "description": "Focusing on Crescendo, this Music Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹6K",
    "regType": "Premium",
    "regFee": "₹250/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Music Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 37,
    "title": "Solography",
    "category": "Dance",
    "day": 1,
    "date": "April 9, 2026",
    "time": "10:00 AM",
    "location": "OAT",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Focusing on Solography, this Dance Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹4K",
    "regType": "Premium",
    "regFee": "₹150/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Dance Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 38,
    "title": "Groove Chemistry",
    "category": "Dance",
    "day": 1,
    "date": "April 9, 2026",
    "time": "02:00 PM",
    "location": "OAT",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Focusing on Groove Chemistry, this Dance Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹4K",
    "regType": "Premium",
    "regFee": "₹150/Person",
    "teamSize": "Solo",
    "pocs": [
      {
        "name": "Dance Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 39,
    "title": "Groovanza",
    "category": "Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "10:00 AM",
    "location": "OAT",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Focusing on Groovanza, this Dance Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹12K",
    "regType": "Premium",
    "regFee": "₹1000/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Dance Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  },
  {
    "id": 40,
    "title": "Pairfect",
    "category": "Dance",
    "day": 2,
    "date": "April 10, 2026",
    "time": "02:00 PM",
    "location": "MPH",
    "color": "#ff0000",
    "image": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000",
    "description": "Focusing on Pairfect, this Dance Club event brings together the best minds for Highways'26.",
    "rules": [
      "Mandatory registration via the Highways'26 app.",
      "Please bring your college ID for entry.",
      "Judges' decision is final.",
      "Report 15 minutes before the start time."
    ],
    "prizePool": "₹6K",
    "regType": "Premium",
    "regFee": "₹400/Team",
    "teamSize": "Group",
    "pocs": [
      {
        "name": "Dance Club Team",
        "phone": "Available at Helpdesk"
      }
    ]
  }
];

const categoriesList = ["All", "Music", "Dance", "Drama", "Tech", "Art", "Speech", "Media", "Business", "Social", "Cultural"];
const dayThemes = [
    {
        id: 1,
        name: "IGNITION",
        label: "THE SPARK",
        color: "#ffb7c5",
        kanji: "始",
        bgImage: "https://images.unsplash.com/photo-1522383225053-ed111181a951?q=80&w=2000&auto=format&fit=crop",
        tagline: "WHERE THE ROAD BEGINS",
    style: "organic",
    displayFont: '"Sawarabi Mincho", serif',
    bodyFont: '"Nunito Sans", "Segoe UI", sans-serif',
    buttonText: "#1c0f14"
    },
    {
        id: 2,
        name: "OVERDRIVE",
        label: "THE VELOCITY",
        color: "#00d2ff",
        kanji: "速",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
        tagline: "RIDING THE LIGHTNING",
    style: "cybernetic",
    displayFont: '"Orbitron", "Segoe UI", sans-serif',
    bodyFont: '"Rajdhani", "Segoe UI", sans-serif',
    buttonText: "#03141a"
    },
    {
        id: 3,
        name: "DESTINY",
        label: "THE LEGEND",
        color: "#ff0000",
        kanji: "終",
        bgImage: "https://images.unsplash.com/photo-1516280440623-df9cb83e4776?q=80&w=2000&auto=format&fit=crop",
        tagline: "BEYOND THE HORIZON",
    style: "chaotic",
    displayFont: '"Bebas Neue", "Impact", "Arial Narrow Bold", sans-serif',
    bodyFont: '"Barlow Condensed", "Segoe UI", sans-serif',
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

                /* Style-specific typography */
              .style-organic h1 { font-weight: 400; letter-spacing: 12px; }
              .style-cybernetic h1 { font-weight: 900; skew: -5deg; text-shadow: 0 0 20px ${activeTheme.color}44; }
              .style-chaotic h1 { font-weight: 950; letter-spacing: -10px; filter: contrast(1.5); }

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
