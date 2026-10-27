/**
 * Visual Assets and Media Catalog
 * 
 * Curated high-resolution education photography from Unsplash
 * configured for Next.js Image optimization (`images.unsplash.com`).
 */

// ============================================================================
// 1. Interfaces
// ============================================================================

export interface HeroImageItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
  tag?: string;
}

export interface HeroImagesCatalog {
  mainCollaboration: HeroImageItem;
  campusExterior: HeroImageItem;
  libraryStudent: HeroImageItem;
}

export type AcademicStageKey = 'early-years' | 'primary' | 'middle-school' | 'secondary';

export interface AcademicStageImageItem {
  id: string;
  stageKey: AcademicStageKey;
  stageTitle: string;
  gradeSpan: string;
  focus: string;
  imageUrl: string;
  alt: string;
  description: string;
  highlights: string[];
}

export interface AcademicStageImagesCatalog {
  earlyYears: AcademicStageImageItem;
  primary: AcademicStageImageItem;
  middleSchool: AcademicStageImageItem;
  secondary: AcademicStageImageItem;
}

export type FacilityCategory =
  | 'STEM & Research'
  | 'Computing'
  | 'Learning Resource'
  | 'Sports'
  | 'Creative Arts'
  | 'Dining & Nutrition'
  | 'Health & Safety';

export interface FacilityImageItem {
  id: string;
  name: string;
  category: FacilityCategory;
  imageUrl: string;
  alt: string;
  description: string;
  features: string[];
}

export interface FacilityImagesCatalog {
  scienceLab: FacilityImageItem;
  roboticsCoding: FacilityImageItem;
  libraryCommons: FacilityImageItem;
  athleticTurf: FacilityImageItem;
  performingArts: FacilityImageItem;
  cafeteriaNutrition: FacilityImageItem;
  medicalSuite: FacilityImageItem;
}

export interface FacultyProfile {
  id: string;
  name: string;
  role: string;
  department: string;
  credentials: string;
  experienceYears: number;
  imageUrl: string;
  avatarUrl?: string;
  alt: string;
  bio: string;
  email?: string;
  specializations: string[];
}

export type GalleryCategory = 'classrooms' | 'stem' | 'sports' | 'arts' | 'campus';

export interface CampusLifeGalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  caption: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  childGrade: string;
  profession: string;
  avatarUrl: string;
  quote: string;
  type: 'parent' | 'student';
  rating?: number;
}

// ============================================================================
// 2. Hero Images
// ============================================================================

export const heroImages: HeroImagesCatalog & { all: HeroImageItem[] } = {
  mainCollaboration: {
    id: 'hero-collab',
    title: 'Collaborative Excellence & Inquisitive Minds',
    subtitle: 'Fostering future innovators through collaborative, inquiry-driven learning in an inspiring academic sanctuary.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Diverse high school students enthusiastically collaborating around laptops and notebooks in a modern learning commons',
    tag: 'Collaboration',
  },
  campusExterior: {
    id: 'hero-campus',
    title: 'Contemporary Purpose-Built Campus in Uttara',
    subtitle: 'A verdant 3-acre educational campus engineered for intellectual growth, creative discovery, and athletic excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Scenic exterior view of modern school campus architecture with landscaped green lawns and walking corridors',
    tag: 'Campus Grounds',
  },
  libraryStudent: {
    id: 'hero-library',
    title: 'A World of Boundless Discovery',
    subtitle: 'Cultivating scholarly curiosity and a lifelong love for reading in our state-of-the-art Knowledge Commons.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    alt: 'Young student with a warm smile studying and reading books in the bright, naturally lit school library',
    tag: 'Academic Focus',
  },
  all: [],
};

// Populate the helper array
heroImages.all = [
  heroImages.mainCollaboration,
  heroImages.campusExterior,
  heroImages.libraryStudent,
];

export const heroImagesList: HeroImageItem[] = heroImages.all;

// ============================================================================
// 3. Academic Stage Images
// ============================================================================

