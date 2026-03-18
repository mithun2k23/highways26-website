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
        "id": "council",
        "name": "STUDENT COUNCIL",
        "members": [
            { "name": "BHARGAVI T R", "role": "President", "spirit": "", "image": "/members/bharajvi.jpeg" },
            { "name": "MITHUN S", "role": "Vice President", "spirit": "", "image": "/members/mithun.jpg" },
            { "name": "DHAYAKAR S", "role": "Culturals Secretary", "spirit": "", "image": "/members/dhayakar.jpg" },
            { "name": "CHIDAMBARAM RM", "role": "General Secretary", "spirit": "", "image": "/members/chidambram.jpeg" },
            { "name": "DIVYASHREE M", "role": "Joint Secretary", "spirit": "", "image": "/members/divyashree.jpeg" },
            { "name": "KABILAN G", "role": "Sports Secretary", "spirit": "", "image": "/members/kabilan.jpeg" },
            { "name": "ABINAYA S", "role": "Treasurer", "spirit": "", "image": "/members/abinaya.jpeg" },
            { "name": "MURALI VINOD S", "role": "PG Representative", "spirit": "", "image": "/members/murali vinod.jpeg" }
        ]
    },
    {
        "id": "art",
        "name": "ART & DECORATION",
        "members": [
            { "name": "Mohana Priya", "role": "Lead", "spirit": "", "image": "/members/IMG-20260312-WA0005 - MOHANA PRIYA S CE.jpg" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp" },
            { "name": "ANBARASI P", "role": "Member", "spirit": "", "image": "/members/IMG-20260302-WA0121 - 009 ANBARASI P ME.jpg" },
            { "name": "Brindha AG", "role": "Member", "spirit": "", "image": "/members/20240816_141115_11zon - BRINDHA A G Mech & Auto Engg.webp" },
            { "name": "Harishmani E", "role": "Member", "spirit": "", "image": "/members/harishmani-2127250501069_art&decor - HARISH MANI E CSE.webp" },
            { "name": "Harshitha R", "role": "Member", "spirit": "", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp" },
            { "name": "M S JOSHIKA", "role": "Member", "spirit": "", "image": "/members/Joshika-member_art_and_decoration - M S JOSHIKA CSE.webp" },
            { "name": "Nithya Shiva Thirumalaivarathan", "role": "Member", "spirit": "", "image": "/members/20260301_201913 - NITHYA SHIVA THIRUMALAIVARATHAN CSE.webp" },
            { "name": "Priyadharshini", "role": "Member", "spirit": "", "image": "/members/IMG-20260214-WA0072 - PRIYADHARSHINI R AI&DS.webp" },
            { "name": "Tharun Kumar S", "role": "Member", "spirit": "", "image": "/members/6809 - THARUN KUMAR S Biotech.webp" },
            { "name": "VASUNDRA S", "role": "Member", "spirit": "", "image": "/members/IMG_20260301_192515 - VASUNDRA S AI&DS.webp" },
            { "name": "VidhyaaVardhani Ramesh", "role": "Member", "spirit": "", "image": "/members/IMG-20260301-WA0051 - VIDHYAA VARDHANI RAMESH AI&DS.webp" },
            { "name": "Visvajith S A", "role": "Member", "spirit": "", "image": "/members/20251219_000434 - VISVAJITH S A ECE.webp" }
        ]
    },
    {
        "id": "operations",
        "name": "CORE OPERATIONS",
        "members": [
            { "name": "Nithish D R", "role": "Lead", "spirit": "", "image": "/members/Nithish - lead_operations - NITHISH D R EEE.jpg" },
            { "name": "Ajay M", "role": "Sub lead", "spirit": "", "image": "/members/AJAY_OPERATIOR_WING - AJAY M CSE.jpg" },
            { "name": "DAYAALAN K T", "role": "Sub lead", "spirit": "", "image": "/members/Dayaalan K T-Marketing_Member - DAYAALAN K T CSE.webp", "imagePosition": "right top" },
            { "name": "Abdul Rahman N", "role": "Member", "spirit": "", "image": "/members/Abdul Rahman N-Member_Operations - ABDUL RAHMAN N AE.webp" },
            { "name": "Amirthavarshini J", "role": "Member", "spirit": "", "image": "/members/Amirthavarshini-member_operations - AMIRTHAVARSHINI J CSE.webp" },
            { "name": "Anton jacob", "role": "Member", "spirit": "", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp" },
            { "name": "Arun D", "role": "Member", "spirit": "", "image": "/members/Arun D - operation_wing_member - ARUN D ECE.webp" },
            { "name": "KAVIYA M", "role": "Member", "spirit": "", "image": "/members/IMG_20260212_162509 - KAVIYA M CSE.webp" },
            { "name": "Meenatshi P", "role": "Member", "spirit": "", "image": "/members/Meenatshi_P-member_Operations - MEENATSHI P CSE.webp" },
            { "name": "Prithish A S", "role": "Member", "spirit": "", "image": "/members/IMG_20260127_171552_673 - PRITHISH A S CSE.webp" },
            { "name": "Rushil", "role": "Member", "spirit": "", "image": "/members/Rushil-Member_Operations - RUSHIL P BIO.webp" },
            { "name": "U S SANJEEVAN", "role": "Member", "spirit": "", "image": "/members/U S Sanjeevan-Member-Operations_Wing - U S SANJEEVAN EEE.webp" }
        ]
    },
    {
        "id": "events",
        "name": "EVENT PLANNING",
        "members": [
            { "name": "ASHWIN R", "role": "Lead", "spirit": "", "image": "/members/Ashwin 1 - ASHWIN R ECE.webp" },
            { "name": "Gururaje M", "role": "Sub lead", "spirit": "", "image": "/members/Gururaje_ Sub lead_Event planning Wing - GURURAJE M CE.webp" },
            { "name": "Kavinidhi R P", "role": "Member", "spirit": "", "image": "/members/Kavinidhi R P - Member_Event_Planning - KAVINIDHI R P AI&DS.webp" },
            { "name": "Madhav. Ba", "role": "Member", "spirit": "", "image": "/members/17039 - MADHAV BA Mech & Auto Engg.webp" },
            { "name": "Pritika Rajesh Kannan", "role": "Member", "spirit": "", "image": "/members/Pritika- Member-Event planning and coordination - PRITIKA RAJESH KANNAN ECE.webp" },
            { "name": "Suraj G", "role": "Member", "spirit": "", "image": "/members/passport size photo  - SURAJ G IT.webp" },
            { "name": "Vethavarna V", "role": "Member", "spirit": "", "image": "/members/20260301_191701 - VETHAVARNA V ECE.webp" }
        ]
    },
    {
        "id": "hospitality",
        "name": "HOSPITALITY",
        "members": [
            { "name": "Anjana Suresh", "role": "Lead", "spirit": "", "image": "/members/IMG_8082 - ANJANA SURESH ECE.jpeg" },
            { "name": "SANYU.J", "role": "Sub lead", "spirit": "", "image": "/members/Sanyu_hospitality. - SANYU J ECE.jpg" },
            { "name": "CHARULATHAA SR", "role": "Member", "spirit": "", "image": "/members/CharulathaaSR_member_Hospitality - CHARULATHAA S R CSE.JPG" },
            { "name": "ES Nishitha", "role": "Member", "spirit": "", "image": "/members/photo~2 - E S NISHITHA ECE.jpg" },
            { "name": "G Preethi", "role": "Member", "spirit": "", "image": "/members/G.Preethi Hospitality wing member_1 - G PREETHI ECE.jpg" },
            { "name": "Kavin Aravinth R", "role": "Member", "spirit": "", "image": "/members/IMG_20260219_162036_150 - KAVIN ARAVINTH R CSE.webp" },
            { "name": "Kavya K P", "role": "Member", "spirit": "", "image": "/members/kavya - member_hospitality - KAVYA KAMACHETLU PRAVEEN KUMAR AI&DS.jpg" },
            { "name": "PRINCY NIKITHA J", "role": "Member", "spirit": "", "image": "/members/Copy of Princy Nikitha_hospitalitymember - Princy Nikitha J ECE.jpg" },
            { "name": "Rogini D", "role": "Member", "spirit": "", "image": "/members/Rogini_Member_Hospitality wing - ROGINI D EEE.jpg" },
            { "name": "Rubasri R", "role": "Member", "spirit": "", "image": "/members/IMG-20260101-WA0097 - RUBASRI R ME.jpg" },
            { "name": "SHREE SUSHIL R K", "role": "Member", "spirit": "", "image": "/members/IMG_20240922_153423~2 - SHREE SUSHIL R K Mech & Auto Engg.jpg" },
            { "name": "Srikrishnan", "role": "Member", "spirit": "", "image": "/members/Srikrishnan-member-hospitality  - SRIKRISHNAN S CHE.jpg" },
            { "name": "Thiyaneshwaran A", "role": "Member", "spirit": "", "image": "/members/Thiyaneshwaran A-Member_hospitality - THIYANESHWARAN A ECE.jpg", "imagePosition": "center 10%" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "", "image": "/members/IMG_20260302_142427871 - VASANTH K N AI&DS.jpg" },
            { "name": "Vinodhini A", "role": "Member", "spirit": "", "image": "/members/IMG-20251224-WA0025 - VINODHINI A ECE.jpg" }
        ]
    },
    {
        "id": "marketing",
        "name": "MARKETING & SALES",
        "members": [
            { "name": "ARIVUNITHI R", "role": "Lead", "spirit": "", "image": "/members/Arivunithi R  - ARIVUNITHI R CSE.webp" },
            { "name": "Dakxin Shaswath Haran Y", "role": "Lead", "spirit": "", "image": "/members/IMG-20260124-WA0027(2) - 009 DAKXIN SHASWATH HARAN Y MN.jpg" },
            { "name": "AKSHAY V", "role": "Sub lead", "spirit": "", "image": "/members/AKSHAY_V_SUBLEAD_MARKETTING_TEAM - 005 AKSHAY V MEC.webp" },
            { "name": "NARAEN KARTICK A", "role": "Sub lead", "spirit": "", "image": "/members/Naraen Kartick-Sublead_Marketing - NARAEN KARTICK A CVE.webp" },
            { "name": "C Dhinesh", "role": "Member", "spirit": "", "image": "/members/Dhinesh-Member_Marketing - DHINESH C CSE.webp" },
            { "name": "M.logeshwaran", "role": "Member", "spirit": "", "image": "/members/IMG_20250926_234941_345 - LOGESHWARAN M ECE.webp" },
            { "name": "Madhan Balaji A", "role": "Member", "spirit": "", "image": "/members/Madhan-marketing-member - 026 MADHAN BALAJI A ME.webp" },
            { "name": "RB YUVAN", "role": "Member", "spirit": "", "image": "/members/RB Yuvan-Member_marketing and sales - RB YUVAN ECE.webp" },
            { "name": "Roshan M", "role": "Member", "spirit": "", "image": "/members/Roshan M - Member_Marketing - 116 ROSHAN M ECE.webp" },
            { "name": "SAISUNDAR S", "role": "Member", "spirit": "", "image": "/members/IMG-20260220-WA0012 - SAISUNDAR S EEE.webp" },
            { "name": "Santhoshkumar C", "role": "Member", "spirit": "", "image": "/members/IMG_20251114_221105 - SANTHOSHKUMAR C EEE.webp" },
            { "name": "Sucharitha Kapuluru", "role": "Member", "spirit": "", "image": "/members/IMG-20260115-WA0030(2) - SUCHARITHA KAPULURU AI&DS.webp" },
            { "name": "Sunil kumar v", "role": "Member", "spirit": "", "image": "/members/IMG-20260211-WA0027 - SUNIL KUMAR V CVE.webp" },
            { "name": "VASANTH K N", "role": "Member", "spirit": "", "image": "/members/VASANTH K N - MEMBER - MARKETING AND SALESs - VASANTH K N AI&DS.webp" },
            { "name": "Veeraiah V", "role": "Member", "spirit": "", "image": "/members/VEERAIAH V - Marketing and sales (1) - VEERAIAH V CHEM.webp", "imagePosition": "center 80%" },
            { "name": "Yuvakannan D", "role": "Member", "spirit": "", "image": "/members/20250925_213406 - YUVAKANNAN D CSE.webp" }
        ]
    },
    {
        "id": "production",
        "name": "PRODUCTION",
        "members": [
            { "name": "HARIHARAN A", "role": "Lead", "spirit": "", "image": "/members/IMG_20250201_220609_720 - HARIHARAN A CH.webp" },
            { "name": "ELAMUKHIL K", "role": "Member", "spirit": "", "image": "/members/mukhil id  - ELAMUKHIL K CHEM.jpg" },
            { "name": "LEO", "role": "Member", "spirit": "", "image": "/members/20250917_123426 - LIEOGIN PUNNIYA NESON R S CHEM.jpg" },
            { "name": "S Goutham", "role": "Member", "spirit": "", "image": "/members/Goutham_member_production - S GOUTHAM CSE.jpg" }
        ]
    },
    {
        "id": "sponsorship",
        "name": "SPONSORS",
        "members": [
            { "name": "KS Bharath", "role": "Lead", "spirit": "", "image": "/members/KS Bharath - Sponsorship Lead - 007 BHARATH KS MN.webp" },
            { "name": "A Mahathi Kavya", "role": "Member", "spirit": "", "image": "/members/IMG_8029 - A MAHATHI KAVYA ECE.webp" },
            { "name": "Akshara Srivatsan", "role": "Member", "spirit": "", "image": "/members/0173b395-cfc5-4e47-ad25-9784265dc42f - AKSHARA SRIVATSAN CSE.webp" },
            { "name": "Anton Jacob", "role": "Member", "spirit": "", "image": "/members/IMG_7578 - 010 ANTON JACOB W ME.webp" },
            { "name": "Arpitha Paraneetharan", "role": "Member", "spirit": "", "image": "/members/Arpitha- Sponsorship wing - ARPITHA PARANEETHARAN CSE.webp", "imagePosition": "center" },
            { "name": "Athmaja Gugan", "role": "Member", "spirit": "", "image": "/members/Athmaja- Member_Sponsorship - ATHMAJA G ECE.webp" },
            { "name": "Buvanesh Raaj B Y", "role": "Member", "spirit": "", "image": "/members/WhatsApp Image 2026-03-01 at 9.30.55 PM - 013 BUVANESH RAAJ B Y ME.webp" },
            { "name": "Hariharan K", "role": "Member", "spirit": "", "image": "/members/IMG_20260311_084530 - HARIHARAN K AI&DS.jpg" },
            { "name": "Harshitha R", "role": "Member", "spirit": "", "image": "/members/Snapchat-1276341197_Original - HARSHITHA R ECE.webp" },
            { "name": "S. Ananthika", "role": "Member", "spirit": "", "image": "/members/1772435076377 - S ANANTHIKA AI&DS.webp" },
            { "name": "Shaik aadhil", "role": "Member", "spirit": "", "image": "/members/cf3184e0-3387-4851-b43d-921c8285cf23 - SHAIK AADHIL S AI&DS.webp" },
            { "name": "Sri Varsha S", "role": "Member", "spirit": "", "image": "/members/sri_varsha-member-sponsorship - SRI VARSHA S CSE.webp" },
            { "name": "V Lingesh", "role": "Member", "spirit": "", "image": "/members/V.Lingesh-Member_sponsorship - V LINGESH CHEM.webp" },
            { "name": "Yaathra P", "role": "Member", "spirit": "", "image": "/members/IMG-20251025-WA0051~2 - YAATHRA P CSE.webp" }
        ]
    },
    {
        "id": "vigilance",
        "name": "VIGILANCE",
        "members": [
            { "name": "DHAYAKAR S", "role": "Lead", "spirit": "", "image": "/members/dhayakar.jpg" },
            { "name": "Venkat Sri Charan U", "role": "Sub lead", "spirit": "", "image": "/members/IMG_20250904_182443 - VENKAT SRI CHARAN U ECE.jpg" },
            { "name": "A.Bharath Rajh", "role": "Member", "spirit": "", "image": "/members/Bharath Rajh_Member_Vigilance Wing - 011_A.BHARATH RAJH _MECH" },
            { "name": "Adhitya R", "role": "Member", "spirit": "", "image": "/members/Adhitya-Member_Vigilance  - ADHITYA R EEE.jpg" },
            { "name": "BALAJI S", "role": "Member", "spirit": "", "image": "/members/IMG-20250922-WA0018~3 - BALAJI S EEE.jpg" },
            { "name": "K K MUKESH RAM", "role": "Member", "spirit": "", "image": "/members/_MG_0679 - K K MUKESH RAM ECE.JPG" },
            { "name": "KESAVARTHAN S", "role": "Member", "spirit": "", "image": "/members/IMG_0570 - 021 KESAVARTHAN S ME.JPG" },
            { "name": "LAVANYA C", "role": "Member", "spirit": "", "image": "/members/LAVANYA C _VIGILANCE  - LAVANYA C ECE.jpg" },
            { "name": "LOHID KISHORE N S", "role": "Member", "spirit": "", "image": "/members/20260124_113349 - 303_LOHID KISHORE N.S MEC.png" },
            { "name": "MADHU MITHA N", "role": "Member", "spirit": "", "image": "/members/Madhu_vigilance - MADHU MITHA N ECE.jpg" },
            { "name": "Meyyalagan T", "role": "Member", "spirit": "", "image": "/members/file_0000000019d0720b96c609f5a8889ecc - MEYYALAGAN T EEE.png" },
            { "name": "MUTHUVEERAN D", "role": "Member", "spirit": "", "image": "/members/IMG20250513171011 - MUTHUVEERAN D CSE.jpg" },
            { "name": "NEHAA SRI M S", "role": "Member", "spirit": "", "image": "/members/NEHAA SRI M S_VIGILANCE  - Nehaa Sri M S ECE.jpg" },
            { "name": "PEYAL NEERAN TS", "role": "Member", "spirit": "", "image": "/members/PEYAL NEERAN T S CIVIL.jpg" },
            { "name": "Rohith kumaar P R", "role": "Member", "spirit": "", "image": "/members/IMG_20260312_170600 - ROHITH KUMAAR P R ECE.jpg" },
            { "name": "Saranraj S", "role": "Member", "spirit": "", "image": "/members/IMG-20260304-WA0101 - SARANRAJ S EEE.jpg" },
            { "name": "Sridharshini M", "role": "Member", "spirit": "", "image": "/members/IMG_20260312_094606 - SRIDHARSHINI M EEE.jpg" },
            { "name": "Sumithra S", "role": "Member", "spirit": "", "image": "/members/Sumithra S_Member_Vigilance - SUMITHRA S CSE.jpg" },
            { "name": "Thannigaipriya P S", "role": "Member", "spirit": "", "image": "/members/Thannigaipriya P S _Member_Vigilance wing - THANNIGAIPRIYA PS EEE.jpg" },
            { "name": "Thirumurugan S", "role": "Member", "spirit": "", "image": "/members/Photo from Thirumurugan - THIRUMURUGAN S CSE.S" },
            { "name": "Vineeth I", "role": "Member", "spirit": "", "image": "/members/IMG_4028 - VINEETH I CSE.jpeg" }
        ]
    },
    {
        "id": "design",
        "name": "VISUAL DESIGN",
        "members": [
            { "name": "ASHISH S", "role": "Lead", "spirit": "", "image": "/members/IMG_9669 (1) - ASHISH S CSE.webp" },
            { "name": "DHANUSH K", "role": "Sub lead", "spirit": "", "image": "/members/IMG_20250930_155804 - 007 DHANUSH K ME.jpg" },
            { "name": "Harish K", "role": "Member", "spirit": "", "image": "/members/Harish K - Member - Design - HARISH K AI&DS.webp" },
            { "name": "Thirunesh S", "role": "Member", "spirit": "", "image": "/members/photo - THIRUNESH S Mech & Auto Engg.webp" },
            { "name": "Yeseswini.S", "role": "Member", "spirit": "", "image": "/members/yeseswini-member_design - YESESWINI S AI&DS.webp" },
            { "name": "Yogendra SK", "role": "Member", "spirit": "", "image": "/members/IMG_20250329_175034 - 056 YOGENDRA S K ME.webp" }
        ]
    },
    {
        "id": "web",
        "name": "WEB ARCHITECTS",
        "members": [
            { "name": "B jashwanth shankar", "role": "Member", "spirit": "", "image": "/members/jashwanth-member_web - B JASHWANTH SHANKAR CSE.webp", "imagePosition": "center" },
            { "name": "Balakrishnan.R", "role": "Member", "spirit": "", "image": "/members/Balakrishnan.webp", "imagePosition": "center" },
            { "name": "Vishal V", "role": "Member", "spirit": "", "image": "/members/IMG_20260311_085514 - VISHAL V IT.jpg" }
        ]
    }
];