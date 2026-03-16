export interface Member {
    name: string;
    role: string;
    spirit: string;
    image: string;
    imagePosition?: string;
    socials?: {
        instagram?: string;
        linkedin?: string;
    };
}

export interface TeamGroup {
    id: string;
    name: string;
    members: Member[];
}

export const teamData: TeamGroup[] = [
    {
        "id": "marketing",
        "name": "MARKETING & SALES",
        "members": [
            { "name": "Dakxin Shaswath Haran Y", "role": "Lead", "spirit": "kaizoku-o", "image": "/members/IMG-20260124-WA0027(2) - 009 DAKXIN SHASWATH HARAN Y MN.jpg", "imagePosition": "center 15%" },
            { "name": "ARIVUNITHI R", "role": "Lead", "spirit": "The Visionary", "image": "/members/Arivunithi R  - ARIVUNITHI R CSE.webp", "imagePosition": "center 10%" },
            { "name": "Sunil kumar v", "role": "Member", "spirit": "The Strategist", "image": "/members/IMG-20260211-WA0027 - SUNIL KUMAR V CVE.webp", "imagePosition": "center 55%" },
            { "name": "M.logeshwaran", "role": "Member", "spirit": "The Architect", "image": "/members/IMG_20250926_234941_345 - LOGESHWARAN M ECE.webp", "imagePosition": "center 10%" },
            { "name": "Santhoshkumar C", "role": "Member", "spirit": "The Catalyst", "image": "/members/IMG_20251114_221105 - SANTHOSHKUMAR C EEE.webp", "imagePosition": "center 10%" },
            { "name": "SAISUNDAR S", "role": "Member", "spirit": "The Creative", "image": "/members/IMG-20260220-WA0012 - SAISUNDAR S EEE.webp", "imagePosition": "center 10%" },
            { "name": "NARAEN KARTICK A", "role": "Sub lead", "spirit": "The Engine", "image": "/members/Naraen Kartick-Sublead_Marketing - NARAEN KARTICK A CVE.webp", "imagePosition": "center 75%" },
            { "name": "C Dhinesh", "role": "Member", "spirit": "The Pulse", "image": "/members/Dhinesh-Member_Marketing - DHINESH C CSE.webp", "imagePosition": "center 5%" },
            { "name": "Yuvakannan D", "role": "Member", "spirit": "The Maven", "image": "/members/20250925_213406 - YUVAKANNAN D CSE.webp", "imagePosition": "top left" },
            { "name": "RB YUVAN", "role": "Member", "spirit": "The Navigator", "image": "/members/RB Yuvan-Member_marketing and sales - RB YUVAN ECE.webp", "imagePosition": "center 10%" },
            { "name": "Veeraiah V", "role": "Member", "spirit": "The Creative", "image": "/members/VEERAIAH V - Marketing and sales (1) - VEERAIAH V CHEM.webp", "imagePosition": "center 80%" },
            { "name": "Madhan Balaji A", "role": "Member", "spirit": "The Pulse", "image": "/members/Madhan-marketing-member - 026 MADHAN BALAJI A ME.webp", "imagePosition": "center 10%" },
            { "name": "Dayaalan K T", "role": "Member", "spirit": "The Craftsman", "image": "/members/Dayaalan K T-Marketing_Member - DAYAALAN K T CSE.webp", "imagePosition": "right top" },
            { "name": "Sucharitha Kapuluru", "role": "Member", "spirit": "The Catalyst", "image": "/members/IMG-20260115-WA0030(2) - SUCHARITHA KAPULURU AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "Roshan M", "role": "Member", "spirit": "The Navigator", "image": "/members/Roshan M - Member_Marketing - 116 ROSHAN M ECE.webp", "imagePosition": "center 10%" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "The Visionary", "image": "/members/VASANTH K N - MEMBER - MARKETING AND SALESs - VASANTH K N AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "AKSHAY V", "role": "Sub lead", "spirit": "The Maven", "image": "/members/AKSHAY_V_SUBLEAD_MARKETTING_TEAM - 005 AKSHAY V MEC.webp", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "design",
        "name": "VISUAL DESIGN",
        "members": [
            { "name": "ASHISH S", "role": "Lead", "spirit": "The Luminary", "image": "/members/IMG_9669 (1) - ASHISH S CSE.webp", "imagePosition": "center 15%" },
            { "name": "Yogendra SK", "role": "Member", "spirit": "The Maestro", "image": "/members/IMG_20250329_175034 - 056 YOGENDRA S K ME.webp", "imagePosition": "center 15%" },
            { "name": "Thirunesh S", "role": "Member", "spirit": "The Artisan", "image": "/members/photo - THIRUNESH S Mech & Auto Engg.webp", "imagePosition": "center 15%" },
            { "name": "Harish K", "role": "Member", "spirit": "The Virtuoso", "image": "/members/Harish K - Member - Design - HARISH K AI&DS.webp", "imagePosition": "center 15%" },
            { "name": "Yeseswini.S", "role": "Member", "spirit": "The Pathfinder", "image": "/members/yeseswini-member_design - YESESWINI S AI&DS.webp", "imagePosition": "center 15%" }
        ]
    },
    {
        "id": "events",
        "name": "EVENT PLANNING",
        "members": [
            { "name": "ASHWIN R", "role": "Lead", "spirit": "The Envisioner", "image": "/members/Ashwin 1 - ASHWIN R ECE.webp", "imagePosition": "center 10%" },
            { "name": "Gururaje M", "role": "Sub lead", "spirit": "The Zenith", "image": "/members/Gururaje_ Sub lead_Event planning Wing - GURURAJE M CE.webp", "imagePosition": "center" },
            { "name": "Madhav. Ba", "role": "Member", "spirit": "The Conductor", "image": "/members/17039 - MADHAV BA Mech & Auto Engg.webp", "imagePosition": "center 10%" },
            { "name": "Pritika Rajesh Kannan", "role": "Member", "spirit": "The Spark", "image": "/members/Pritika- Member-Event planning and coordination - PRITIKA RAJESH KANNAN ECE.webp", "imagePosition": "center 10%" },
            { "name": "Vethavarna V", "role": "Member", "spirit": "The Keystone", "image": "/members/20260301_191701 - VETHAVARNA V ECE.webp", "imagePosition": "center 10%" },
            { "name": "Suraj G", "role": "Member", "spirit": "The Anchor", "image": "/members/passport size photo  - SURAJ G IT.webp", "imagePosition": "center 10%" },
            { "name": "Kavinidhi R P", "role": "Member", "spirit": "The Beacon", "image": "/members/Kavinidhi R P - Member_Event_Planning - KAVINIDHI R P AI&DS.webp", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "web",
        "name": "WEB ARCHITECTS",
        "members": [
            { "name": "Balakrishnan.R", "role": "Lead", "spirit": "The Oracle", "image": "/members/Balakrishnan.webp", "imagePosition": "center" },
            { "name": "B jashwanth shankar", "role": "Member", "spirit": "The Apex", "image": "/members/jashwanth-member_web - B JASHWANTH SHANKAR CSE.webp", "imagePosition": "center" },
            { "name": "Vishal V", "role": "Member", "spirit": "The Developer", "image": "/members/IMG_20260311_085514 - VISHAL V IT.jpg", "imagePosition": "center 15%" }
        ]
    },
    {
        "id": "art",
        "name": "ART & DECORATION",
        "members": [
            { "name": "Mohana Priya", "role": "Lead", "spirit": "The Artisan", "image": "/members/IMG-20260312-WA0005 - MOHANA PRIYA S CE.jpg", "imagePosition": "center 10%" },
            { "name": "Brindha AG", "role": "Member", "spirit": "The Sage", "image": "/members/20240816_141115_11zon - BRINDHA A G Mech & Auto Engg.webp", "imagePosition": "center 10%" },
            { "name": "Tharun Kumar S", "role": "Member", "spirit": "The Warden", "image": "/members/6809 - THARUN KUMAR S Biotech.webp", "imagePosition": "center 10%" },
            { "name": "VASUNDRA S", "role": "Member", "spirit": "The Keeper", "image": "/members/IMG_20260301_192515 - VASUNDRA S AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "VidhyaaVardhani Ramesh", "role": "Member", "spirit": "The Shaper", "image": "/members/IMG-20260301-WA0051 - VIDHYAA VARDHANI RAMESH AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "M S JOSHIKA", "role": "Member", "spirit": "The Weaver", "image": "/members/Joshika-member_art_and_decoration - M S JOSHIKA CSE.webp", "imagePosition": "center 10%" },
            { "name": "Nithya Shiva Thirumalaivarathan", "role": "Member", "spirit": "The Pilot", "image": "/members/20260301_201913 - NITHYA SHIVA THIRUMALAIVARATHAN CSE.webp", "imagePosition": "center 10%" },
            { "name": "Visvajith S A", "role": "Member", "spirit": "The Voyager", "image": "/members/20251219_000434 - VISVAJITH S A ECE.webp", "imagePosition": "bottom" },
            { "name": "Harishmani E", "role": "Member", "spirit": "The Scout", "image": "/members/harishmani-2127250501069_art&decor - HARISH MANI E CSE.webp", "imagePosition": "center 10%" },
            { "name": "Priyadharshini", "role": "Member", "spirit": "The Ranger", "image": "/members/IMG-20260214-WA0072 - PRIYADHARSHINI R AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Champion", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp", "imagePosition": "center 10%" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Titan", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "sponsorship",
        "name": "BUSINESS PARTNERSHIPS",
        "members": [
            { "name": "KS Bharath", "role": "Lead", "spirit": "The Knight", "image": "/members/KS Bharath - Sponsorship Lead - 007 BHARATH KS MN.webp", "imagePosition": "center 10%" },
            { "name": "Akshara Srivatsan", "role": "Member", "spirit": "The Colossus", "image": "/members/0173b395-cfc5-4e47-ad25-9784265dc42f - AKSHARA SRIVATSAN CSE.webp", "imagePosition": "center 10%" },
            { "name": "Anton Jacob", "role": "Member", "spirit": "The Baron", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp", "imagePosition": "center 10%" },
            { "name": "Arpitha Paraneetharan", "role": "Member", "spirit": "The Rogue", "image": "/members/Arpitha- Sponsorship wing - ARPITHA PARANEETHARAN CSE.webp", "imagePosition": "center" },
            { "name": "Buvanesh Raaj B Y", "role": "Member", "spirit": "The Hunter", "image": "/members/WhatsApp Image 2026-03-01 at 9.30.55 PM - 013 BUVANESH RAAJ B Y ME.webp", "imagePosition": "center 10%" },
            { "name": "Shaik aadhil", "role": "Member", "spirit": "The Seeker", "image": "/members/cf3184e0-3387-4851-b43d-921c8285cf23 - SHAIK AADHIL S AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "Athmaja Gugan", "role": "Member", "spirit": "The Nomad", "image": "/members/Athmaja- Member_Sponsorship - ATHMAJA G ECE.webp", "imagePosition": "center 10%" },
            { "name": "Harshitha R", "role": "Member", "spirit": "The Wanderer", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp", "imagePosition": "center 10%" },
            { "name": "S. Ananthika", "role": "Member", "spirit": "The Spirit", "image": "/members/1772435076377 - S ANANTHIKA AI&DS.webp", "imagePosition": "center 10%" },
            { "name": "Yaathra P", "role": "Member", "spirit": "The Soul", "image": "/members/IMG-20251025-WA0051~2 - YAATHRA P CSE.webp", "imagePosition": "center 10%" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "The Heart", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp", "imagePosition": "center 10%" },
            { "name": "V Lingesh", "role": "Member", "spirit": "The Brain", "image": "/members/V.Lingesh-Member_sponsorship - V LINGESH CHEM.webp", "imagePosition": "center 10%" },
            { "name": "Sri Varsha S", "role": "Member", "spirit": "The Hand", "image": "/members/sri_varsha-member-sponsorship - SRI VARSHA S CSE.webp", "imagePosition": "center 10%" },
            { "name": "Hariharan K", "role": "Member", "spirit": "The Specialist", "image": "/members/IMG_20260311_084530 - HARIHARAN K AI&DS.jpg", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "operations",
        "name": "CORE OPERATIONS",
        "members": [
            { "name": "Nithish D R", "role": "Lead", "spirit": "The Coordinator", "image": "/members/Nithish - lead_operations - NITHISH D R EEE.jpg", "imagePosition": "center 15%" },
            { "name": "Rushil", "role": "Member", "spirit": "The Eye", "image": "/members/Rushil-Member_Operations - RUSHIL P BIO.webp", "imagePosition": "center 10%" },
            { "name": "Amirthavarshini J", "role": "Member", "spirit": "The Voice", "image": "/members/Amirthavarshini-member_operations - AMIRTHAVARSHINI J CSE.webp", "imagePosition": "center 10%" },
            { "name": "KAVIYA M", "role": "Member", "spirit": "The Echo", "image": "/members/IMG_20260212_162509 - KAVIYA M CSE.webp", "imagePosition": "center 10%" },
            { "name": "Anton jacob", "role": "Member", "spirit": "The Shadow", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp", "imagePosition": "center 10%" },
            { "name": "Arun D", "role": "Member", "spirit": "The Light", "image": "/members/Arun D - operation_wing_member - ARUN D ECE.webp", "imagePosition": "center 10%" },
            { "name": "Meenatshi P", "role": "Member", "spirit": "The Flame", "image": "/members/Meenatshi_P-member_Operations - MEENATSHI P CSE.webp", "imagePosition": "center 10%" },
            { "name": "U S SANJEEVAN", "role": "Member", "spirit": "The Frost", "image": "/members/U S Sanjeevan-Member-Operations_Wing - U S SANJEEVAN EEE.webp", "imagePosition": "center 10%" },
            { "name": "Abdul Rahman N", "role": "Member", "spirit": "The Storm", "image": "/members/Abdul Rahman N-Member_Operations - ABDUL RAHMAN N AE.webp", "imagePosition": "center 10%" },
            { "name": "Prithish A S", "role": "Member", "spirit": "The Support", "image": "/members/IMG_20260127_171552_673 - PRITHISH A S CSE.webp", "imagePosition": "center 15%" },
            { "name": "Ajay M", "role": "Member", "spirit": "The Catalyst", "image": "/members/AJAY_OPERATIOR_WING - AJAY M CSE.jpg", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "celebrity",
        "name": "CELEBRITY RELATIONS",
        "members": [
            { "name": "Nimal.S", "role": "Sub lead", "spirit": "The Tide", "image": "/members/IMG-20260213-WA0028(1) - NIMAL S EEE.jpeg", "imagePosition": "center 20%" }
        ]
    },
    {
        "id": "vigilance",
        "name": "VIGILANCE",
        "members": [
            { "name": "Venkat Sri Charan U", "role": "Sub lead", "spirit": "The Guardian", "image": "/members/IMG_20250904_182443 - VENKAT SRI CHARAN U ECE.jpg", "imagePosition": "center 10%" },
            { "name": "MUTHUVEERAN D", "role": "Sub lead", "spirit": "The Captain", "image": "/members/IMG20250513171011 - MUTHUVEERAN D CSE.jpg", "imagePosition": "center 10%" },
            { "name": "Saranraj S", "role": "Member", "spirit": "The Sentinel", "image": "/members/IMG-20260304-WA0101 - SARANRAJ S EEE.jpg", "imagePosition": "center 10%" },
            { "name": "Thannigaipriya P S", "role": "Member", "spirit": "The Watcher", "image": "/members/Thannigaipriya P S _Member_Vigilance wing - THANNIGAIPRIYA PS EEE.jpg", "imagePosition": "center 10%" },
            { "name": "A.Bharath Rajh", "role": "Member", "spirit": "THE APEX TITAN", "image": "/members/Bharath Rajh_Member_Vigilance Wing - 011_A.BHARATH RAJH _MECH", "imagePosition": "center 15%" },
            { "name": "Sridharshini M", "role": "Member", "spirit": "The Shield", "image": "/members/IMG_20260312_094606 - SRIDHARSHINI M EEE.jpg", "imagePosition": "center 20%" },
            { "name": "Sumithra S", "role": "Member", "spirit": "The Protector", "image": "/members/Sumithra S_Member_Vigilance - SUMITHRA S CSE.jpg", "imagePosition": "center 15%" },
            { "name": "BALAJI S", "role": "Member", "spirit": "The Vigilant", "image": "/members/IMG-20250922-WA0018~3 - BALAJI S EEE.jpg", "imagePosition": "center 10%" },
            { "name": "MADHU MITHA N", "role": "Member", "spirit": "The Warden", "image": "/members/Madhu_vigilance - MADHU MITHA N ECE.jpg", "imagePosition": "center 10%" },
            { "name": "NEHAA SRI M S", "role": "Member", "spirit": "The Keeper", "image": "/members/NEHAA SRI M S_VIGILANCE  - Nehaa Sri M S ECE.jpg", "imagePosition": "center 15%" },
            { "name": "LAVANYA C", "role": "Member", "spirit": "The Sentry", "image": "/members/LAVANYA C _VIGILANCE  - LAVANYA C ECE.jpg", "imagePosition": "center 10%" },
            { "name": "Thirumurugan S", "role": "Member", "spirit": "The Ranger", "image": "/members/Photo from Thirumurugan - THIRUMURUGAN S CSE.S", "imagePosition": "center 15%" },
            { "name": "Adhitya R", "role": "Member", "spirit": "The Scout", "image": "/members/Adhitya-Member_Vigilance  - ADHITYA R EEE.jpg", "imagePosition": "center 10%" },
            { "name": "Rohith kumaar P R", "role": "Member", "spirit": "The Observer", "image": "/members/IMG_20260312_170600 - ROHITH KUMAAR P R ECE.jpg", "imagePosition": "center 10%" },
            { "name": "PEYAL NEERAN TS", "role": "Member", "spirit": "The Monitor", "image": "/members/Peyal Neeran TS member at vigilance wing  - PEYAL NEERAN T S CIVIL.jpg", "imagePosition": "center 15%" },
            { "name": "Vineeth I", "role": "Member", "spirit": "The Shield", "image": "/members/IMG_4028 - VINEETH I CSE.jpeg", "imagePosition": "center 10%" },
            { "name": "K K MUKESH RAM", "role": "Member", "spirit": "The Guardian", "image": "/members/_MG_0679 - K K MUKESH RAM ECE.JPG", "imagePosition": "center 10%" },
            { "name": "Meyyalagan T", "role": "Member", "spirit": "The Sentinel", "image": "/members/file_0000000019d0720b96c609f5a8889ecc - MEYYALAGAN T EEE.png", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "production",
        "name": "PRODUCTION",
        "members": [
            { "name": "MUTHUVEERAN D", "role": "Sub lead", "spirit": "The Director", "image": "/members/IMG20250513171011 - MUTHUVEERAN D CSE.jpg", "imagePosition": "center 10%" }
        ]
    },
    {
        "id": "hospitality",
        "name": "HOSPITALITY",
        "members": [
            { "name": "Anjana Suresh", "role": "Lead", "spirit": "The Welcomer", "image": "/members/IMG_8082 - ANJANA SURESH ECE.jpeg", "imagePosition": "center 10%" },
            { "name": "SANYU.J", "role": "Sub lead", "spirit": "The Host", "image": "/members/Sanyu_hospitality. - SANYU J ECE.jpg", "imagePosition": "center 10%" },
            { "name": "Rogini D", "role": "Member", "spirit": "The Guide", "image": "/members/Rogini_Member_Hospitality wing - ROGINI D EEE.jpg", "imagePosition": "center 10%" },
            { "name": "PRINCY NIKITHA J", "role": "Member", "spirit": "The Host", "image": "/members/Copy of Princy Nikitha_hospitalitymember - Princy Nikitha J ECE.jpg", "imagePosition": "center 10%" },
            { "name": "Rubasri R", "role": "Member", "spirit": "The Host", "image": "/members/IMG-20260101-WA0097 - RUBASRI R ME.jpg", "imagePosition": "center 10%" },
            { "name": "CHARULATHAA SR", "role": "Member", "spirit": "The Guide", "image": "/members/CharulathaaSR_member_Hospitality - CHARULATHAA S R CSE.JPG", "imagePosition": "center 10%" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "The Host", "image": "/members/IMG_20260302_142427871 - VASANTH K N AI&DS.jpg", "imagePosition": "center 10%" },
            { "name": "Kavin Aravinth R", "role": "Member", "spirit": "The Welcomer", "image": "/members/IMG_20260219_162036_150 - KAVIN ARAVINTH R CSE.webp", "imagePosition": "center 10%" },
            { "name": "SHREE SUSHIL R K", "role": "Member", "spirit": "The Host", "image": "/members/IMG_20240922_153423~2 - SHREE SUSHIL R K Mech & Auto Engg.jpg", "imagePosition": "center 10%" },
            { "name": "Vinodhini A", "role": "Member", "spirit": "The Guide", "image": "/members/IMG-20251224-WA0025 - VINODHINI A ECE.jpg", "imagePosition": "center 10%" },
            { "name": "Thiyaneshwaran A", "role": "Member", "spirit": "The Host", "image": "/members/Thiyaneshwaran A-Member_hospitality - THIYANESHWARAN A ECE.jpg", "imagePosition": "center 10%" },
            { "name": "G Preethi", "role": "Member", "spirit": "The Host", "image": "/members/G.Preethi Hospitality wing member_1 - G PREETHI ECE.jpg", "imagePosition": "center 10%" },
            { "name": "ES Nishitha", "role": "Member", "spirit": "The Welcomer", "image": "/members/photo~2 - E S NISHITHA ECE.jpg", "imagePosition": "center 10%" },
            { "name": "Srikrishnan", "role": "Member", "spirit": "The Guide", "image": "/members/Srikrishnan-member-hospitality  - SRIKRISHNAN S CHE.heic", "imagePosition": "center 10%" },
            { "name": "Kavya K P", "role": "Member", "spirit": "The Host", "image": "/members/kavya - member_hospitality - KAVYA KAMACHETLU PRAVEEN KUMAR AI&DS.jpg", "imagePosition": "center 10%" }
        ]
    }
];