export const academicStageImages: AcademicStageImagesCatalog & { all: AcademicStageImageItem[] } = {
  earlyYears: {
    id: 'stage-early-years',
    stageKey: 'early-years',
    stageTitle: 'Early Childhood & Foundation Stage',
    gradeSpan: 'Playgroup to Kindergarten',
    focus: 'Playful Sensory Discovery & Social-Emotional Growth',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Young children engaged in playful sensory learning with colorful tactile wooden building blocks',
    description: 'A nurturing environment where early motor skills, language exploration, and relational empathy are developed through guided sensory play and Montessori-inspired discovery.',
    highlights: [
      'Tactile manipulatives & Montessori discovery stations',
      'Phonics-rich storytelling and dual-language immersion',
      'Gross & fine motor development obstacle gardens',
    ],
  },
  primary: {
    id: 'stage-primary',
    stageKey: 'primary',
    stageTitle: 'Primary Education Years',
    gradeSpan: 'Grade 1 to Grade 5',
    focus: 'Hands-on Classroom Inquiry & Foundational Mastery',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Primary students with hands raised eagerly during an interactive and engaging classroom discussion',
    description: 'Active learning classrooms combining foundational numeracy, bilingual literacy, and environmental science with collaborative project-based inquiries.',
    highlights: [
      'Interactive smartboard investigations & thematic units',
      'Dual-medium curriculum (English Version & Bangla Medium)',
      'Character virtues, leadership buddies, and public speaking',
    ],
  },
  middleSchool: {
    id: 'stage-middle-school',
    stageKey: 'middle-school',
    stageTitle: 'Middle School Bridge',
    gradeSpan: 'Grade 6 to Grade 8',
    focus: 'STEM Experiments, Scientific Method & Independent Thinking',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Middle school students conducting science laboratory experiments with glassware and analytical instruments',
    description: 'Bridging concrete concepts into rigorous scientific hypotheses, analytical math, and interdisciplinary humanities in preparation for board curricula.',
    highlights: [
      'Dedicated chemistry, biology, and physics exploratory labs',
      'Math Olympiad coaching and computational thinking clubs',
      'Inter-house debate tournaments and structured research essays',
    ],
  },
  secondary: {
    id: 'stage-secondary',
    stageKey: 'secondary',
    stageTitle: 'Secondary School Certificate (SSC)',
    gradeSpan: 'Grade 9 to Grade 10',
    focus: 'Advanced Academic Rigor, Science & Business Pathways',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'High school secondary students engaged in focused computer lab programming and digital design study',
    description: 'Preparation for national SSC board examinations with comprehensive laboratory sessions, intensive mock assessments, and personalized career counseling.',
    highlights: [
      'Comprehensive Science and Business Studies tracks',
      'Weekly diagnostic model tests with detailed analytical feedback',
      'Advanced digital literacy, Python coding, and university prep',
    ],
  },
  all: [],
};

// Populate the helper array
academicStageImages.all = [
  academicStageImages.earlyYears,
  academicStageImages.primary,
  academicStageImages.middleSchool,
  academicStageImages.secondary,
];

export const academicStageImagesList: AcademicStageImageItem[] = academicStageImages.all;

// ============================================================================
// 4. Facility Images
// ============================================================================

