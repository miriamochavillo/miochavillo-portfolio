export const profileInfo = {
  name: 'Miriam Imam Ochavillo',
  title:
    'Software Engineer | PRC Licensed Electronics Engineer and Electronics Technician',
  avatar: '/src/app/assets/images/mio.jpg',
  email: 'miriam.iochavillo@gmail.com',
  phone: '+63 929 249 6015',
  location: 'Cebu City, Cebu, Philippines',
  github: 'miriamochavillo',
  aboutMe: `I am a PRC-licensed Electronics Engineer and Electronics Technician with a strong foundation in Electronics and Communications Engineering, both theoretically and practically. I am highly adaptable, collaborative, and solution-driven, with a keen interest in applying my skills in Information Technology as well.`,
  introduction: `Hi, I'm Miriam Ochavillo — a software engineer with a strong passion for building intuitive, efficient, and user-focused web
								applications.I enjoy transforming ideas into functional products and
								solving real-world problems through clean code, thoughtful
								architecture, and continuous improvement. I’m a fast learner who
								thrives in dynamic environments, and I’m always eager to explore
								new technologies, tools, and development practices. Whether
								working independently or collaborating with a team, I bring
								curiosity, adaptability, and a commitment to producing
								high-quality work. I value open communication, shared learning,
								and helping create solutions that not only work well but also
								deliver meaningful impact. I’m always excited for new challenges
								and opportunities where I can grow, contribute, and support
								others in building something great.`,
};

export const educationData = [
  {
    school: 'UNIVERSITY OF SAN CARLOS',
    level: 'Tertiary',
    details: ['Bachelor of Science in Electronics Engineering (2020-2024)'],
  },
  {
    school: 'TAGBILARAN CITY SCIENCE HIGH SCHOOL',
    level: 'Secondary',
    details: [
      'Science Technology Engineering and Mathematics Strand',
      'Senior High School (2018-2020)',
      'Junior High School (2014-2018)',
    ],
  },
  {
    school: 'GARCIA-HERNANDEZ CENTRAL ELEMENTARY SCHOOL',
    level: 'Primary',
    details: ['(2008-2014)'],
  },
];

enum SkillType {
  ElectronicsEngineering = 'Electronics Engineering',
  SoftwareEngineering = 'Software Engineering',
  GraphicDesign = 'Graphic Design',
  ProjectManagement = 'Project Management',
  TechnicalWriting = 'Technical Writing',
  LanguageSkills = 'Language Skills',
}

export const skills = [
  {
    skill: 'Circuit Design',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'Signal Processing',
    skillType: SkillType.ElectronicsEngineering,
  },

  {
    skill: 'HTML',
    skillType: SkillType.SoftwareEngineering,
  },
  {
    skill: 'CSS',
    skillType: SkillType.SoftwareEngineering,
  },
  {
    skill: 'JavaScript',
    skillType: SkillType.SoftwareEngineering,
  },
  {
    skill: 'React',
    skillType: SkillType.SoftwareEngineering,
  },
  {
    skill: 'Node.js',
    skillType: SkillType.SoftwareEngineering,
  },
  {
    skill: 'Autodesk AutoCAD',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'MatLab',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'LTspice',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'Adobe Photoshop',
    skillType: SkillType.GraphicDesign,
  },
  {
    skill: 'Adobe Illustrator',
    skillType: SkillType.GraphicDesign,
  },
  {
    skill: 'Autodesk TinkerCAD',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'Autodesk SketchUp',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'Autodesk Sketchbook',
    skillType: SkillType.ElectronicsEngineering,
  },
  {
    skill: 'Figma',
    skillType: SkillType.GraphicDesign,
  },
  {
    skill: 'Microsoft Office',
    skillType: SkillType.TechnicalWriting,
  },
  {
    skill: 'Canva',
    skillType: SkillType.GraphicDesign,
  },
  {
    skill: 'Events Management',
    skillType: SkillType.ProjectManagement,
  },
  {
    skill: 'Graphic Layout and Design',
    skillType: SkillType.ProjectManagement,
  },
  {
    skill: 'Logo and Merch Design',
    skillType: SkillType.ProjectManagement,
  },
  {
    skill: 'Research',
    skillType: SkillType.TechnicalWriting,
  },
  {
    skill: 'Technical Documentation',
    skillType: SkillType.TechnicalWriting,
  },
  {
    skill: 'English (Fluent)',
    skillType: SkillType.LanguageSkills,
  },
  {
    skill: 'Filipino (Fluent)',
    skillType: SkillType.LanguageSkills,
  },
  {
    skill: 'Cebuano (Native)',
    skillType: SkillType.LanguageSkills,
  },
  {
    skill: 'French (Basic)',
    skillType: SkillType.LanguageSkills,
  },
];