export const facilityImages: FacilityImagesCatalog & { all: FacilityImageItem[] } = {
  scienceLab: {
    id: 'fac-science-lab',
    name: 'Advanced Science & Innovation Lab',
    category: 'STEM & Research',
    imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern, pristine school chemistry and biology laboratory equipped with microscopes and glassware',
    description: 'Fully equipped multi-station laboratory featuring chemical fume hoods, precision digital scales, binocular compound microscopes, and comprehensive safety stations.',
    features: [
      'Independent stations for Chemistry, Physics, and Biology',
      'High-grade fume extraction and emergency eyewash stations',
      'Individual experimentation kits for SSC practical coursework',
    ],
  },
  roboticsCoding: {
    id: 'fac-robotics-coding',
    name: 'Robotics & Computational Thinking Suite',
    category: 'Computing',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-tech electronics and robotics workshop table with microcontrollers and coding workstations',
    description: 'Dedicated innovation lab equipped with Arduino microcontrollers, Raspberry Pi kits, 3D printers, and dual-display developer workstations for young creators.',
    features: [
      'Arduino, LEGO Mindstorms & VEX robotics build kits',
      'Rapid 3D prototyping and CAD modeling stations',
      'High-speed fiber connectivity with secure sandboxed coding environments',
    ],
  },
  libraryCommons: {
    id: 'fac-library-commons',
    name: 'Knowledge Commons & Media Center',
    category: 'Learning Resource',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunlit modern school library with extensive book stacks and collaborative reading desks',
    description: 'A two-story open architectural reading haven housing more than 15,000 physical volumes, digital scholarly databases, quiet study carrels, and discussion lounges.',
    features: [
      'Extensive bilingual collection covering NCTB, world literature, and reference works',
      'Digital OPAC search terminals with Kindle e-reader lending library',
      'Acoustically buffered quiet reading pods and group seminar rooms',
    ],
  },
  athleticTurf: {
    id: 'fac-athletic-turf',
    name: 'Multi-Sport Synthetic Turf & Athletic Ground',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pristine all-weather green synthetic turf athletic field marked for football and track sports',
    description: 'All-weather, FIFA-standard synthetic grass pitch and shock-absorbing running track supporting inter-school football tournaments, cricket nets, and track events.',
    features: [
      'All-weather shock-absorbing artificial turf field',
      'Enclosed cricket practice batting lanes with automated bowling machines',
      'Perimeter athletic sprint track and high-intensity LED evening floodlights',
    ],
  },
  performingArts: {
    id: 'fac-performing-arts',
    name: 'Performing Arts & Black Box Studio',
    category: 'Creative Arts',
    imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    alt: 'Contemporary performing arts theater stage illuminated by professional stage spotlights',
    description: 'Soundproofed multipurpose performance space outfitted with professional stage lighting, audio mixers, acoustic wall panels, and sprung hardwood flooring.',
    features: [
      'Acoustically calibrated studio with pro audio recording interfaces',
      'Sprung hardwood floor for dance rehearsals and martial arts',
      'Modular 250-seat retractable audience seating for theatrical productions',
    ],
  },
  cafeteriaNutrition: {
    id: 'fac-cafeteria-nutrition',
    name: 'Cafeteria & Wellness Dining Commons',
    category: 'Dining & Nutrition',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bright, clean modern dining hall with natural timber tables and communal seating',
    description: 'Bright, hygienic, and welcoming dining hall serving nutritionist-curated balanced lunches, fresh fruits, and wholesome snacks in an atmosphere promoting table etiquette.',
    features: [
      'Nutritionist-monitored balanced meal plans meeting child growth guidelines',
      'Strict food-safety certifications and stainless steel commercial kitchen',
      'Waste-segregation and organic composting recycling stations',
    ],
  },
  medicalSuite: {
    id: 'fac-medical-suite',
    name: 'Healthcare & Wellness Infirmary',
    category: 'Health & Safety',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Clean, serene medical clinic suite with examination bed and modern healthcare equipment',
    description: 'Fully equipped campus health clinic staffed full-time by a licensed physician and certified school nurse, providing immediate medical care, triage, and health screenings.',
    features: [
      'Full-time registered nurse and attending pediatrician on duty',
      'Automated External Defibrillator (AED) and immediate emergency triage kits',
      'Routine annual vision, dental, BMI, and postural screenings for all students',
    ],
  },
  all: [],
};

// Populate the helper array
facilityImages.all = [
  facilityImages.scienceLab,
  facilityImages.roboticsCoding,
  facilityImages.libraryCommons,
  facilityImages.athleticTurf,
  facilityImages.performingArts,
  facilityImages.cafeteriaNutrition,
  facilityImages.medicalSuite,
];

export const facilityImagesList: FacilityImageItem[] = facilityImages.all;

// ============================================================================
// 5. Faculty Profiles
// ============================================================================

export const facultyProfiles: FacultyProfile[] = [
  {
    id: 'fac-principal',
    name: 'Dr. Tariqul Islam Chowdhury',
    role: 'Principal & Academic Director',
    department: 'School Leadership',
    credentials: 'Ph.D. in Educational Leadership (Durham), M.Sc. in Applied Physics (DU)',
    experienceYears: 24,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    alt: 'Portrait of Dr. Tariqul Islam Chowdhury, Principal of Future Vision Academy',
    bio: 'Dr. Chowdhury brings over two decades of international and national leadership in curriculum innovation. He believes that true education balances rigorous intellectual scholarship with moral courage, ensuring every student develops into an empathetic global contributor.',
    email: 'principal@futurevisionacademy.edu.bd',
    specializations: [
      'Curriculum Architecture',
      'Teacher Mentorship & Pedagogy',
      'Strategic Institutional Planning',
    ],
  },
  {
    id: 'fac-head-stem',
    name: 'Dr. Nusrat Jahan',
    role: 'Head of STEM & Digital Innovation',
    department: 'Science & Technology',
    credentials: 'Ph.D. in Computer Science (BUET), B.Sc. in Electrical & Electronic Engineering',
    experienceYears: 14,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    alt: 'Portrait of Dr. Nusrat Jahan, Head of STEM and Digital Innovation',
    bio: 'An award-winning researcher and national robotics coach, Dr. Jahan inspires students to explore microcontroller engineering, computational algorithms, and experiential scientific modeling from middle school through graduation.',
    email: 'stem.director@futurevisionacademy.edu.bd',
    specializations: [
      'Robotics & Embedded Systems',
      'Algorithmic Problem Solving',
      'Olympiad Research Mentorship',
    ],
  },
  {
    id: 'fac-head-primary',
    name: 'Shamima Akhter',
    role: 'Head of Primary Years & Child Development',
    department: 'Primary Education',
    credentials: 'M.Ed. in Early Childhood Pedagogy (Univ. of Sydney), B.A. (Hons) in English Literature',
    experienceYears: 16,
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    alt: 'Portrait of Shamima Akhter, Head of Primary Years',
    bio: 'With extensive training in child psychology and experiential literacy, Shamima has pioneered child-centered discovery methods that build foundational confidence, linguistic fluency, and emotional empathy in early learners.',
    email: 'primary.head@futurevisionacademy.edu.bd',
    specializations: [
      'Early Childhood Literacy',
      'Montessori-Inspired Classroom Design',
      'Differentiated Learning Support',
    ],
  },
  {
    id: 'fac-head-sports',
    name: 'Faruk Hasan',
    role: 'Head of Sports & Student Wellbeing',
    department: 'Physical Education & Athletics',
    credentials: 'M.P.Ed. in Sports Science, Certified AFC Youth Coach & Wilderness First Responder',
    experienceYears: 12,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    alt: 'Portrait of Faruk Hasan, Head of Sports & Student Wellbeing',
    bio: 'A passionate advocate for youth sportsmanship and physical wellness, Coach Faruk leads the academy athletics programs with an emphasis on discipline, mental resilience, fair play, and lifelong healthy habits.',
    email: 'athletics@futurevisionacademy.edu.bd',
    specializations: [
      'Youth Athletic Conditioning',
      'Football Coaching & Tournament Tactics',
      'Student Mental Fitness & Mindfulness',
    ],
  },
];

// ============================================================================
// 6. Campus Life Gallery (12 items)
// ============================================================================

export const campusLifeGallery: CampusLifeGalleryItem[] = [
  {
    id: 'gal-stem-robotics',
    title: 'Robotics Prototyping & Circuit Engineering',
    category: 'stem',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students assembling microcontrollers and testing sensor calibrations in the Robotics Lab.',
    alt: 'Students collaborating over circuit boards and electronic robotics components on workbench',
  },
  {
    id: 'gal-class-interaction',
    title: 'Socratic Dialogue & Active Classroom Inquiry',
    category: 'classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: 'Primary students eagerly raising their hands during an interactive mathematics lecture.',
    alt: 'Classroom students raising hands enthusiastically with teacher at front board',
  },
  {
    id: 'gal-sports-soccer',
    title: 'Inter-House Soccer Cup on Synthetic Turf',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80',
    caption: 'Student athletes demonstrating teamwork and competitive spirit on the championship turf pitch.',
    alt: 'Youth soccer action on vibrant green artificial sports turf under daylight',
  },
  {
    id: 'gal-arts-painting',
    title: 'Fine Arts Studio & Expressive Canvas Workshop',
    category: 'arts',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Young artists mastering oil painting techniques, color mixing, and visual perspective.',
    alt: 'Students painting expressive artwork on easels in the well-lit fine arts studio',
  },
  {
    id: 'gal-campus-grounds',
    title: 'Central Green Quadrangle & Shaded Walkways',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    caption: 'The serene 3-acre green quadrangle where students relax, read, and converse between periods.',
    alt: 'Modern campus pavilions with manicured green lawns and students walking on paved paths',
  },
  {
    id: 'gal-stem-chemistry',
    title: 'Molecular Chemistry & Analytical Titrations',
    category: 'stem',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Secondary science scholars measuring reaction rates using precision glassware and digital sensors.',
    alt: 'Laboratory glassware with colored reagents and pipettes during experiment',
  },
  {
    id: 'gal-class-collaboration',
    title: 'Peer Study & Collaborative Project Research',
    category: 'classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Students sharing research notes and developing multimedia presentations in team pods.',
    alt: 'Diverse students working collaboratively at a conference table with open laptops and notebooks',
  },
  {
    id: 'gal-arts-theater',
    title: 'Theatrical Performance & Musical Orchestration',
    category: 'arts',
    imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    caption: 'Annual cultural festival drama rehearsal under the illumination of the black box stage.',
    alt: 'Dramatic stage performance with dramatic lighting and actors on school auditorium stage',
  },
  {
    id: 'gal-sports-track',
    title: 'Track & Field Sprint Conditioning',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80',
    caption: 'Athletic teams training for regional inter-school sports meets on the dedicated running lanes.',
    alt: 'Pristine running track curves with green sports field background',
  },
  {
    id: 'gal-campus-library',
    title: 'Knowledge Commons Multi-Level Reading Lofts',
    category: 'campus',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious high-ceilinged library commons offering a tranquil sanctuary for quiet study.',
    alt: 'Architectural interior of a modern multi-level library with warm wooden study tables',
  },
  {
    id: 'gal-class-early-sensory',
    title: 'Sensory Montessori Learning Corner',
    category: 'classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Kindergarten children discovering geometrical shapes and spatial balance using wooden blocks.',
    alt: 'Children engaged in tactile play with wooden educational blocks in early learning classroom',
  },
  {
    id: 'gal-stem-computing',
    title: 'Digital Computing & Software Engineering',
    category: 'stem',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    caption: 'Grade 9 and 10 students building web applications and Python algorithms in the computer lab.',
    alt: 'High school students seated at high-resolution monitors coding and designing interfaces',
  },
];

// ============================================================================
// 7. Testimonials (4 realistic founding parents and students)
// ============================================================================

export const testimonials: TestimonialItem[] = [
  {
    id: 'test-parent-1',
    name: 'Engr. Mahbubul Alam',
    role: 'Founding Parent',
    childGrade: 'Parent of Aryan (Grade 8) & Sarah (Grade 4)',
    profession: 'Principal Cloud Solutions Architect',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    quote: 'Future Vision Academy has struck the perfect harmony between rigorous NCTB curriculum mastery and modern 21st-century STEM thinking. Aryan has flourished in the robotics club, while Sarah\'s reading confidence blossomed within weeks of joining the Primary Years program. The teachers are genuinely invested in each child\'s character.',
    type: 'parent',
    rating: 5,
  },
  {
    id: 'test-parent-2',
    name: 'Dr. Selina Parveen',
    role: 'Founding Parent',
    childGrade: 'Parent of Rayan (Grade 6)',
    profession: 'Consultant Pediatrician & Associate Professor',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    quote: 'As a medical practitioner, what impressed me most is the school\'s uncompromising commitment to health, emotional wellness, and balanced nutrition. The campus culture protects children from academic burnout while inspiring genuine intellectual curiosity and peer kindness.',
    type: 'parent',
    rating: 5,
  },
  {
    id: 'test-student-1',
    name: 'Tanzeem Hossain',
    role: 'Student Council President',
    childGrade: 'Grade 10 (SSC Science Candidate)',
    profession: 'National Math Olympiad Finalist',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    quote: 'The faculty here do not just teach textbooks—they teach us how to think, question, and innovate. Having teachers who stay after hours in the science lab to help us debug Python scripts or prepare for science fairs has shaped who I am as an aspiring engineer.',
    type: 'student',
    rating: 5,
  },
  {
    id: 'test-parent-3',
    name: 'Roxana Haque',
    role: 'Founding Parent',
    childGrade: 'Parent of Zara (Playgroup) & Zayd (Grade 2)',
    profession: 'Head of Human Resources & Development',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    quote: 'Transitioning our toddlers into schooling was an anxious milestone, but the warmth and patience of the Early Childhood team dissolved our worries completely. The sensory play corners and dedicated reading nooks make learning feel like a joyful daily adventure.',
    type: 'parent',
    rating: 5,
  },
];

// ============================================================================
// 8. Convenience Filtering Helpers
// ============================================================================

/**
 * Filter campus life gallery by category, or return all if category is omitted
 */
export function getGalleryByCategory(category?: GalleryCategory): CampusLifeGalleryItem[] {
  if (!category) return campusLifeGallery;
  return campusLifeGallery.filter((item) => item.category === category);
}

/**
 * Retrieve a faculty profile by id
 */
export function getFacultyById(id: string): FacultyProfile | undefined {
  return facultyProfiles.find((faculty) => faculty.id === id);
}

/**
 * Retrieve facility image specifications by facility id
 */
export function getFacilityById(id: string): FacilityImageItem | undefined {
  return facilityImages.all.find((facility) => facility.id === id);
}
