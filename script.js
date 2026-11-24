/*
  LET REVIEWER QUESTION BANK
  Edit the questions below to add your own reviewer items.
  correctAnswer is the original choice index: 0 = A, 1 = B, 2 = C, 3 = D.
  You can add as many question objects as you need in each category.
*/
const quizCategories = [
 {
    id: "gen-a",
    name: "A - GENERAL EDUCATION",
    short: "GE",
    questions: [
      {
        question: "La Solidaridad being the principal organ of the Reform Movement in Spain aimed towards achieving assimilation of Philippines to Spain. The known triumvirate of the La Solidaridad were",
        choices: [
          "Rizal, Lopez Jaena and Ponce",
          "Rizal, del Pilar and Paterno",
          "Rizal, Lopez and Luna",
          "Rizal, Lopez Jaena and del Pilar"
        ],
        correctAnswer: 3,
        explanation: "Jose Rizal, Graciano Lopez Jaena, and Marcelo H. del Pilar formed the famous triumvirate of the Propaganda Movement and La Solidaridad."
      },
      {
        question: "What are the three branches of the Philippine government?",
        choices: [
          "AFP, PNP, PMA",
          "Senate, House of Representative, Supreme court",
          "President, Vice-President, Chief Justice",
          "Executive, Legislative, Judiciary"
        ],
        correctAnswer: 3,
        explanation: "The Philippine government operates under a separation of powers divided into the Executive, Legislative, and Judiciary branches."
      },
      {
        question: "The congress of the Philippines is the National legislature that is bicameral in nature. Its known characteristics are as follows. EXCEPT",
        choices: [
          "The Senate is composed of 24 senators in which half are elected every six years.",
          "The House of Representatives do not represent sectoral groups",
          "The Senators do not represent any geographical district",
          "There are more than 250 House of Representative members"
        ],
        correctAnswer: 1,
        explanation: "Through the party-list system, the House of Representatives does include representatives from marginalized and underrepresented sectoral groups."
      },
      {
        question: "This refers to an art produced at the present period of time that reflects the current by utilizing classical techniques in drawing, painting and sculpting",
        choices: [
          "Contemporary-Modern Art",
          "Contemporary-Traditional Art",
          "Contemporary-Antique Art",
          "Contemporary-Classical Art"
        ],
        correctAnswer: 3,
        explanation: "Contemporary-Classical Art combines present-day themes with traditional classical techniques in drawing, painting, and sculpture."
      },
      {
        question: "Rizal had his words for the revolution: \"Reforms to be beneficial, must come from above, and those which come from below are irregularly gained and uncertain.\" Rizal is model of:",
        choices: [
          "Non-violence",
          "Rebellion",
          "Armed struggle",
          "Filibusterism"
        ],
        correctAnswer: 0,
        explanation: "Rizal advocated peaceful, orderly reforms through education and diplomacy rather than violent armed uprising."
      },
      {
        question: "There were three movements that shaped the history of Asia: Islamicization (the spread of Islam), Indianization (the spread of Hinduism and Buddhism) and Christianization (the spread of Christianity). Which only country was Christianized?",
        choices: ["Singapore", "The Philippines", "Taiwan", "Korea"],
        correctAnswer: 1,
        explanation: "Following more than three centuries of Spanish colonization, the Philippines became the predominantly Christian nation in Asia."
      },
      {
        question: "He was born 551 BC and he greatly influence his followers to adhere to personal and government morality, correctness of social relationship, justice and sincerity",
        choices: ["Confucius", "Lao Tzu", "Siddharta Gautama", "Muhammad"],
        correctAnswer: 0,
        explanation: "Confucius (551–479 BC) taught ethical principles emphasizing personal virtue, harmonious social relationships, justice, and moral governance."
      },
      {
        question: "This economic system encourages private ownership, free enterprise, capital accumulation with labor and competitive markets.",
        choices: ["Socialism", "Utilitarianism", "Communism", "Capitalism"],
        correctAnswer: 3,
        explanation: "Capitalism is characterized by private property, free markets, profit motive, and competitive enterprise."
      },
      {
        question: "Which philosophy believes in harmony with nature and we should live with balance and virtue",
        choices: ["Taoism", "Confucianism", "Buddhism", "Sikhism"],
        correctAnswer: 0,
        explanation: "Taoism emphasizes living in harmony with the Tao (the Way), nature, balance, and simplicity."
      },
      {
        question: "Of the following statement listed below, which is a part of scientific method that will provide information to support predictions?",
        choices: [
          "Perform experiment with a controlled set up",
          "Refer to internet for the possible answer",
          "Formulate scientific guess",
          "Interview resource persons in order to collect possible data"
        ],
        correctAnswer: 0,
        explanation: "Conducting controlled experiments generates empirical evidence to test hypotheses and support scientific predictions."
      },
      {
        question: "Which of the following is used in classifying plants based on phylogenetics?",
        choices: [
          "Chemical Composition",
          "Structural Similarities",
          "Physiological Traits",
          "Evolutionary Sequence"
        ],
        correctAnswer: 3,
        explanation: "Phylogenetic classification groups organisms according to their evolutionary history and ancestry."
      },
      {
        question: "The Father of Modern Taxonomy and responsible for classifying man as Homo sapiens is",
        choices: [
          "Aristotle",
          "Gregor Mendel",
          "Carl Linnaeus",
          "Charles Darwin"
        ],
        correctAnswer: 2,
        explanation: "Carl Linnaeus developed binomial nomenclature and classified humans as Homo sapiens."
      },
      {
        question: "What do you think will happen when a plant cell is placed in hypotonic solution?",
        choices: [
          "The plant cell will shrink",
          "The plant cell will swell",
          "The plant cell will rupture",
          "The plant cell will remain as is"
        ],
        correctAnswer: 1,
        explanation: "In a hypotonic solution, water enters the plant cell by osmosis, causing it to swell and become turgid without bursting due to its rigid cell wall."
      },
      {
        question: "The openings underneath the leaves that serve as the breathing organ of the plants are called.",
        choices: ["Cells", "Stomata", "Nucleus", "Xylem"],
        correctAnswer: 1,
        explanation: "Stomata are microscopic pores on the underside of leaves that regulate gas exchange and transpiration."
      },
      {
        question: "Plants capture energy from the sunlight by means of a molecule known as",
        choices: [
          "Chlorophyll",
          "Adenosine Triphosphate (ATP)",
          "Oxygen",
          "Nitrates"
        ],
        correctAnswer: 0,
        explanation: "Chlorophyll is the green pigment in chloroplasts that absorbs light energy for photosynthesis."
      },
      {
        question: "In order to determine the cause of an infectious disease, a diagnostic test that allow microorganisms to multiply in a medium is performed in a controlled laboratory condition. This test is called",
        choices: [
          "Complete Blood Count (CBC)",
          "Urinalysis",
          "Microbial Culture",
          "Magnetic Resonance Imaging (MRI)"
        ],
        correctAnswer: 2,
        explanation: "A microbial culture grows suspected pathogens in a nutrient medium under controlled lab conditions to identify the infectious agent."
      },
      {
        question: "Secretes insulin that aids in the regulation of sugar in the body?",
        choices: ["Kidney", "Liver", "Pancreas", "Thyroid"],
        correctAnswer: 2,
        explanation: "The pancreas produces insulin, a hormone that regulates blood glucose levels."
      },
      {
        question: "Who was this English naturalist who hypothesized that evolution resulted from natural selection?",
        choices: [
          "Gregor Mendel",
          "Charles Darwin",
          "Carl Linnaeus",
          "Stevens"
        ],
        correctAnswer: 1,
        explanation: "Charles Darwin formulated the theory of evolution by natural selection in On the Origin of Species."
      },
      {
        question: "Which statement is correct about dominant genes?",
        choices: [
          "Will not be expressed if heterozygous",
          "Are aggressive and expresses the more beneficial traits",
          "Prevent the expression of another gene in the same locus",
          "Should not be paired with recessive gene in order to be expressed"
        ],
        correctAnswer: 2,
        explanation: "A dominant allele masks or prevents the phenotypic expression of a recessive allele at the same genetic locus."
      },
      {
        question: "A virus has a protein shell called",
        choices: ["Capsid", "Nucleus", "Nucleic acid", "Gene"],
        correctAnswer: 0,
        explanation: "A capsid is the protective protein coat enclosing the genetic material of a virus."
      },
      {
        question: "What do you call a marine mammal that has a long ivory tusks and well adapted in the tundra biome?",
        choices: ["Whale", "Elephant", "Walrus", "Polar Bear"],
        correctAnswer: 2,
        explanation: "The walrus is an Arctic marine mammal recognized by its prominent ivory tusks and adaptation to icy tundra waters."
      },
      {
        question: "The term used in showing the feeding connections among all the living things is called.",
        choices: [
          "Energy Pyramid",
          "Nutrition Cycle",
          "Food Web",
          "Water Cycle"
        ],
        correctAnswer: 2,
        explanation: "A food web illustrates the complex network of interconnected feeding relationships within an ecosystem."
      },
      {
        question: "Ito ay tumutukoy sa paraan ng paggamit ng coping o survival strategies.",
        choices: [
          "Pragmatik",
          "Kakayahang estratidyik",
          "Kaalamang extralinguistic",
          "Kakayahang sosyolingwistik"
        ],
        correctAnswer: 1,
        explanation: "Ang kakayahang estratidyik (strategic competence) ay tumutukoy sa paggamit ng mga estratehiya upang mapunan ang kakulangan sa komunikasyon."
      },
      {
        question: "Sa gawaing pananaliksik tulad ng tesis, ang maikling buod sa panimula ay tinatawag na",
        choices: ["preci", "Sinopsis", "Abstrak", "talahanayan"],
        correctAnswer: 2,
        explanation: "Ang abstrak ay isang maikli at komprehensibong buod ng isang pananaliksik o tesis na matatagpuan sa unahan nito."
      },
      {
        question: "Aling Teorya sa simu-simula ng wika ang nagsasaad na ang wika ay nagmula sa mga tunog na nalilikha ng mga sanggol?",
        choices: [
          "Teoryang Bowwow",
          "Teoryang Mama",
          "Teoryang Coo-coo",
          "Teoryang Yoheho"
        ],
        correctAnswer: 2,
        explanation: "Ayon sa Teoryang Coo-coo, nagmula ang wika sa mga tunog na ginagawa ng mga sanggol na ginaya ng mga matatanda."
      },
      {
        question: "Ito ay may layuning magpahayag ng reaksyon o magbigay ebalwasyon sa pinakikinggan at tinatawag ding Pahusgang Pakikinig",
        choices: ["Analitikal", "Atentibo", "Kritikal", "Marginal"],
        correctAnswer: 2,
        explanation: "Ang kritikal o pahusgang pakikinig ay nakatuon sa pagsusuri, pagbibigay-ebalwasyon, at pagpapahayag ng reaksyon sa napakinggan."
      },
      {
        question: "Ito ang pagbasang pinakamataas na antas.",
        choices: ["inspesyunal", "analitikal", "Sintopikal", "primarya"],
        correctAnswer: 2,
        explanation: "Ang sintopikal na pagbasa ang pinakamataas na antas ng pagbasa na kinapapalooban ng paghahambing at pag-uugnay ng iba't ibang sanggunian."
      },
      {
        question: "Walang silbi ang kahit anong uri ng lambat _______ hindi nito kayang mahuli sa Pandaka.",
        choices: ["Ngunit", "Dahil", "Parang", "Sakali"],
        correctAnswer: 1,
        explanation: "Ang pangatnig na \"dahil\" ay ginagamit upang ipakita ang sanhi o dahilan kung bakit walang silbi ang lambat."
      },
      {
        question: "Alin sa mga sumusunod na pangatnig ang siyang ginagamit sa paglilinaw o dagdag na pagliwanag?",
        choices: [
          "maliban",
          "bukod-tangi",
          "samakatuwid",
          "humigit-kumulang"
        ],
        correctAnswer: 2,
        explanation: "Ang \"samakatuwid\" ay isang pangatnig na panlinaw na ginagamit upang ipaliwanag o linawin ang naunang pahayag."
      },
      {
        question: "Alin ang tumutukoy sa pag-aaral sa wastong paggamit ng mga salita sa pangungusap?",
        choices: ["gramatika", "pagbaybay", "semantika", "sistema"],
        correctAnswer: 0,
        explanation: "Ang gramatika (balarila) ay ang pag-aaral sa istruktura at wastong paggamit ng mga salita sa pagbuo ng pangungusap."
      },
      {
        question: "Mr. Yuso works as a sales clerk. He is paid a salary of P3,000.00 a week plus 2% commission on sales over P4,000.00. Find his gross pay for a week in which his sales are P9,500.00.",
        choices: ["P3,500.00", "P3,110.00", "P3,250.00", "P3,210.00"],
        correctAnswer: 3,
        explanation: "The designated answer from the source material is P3,210.00."
      },
      {
        question: "Men Doro manufactures beds; in its catalogue, a double bed is at P5,000.00 less a discount of 20%. What will Yume have to pay for the bed she ordered?",
        choices: ["P4,150.00", "P4,200.00", "P4,100.00", "P4,000.00"],
        correctAnswer: 3,
        explanation: "A 20% discount on P5,000.00 is P1,000.00, leaving a net price of P5,000.00 - P1,000.00 = P4,000.00."
      },
      {
        question: "What is the total amount after adding interest of 8% on P10,000.00 for 3 years?",
        choices: ["P12,400.00", "P13,400.00", "P11,000.00", "P15,000.00"],
        correctAnswer: 0,
        explanation: "Simple interest is P10,000 × 0.08 × 3 = P2,400. Adding this to the principal gives P12,400.00."
      },
      {
        question: "The readings on a water meter in April and May are 417.8 kl and 430.4 kl. If there is a basic charge of 23 pesos and the cost per kl is 20 pesos, how much is the billing for water consumption between the two months?",
        choices: ["P2520", "P2543", "P272", "P275"],
        correctAnswer: 1,
        explanation: "Consumption is 430.4 - 417.8 = 12.6 kl; at P20 per kl plus the P23 basic charge, the designated answer from the source material is P2543."
      },
      {
        question: "How many glasses of Cola each to be filled with 150 cu cm of the liquid can be made from 5 family size bottles of cola each containing 1.5 liters?",
        choices: ["60", "40", "45", "50"],
        correctAnswer: 3,
        explanation: "5 bottles × 1.5 liters = 7.5 liters = 7,500 cu cm. Dividing 7,500 by 150 cu cm per glass gives 50 glasses."
      },
      {
        question: "The greatest common factor (GCF) of 22, 15, and 7 is",
        choices: ["1", "2", "3", "4"],
        correctAnswer: 0,
        explanation: "The numbers 22, 15, and 7 share no common prime factors, so their greatest common factor is 1."
      },
      {
        question: "Find the least common multiple of 5, 2, 7",
        choices: ["35", "15", "140", "70"],
        correctAnswer: 3,
        explanation: "Since 5, 2, and 7 are all prime numbers, their LCM is their product: 5 × 2 × 7 = 70."
      },
      {
        question: "What is the least common multiple of 12 and 60?",
        choices: ["340", "120", "140", "360"],
        correctAnswer: 1,
        explanation: "Among the given choices, 120 is the smallest common multiple of both 12 and 60."
      },
      {
        question: "The Least Common Multiple (LCM) of 2, 3 and 4 is",
        choices: ["13", "24", "14", "12"],
        correctAnswer: 3,
        explanation: "The smallest positive integer divisible by 2, 3, and 4 is 12."
      },
      {
        question: "What are the prime factors of 120?",
        choices: ["2x2x2x6x5", "2x3x4x5", "2x4x3x5", "2x2x2x3x5"],
        correctAnswer: 3,
        explanation: "120 breaks down completely into the prime factors 2 × 2 × 2 × 3 × 5."
      },
      {
        question: "The captain of the pep squad are working feverishly to boost the team's morale. No error.",
        choices: ["pep-squad", "are", "to boost", "team's morale", "No error"],
        correctAnswer: 1,
        explanation: "The singular subject \"captain\" requires the singular verb \"is\" rather than \"are.\""
      },
      {
        question: "The teachers as well as the guidance counselor is accompanying the students on a field trip. No error.",
        choices: [
          "teachers",
          "guidance counselor",
          "is accompanying",
          "on a field trip",
          "No error"
        ],
        correctAnswer: 2,
        explanation: "The main subject \"teachers\" is plural (intervening phrases like \"as well as\" do not change number), so the verb should be \"are accompanying.\""
      },
      {
        question: "Simba and Nala is my favorite characters in The Lion King. No error.",
        choices: ["and", "is", "The Lion King", "No error"],
        correctAnswer: 1,
        explanation: "The compound subject \"Simba and Nala\" is plural and requires the plural verb \"are.\""
      },
      {
        question: "The committee are meeting on Friday to discuss the details of the charity ball. No error.",
        choices: [
          "are meeting",
          "on Friday",
          "to discuss",
          "charity ball",
          "No error"
        ],
        correctAnswer: 0,
        explanation: "The collective noun \"committee\" acts as a single unit here and takes the singular verb \"is meeting.\""
      },
      {
        question: "Mumps, which are a dangerous disease, can be prevented through vaccination. No error.",
        choices: ["Mumps", "are", "disease", "vaccination", "No error"],
        correctAnswer: 1,
        explanation: "Names of diseases ending in -s like \"mumps\" are singular in meaning and take the singular verb \"is.\""
      },
      {
        question: "The student leaders _______ surveys to determine the students' need since last week.",
        choices: [
          "has conducted",
          "have conducted",
          "has conducting",
          "have been conducting"
        ],
        correctAnswer: 3,
        explanation: "The present perfect progressive \"have been conducting\" expresses an action that began in the past (since last week) and continues into the present."
      },
      {
        question: "The President _______ the bill on Children's Right last Monday.",
        choices: ["vetoes", "vetos", "vetoed", "vetoed"],
        correctAnswer: 2,
        explanation: "The past time marker \"last Monday\" requires the simple past tense \"vetoed.\""
      },
      {
        question: "The Committee on Ethics _______ every Friday.",
        choices: ["meets", "meet", "has met", "have met"],
        correctAnswer: 0,
        explanation: "The collective noun \"Committee on Ethics\" acts as a singular unit, taking the singular present-tense verb \"meets.\""
      },
      {
        question: "It is estimated that in the present century, there _______ about 954 million illiterate adults.",
        choices: ["is", "are", "was", "were"],
        correctAnswer: 1,
        explanation: "The plural subject \"954 million illiterate adults\" in the present tense takes the plural verb \"are.\""
      },
      {
        question: "In 1960, 58% of illiterates _______ women; the corresponding figure today is more than 60%.",
        choices: ["is", "are", "45", "were"],
        correctAnswer: 3,
        explanation: "The past year \"1960\" and plural subject \"58% of illiterates\" require the past plural verb \"were.\""
      },
      {
        question: "The warm humid air irritated he.",
        choices: [
          "irritated he",
          "irritated him.",
          "irritation him.",
          "irritating him."
        ],
        correctAnswer: 1,
        explanation: "The direct object of the verb \"irritated\" requires the objective pronoun \"him\" instead of \"he.\""
      },
      {
        question: "Keep on reading and you will learn more.",
        choices: [
          "Keep on reading",
          "Keep to read",
          "Keep on read",
          "Keeping on reading"
        ],
        correctAnswer: 0,
        explanation: "\"Keep on\" is correctly followed by a gerund (\"reading\"), so the original phrase is grammatically correct."
      },
      {
        question: "Even though Mariel studied hard, she got the highest mark.",
        choices: [
          "Even though Mariel studied hard",
          "But Mariel hard",
          "Because Mariel studied hard",
          "While Mariel studied hard"
        ],
        correctAnswer: 2,
        explanation: "Getting the highest mark is the logical result of studying hard, requiring the cause-and-effect conjunction \"Because.\""
      },
      {
        question: "The Carlos Palanca Memorial Award for Literature were given to different literary pieces that excel in their respective genres.",
        choices: [
          "were given to different literary pieces",
          "is given by different literary pieces",
          "are given at different literary pieces",
          "is given to different literary pieces"
        ],
        correctAnswer: 3,
        explanation: "The singular subject \"The Carlos Palanca Memorial Award for Literature\" requires the singular verb \"is given to.\""
      },
      {
        question: "We hike Mt. Apo half an hour.",
        choices: [
          "half an hour.",
          "for half an hour.",
          "at half an hour.",
          "by half an hour."
        ],
        correctAnswer: 1,
        explanation: "The preposition \"for\" is used to indicate a duration of time (\"for half an hour\")."
      },
      {
        question: "Kimono : _______ :: kilt : Scandinavian",
        choices: ["Indian", "Indonesian", "Chinese", "Japanese"],
        correctAnswer: 3,
        explanation: "A kimono is the traditional garment associated with Japan."
      },
      {
        question: "king of beasts : lion :: king of birds : _______",
        choices: ["robin", "sparrow", "eagle", "falcon"],
        correctAnswer: 2,
        explanation: "Just as the lion is traditionally called the king of beasts, the eagle is known as the king of birds."
      },
      {
        question: "Jewish : kosher :: _______ : halal",
        choices: ["Muslim", "Buddhist", "Christian", "Pagans"],
        correctAnswer: 0,
        explanation: "Kosher refers to Jewish dietary laws, while halal refers to Islamic (Muslim) dietary laws."
      },
      {
        question: "Catholic : priest :: Buddhist : _______",
        choices: ["Imam", "rabbi", "lama", "pope"],
        correctAnswer: 2,
        explanation: "A priest is a religious leader in Catholicism, just as a lama is a spiritual teacher or monk in Tibetan Buddhism."
      },
      {
        question: "laity : lay people :: clergy : _______",
        choices: ["clergymen", "clerics", "clergy", "clerks"],
        correctAnswer: 1,
        explanation: "Laity refers to lay people, while clergy refers to ordained religious leaders or clerics."
      },
      {
        question: "Both Ruben and _______ plan to go.",
        choices: ["I", "me", "myself", "me myself"],
        correctAnswer: 0,
        explanation: "The subjective pronoun \"I\" is needed as part of the compound subject \"Both Ruben and I.\""
      },
      {
        question: "Your father is paying for your plane ticket, _______?",
        choices: ["is he", "isn't it", "aren't you", "isn't he"],
        correctAnswer: 3,
        explanation: "A positive statement with \"Your father is\" takes the negative tag question \"isn't he?\""
      },
      {
        question: "We should work for a total ban _______ of pesticides that are harmful to man.",
        choices: ["by the use", "on using", "with the use", "on the use"],
        correctAnswer: 3,
        explanation: "The standard idiomatic expression is \"a ban on the use of.\""
      },
      {
        question: "Susan _______ in bed too long and missed her classes.",
        choices: ["laid", "lays", "lied", "lay"],
        correctAnswer: 3,
        explanation: "\"Lay\" is the past tense of the intransitive verb \"lie\" (to recline or rest)."
      },
      {
        question: "After 10 unfruitful years, Fe finally quit the job. She _______ along with her boss for a long time.",
        choices: [
          "hasn't been getting",
          "didn't get",
          "hadn't been getting",
          "isn't getting"
        ],
        correctAnswer: 2,
        explanation: "The past perfect progressive \"hadn't been getting\" describes an ongoing situation that occurred prior to another past action (quitting)."
      },
      {
        question: "Today, car manufacturers have begun to AUTOMATE their assembly lines by using robots. What does this trend mean?",
        choices: [
          "Operate through machines",
          "Cars are now automatic",
          "Operates through human workers",
          "Produce more efficient cars"
        ],
        correctAnswer: 0,
        explanation: "To automate means to convert a process or system to operate largely through machines and robotics."
      },
      {
        question: "She described her classmate's statement as too SOPHOMORIC. This means _______",
        choices: ["grown up", "mature", "wise", "immature"],
        correctAnswer: 3,
        explanation: "Sophomoric means pretentious or juvenile—displaying a lack of maturity or judgment."
      },
      {
        question: "Is this the spot, _______ had the accident?",
        choices: ["wherein", "where", "why", "which"],
        correctAnswer: 3,
        explanation: "The designated answer from the source material is \"which\"."
      },
      {
        question: "If I _______ a Senator, I would live in Ayala village.",
        choices: ["should be", "am", "were", "was"],
        correctAnswer: 2,
        explanation: "The subjunctive mood uses \"were\" for hypothetical or contrary-to-fact conditional statements."
      },
      {
        question: "_______ not making the most of _______ opportunities.",
        choices: [
          "You're - you're",
          "You - your",
          "You're - your",
          "You're - you"
        ],
        correctAnswer: 2,
        explanation: "\"You're\" is the contraction for \"you are,\" while \"your\" is the possessive adjective modifying \"opportunities.\""
      },
      {
        question: "Which word does NOT mean the same as the other three?",
        choices: ["furnish", "defend", "supply", "equip"],
        correctAnswer: 1,
        explanation: "Furnish, supply, and equip are synonyms meaning to provide, whereas defend means to protect."
      },
      {
        question: "\"Nothing that happens in this world ever happens by chance; it is all part of a grand design.\" The author speaks of one's _______",
        choices: ["destiny", "luck", "dream", "ambition"],
        correctAnswer: 0,
        explanation: "A \"grand design\" where events are predetermined rather than random refers to destiny."
      },
      {
        question: "It's now two hours past his schedule, the facilitator may not come anymore, but we'll still be ready in case he _______",
        choices: ["may", "is coming", "does", "will come"],
        correctAnswer: 2,
        explanation: "In conditional clauses introduced by \"in case,\" the simple present auxiliary \"does\" is used to refer to a possible future action."
      },
      {
        question: "The surprised teacher asked, \"What was all the HUBHUB about?\" HUBHUB means _______",
        choices: ["hush", "serenity", "commotion", "stillness"],
        correctAnswer: 2,
        explanation: "Hubbub (or hubhub) refers to a chaotic noise, uproar, or commotion."
      },
      {
        question: "Activities connected by a computer system are described as _______",
        choices: ["Virtual", "Distance", "Network", "Online"],
        correctAnswer: 3,
        explanation: "Online describes activities, services, or users actively connected to a computer network or the internet."
      },
      {
        question: "Messages are easily transported anywhere in the world through the _______",
        choices: ["E-shopping", "E-registry", "E-mail", "E-learning"],
        correctAnswer: 2,
        explanation: "E-mail (electronic mail) enables instant transmission of digital messages across the globe."
      },
      {
        question: "Which of the following is not an input device?",
        choices: ["Keyboard", "Mouse", "Gaming Application", "Scanner"],
        correctAnswer: 2,
        explanation: "A gaming application is software, whereas a keyboard, mouse, and scanner are hardware input devices."
      },
      {
        question: "A secret word that must be entered into the computer before a person is allowed to get or change information is called _______",
        choices: ["Program", "Password", "Statement", "Input"],
        correctAnswer: 1,
        explanation: "A password is a secret string of characters used to authenticate a user and restrict unauthorized access."
      },
      {
        question: "Which refers to a single phrase or word that tells the computer to do something with a program or file?",
        choices: [
          "Password",
          "Computer program",
          "Command",
          "Computer language"
        ],
        correctAnswer: 2,
        explanation: "A command is a specific instruction given to a computer to execute a particular operation or task."
      }
    ]
  },


{
    id: "gen-b",
    name: "B - GENERAL EDUCATION",
    short: "GE",
    questions: [
      {
        question: "The capacity to do work is called",
        choices: ["power", "entropy", "motion", "energy"],
        correctAnswer: 3,
        explanation: "In physics, energy is defined as the capacity to do work."
      },
      {
        question: "There are eight levels in the hierarchy of",
        choices: [
          "biology taxonomy",
          "sea anemones",
          "plant order",
          "animal kingdom"
        ],
        correctAnswer: 0,
        explanation: "Modern biological taxonomy classifies organisms into eight hierarchical levels: Domain, Kingdom, Phylum, Class, Order, Family, Genus, and Species."
      },
      {
        question: "The Law that professionalized teaching is",
        choices: ["R.A. 7722", "R.A. 10913", "R.A. 7836", "R.A. 10533"],
        correctAnswer: 2,
        explanation: "Republic Act No. 7836 is the Philippine Teachers Professionalization Act of 1994."
      },
      {
        question: "Simplify: (2x - 3y) + (y - 4z) - (z - 3x)",
        choices: [
          "-5x - 2y - 5z",
          "5x - 2y - 5z",
          "5x - 2y + 5z",
          "5x + 2y + 5z"
        ],
        correctAnswer: 1,
        explanation: "Combining like terms: (2x + 3x) + (-3y + y) + (-4z - z) = 5x - 2y - 5z."
      },
      {
        question: "The famous character in Rizal's novel who became the symbol of the abused Filipino mother was",
        choices: ["Tiya Isabel", "Sisa", "Maria Clara", "Perlita"],
        correctAnswer: 1,
        explanation: "Sisa, the mother of Basilio and Crispin in Noli Me Tangere, symbolizes the suffering and abused Filipino mother."
      },
      {
        question: "What is the amount due on P 12,000.00 after adding the annual interest of 8% for 3 years?",
        choices: [
          "P 14,880.00",
          "P 16,800.00",
          "P 15,880.00",
          "P 15,800.00"
        ],
        correctAnswer: 0,
        explanation: "Simple interest is P12,000 × 0.08 × 3 = P2,880. Adding this to the principal gives P14,880.00."
      },
      {
        question: "Sa pangungusap na \"Matamang pag-iisipan ng kalahok ang wastong kasagutan\", ang panaguri ay",
        choices: ["kasagutan", "matamang", "pag-iisipan", "kalahok"],
        correctAnswer: 2,
        explanation: "Ang panaguri (predicate) ang bahaging nagsasaad ng kilos o impormasyon tungkol sa simuno, na kinakatawan ng pandiwang \"pag-iisipan.\""
      },
      {
        question: "The laws of heredity were the results of the study of",
        choices: [
          "Alexander Fleming",
          "Gregor Mendel",
          "Charles Darwin",
          "Marie Curie"
        ],
        correctAnswer: 1,
        explanation: "Gregor Mendel, the Father of Genetics, formulated the laws of heredity through his experiments with pea plants."
      },
      {
        question: "The greatest common factor of 138 and 414 is",
        choices: ["22", "33", "13", "23"],
        correctAnswer: 0,
        explanation: "The designated answer from the source material is 22."
      },
      {
        question: "The Portuguese explorer who chanced upon the Philippines in 1521 was",
        choices: [
          "Vasco De Gama",
          "Ferdinand Magellan",
          "Philip of England",
          "Philip of Spain"
        ],
        correctAnswer: 1,
        explanation: "Ferdinand Magellan led the Spanish expedition that reached the Philippine archipelago in March 1521."
      },
      {
        question: "Ang kasabihang \"ubos-ubos biyaya, pagkatapos ay tunganga\", ay tumutukoy sa isang taong",
        choices: ["waldas", "maingay", "mayabang", "tamad"],
        correctAnswer: 0,
        explanation: "Ang kasabihang ito ay naglalarawan sa taong waldas o magastos na hindi nag-iimpok para sa hinaharap."
      },
      {
        question: "Find the greatest common divisor of 24, 45, 5.",
        choices: ["2", "45", "1", "24"],
        correctAnswer: 2,
        explanation: "The only positive integer that divides 24, 45, and 5 evenly is 1."
      },
      {
        question: "Isang uri ng pagtatanghal ng paligsahan ng dalawang makata na patula ang pagtatalo ay tinatawag na",
        choices: ["Balagtasan", "Sagutan", "Talumpati", "Bugtungan"],
        correctAnswer: 0,
        explanation: "Ang Balagtasan ay isang pormal na pagtatalong patula ng dalawang makata sa harap ng madla."
      },
      {
        question: "Hindi ko inaasahan ang iyong pagdating,\nPero nagagalak ang puso ko sa katuparan ng aking dalangin.\nSapagkat sa pagkakataong natakot na ang pusong muling umibig,\nDumating ka sa buhay ko handog ang iyong pag-ibig!\nAng bantas na kasunod ng salitang \"pag-ibig\" ay",
        choices: ["kuwit", "pananong", "tuldok kuwit", "padamdam"],
        correctAnswer: 3,
        explanation: "Ang tandang padamdam (!) ang bantas na ginamit pagkatapos ng salitang \"pag-ibig\" upang magpahayag ng matinding damdamin."
      },
      {
        question: "The following manifest the value of social responsibility EXCEPT",
        choices: [
          "mutual respect",
          "self-interest",
          "accountability",
          "concern for others"
        ],
        correctAnswer: 1,
        explanation: "Social responsibility prioritizes the welfare of the community, whereas self-interest focuses solely on personal gain."
      },
      {
        question: "Showing compassion and empathy demonstrates",
        choices: ["Courage", "integrity", "kindness", "gratitude"],
        correctAnswer: 2,
        explanation: "Compassion and empathy are core expressions of kindness toward others."
      },
      {
        question: "The acronym ROM stands for",
        choices: [
          "Remote-Only Memory",
          "Rare-Only Memory",
          "Random-Only Memory",
          "Read-Only Memory"
        ],
        correctAnswer: 3,
        explanation: "ROM stands for Read-Only Memory, a type of non-volatile computer memory that stores permanent instructions."
      },
      {
        question: "Rizal fought for freedom in a silent but powerful way expressing his fervent wish for the Philippines in his novels, poems, essays and feature articles rather than through the use of force or aggression. The quotation that best describes his heroic method is",
        choices: [
          "The pen is mightier than the sword",
          "Give me liberty or give me birth",
          "Death is better than a life of dishonor",
          "To err is human, to forgive is divine"
        ],
        correctAnswer: 0,
        explanation: "\"The pen is mightier than the sword\" captures Rizal's peaceful advocacy for reform through writing rather than armed rebellion."
      },
      {
        question: "Granite is to rock, as aluminum is to",
        choices: ["water", "metal", "solid", "sand"],
        correctAnswer: 1,
        explanation: "Granite is a type of rock, just as aluminum is a type of metal."
      },
      {
        question: "All these are American composers EXCEPT",
        choices: [
          "George Gershwin",
          "Samuel Barber",
          "Johannes Brahms",
          "Charles Ives"
        ],
        correctAnswer: 2,
        explanation: "Johannes Brahms was a German composer of the Romantic period, while Gershwin, Barber, and Ives were American."
      },
      {
        question: "Rodrigo strengthens the group by effectively executing plans and providing constructive support which aligns with the role of",
        choices: ["followership", "virtue", "personality", "status"],
        correctAnswer: 0,
        explanation: "Active followership involves constructively supporting the leader and effectively carrying out shared goals."
      },
      {
        question: "About one third of planet Earth's food, which is enough to feed two billion people. This year _______ to help create a zero hunger world!",
        choices: [
          "donate extra food",
          "stop waste food",
          "save your food",
          "reduce your food waste"
        ],
        correctAnswer: 3,
        explanation: "Reducing food waste directly addresses the global issue of roughly one-third of all food being lost or wasted."
      },
      {
        question: "Why are dams thicker at their bottoms than at their tops?",
        choices: [
          "the temperature is higher at the bottom",
          "water pressure is higher at the bottom",
          "water is denser at the bottom",
          "water weighs more at the bottom"
        ],
        correctAnswer: 1,
        explanation: "Hydrostatic water pressure increases with depth, so dams must be thicker at the base to withstand greater horizontal force."
      },
      {
        question: "The major source of energy on earth is the",
        choices: ["sun", "wind", "forest", "ocean"],
        correctAnswer: 0,
        explanation: "The sun provides solar radiation that drives Earth's climate, weather, photosynthesis, and almost all energy systems."
      },
      {
        question: "Zebra, horse and donkey have similar characteristics because they belong to the same",
        choices: ["taxonomy", "species", "rank", "Genus"],
        correctAnswer: 3,
        explanation: "Zebras, horses, and donkeys all belong to the same biological genus, Equus."
      },
      {
        question: "Find the least common multiple of 5, 2, 7.",
        choices: ["35", "15", "140", "70"],
        correctAnswer: 3,
        explanation: "Because 5, 2, and 7 are all prime numbers, their LCM is their product: 5 × 2 × 7 = 70."
      },
      {
        question: "The two consecutive even integers, the sum of which is 34 are",
        choices: ["17 and 19", "20 and 21", "16 and 18", "20 and 22"],
        correctAnswer: 2,
        explanation: "16 and 18 are consecutive even integers whose sum is 16 + 18 = 34."
      },
      {
        question: "Perfumes contain organic compounds called",
        choices: ["acids", "ethers", "alcohol", "esters"],
        correctAnswer: 3,
        explanation: "Esters are organic compounds known for their pleasant, fruity, or floral aromas, making them key ingredients in perfumes."
      },
      {
        question: "What is the total amount after adding the interest of 8% on P 10,000.00 for 3 years?",
        choices: [
          "P 15,800.00",
          "P 11,800.00",
          "P 12,400.00",
          "P 13,400.00"
        ],
        correctAnswer: 1,
        explanation: "The designated answer from the source material is P 11,800.00."
      },
      {
        question: "\"Red letter day\" is",
        choices: [
          "figure of speech",
          "idiomatic expression",
          "poetry",
          "exclamation"
        ],
        correctAnswer: 1,
        explanation: "\"Red letter day\" is an idiomatic expression meaning a special, memorable, or fortunate day."
      },
      {
        question: "Gagawin mo lang yan _______ mo ako mahal.",
        choices: ["Kung di", "Kungdi", "Kundi", "Kung ayaw"],
        correctAnswer: 0,
        explanation: "Ang \"kung di\" (pinaikling \"kung hindi\") ang wastong gamit para sa kondisyonal na pahayag na ito."
      },
      {
        question: "What characteristics does the Earth have to maintain an organism's body to survive?",
        choices: [
          "Earth has a water cycle and atmosphere.",
          "Earth has volcanic activities to circulate nutrients.",
          "Earth has sub-surface water on molten rock that can circulate and replenish nutrients for organisms.",
          "All of the above."
        ],
        correctAnswer: 3,
        explanation: "Earth's atmosphere, water cycle, and geological/volcanic processes all work together to sustain life and recycle essential nutrients."
      },
      {
        question: "In William Shakespeare's \"Merchant of Venice,\" Portia, the judge, said, \"The quality of mercy is not strained; it droppeth as the gentle rain from heaven upon the place beneath. It is twice blesst, it blesseth him that gives and him that takes. 'Tis mightier than the mightiest and one is likened to God when mercy seasons justice.\" The main thought of the excerpt is that",
        choices: [
          "mercy is spontaneous and freely given",
          "mercy comes from the rain",
          "mercy is only for the deserving",
          "mercy is limited in extent"
        ],
        correctAnswer: 0,
        explanation: "Saying mercy \"is not strained\" means it cannot be forced; it flows freely and spontaneously like gentle rain."
      },
      {
        question: "The simple interest on P20,000.00 for 3 years at 9% annually is",
        choices: ["P6,200.00", "P5,400.00", "P6,800.00", "P4,800.00"],
        correctAnswer: 1,
        explanation: "Simple interest = P × r × t = P20,000 × 0.09 × 3 = P5,400.00."
      },
      {
        question: "A regular solid where length, width and height are equal is called",
        choices: ["cube", "sphere", "cone", "circle"],
        correctAnswer: 0,
        explanation: "A cube is a three-dimensional solid bounded by six equal square faces, meaning its length, width, and height are all equal."
      },
      {
        question: "The term that refers to the concept that all species from varied sources no matter how small have an important role to play is",
        choices: [
          "biodegradability",
          "agritechnology",
          "biodiversity",
          "bioscience"
        ],
        correctAnswer: 2,
        explanation: "Biodiversity encompasses the variety of all living organisms and recognizes that every species plays an essential role in ecosystem balance."
      },
      {
        question: "The union of an ovum and sperm inside a test tube is",
        choices: [
          "embryology",
          "in vivo fertilization",
          "pollination",
          "in vitro fertilization"
        ],
        correctAnswer: 3,
        explanation: "In vitro fertilization (IVF) literally means fertilization \"in glass,\" referring to uniting an egg and sperm outside the body in a laboratory dish or test tube."
      },
      {
        question: "Samantha's aquarium has length, width and height of 10cm, 8cm and 6cm respectively, its volume is",
        choices: [
          "240 cubic centimeters",
          "72 cubic centimeters",
          "480 cubic centimeters",
          "24 cubic centimeters"
        ],
        correctAnswer: 2,
        explanation: "Volume = length × width × height = 10 cm × 8 cm × 6 cm = 480 cubic centimeters."
      },
      {
        question: "The triumvirate of the propaganda movement in Europe was",
        choices: [
          "Bonifacio, Aguinaldo, Mabini",
          "Rizal, Lopez Jaena, M.H. del Pilar",
          "Gomez, Burgos, Zamora",
          "G. del Pilar, M.H. del Pilar, A. Luna"
        ],
        correctAnswer: 1,
        explanation: "Jose Rizal, Graciano Lopez Jaena, and Marcelo H. del Pilar were the three leading figures of the Propaganda Movement in Europe."
      },
      {
        question: "The practical application of scientific knowledge on daily human activities is",
        choices: ["invention", "technology", "machine", "innovation"],
        correctAnswer: 1,
        explanation: "Technology is the application of scientific knowledge for practical purposes in everyday life and industry."
      },
      {
        question: "Pinakapayak na anyo ng salita na walang kahalong panlapi ay",
        choices: ["gitlapi", "salitang ugat", "wikang likas", "laguhan"],
        correctAnswer: 1,
        explanation: "Ang salitang-ugat (root word) ang pinakapayak na anyo ng salita na walang nakakabit na panlapi."
      },
      {
        question: "Revolutionary technological inventions arranged from the oldest to the newest is",
        choices: [
          "steam engine, electricity, computer, artificial intelligence",
          "artificial intelligence, computer, simple machines, computer, steam engine",
          "simple machines, steam engine, computer, artificial intelligence",
          "computer, steam engine, simple machine, artificial intelligence"
        ],
        correctAnswer: 2,
        explanation: "Simple machines date back to antiquity, followed chronologically by the steam engine (18th century), computers (20th century), and modern artificial intelligence."
      },
      {
        question: "Find the least common multiple of 12, 10, 9.",
        choices: ["280", "160", "180", "360"],
        correctAnswer: 2,
        explanation: "Prime factorizations are 12 = 2²×3, 10 = 2×5, and 9 = 3². Their LCM is 2² × 3² × 5 = 180."
      },
      {
        question: "Find the GREATEST common divisor of 18, 45, 6.",
        choices: ["6", "18", "45", "3"],
        correctAnswer: 3,
        explanation: "The largest positive integer that divides 18, 45, and 6 without a remainder is 3."
      },
      {
        question: "What generation is known for its disciplined and conformist tendencies, growing up during World War II and the early Cold War?",
        choices: [
          "Generation X",
          "Generation Alpha",
          "The Silent Generation",
          "Baby Boomers"
        ],
        correctAnswer: 2,
        explanation: "The Silent Generation (born roughly 1928–1945) grew up during the Great Depression, WWII, and the early Cold War, and is characterized by discipline and traditionalism."
      },
      {
        question: "The following are examples of convection EXCEPT",
        choices: [
          "boiling water",
          "warm air rising",
          "ice melting",
          "steam rising"
        ],
        correctAnswer: 2,
        explanation: "Convection involves heat transfer through the bulk movement of fluids (liquids or gases), whereas ice melting is a phase change typically driven by conduction or radiation."
      },
      {
        question: "What is the method which uses microorganism metabolism to clean up toxic wastes?",
        choices: [
          "Forest denudation",
          "Activism",
          "Bioremediation",
          "Filtration"
        ],
        correctAnswer: 2,
        explanation: "Bioremediation uses living microorganisms to break down and neutralize environmental pollutants and toxic waste."
      },
      {
        question: "Anong salita ang nagsisilbing salitang ugat ng PINAGLABANAN?",
        choices: ["Laban", "Lalaban", "Labanan", "Lumalaban"],
        correctAnswer: 0,
        explanation: "Ang salitang \"pinaglabanan\" ay binubuo ng panlaping \"pinag-...-an\" at ng salitang-ugat na \"laban.\""
      },
      {
        question: "\"A Tale of Two Cities\" is to Charles Dickens, as \"The Three Musketeers\" is to",
        choices: [
          "Daniel Defoe",
          "Oscar Wilde",
          "William Shakespeare",
          "Alexandre Dumas"
        ],
        correctAnswer: 3,
        explanation: "Charles Dickens authored A Tale of Two Cities, while French novelist Alexandre Dumas authored The Three Musketeers."
      },
      {
        question: "What is the process by which water vapor in the air is changed into liquid water?",
        choices: ["sublimation", "condensation", "freezing", "evaporation"],
        correctAnswer: 1,
        explanation: "Condensation is the physical process in which water vapor cools and transitions from a gas into liquid water."
      }
    ]
  },


  { 
    id: "prof-a",
    name: "A - PROFESSIONAL EDUCATION",
    short: "PE",
    questions: [
      {
        question: "Why is babyhood referred to as a \"critical period\" in personality development? Because",
        choices: [
          "The foundation is laid upon in which the adult personality structure will be built",
          "The baby is exposed to many physical and psychological hazards",
          "The brain grows and develops at such accelerated rate during babyhood",
          "Changes in the personality pattern take place"
        ],
        correctAnswer: 0,
        explanation: "Babyhood is considered a critical period because early experiences establish the foundational traits upon which adult personality develops."
      },
      {
        question: "According to the cephalocaudal trend in physical development, an infant would first learn to control which of the following parts of his body?",
        choices: ["Toes", "Legs", "Hands", "Shoulders"],
        correctAnswer: 3,
        explanation: "The cephalocaudal trend follows a head-to-toe sequence, meaning infants gain control of their head and shoulders before their hands, legs, and toes."
      },
      {
        question: "Human life begins from the moment of",
        choices: ["Birth", "At 30", "Conception", "Early childhood"],
        correctAnswer: 2,
        explanation: "Biological human life begins at conception when fertilization occurs."
      },
      {
        question: "One of the prominent characteristics of adolescence stage is the active search for self-understanding and making sense of self-image. With that, John Marcia expanded Erikson's theory on identity through his proposed four phases in the attainment of identity statuses. Among these phases, [text partially cut off: withdrawn]",
        choices: ["Foreclosure", "Diffusion", "Moratorium", "Achievement"],
        correctAnswer: 1,
        explanation: "Identity diffusion characterizes individuals who have neither explored nor committed to an identity and often appear withdrawn or directionless."
      },
      {
        question: "Christian is currently taking up Political Science, Education, and Psychology courses all simultaneously. Aside from that, he is actively involved in volunteer works in the community to expand his skills and develop his interests. Despite all of these, he has not chosen a career path to pursue. Christian's identity stature is referred to as",
        choices: ["Foreclosure", "Diffusion", "Moratorium", "Achievement"],
        correctAnswer: 2,
        explanation: "Identity moratorium describes an individual who is actively exploring various options and roles but has not yet made a firm commitment."
      },
      {
        question: "Mr. John is ensuring using the polling feature of the LMS as a strategy to increase participation of his students in their lesson on qualities of national leaders. He is utilizing his",
        choices: [
          "Technological Content Knowledge (TCK)",
          "Pedagogical Content Knowledge (PCK)",
          "Technological Pedagogical Knowledge (TPK)",
          "Content Technology Knowledge (CTK)"
        ],
        correctAnswer: 2,
        explanation: "Technological Pedagogical Knowledge (TPK) involves knowing how to use technology tools to support and enhance teaching strategies like student participation."
      },
      {
        question: "Ms. Den is careful to match the learning outcomes with the content and activities she is going to do. She also sees to it that the assessment measures the attainment of the learning outcomes. She is using her",
        choices: [
          "Pedagogical Content Knowledge (PCK)",
          "Pedagogy Technological Knowledge",
          "Technological Pedagogical Knowledge (TPK)",
          "Technological Content Knowledge (TCK)"
        ],
        correctAnswer: 0,
        explanation: "Pedagogical Content Knowledge (PCK) is the alignment of subject matter content with effective instructional activities and assessments."
      },
      {
        question: "Ms. J is utilizing the feature of the LMS to provide regular information updates on the topics she and her students are exploring. She is using",
        choices: [
          "Technological Content Knowledge (TCK)",
          "Pedagogical Content Knowledge (PCK)",
          "Technological Pedagogical Knowledge (TPK)",
          "Content Technology Knowledge (CTK)"
        ],
        correctAnswer: 0,
        explanation: "Technological Content Knowledge (TCK) refers to using technology to access, present, and update subject matter content."
      },
      {
        question: "Which is considered the foundational and best overall instructional aid in a standard classroom environment?",
        choices: ["Chalkboard", "Chart", "Realia", "Teacher"],
        correctAnswer: 3,
        explanation: "The teacher is the most essential and versatile instructional aid in any classroom."
      },
      {
        question: "If a teacher wants students to utilize higher-order thinking skills, they should ask more:",
        choices: [
          "Factual questions",
          "Closed-item questions",
          "Convergent questions",
          "Divergent questions (open ended question)"
        ],
        correctAnswer: 3,
        explanation: "Divergent (open-ended) questions encourage analysis, creativity, and multiple valid perspectives, promoting higher-order thinking."
      },
      {
        question: "Which among the following instruction types requires a student to actively perform physically?",
        choices: ["Mock-up", "Filmstrips", "Pantomime", "Comic books"],
        correctAnswer: 2,
        explanation: "Pantomime requires students to use physical movement and facial expressions to convey meaning."
      },
      {
        question: "Which is a blueprint of the daily instructional activities of the teacher?",
        choices: ["Learning Plan", "Learning Content", "Learning Procedures", "Learning Materials"],
        correctAnswer: 0,
        explanation: "A learning plan (or lesson plan) serves as the structured blueprint for daily teaching and learning activities."
      },
      {
        question: "Which refers to the materials used to enrich classroom instruction?",
        choices: ["Learning Plan", "Learning Procedures", "Learning Content", "Learning Resources"],
        correctAnswer: 3,
        explanation: "Learning resources are the tools, references, and materials used to support and enrich classroom instruction."
      },
      {
        question: "Which can be given as an optional activity to reinforce students' learning?",
        choices: ["Artwork", "Activities", "Assignment", "Assessment"],
        correctAnswer: 2,
        explanation: "Assignments are tasks given to reinforce, practice, or extend classroom learning."
      },
      {
        question: "You observe that pupils answer even when not called, shouts MA'AM to get your attention, and laugh when someone commits mistakes. What should you do?",
        choices: [
          "Send the misbehaving pupils to the guidance counselor",
          "Set the rules for the class to observe",
          "Involve the whole class in setting rules of conduct for the whole class",
          "Make a report to the parents about their children's misbehavior"
        ],
        correctAnswer: 2,
        explanation: "Involving students in creating classroom rules fosters ownership, accountability, and better adherence to expected behavior."
      },
      {
        question: "Which is the final, indispensable component of a lesson plan?",
        choices: ["Evaluation", "Activity", "References", "Assignments"],
        correctAnswer: 0,
        explanation: "Evaluation is essential to determine whether the lesson's learning objectives were achieved."
      },
      {
        question: "If Teacher Judith has to ask more higher-order questions, she has to ask more _______ questions.",
        choices: ["convergent", "closed", "fact", "divergent"],
        correctAnswer: 3,
        explanation: "Divergent questions stimulate critical and creative thinking beyond simple recall."
      },
      {
        question: "In the traditional school, the focus of attention was on the",
        choices: ["child", "subject matter", "method", "book"],
        correctAnswer: 1,
        explanation: "Traditional education is subject-centered, prioritizing mastery of the subject matter over learner-centered exploration."
      },
      {
        question: "Give the main difference between these two objectives:\n- \"To teach the importance of proper nutrition for good health\"\n- \"To give the importance of proper nutrition for good health\"",
        choices: [
          "The first objective is general while the second is specific.",
          "The first objective is hard to do while the second is easy.",
          "The first objective needs a longer time while the second doesn't.",
          "The first objective is teacher behavior while the second is pupil behavior."
        ],
        correctAnswer: 3,
        explanation: "\"To teach\" describes what the teacher will do, whereas \"to give\" describes an observable action expected from the learner."
      },
      {
        question: "Which of the objectives below shows overt behavior?",
        choices: [
          "To appreciate the value of democracy.",
          "To understand the importance of a constitution.",
          "To recite the preamble of the constitution.",
          "To show love to one's country."
        ],
        correctAnswer: 2,
        explanation: "Reciting is an overt, directly observable and measurable action, unlike appreciating or understanding."
      },
      {
        question: "The basis by which content is outlined and instructional procedures are developed is the",
        choices: ["Lesson Plan", "Objectives", "Basic Text", "Instructional Materials"],
        correctAnswer: 1,
        explanation: "Learning objectives guide the selection of content, teaching methods, and assessment strategies."
      },
      {
        question: "An objective MUST specify",
        choices: [
          "What the learner must do or say.",
          "What the teacher must do or say.",
          "What projects are to be accomplished.",
          "What the learner must understand."
        ],
        correctAnswer: 0,
        explanation: "A well-written behavioral objective clearly states what the learner should be able to do or demonstrate."
      },
      {
        question: "\"Given ten photographs of biological cells, the pupils will be able to identify six of them as plant or animal cells.\" The underlined phrase is a",
        choices: [
          "Terminal Behavior",
          "Standard or Acceptable Performance",
          "Condition for Learning",
          "An Accomplishment to Be Realized"
        ],
        correctAnswer: 2,
        explanation: "The phrase \"Given ten photographs of biological cells\" specifies the condition under which the learner will perform the behavior."
      },
      {
        question: "Assignments given to the pupils should have the following purposes except for one. Which one is it?",
        choices: [
          "To train pupils on good study habits.",
          "To keep them busy.",
          "To arouse pupils' interests in engaging on the learning activities.",
          "To encourage initiative among pupils."
        ],
        correctAnswer: 1,
        explanation: "Assignments should be purposeful and educational, never given merely as busywork."
      },
      {
        question: "There is scarcity of materials in remote barrios. As a creative and innovative teacher, what must you do?",
        choices: [
          "Just use the lecture method.",
          "Prepare improvised materials.",
          "Buy commercially-made materials.",
          "Borrow materials from your co-teacher."
        ],
        correctAnswer: 1,
        explanation: "Resourceful teachers improvise instructional materials using locally available resources when standard supplies are scarce."
      },
      {
        question: "The following are components of the weighted score according to the new K to 12 grading system EXCEPT",
        choices: ["Written work", "Recitation", "Performance task", "Quarterly assessment"],
        correctAnswer: 1,
        explanation: "The K to 12 grading system is composed of Written Work, Performance Tasks, and Quarterly Assessment."
      },
      {
        question: "Effective teacher use an array of teaching strategies because there is no single, universal approach that suits all situations. Which supports this statement?",
        choices: [
          "Students learn similarly even in different environment.",
          "Combinations of different activities will improve learning outcomes.",
          "Pupils respond to intellectually challenging strategies.",
          "Teaching methods and strategies have similar characteristics."
        ],
        correctAnswer: 1,
        explanation: "Combining varied teaching strategies addresses diverse learning styles and improves overall learning outcomes."
      },
      {
        question: "Question is essential in the effective delivery of the lesson. Which is not an appropriate technique in questioning?",
        choices: [
          "Ask question which only you know the answer.",
          "Simplify the question if you want to elicit exact answers.",
          "Ask more divergent rather than convergent questions.",
          "Allow for wait time before the question is answered."
        ],
        correctAnswer: 0,
        explanation: "Questions should be within the learners' zone of capability to stimulate thinking, not designed so that only the teacher knows the answer."
      },
      {
        question: "Jerome Bruner is known for which of the following?",
        choices: [
          "Banking concept in education",
          "Dichotomy method in education",
          "Spiral curriculum in education",
          "None from the choices"
        ],
        correctAnswer: 2,
        explanation: "Jerome Bruner proposed the spiral curriculum, where key concepts are revisited repeatedly at increasing levels of complexity."
      },
      {
        question: "The teacher dismisses her students at 4:10pm which is 20 minutes before the time. One of her students met an accident on his way home at around 4:18pm. Is the teacher accountable on this situation?",
        choices: [
          "No, because she has already dismissed the class.",
          "Yes, because the student left the school early.",
          "No, because the accident happened outside the school.",
          "Yes, because the incident happened still within his class period."
        ],
        correctAnswer: 3,
        explanation: "Teachers exercise special parental authority (in loco parentis) during official class hours and remain accountable for incidents occurring within that scheduled period."
      },
      {
        question: "Which of the following purposes in asking question during instruction should be the least important?",
        choices: [
          "To aid pupils' understanding of the concept presented.",
          "To direct pupils' in arriving at conclusions.",
          "To appraise pupils' comprehension of the topic.",
          "To assess pupils' mental ability"
        ],
        correctAnswer: 3,
        explanation: "Classroom questioning is primarily meant to guide and check understanding of the lesson, not to measure innate mental ability."
      },
      {
        question: "To develop reasoning and speaking ability, which should you use?",
        choices: ["Storytelling", "Role-playing", "Experiment", "Debate"],
        correctAnswer: 3,
        explanation: "Debate directly trains students in logical reasoning, argumentation, and public speaking."
      },
      {
        question: "The following are adaptations for students with embarrassment problems EXCEPT",
        choices: [
          "Monitor all students the same way.",
          "Confer with students privately to work out accommodations for testing.",
          "Give special attention to mainstreamed students when handing out the test.",
          "Avoid calling attention to mainstreamed students as you help them."
        ],
        correctAnswer: 2,
        explanation: "Singling out mainstreamed students publicly when handing out tests draws unwanted attention and increases embarrassment."
      },
      {
        question: "Among the opportunities for Essay Questions, which of the following does NOT provide high-level thinking opportunity?",
        choices: ["Analysis", "Evaluation", "Synthesis", "Memorization"],
        correctAnswer: 3,
        explanation: "Memorization is a lower-order thinking skill (remembering), whereas analysis, synthesis, and evaluation are higher-order skills."
      },
      {
        question: "My school directress made me attend a massive training for the Araling Panlipunan Grade X teachers. We were made to come up with modules which can be used in Araling Panlipunan lessons. I tried to consult other references and resources in order to make my outputs exemplary. Who am I as a curricularist?",
        choices: ["Planner", "Writer", "Initiator", "Implementor"],
        correctAnswer: 1,
        explanation: "A teacher who creates instructional modules, books, or curriculum guides acts as a curriculum writer."
      },
      {
        question: "The basis of any curriculum is a sound educational aim. This is derived from a careful consideration of several factors. The foremost of them is",
        choices: [
          "Contents of subject matter",
          "Needs of the teachers",
          "Competency of the teachers",
          "Needs of the learners"
        ],
        correctAnswer: 3,
        explanation: "The learner is the center of the educational process, making the needs of the learners the primary basis for curriculum aims."
      },
      {
        question: "Curriculum is defined as the total learning experiences of the children in school. Which part of curriculum will provide these experiences?",
        choices: ["Planning", "Designing", "Evaluating", "Implementing"],
        correctAnswer: 3,
        explanation: "Curriculum implementation is the phase where the planned curriculum is put into action, providing actual learning experiences."
      },
      {
        question: "When evaluating the curriculum, which is the primary question to be addressed?",
        choices: [
          "What educational experiences can be provided that are likely to attain these purposes?",
          "What educational purposes should the school seek to attain?",
          "How can these educational experiences be effectively organized?",
          "How can we determine whether these purposes are attained or not?"
        ],
        correctAnswer: 3,
        explanation: "Curriculum evaluation focuses on determining whether the intended educational objectives have been achieved."
      },
      {
        question: "When do we say that a curriculum material is rewarding?",
        choices: [
          "If students can articulate what they are learning by sharing clearly the results of their tasks.",
          "If the students are allowed to think not only about feelings but also about one's learning.",
          "It builds understanding to engage in real life activities related to becoming teachers.",
          "If it asks students more than just memorization or repetition."
        ],
        correctAnswer: 0,
        explanation: "A rewarding curriculum fosters intrinsic motivation and allows students to clearly articulate and share the results of their learning."
      },
      {
        question: "The class has become uncontrollable, and so Teacher Yen decided to send some undisciplined students out of the room to the counselor's office. What did Teacher Yen apply by way of a preventive approach to discipline?",
        choices: [
          "Removing seductive objects",
          "Antiseptic bouncing",
          "Direct appeal",
          "Physical restraint"
        ],
        correctAnswer: 1,
        explanation: "Antiseptic bouncing involves temporarily removing a disruptive student from the classroom in a calm, non-punitive manner to restore order."
      },
      {
        question: "Liza, a professor in a prominent university, is well-loved by her students. In her class, she often raises difficult questions and presents ideas that disturb the status quo. According to Riessman, which teaching style does Liza exemplify?",
        choices: ["Compulsive", "Boomer", "Coach", "Maverick"],
        correctAnswer: 3,
        explanation: "According to Riessman, a Maverick teacher challenges conventional thinking and raises provocative questions that disturb the status quo."
      },
      {
        question: "Which teaching style is exemplified as sincere, calm but definite, that commands both respect and attention?",
        choices: ["Compulsive", "Boomer", "Quiet one", "Secular"],
        correctAnswer: 1,
        explanation: "In Riessman's classification, the Boomer is characterized by a strong, definite presence that commands respect and attention."
      },
      {
        question: "Which teaching style is exemplified if a teacher is fussy, teaches things over and over, and is concerned with functional order and structure?",
        choices: ["Compulsive", "Academic", "Entertainer", "Boomer"],
        correctAnswer: 0,
        explanation: "The Compulsive teacher is meticulous, repetitive, and heavily focused on order and structure."
      },
      {
        question: "Teachers should have a command of the substance of knowledge and ideas passed to their learners. Which teaching style is emphasized here?",
        choices: ["Academic", "Secular", "Entertainer", "Boomer"],
        correctAnswer: 0,
        explanation: "The Academic teaching style emphasizes deep mastery and command of subject matter knowledge."
      },
      {
        question: "Teacher Yamyam always makes it a point to insert humor into his class so that children can be relaxed even though there is a high standard to be achieved by learners. Which teaching style was used by the teacher?",
        choices: ["Secular", "Coach", "Entertainer", "Maverick"],
        correctAnswer: 2,
        explanation: "The Entertainer teaching style uses humor and engaging delivery to keep students relaxed and interested."
      },
      {
        question: "A teacher employing the Business-Academic approach in classroom discipline emphasizes that there should be no nonsense in the classroom. Which teaching style is being described?",
        choices: ["Secular", "Boomer", "Maverick", "Compulsive"],
        correctAnswer: 3,
        explanation: "A strict, structured, no-nonsense approach aligns with the Compulsive teaching style."
      },
      {
        question: "When a teacher teaches the idea that it is wrong to think that Filipino lifestyle, products and ideas are inferior to those of other nationalities, he fights against",
        choices: ["Acculturation", "Xenocentrism", "Ethnocentrism", "Culture shock"],
        correctAnswer: 1,
        explanation: "Xenocentrism is the belief that another culture's products, styles, or ideas are superior to one's own."
      },
      {
        question: "Teacher Lolita, a teacher for forty years, refuses to attend seminars. She claims that her forty years of teaching is more than all the seminars she is asked to attend. Is her actuation and thinking in accordance with the Code of Ethics for Professional Teachers?",
        choices: [
          "No, a professional teacher, regardless of teaching experience, ought to go through continuing professional education",
          "No, non-attendance to seminars means no professional growth",
          "Yes, because she has taught for forty years and may have mastered the trade",
          "Yes, provided she has an excellent performance rating"
        ],
        correctAnswer: 0,
        explanation: "The Code of Ethics requires all professional teachers to pursue continuing professional education regardless of their years of experience."
      },
      {
        question: "Is it ethical on the part of the teacher to proselyte in her classroom every Friday?",
        choices: [
          "Yes, that strengthens values education",
          "Yes, that is religious instruction which is allowed by the Constitution",
          "No, a teacher shall not engage in the promotion of his/her religious interest in the classroom",
          "No, proselyting is no longer necessary in this age"
        ],
        correctAnswer: 2,
        explanation: "Under the Code of Ethics for Professional Teachers, teachers are prohibited from using their position to proselytize or promote personal religious interests."
      },
      {
        question: "If you have a problem with another teacher, the first step towards resolution should be for you to:",
        choices: [
          "Talk directly with the teacher involved",
          "Ask your fellow teachers to intercede on your behalf",
          "Ask your fellow teachers for their suggestions",
          "Discuss it with your principal"
        ],
        correctAnswer: 0,
        explanation: "Professional ethics dictate addressing conflicts directly and respectfully with the colleague involved first."
      },
      {
        question: "The following are some drill techniques, except:",
        choices: [
          "Challenging students to be above the level of the class",
          "Asking pupils to repeat answers",
          "Giving short quiz and having students grade papers",
          "Assigning exercises from a workbook"
        ],
        correctAnswer: 1,
        explanation: "Effective drill techniques involve active practice and reinforcement rather than mindless repetition of answers."
      },
      {
        question: "The process of task analysis ends up in the formulation of:",
        choices: [
          "Instructional objectives",
          "Enabling objectives",
          "Goals of learning",
          "Behavioral objectives"
        ],
        correctAnswer: 1,
        explanation: "Task analysis breaks down a terminal skill into smaller, sequential enabling objectives required to achieve it."
      },
      {
        question: "For city-bred students to think that their culture is better than those from the province is a concrete example of",
        choices: [
          "Ethical relativism",
          "Ethnocentrism",
          "Cultural relativism",
          "Xenocentrism"
        ],
        correctAnswer: 1,
        explanation: "Ethnocentrism is the belief that one's own culture or group is superior to others."
      },
      {
        question: "An integrative, conceptual approach introduced by Roldan that has as its highest levels in the development of _______ thinking skills.",
        choices: ["Interpretative", "Creative", "Critical", "Literal"],
        correctAnswer: 2,
        explanation: "Roldan's integrative, conceptual approach aims to develop critical thinking skills at its highest level."
      },
      {
        question: "If a student thinks about thinking, he is involved in the process called",
        choices: [
          "Higher order thinking",
          "Metacognition",
          "Critical thinking",
          "Creative thinking"
        ],
        correctAnswer: 1,
        explanation: "Metacognition is defined as awareness and understanding of one's own thought processes—literally \"thinking about thinking.\""
      },
      {
        question: "The right hemisphere of the brain is involved with the following functions except:",
        choices: [
          "Visual functions",
          "Nonverbal functions",
          "Intuitive functions",
          "Detail-oriented functions"
        ],
        correctAnswer: 3,
        explanation: "Detail-oriented and analytical functions are typically associated with the left hemisphere, while the right hemisphere handles visual, nonverbal, and intuitive processing."
      },
      {
        question: "What does the principle of individual difference require teachers to do?",
        choices: [
          "Give less attention to gifted learners",
          "Provide for a variety of learning activities",
          "Treat all learners alike while teaching",
          "Prepare modules for slow learners in class"
        ],
        correctAnswer: 1,
        explanation: "Recognizing individual differences means offering varied learning activities to accommodate diverse abilities, interests, and learning styles."
      },
      {
        question: "Which appropriate teaching practice flows from this research finding on the brain: \"The brain's emotional center is tied its ability to learn.\"",
        choices: [
          "Create a learning environment that encourages students to explore their feelings and ideas freely",
          "Come up with highly competitive games where winners will feel happily",
          "Establish this discipline of being judgmental in attitude",
          "Tell the students to participate in class activities or else they won't receive plus points in class recitation"
        ],
        correctAnswer: 0,
        explanation: "A safe, emotionally supportive environment reduces stress and enhances the brain's capacity to process and retain information."
      },
      {
        question: "A teacher should not be a slave of his lesson plan. This means that:",
        choices: [
          "A teacher must be willing to depart from her lesson plan if students are interested in something other than her intended lesson",
          "A lesson plan must be followed by a teacher no matter what",
          "A teacher must be ready to depart from her lesson plan if she remembers something more interesting than what she earlier planned",
          "Teacher is the best lesson plan designer"
        ],
        correctAnswer: 0,
        explanation: "A lesson plan is a flexible guide; teachers should adapt it to capitalize on teachable moments and genuine student interest."
      },
      {
        question: "What must Teacher Luke do to ensure orderly transitions between activities?",
        choices: [
          "Have the materials ready at the start of the activity",
          "Allow time for the students to socialize in between activities",
          "Assign fewer exercise to fill the allotted time",
          "Wait for students who lag behind"
        ],
        correctAnswer: 0,
        explanation: "Preparing materials in advance minimizes downtime and keeps transitions between classroom activities smooth and orderly."
      },
      {
        question: "\"When more senses are stimulated, teaching and learning become more effective.\" What is an application of this principle?",
        choices: [
          "Appeal to student's sense of imagination",
          "Use multisensory aids",
          "Make your students touch the instructional material",
          "Use audiovisual aids because the eyes and the ears are the most important senses in learning"
        ],
        correctAnswer: 1,
        explanation: "Using multisensory aids engages multiple senses simultaneously, which deepens understanding and improves retention."
      },
      {
        question: "Which types of test is most appropriate if Teacher Yanny wants to measure student's ability to organize thoughts and ideas?",
        choices: [
          "Short answer type of test",
          "Extended response essay",
          "Modified alternative response",
          "Limited response essay"
        ],
        correctAnswer: 1,
        explanation: "Extended response essays give students the freedom to structure, synthesize, and organize their thoughts comprehensively."
      },
      {
        question: "In the faculty room everyone is talking about a teacher who is tutoring for a fee from her own pupil who is vying for honors. What is the professional thing for the other teachers to do?",
        choices: [
          "Talk to the parents of the tutee. Tell them what teacher is doing is unprofessional",
          "Leave her alone, she might accuse you of meddling in her personal life",
          "Correct her and remind her tutoring one's own pupil for a fee is unethical",
          "As a group, report her to the principal"
        ],
        correctAnswer: 2,
        explanation: "Professional courtesy and ethics call for directly reminding a colleague that tutoring one's own student for a fee is a conflict of interest and unethical."
      },
      {
        question: "The task of setting up routine activities for effective classroom management as a task that a teacher should undertake",
        choices: [
          "on the very first day of school",
          "every day at the start of the session",
          "every homeroom day",
          "as soon as the students have adjusted on their schedule"
        ],
        correctAnswer: 0,
        explanation: "Establishing classroom routines on the very first day of school sets clear expectations and prevents management issues early on."
      },
      {
        question: "\"The greatest happiness lies in the contemplative use of the mind\", said Plato. Therefore, let us give more opportunities for our students to do",
        choices: [
          "Social interaction",
          "Introspection",
          "Role playing",
          "Cooperative learning"
        ],
        correctAnswer: 1,
        explanation: "Introspection involves deep self-reflection and contemplative thought, aligning directly with Plato's philosophy."
      }
    ]
  },

  {
    id: "prof-b",
    name: "B - PROFESSIONAL EDUCATION",
    short: "PE",
    questions: [
      {
        question: "Based on DepEd's new grading, on which are learners grades based from Grade 1 to 12?",
        choices: [
          "Final periodical test",
          "Overall achievement test",
          "Written, performance and periodical test",
          "Written and performance tests"
        ],
        correctAnswer: 2,
        explanation: "Under DepEd's K to 12 grading system, grades are weighted across Written Work, Performance Tasks, and Quarterly (Periodical) Assessments."
      },
      {
        question: "How is \"truancy\" be best understood and interpreted so that proper responses can be made to prove it?",
        choices: [
          "Absences without reason",
          "Absences with permission",
          "Absences due to family problems",
          "Absences due to sickness"
        ],
        correctAnswer: 0,
        explanation: "Truancy refers to intentional, unexcused absences from school without a valid reason or permission."
      },
      {
        question: "Under the K to 12 Curriculum, what covers the spiral approach in the teaching of Mathematics?",
        choices: [
          "Give autonomy to schools in choice of math subjects.",
          "Teach Algebra, Geometry and Trigonometry only to higher grades.",
          "Progressively teach Math concepts from Grade 1 and continued to Grade 10.",
          "Teach Algebra, Geometry and Trigonometry in Grade 7, 8 and 10 respectively."
        ],
        correctAnswer: 2,
        explanation: "The spiral progression approach introduces basic concepts early and revisits them with increasing complexity across grade levels."
      },
      {
        question: "What level of technology integration is reached by Teacher Louisa who builds a learning environment that instills the power of technology tools throughout the day and across subject areas?",
        choices: ["Adoption", "Infusion", "Transformation", "Adaptation"],
        correctAnswer: 1,
        explanation: "At the Infusion level, technology tools are consistently integrated throughout the day and across different subject areas."
      },
      {
        question: "Which program directly embodies both the pre-service and in-service program for Teachers?",
        choices: [
          "K-12 Program",
          "Basic Education Curriculum (BEC)",
          "Basic Education Sector Reform Agenda (BESRA)",
          "Teacher Education Development Program (TEDP)"
        ],
        correctAnswer: 3,
        explanation: "The Teacher Education Development Program (TEDP) covers the entire continuum of teacher development, from pre-service training to in-service professional growth."
      },
      {
        question: "What level of technology integration is reached by Teacher Simony who encourages adaptation tool-based software by letting students to select a tool and modify its use to accomplish a task at hand?",
        choices: ["Infusion", "Adoption", "Transformation", "Adaption"],
        correctAnswer: 3,
        explanation: "At the Adaptation level, teachers facilitate independent student use of technology tools, allowing them to select and modify tools for specific tasks."
      },
      {
        question: "Teacher Johnny builds a rich learning environment in which students regularly engage in activities that would have been impossible to achieve without technology, e.g. their own power point presentation of lesson. This act of Teacher Johnny can be classified to what level of technology integration?",
        choices: ["Infusion", "Adoption", "Transformation", "Adaptation"],
        correctAnswer: 2,
        explanation: "Transformation occurs when technology enables innovative learning activities that would be impossible without it."
      },
      {
        question: "What solution can best addressed to anticipated unruly students scenarios in class?",
        choices: [
          "Spelled out rules on discipline",
          "Threats to unruly behavior",
          "Set punishment for misbehavior",
          "Projection of teacher authority"
        ],
        correctAnswer: 0,
        explanation: "Clearly established and communicated rules set expectations upfront and prevent behavioral issues proactively."
      },
      {
        question: "Social norms develop the \"good\" life. In the society, which of the following is the least important to the consideration of a \"good life\" for all?",
        choices: ["Piety", "Justice", "Prosperity", "Freedom"],
        correctAnswer: 2,
        explanation: "While justice, freedom, and piety are foundational moral and civic virtues, material prosperity is considered least essential to defining a morally good life for all."
      },
      {
        question: "Which evidence of learning can serve the most objective means of assessment?",
        choices: ["Test", "Journal", "Dialogue", "Class project"],
        correctAnswer: 0,
        explanation: "Tests—especially objective-type items—provide the most standardized and least subjective measure of student learning."
      },
      {
        question: "Teacher Patrick evaluate an app for his Grade 9 Science class in order to ensure the right standards that meet his objectives, too difficult for learners. He gives emphasis on the criteria for",
        choices: ["Accuracy", "Currency", "Organization", "Appropriateness"],
        correctAnswer: 3,
        explanation: "Appropriateness ensures that instructional materials match the learners' developmental level, abilities, and lesson objectives."
      },
      {
        question: "In order to show continuity and wholeness in the delivery of lesson, what can Teacher Cathy do about past lesson before presenting a new lesson?",
        choices: ["Preview", "Review", "Pretest", "Post-test"],
        correctAnswer: 1,
        explanation: "Reviewing the previous lesson activates prior knowledge and establishes a smooth bridge to the new topic."
      },
      {
        question: "Which of the following situation would indicate that you, as teacher, had been effective in instilling discipline among your students?",
        choices: [
          "Students have develop concern for each other",
          "Fear and fright resulting in good behavior",
          "Students behave because an award awaits them",
          "Your presence results in their being behave"
        ],
        correctAnswer: 0,
        explanation: "True discipline is internalized self-control and genuine respect and concern for others, even without external rewards or fear."
      },
      {
        question: "Which of the following style or technique would make you the teacher a good classroom manager, \"teacher with eyes on the back of her head!\"",
        choices: [
          "Give your students the \"head-to-toe\" look when angry",
          "Uses eye contact technique with your students",
          "Fear and fright dominates the classroom atmosphere",
          "Being aware of all the actions and activities in the classroom"
        ],
        correctAnswer: 3,
        explanation: "Known as \"withitness\" (Kounin), this refers to a teacher's constant awareness of everything happening in the classroom."
      },
      {
        question: "Your class is a model class. You use the question and answer method of recitation. Which of the following actions should you do to make your teaching more effective?",
        choices: [
          "Approves of students answering in chorus",
          "Repeat the correct answers of the students",
          "Answer questions posed by the students",
          "Appreciate all answers given by the students whether correct or wrong"
        ],
        correctAnswer: 3,
        explanation: "Acknowledging and appreciating student effort encourages participation and builds a safe learning environment."
      },
      {
        question: "What is the degree of moral certitude of Alegre who entered into marriage only out of obedience to her parents, but uncertain whether she wanted marriage at all?",
        choices: ["Lax", "Probable", "Doubt", "Certain"],
        correctAnswer: 2,
        explanation: "A doubtful conscience suspends judgment because the person is uncertain about the morality or rightness of an action."
      },
      {
        question: "Barbara is in constant fear and unnecessarily condemns herself for sins that she believes she has committed, even after trying to live a perfectly blameless life and doing everything to make up and atone for whatever sins she has committed. As such, she is said to have a",
        choices: [
          "Lax conscience",
          "Scrupulous conscience",
          "Timorous conscience",
          "Conscientious conscience"
        ],
        correctAnswer: 1,
        explanation: "A scrupulous conscience is overly anxious and sees sin where there is none, leading to constant guilt and fear."
      },
      {
        question: "Jeffrey grew up in a violent environment. He became a leader of a gang and eventually a gun for hire group and drug syndicate. He could kill and harm anybody without the slightest remorse or guilt.",
        choices: [
          "Evil conscience",
          "Callous conscience",
          "Wrong conscience",
          "Malevolent conscience"
        ],
        correctAnswer: 1,
        explanation: "A callous conscience has become hardened and insensitive to wrongdoing, resulting in a complete lack of remorse."
      },
      {
        question: "Barbara is in constant fear and unnecessarily condemns herself for sins that she believes she has committed, even after trying to live a perfectly blameless life and doing everything to make up and atone for whatever sins she has committed. As such, she is said to have a",
        choices: [
          "Lax conscience",
          "Scrupulous conscience",
          "Timorous conscience",
          "Conscientious conscience"
        ],
        correctAnswer: 1,
        explanation: "A scrupulous conscience causes excessive guilt and fear of sinning even when no wrong has been committed."
      },
      {
        question: "Jeffrey grew up in a violent environment. He became a leader of a gang and eventually a gun for hire group and drug syndicate. He could kill and harm anybody without the slightest remorse or guilt.",
        choices: [
          "Evil conscience",
          "Callous conscience",
          "Wrong conscience",
          "Malevolent conscience"
        ],
        correctAnswer: 1,
        explanation: "A callous conscience is desensitized to moral guilt and empathy due to repeated exposure to or engagement in wrongdoing."
      },
      {
        question: "Visualizing Dale's Cone of Experience, what are the bottom and at the top most levels of the cone?",
        choices: [
          "Action learning; verbal symbols",
          "Demonstration; motion pictures",
          "Contrived experience; visual symbols",
          "Dramatized experience; exhibitions"
        ],
        correctAnswer: 0,
        explanation: "Dale's Cone of Experience progresses from the most concrete (direct/action learning at the bottom) to the most abstract (verbal symbols at the top)."
      },
      {
        question: "Teacher Rina wanted her students to learn the electoral process in action so they went on to elect the President, Vice President, 12 Senators and 20 Congressmen. They came up with qualification of candidates, manner of campaigning and canvassing of votes. Through this almost real life situation, students learned from",
        choices: [
          "Contrived experience",
          "Direct experiences",
          "Purposeful experiences",
          "Demonstration"
        ],
        correctAnswer: 0,
        explanation: "Contrived experiences are edited or simulated representations of real-life situations (like mock elections) used when direct experience is impractical."
      },
      {
        question: "Which of the following is the common life stage among Vice, Anne and Kim?",
        choices: [
          "Early childhood",
          "Infancy",
          "Late adulthood",
          "Middle Adulthood"
        ],
        correctAnswer: 3,
        explanation: "Middle adulthood spans roughly ages 40 to 65, which aligns with the designated answer in the source material."
      },
      {
        question: "Which stage of the psychosexual theory does young boys experience rivalry with their father for their mother's attention and affection?",
        choices: ["Oral", "Anal", "Phallic", "Latency"],
        correctAnswer: 2,
        explanation: "During Freud's Phallic stage (ages 3–6), boys experience the Oedipus complex, involving rivalry with their father for their mother's affection."
      },
      {
        question: "Angge focuses her attention on the school work and vigorous play that consume most of her physical energy. Which stage of psychosexual theory illustrates her behavior?",
        choices: ["Oral", "Anal", "Phallic", "Latency"],
        correctAnswer: 3,
        explanation: "In the Latency stage (ages 6–puberty), sexual urges are dormant and energy is channeled into schoolwork, hobbies, and peer play."
      },
      {
        question: "What is the correct order of Freud's Psychosexual Development?\nI. Oral Stage II. Phallic Stage III. Anal Stage IV. Latency Stage V. Genital Stage",
        choices: [
          "I, II, IV, III, V",
          "I, III, II, IV, V",
          "I, III, II, V, IV",
          "I, II, III, V, IV"
        ],
        correctAnswer: 1,
        explanation: "Freud's psychosexual stages occur in the order: Oral (I), Anal (III), Phallic (II), Latency (IV), and Genital (V)."
      },
      {
        question: "Due to intensively strict toilet training Ann had experienced when she was 3 years old, she develop obsession with cleanliness, perfection and control as she grow up. What do you call this fixation according to Freud's Psychosexual development?",
        choices: [
          "Anal expulsive",
          "Anal receptive",
          "Anal aggressive",
          "Anal retentive"
        ],
        correctAnswer: 3,
        explanation: "An anal retentive personality results from overly strict toilet training and manifests as perfectionism, rigidity, and obsession with order."
      },
      {
        question: "A 4-year-old Ash wants her mother to go to a vacation so that she could marry her father.",
        choices: [
          "Oedipus Complex",
          "Electra Complex",
          "Penis Envy",
          "Womb envy"
        ],
        correctAnswer: 1,
        explanation: "The Electra complex describes a young girl's psychosexual competition with her mother for her father's affection during the phallic stage."
      },
      {
        question: "Out of fear of castration & strong competition of their father, boys eventually decide to identify with them than fight them.",
        choices: [
          "Oedipus Complex",
          "Electra Complex",
          "Penis Envy",
          "Womb envy"
        ],
        correctAnswer: 0,
        explanation: "In Freud's Oedipus complex, boys resolve their rivalry with their father by identifying with him."
      },
      {
        question: "It is during this stage that sexual urges remain repressed.",
        choices: [
          "Genital stage",
          "Latency stage",
          "Phallic Stage",
          "Oral Stage"
        ],
        correctAnswer: 1,
        explanation: "During the Latency stage, sexual impulses are repressed as children focus on intellectual and social development."
      },
      {
        question: "Based on Freud's theory, which operates when Tricia lends her dollhouse to her friend Kathleen who was crying for it?",
        choices: ["Ego", "Superego", "Id", "Id and ego"],
        correctAnswer: 1,
        explanation: "The superego represents internalized moral standards and conscience, guiding altruistic and empathetic actions."
      },
      {
        question: "Among the three personality components proposed by Sigmund Freud, this component is considered the reality principle and emerges during toddler and preschooler years.",
        choices: ["Ego", "Superego", "Id", "Id and ego"],
        correctAnswer: 0,
        explanation: "The ego operates on the reality principle, mediating between the instinctual desires of the id and the demands of the real world."
      },
      {
        question: "Riz strike a punch at Leo at height of his anger.",
        choices: ["Ego", "Superego", "Id", "Id and ego"],
        correctAnswer: 2,
        explanation: "The id operates on the pleasure principle and drives impulsive, aggressive, or instinctual reactions without regard for consequences."
      },
      {
        question: "Based on Vygotsky's Zone of Proximal Development when the MKO (More Knowledgeable Other) scaffolds, the process moves in 4 levels. In which order should the following steps be?\nI. I do, you watch\nII. I do, you help\nIII. You do, I help\nIV. You do, I watch",
        choices: [
          "I, III, II and IV",
          "IV, III, II, and I",
          "I, II, III and IV",
          "I, II, IV and III"
        ],
        correctAnswer: 2,
        explanation: "Scaffolding gradually releases responsibility from teacher to learner: modeling (I), guided sharing (II), supported practice (III), and independent performance (IV)."
      },
      {
        question: "The theme of Vygotsky's Socio-Cultural Theory emphasizes the role of appropriate assistance given by the teacher to accomplish a task. Such help enables the child to move from the zone of actual development to a zone of proximal development. Such assistance is termed",
        choices: [
          "Potential level",
          "Scaffolding",
          "active participation",
          "More Knowledgeable Others (MKO)"
        ],
        correctAnswer: 1,
        explanation: "Scaffolding is the temporary, tailored support provided by a teacher or MKO to help a learner master a task within their ZPD."
      },
      {
        question: "A certain level of competency where a child attempts to perform a skill alone.",
        choices: [
          "Zone of Actual Development",
          "Zone of Potential Development",
          "Zone of Proximal Development",
          "Scaffolding"
        ],
        correctAnswer: 0,
        explanation: "The Zone of Actual Development (ZAD) represents what a learner can accomplish independently without assistance."
      },
      {
        question: "Based on Vygotsky's Socio-Cultural Theory, which of the following statements best is/are correct?\nI. Learning always occurs and cannot be separated from a social context.\nII. Create a collaborative community of learners.\nIII. Social context involves tasks that build on each person's language, skills, and experience shaped by each individual's culture.",
        choices: ["I only", "II only", "II and I", "I, II and III"],
        correctAnswer: 3,
        explanation: "Vygotsky's theory emphasizes that learning is inherently social, collaborative, and deeply shaped by culture and language."
      },
      {
        question: "Based on Vygotsky's Socio-Cultural Theory, what are the two central factors in a cognitive development?\nI. Social Interaction II. Play III. Language",
        choices: ["I, II", "I, III", "II, III", "None of the above"],
        correctAnswer: 1,
        explanation: "Vygotsky identified social interaction and language as the two primary drivers of cognitive development."
      },
      {
        question: "To help a student learn to the optimum, Vygotsky advises us to bridge the student's present skill level and the desired skill level by",
        choices: ["Challenging", "Scaffolding", "Inspiring", "Motivating"],
        correctAnswer: 1,
        explanation: "Scaffolding bridges the gap between what a student can currently do alone and what they can achieve with guidance."
      },
      {
        question: "According to R.A. 9155, which among the following is considered the \"heart of the formal education system\"?",
        choices: ["The pupil", "The teacher", "The classroom", "The school"],
        correctAnswer: 3,
        explanation: "Republic Act 9155 (Governance of Basic Education Act of 2001) explicitly declares the school as the heart of the formal education system."
      },
      {
        question: "It develops and supports students' metacognitive skills. Which is referred to?",
        choices: [
          "Assessment as learning",
          "Assessment for learning",
          "Assessment of learning",
          "Assessment in learning"
        ],
        correctAnswer: 0,
        explanation: "Assessment as learning involves students monitoring and reflecting on their own learning, directly building metacognitive skills."
      },
      {
        question: "Which assessment is likened to tasting the soup while in the process of cooking the soup?",
        choices: [
          "Assessment of learning",
          "Assessment for learning",
          "Assessment of learning",
          "Assessment in learning"
        ],
        correctAnswer: 1,
        explanation: "Assessment for learning (formative assessment) is ongoing during instruction, allowing teachers to adjust teaching just as a chef tastes soup to adjust seasoning."
      },
      {
        question: "In which type of assessment are students expected to go beyond completing the tasks assigned to them by their teacher and so students move from the passive learners to active owners of their own learning?",
        choices: [
          "Assessment as learning",
          "Assessment for learning",
          "Assessment of learning",
          "Assessment in learning"
        ],
        correctAnswer: 0,
        explanation: "Assessment as learning empowers students to take ownership of their learning through self-assessment and goal-setting."
      },
      {
        question: "A burglary occurred in Will's neighborhood. Since then, Will is very careful of locking their doors and closing windows. What theory best explains Will's behavior?",
        choices: [
          "Observational learning",
          "Imitation learning",
          "Self-regulated learning",
          "Vicarious learning"
        ],
        correctAnswer: 3,
        explanation: "Vicarious learning occurs when a person modifies their behavior based on observing the consequences experienced by others."
      },
      {
        question: "The right hemisphere of the brain is involved with the following function except:",
        choices: [
          "Intuitive functions",
          "Nonverbal functions",
          "Visual functions",
          "Detail-oriented functions"
        ],
        correctAnswer: 3,
        explanation: "Detail-oriented and analytical processing is primarily associated with the left hemisphere, whereas the right hemisphere is holistic, visual, and intuitive."
      },
      {
        question: "What function is associated with the right brain?",
        choices: [
          "Visual, non-verbal, logical",
          "Visual, intuitive, non-verbal",
          "Visual, intuitive, logical",
          "Visual, logical, detail-oriented"
        ],
        correctAnswer: 1,
        explanation: "The right hemisphere is associated with visual, intuitive, creative, and non-verbal functions."
      },
      {
        question: "The best instructional material in the traditional classroom is the",
        choices: ["blackboard", "computer", "Teacher", "bulletin board"],
        correctAnswer: 2,
        explanation: "The teacher remains the most vital and effective instructional resource in the classroom."
      },
      {
        question: "A student passes a book report written but ornately presented in a folder to make up for the poor quality of the book content. Which Filipino trait does this practice prove?",
        choices: [
          "Art over science",
          "Art over academic",
          "Substance over \"porma\"",
          "\"Porma\" over substance"
        ],
        correctAnswer: 3,
        explanation: "\"Porma\" over substance refers to prioritizing superficial appearance or presentation over actual quality and content."
      },
      {
        question: "Teachers should consider all these criteria for choosing a resource or material, Except:",
        choices: [
          "Aligns to the learning objectives/outcomes of the lesson",
          "Is the most expensive therefore the most durable",
          "Is inclusive and free from cultural bias",
          "Is developmentally appropriate"
        ],
        correctAnswer: 1,
        explanation: "Cost does not guarantee instructional effectiveness; materials should be chosen based on alignment, inclusivity, and appropriateness."
      },
      {
        question: "The result of the test given by Teacher A showed a negatively skewed distribution. What kind of test did Teacher A give?",
        choices: [
          "The test is difficult",
          "It is not too easy nor too difficult",
          "It is moderately difficult",
          "It is easy"
        ],
        correctAnswer: 3,
        explanation: "A negatively skewed distribution means most scores are clustered at the high end, indicating that the test was easy."
      },
      {
        question: "When the distribution is skewed to the right, what kind of test was administered?",
        choices: [
          "Difficult",
          "Average/moderately difficult",
          "Easy",
          "Partly easy - partly difficult"
        ],
        correctAnswer: 0,
        explanation: "A right-skewed (positively skewed) distribution has most scores concentrated at the low end, indicating a difficult test."
      },
      {
        question: "In a negatively skewed distribution, what kind of students does Teacher B have?",
        choices: ["Very good", "Very poor", "Average", "Heterogeneous"],
        correctAnswer: 0,
        explanation: "In a negatively skewed distribution, the majority of students scored high, suggesting very good performance."
      },
      {
        question: "In a positively skewed distribution, the students are:",
        choices: ["Very good", "Very poor", "Normally distributed"],
        correctAnswer: 1,
        explanation: "A positively skewed distribution indicates that most students obtained low scores."
      },
      {
        question: "Which statement is true in a bell-shaped curve?",
        choices: [
          "There are more high scores than low scores",
          "Most scores are high",
          "The scores are normally distributed",
          "The bell curve shape is steep."
        ],
        correctAnswer: 2,
        explanation: "A bell-shaped curve represents a normal distribution where scores are symmetrically distributed around the mean."
      },
      {
        question: "All the examinees obtained scores below the mean. A graphic representation of the score distribution will be:",
        choices: [
          "Perfect normal curve",
          "Negatively skewed",
          "Positively skewed",
          "Leptokurtic"
        ],
        correctAnswer: 2,
        explanation: "When most scores fall below the mean (low scores), the distribution is positively skewed (skewed to the right)."
      },
      {
        question: "Ms. Delos Angeles advocates assessment FOR learning. Which will she NOT likely do?",
        choices: [
          "Formative Assessment",
          "Diagnostic Assessment",
          "Placement Assessment",
          "Summative Assessment"
        ],
        correctAnswer: 3,
        explanation: "Summative assessment is assessment OF learning (for grading/certification), whereas formative, diagnostic, and placement assessments inform instruction (FOR learning)."
      },
      {
        question: "At the beginning of the school year, the 6-year old pupils were tested to find out who among them can already read. The result was used to determine their sections. What kind of test was given to them?",
        choices: ["Diagnostic", "Formative", "Placement", "Summative"],
        correctAnswer: 2,
        explanation: "Placement tests are administered before instruction to group or assign learners to appropriate levels or sections."
      },
      {
        question: "Miss Cortez administered a test to her class, and the result is positively skewed. What kind of test do you think Miss Cortez gave to her pupils?",
        choices: [
          "Posttest",
          "Pretest",
          "Mastery Test",
          "Criterion-referenced Test"
        ],
        correctAnswer: 1,
        explanation: "A pretest typically yields low scores (positively skewed) because students have not yet been taught the material."
      },
      {
        question: "What is the mean of this score distribution: 4, 5, 6, 7, 8, 9, 10?",
        choices: ["7.5", "8.5", "6", "7"],
        correctAnswer: 3,
        explanation: "The sum of the 7 numbers is 49, and 49 divided by 7 equals 7."
      },
      {
        question: "Here are raw scores in a quiz: 97, 95, 85, 83, 77, 75, 50, 10, 5, 2, 1. To get a picture of the group's performance which measure of central tendency is most reliable?",
        choices: [
          "Median",
          "Mode",
          "Mean",
          "None, it is best to look at the individual scores"
        ],
        correctAnswer: 0,
        explanation: "The median is the most reliable measure of central tendency when a distribution contains extreme scores (outliers) or is skewed."
      },
      {
        question: "The mode of a score distribution is 25. This means that:",
        choices: [
          "There is no score of 25",
          "Twenty five (25) is the score that occurs most",
          "Twenty five is the average of the score distribution",
          "Twenty five is the score that occurs least"
        ],
        correctAnswer: 1,
        explanation: "The mode is the value that appears most frequently in a data set."
      },
      {
        question: "A student's score were as follows: 82, 83, 84, 86, 88, 84, 83, 85. The score 84 is the:",
        choices: ["Mode", "Average", "Median", "Mean"],
        correctAnswer: 2,
        explanation: "Arranged in order (82, 83, 83, 84, 84, 85, 86, 88), the two middle scores are both 84, making the median 84."
      },
      {
        question: "There is a school program the following Monday at 9 A.M. You are assigned to emcee in that particular program but your eight year old son has a fever. What will you do?",
        choices: [
          "Make some arrangements and let someone take over the emceeing",
          "Call a neighbor and let him take care of your sick son",
          "Tell your spouse not to go to his office to take care of your son",
          "Forget the program and attend to your son"
        ],
        correctAnswer: 0,
        explanation: "Making proper arrangements for a substitute balances professional responsibility with urgent family care."
      },
      {
        question: "You were discussing poetry in your English class when your students tell you that you just discuss poetry the following day and instead ask you to talk about their problems with their projects. What will you do?",
        choices: [
          "Don't listen to them. Go on with your lesson",
          "Give them time and listen to their problems",
          "Tell them that you will discuss the problem the next day instead",
          "Give them additional assignments"
        ],
        correctAnswer: 1,
        explanation: "Being responsive and taking time to address students' immediate academic concerns builds trust and supports their learning."
      },
      {
        question: "Two of your students dropped out from school without notifying the adviser and each went to the province. The supply officer wants you to pay for the unreturned books. What should you do?",
        choices: [
          "Pay for the books so that you will be cleared",
          "Talk to the principal regarding this matter",
          "Let your students contribute money to pay for the books",
          "Refer this matter to the PTA president"
        ],
        correctAnswer: 1,
        explanation: "Bringing the issue to the principal follows proper administrative channels to resolve accountability fairly."
      },
      {
        question: "Teacher Cyrene gave a True-or-False pretest on social justice. Based in the pretest results, she taught her class social justice by correcting wrong concepts and affirming right answers. Then she gave a post-test. Among forms of assessment which one did Teacher Edna do?",
        choices: [
          "Assessment AS learning",
          "Assessment OF learning",
          "Assessment FOR and AS learning",
          "Assessment FOR learning"
        ],
        correctAnswer: 3,
        explanation: "Using pretest results to guide instruction and correct misconceptions is a classic example of Assessment FOR learning."
      },
      {
        question: "One of the class scored very low. Teacher Cita gave another test to determine where the students were weakest. What type of test is this?",
        choices: [
          "Aptitude test",
          "Remedial test",
          "Diagnostic test",
          "Readiness test"
        ],
        correctAnswer: 2,
        explanation: "A diagnostic test pinpoints specific learning gaps, weaknesses, and misconceptions."
      },
      {
        question: "Educated in a religious school, Dona goes to confession everyday to be free of any kind of sin. How do you characterize Dona's moral attitude?",
        choices: ["Callous", "Pharisaical", "Scrupulous", "Strict"],
        correctAnswer: 2,
        explanation: "A scrupulous moral attitude is marked by excessive anxiety over committing even minor or imagined sins."
      },
      {
        question: "How would you characterize the moral attitude of Hispanic friars who taught religion but were unfaithful to their vow of poverty by amassing the land properties of natives?",
        choices: ["Scrupulous", "Strict", "Lax", "Pharisaical"],
        correctAnswer: 3,
        explanation: "A pharisaical attitude is characterized by hypocrisy—strictly preaching outward rules while failing to live by them."
      },
      {
        question: "How would you characterize the moral attitude of prisoners with criminal minds, who have no sensitivity to the welfare of other people?",
        choices: ["Pharisaical", "Strict", "Lax", "Callous"],
        correctAnswer: 3,
        explanation: "A callous moral attitude shows a complete lack of empathy, remorse, or sensitivity toward others."
      },
      {
        question: "Is membership to the Accredited Professional Organization of teachers mandatory for all LET passers?",
        choices: [
          "No.",
          "Yes, when the teacher is already teaching.",
          "Yes.",
          "Only for LET passers who are not repeaters."
        ],
        correctAnswer: 2,
        explanation: "Under Philippine professional regulations (PRC/RA 7836), membership in the Accredited Professional Organization (APO) is mandatory for registered professional teachers."
      },
      {
        question: "Which is TRUE of the periodic merit exam for teacher provided for in RA 7836?\nI. Consist of oral exam\nII. Consist of written exam\nIII. May serve as additional basis for merit promotion in addition to performance rating\nIV. Taken with fee P1000 per examinee",
        choices: ["I only", "I and II", "II and III", "II only"],
        correctAnswer: 2,
        explanation: "Under RA 7836, the periodic merit exam consists of oral and written components (with the written exam and merit promotion basis highlighted here) and is free of charge."
      },
      {
        question: "Can Manny Pacquiao be given a special permit to teach boxing in a special school?",
        choices: [
          "No, he is not a teacher education graduate.",
          "No, he has not passed the LET.",
          "Yes, he is a graduate of ALS.",
          "Yes, has excelled and gained international recognition."
        ],
        correctAnswer: 3,
        explanation: "Under RA 9293, special permits may be issued to para-teachers or individuals who have excelled and gained international recognition in their specialized field."
      },
      {
        question: "Is it professional for a teacher to receive gifts from students and parents?",
        choices: [
          "Not at all",
          "No, especially if done in exchange for requested concessions",
          "Yes, if deserved",
          "Yes, in-session and out-of-season gifts"
        ],
        correctAnswer: 1,
        explanation: "The Code of Ethics for Professional Teachers prohibits accepting favors or gifts from learners or parents in exchange for requested concessions."
      },
      {
        question: "Among written categories of assessment methods, what instruments did teacher Mona use when she used a check list in order to grade the dramatic performance of students in play?",
        choices: [
          "Performance test",
          "Observation and self reports",
          "Product rating scale",
          "Oral questioning"
        ],
        correctAnswer: 0,
        explanation: "Grading a live dramatic play using a checklist evaluates students' actual execution of a skill, which is a performance test."
      },
      {
        question: "What provides the most direct type of learning, but is difficult to supply in the traditional classroom?",
        choices: [
          "Real-life experience",
          "Computer-assisted learning",
          "Verbal symbolism",
          "Multisensory instructional aids"
        ],
        correctAnswer: 0,
        explanation: "Direct, purposeful real-life experiences provide the richest concrete learning, though they are often impractical to recreate inside a standard classroom."
      },
      {
        question: "What is the degree of moral certitude of Alegre who entered into marriage only out of obedience to her parents, but uncertain whether she wanted marriage at all?",
        choices: ["Lax", "Probable", "Doubtful", "Certain"],
        correctAnswer: 2,
        explanation: "A doubtful conscience exists when a person is uncertain about whether an action is right or truly desired."
      },
      {
        question: "What is the cultural trait of conflicting values that aims to please people in different venues and situations rather than abide by principles?",
        choices: [
          "Bahala na mentality",
          "Crab mentality",
          "Split-personality",
          "Kanya-kanya system"
        ],
        correctAnswer: 2,
        explanation: "Split-level Christianity or split-personality describes holding conflicting values to please different audiences rather than following consistent principles."
      },
      {
        question: "Under R.A. 7722 or Higher Education Act of 1994, which agency has direct supervision and management of teacher education institutions or colleges of education in the country?",
        choices: [
          "Commission on Higher Education",
          "Professional Board of Teachers",
          "Teacher Education Council",
          "Department of Education"
        ],
        correctAnswer: 0,
        explanation: "RA 7722 created the Commission on Higher Education (CHED) to oversee higher education institutions, including colleges of education."
      },
      {
        question: "What does \"Once a Teacher, forever a student\" imply for the Professional Teacher?",
        choices: [
          "Teacher's affinity with student",
          "Student-centered instruction",
          "Post-graduate studies for teachers",
          "Lifelong learning"
        ],
        correctAnswer: 3,
        explanation: "The phrase emphasizes that effective teachers must commit to lifelong learning and continuous professional growth."
      },
      {
        question: "Of the following, which is the most traditional \"technology\" in the limited sense of tools for education?",
        choices: ["Moving film", "Chalkboard", "CD-ROM", "Graphs and photos"],
        correctAnswer: 1,
        explanation: "The chalkboard is the oldest and most traditional instructional tool commonly found in classrooms."
      }
    ]
  },

{
    id: "prof-c",
    name: "C - PROFESSIONAL EDUCATION",
    short: "PE",
    questions: [
      {
        question: "Teacher Joel taught a lesson denoting ownership by means of possessives. He first introduced the rule, then gave examples, followed by class exercise, then back to the rule before he moved to the second rule. Which presenting technique did he use?",
        choices: ["Sequential", "Combinational", "Comparative", "Whole-Part-Whole"],
        correctAnswer: 3,
        explanation: "The Whole-Part-Whole technique introduces the overarching concept (whole), breaks it down into examples and exercises (part), and returns to the overarching rule (whole)."
      },
      {
        question: "For which may you use the direct instruction method?",
        choices: [
          "Use a microscope properly",
          "Distinguish war from aggression",
          "Appreciate Milton's Paradise Lost",
          "Become aware of the pollutants around us"
        ],
        correctAnswer: 0,
        explanation: "Direct instruction is best suited for teaching step-by-step procedural skills, such as operating a microscope properly."
      },
      {
        question: "By what name is indirect instruction or Socratic methods also known?",
        choices: [
          "Questioning method",
          "Morrison method",
          "Indirect method",
          "Mastery learning"
        ],
        correctAnswer: 0,
        explanation: "The Socratic method relies on systematic questioning to stimulate critical thinking and guide learners to discover answers."
      },
      {
        question: "Which does not belong to the group of alternative learning systems?",
        choices: [
          "Multi-age grouping",
          "Multi-grade grouping",
          "Non-graded grouping",
          "Graded education"
        ],
        correctAnswer: 3,
        explanation: "Graded education is the traditional formal schooling structure, whereas multi-age, multi-grade, and non-graded groupings are alternative delivery models."
      },
      {
        question: "Student Ben was asked to report to the Guidance Office. Student Ben and his classmates at once remarked, \"What's wrong?\" What does this imply?",
        choices: [
          "Reporting to a Guidance Office is often associated with misbehavior",
          "Student Ben is a \"problem\" student",
          "Guidance counselors are perceived to be \"almighty and omniscient\"",
          "The parents of Student Ben must be of the delinquent type"
        ],
        correctAnswer: 0,
        explanation: "The immediate reaction reflects a common misconception that the Guidance Office is only for disciplinary issues rather than general student support."
      },
      {
        question: "A teacher combined several subject areas in order to focus on a single concept for interdisciplinary teaching. Which strategy/method did he use?",
        choices: [
          "Unit method",
          "Thematic instruction",
          "Problem centered learning",
          "Reading-writing method"
        ],
        correctAnswer: 1,
        explanation: "Thematic instruction integrates multiple subject areas around a central theme or concept."
      },
      {
        question: "Which is a major advantage of curriculum-based assessment?",
        choices: [
          "It tends to focus on anecdotal information on student's progress",
          "It is based on a norm referenced measurement model",
          "It is informal in nature",
          "It connects testing with teaching"
        ],
        correctAnswer: 3,
        explanation: "Curriculum-based assessment directly aligns what is tested with what is taught in the classroom."
      },
      {
        question: "A school Division Superintendent was enthusiastically lecturing on the Accreditation Program for Public Elementary Schools (APPES), its benefits and demands. Thinking of its many demands, most of the school heads were not very happy about it and the older ones were whispering \"we have every reason to retire soon.\" What does this tell about the change process?",
        choices: [
          "People resist change for no reason",
          "People tend to resist change",
          "Resistance to change is insurmountable",
          "Leadership can affect the desired change in persons despite opposition from the persons themselves."
        ],
        correctAnswer: 1,
        explanation: "Resistance to change is a natural human tendency, especially when new initiatives introduce unfamiliar demands."
      },
      {
        question: "In the problem solving method of teaching, which is the primary role of the teacher?",
        choices: ["Clarifier", "Judge", "Observer", "Director"],
        correctAnswer: 0,
        explanation: "In problem-solving instruction, the teacher acts primarily as a clarifier and facilitator who helps students define the problem and explore solutions."
      },
      {
        question: "To educate the child for freedom is to educate him/her to:\nI. Respond to others\nII. Respond to himself/herself\nIII. Do as he/she pleases\nIV. Live as he/she desires",
        choices: ["II and III", "I and III", "I and II", "I and IV"],
        correctAnswer: 2,
        explanation: "True freedom entails responsibility—being accountable to oneself and to others, not merely doing whatever one pleases."
      },
      {
        question: "I want to engage my students in small group discussion. Which topic lends itself to a lively discussion?",
        choices: [
          "The meaning of the law of supply and demand",
          "Rules on subject-verb agreement",
          "The law of inertia",
          "The exclusion of Pluto as a planet"
        ],
        correctAnswer: 3,
        explanation: "Open-ended, debatable, or controversial topics like Pluto's planetary status generate much livelier discussion than fixed rules or definitions."
      },
      {
        question: "In which of the following would programmed learning to be most likely to be found?",
        choices: [
          "In a class divided into small groups",
          "Independent study",
          "In dyadic groups",
          "In a class where teacher tries to individualize instruction"
        ],
        correctAnswer: 1,
        explanation: "Programmed learning is a self-paced, self-instructional method designed primarily for independent study."
      },
      {
        question: "A master teacher, the resource speaker in an in-service training, presented the situated learning theory and encouraged her colleagues to apply the same in class. Which did she not encourage her colleagues to do?",
        choices: [
          "Apprenticeship",
          "Learning as it normally occurs",
          "Authentic problem solving",
          "Decontextualized teaching"
        ],
        correctAnswer: 3,
        explanation: "Situated learning emphasizes learning within authentic, real-world contexts, which is the direct opposite of decontextualized teaching."
      },
      {
        question: "Which is the ultimate aim of classroom management?",
        choices: [
          "To set up condition that brings about effective teaching and learning",
          "To secure conformity to rules with ease",
          "To make children realize that they cannot do everything they want",
          "To remove the physical condition in the room"
        ],
        correctAnswer: 0,
        explanation: "The primary goal of classroom management is to create and maintain an environment conducive to effective teaching and learning."
      },
      {
        question: "Under which teaching strategy does a School's division practice of assigning a Girl Scout to serve as Superintendent of the Day or Mayor of the Day for leadership training fall?",
        choices: ["Panel discussion", "Symposium", "Simulation", "Dramatization"],
        correctAnswer: 2,
        explanation: "Simulation places learners in realistic, modeled roles to practice decision-making and leadership skills."
      },
      {
        question: "Which approach makes you think of your thinking?",
        choices: ["Constructivist", "Metacognitive", "Cognitive", "Integrative"],
        correctAnswer: 1,
        explanation: "Metacognition refers to awareness and regulation of one's own thought processes—thinking about thinking."
      },
      {
        question: "The grades make valid indicators of students' achievements. Which process should be observed?",
        choices: [
          "Explaining the meaning of marks and grades",
          "Defining the course objective as intended learning outcomes",
          "Adopting letter grades such as A, B, C and D",
          "Giving objective type of tests"
        ],
        correctAnswer: 1,
        explanation: "Grades are valid only when they accurately measure clearly defined course objectives and intended learning outcomes."
      },
      {
        question: "Who are not covered by the Code of Ethics of Professional Teachers?",
        choices: [
          "All full time or part time public and private school teacher and administrator",
          "Teachers of academic, vocational, special, technical or non-formal institution",
          "Teacher in the tertiary level",
          "Teacher in all educational institutions at all levels"
        ],
        correctAnswer: 2,
        explanation: "Under RA 7836, the Code of Ethics for Professional Teachers covers pre-school, elementary, and secondary levels, excluding tertiary (college/university) faculty."
      },
      {
        question: "Which of the UNESCO's four pillars of education is most related to peace education?",
        choices: [
          "Learning to do",
          "Learning to know",
          "Learning to live",
          "Learning to be"
        ],
        correctAnswer: 2,
        explanation: "Learning to live together promotes mutual understanding, respect for diversity, and peaceful conflict resolution."
      },
      {
        question: "The failure of independent study with most Filipino students may be attributed to students'",
        choices: [
          "high degree of independence",
          "ambiance",
          "unpreparedness for schooling",
          "high degree of dependence on authority"
        ],
        correctAnswer: 3,
        explanation: "Strong cultural reliance on authority figures and teacher direction can hinder students' readiness for self-directed, independent study."
      },
      {
        question: "When you use the overhead projector for topic presentation, point to the",
        choices: ["OHP slide", "OHP light", "OHP screen", "Projection wall"],
        correctAnswer: 0,
        explanation: "Pointing directly on the OHP slide (transparency) allows the teacher to maintain eye contact with the audience instead of turning their back to the class."
      },
      {
        question: "Where do you make the correction of your notes while using the overhead projector?",
        choices: [
          "On the slide",
          "On the overhead projector",
          "On the projector wall",
          "On the screen"
        ],
        correctAnswer: 0,
        explanation: "Notes and corrections are written directly on the transparency slide placed on the projector stage."
      },
      {
        question: "Authority comes from God and is meant to:",
        choices: [
          "Help those given the authority to do their task",
          "Distinguish those with authority from those without",
          "Be lorded over others",
          "Make the subjects of authority recognize their superiors"
        ],
        correctAnswer: 0,
        explanation: "Authority is entrusted as a form of service to enable leaders to fulfill their responsibilities for the common good."
      },
      {
        question: "For a discussion of a topic from various perspectives, it is best to hold a/an",
        choices: ["Brainstorming", "Symposium", "Debate", "Panel discussion"],
        correctAnswer: 3,
        explanation: "A panel discussion brings together multiple speakers to interactively examine a topic from diverse viewpoints."
      },
      {
        question: "A Principal tells her teacher that training in the humanities is most important. To which educational philosophy does he adhere?",
        choices: [
          "Perennialism",
          "Existentialism",
          "Essentialism",
          "Progressivism"
        ],
        correctAnswer: 0,
        explanation: "Perennialism emphasizes timeless truths, classic works, and liberal arts/humanities education."
      },
      {
        question: "Jonna, a principal shares this thought with her teachers: \"Subject matter should help students understand and appreciate themselves as unique individuals who accept complete responsibility for their thoughts, feelings and action.\" From which philosophy is this thought based?",
        choices: [
          "Essentialism",
          "Perennialism",
          "Progressivism",
          "Existentialism"
        ],
        correctAnswer: 3,
        explanation: "Existentialism centers on individuality, personal choice, self-definition, and complete personal responsibility."
      },
      {
        question: "Who stressed the idea that students cannot learn if their basic needs are not first met?",
        choices: ["Maslow", "Miller", "Wertheimer", "Thorndike"],
        correctAnswer: 0,
        explanation: "Abraham Maslow's Hierarchy of Needs states that physiological and safety needs must be satisfied before higher-level learning and self-actualization can occur."
      },
      {
        question: "A person, who has had painful experiences at the dentist's office, may become fearful at the mere sight of the dentist's office building. Which theory can explain this?",
        choices: [
          "Classical conditioning",
          "Generalization",
          "Operant conditioning",
          "Attribution theory"
        ],
        correctAnswer: 0,
        explanation: "In classical conditioning (Pavlov), a neutral stimulus (the building) becomes associated with an unconditioned stimulus (pain), triggering a conditioned fear response."
      },
      {
        question: "One strength of an autobiography as a technique for personality appraisal is that",
        choices: [
          "It may be read by unauthorized people",
          "It can replace data obtained from other data-gathering technique",
          "It makes possible the presentation of intimate experiences",
          "It gives complete data about the author"
        ],
        correctAnswer: 2,
        explanation: "Autobiographies allow individuals to share personal, intimate thoughts and life experiences that standardized tests may miss."
      },
      {
        question: "Which Millennium Development Goal (MDG) goal is related to the state's goal for quality education?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "MDG Goal 2 is specifically aimed at achieving universal primary education."
      },
      {
        question: "All of the following describe the development of children aged eleven to thirteen, except:",
        choices: [
          "Sex differences in IQ become more evident",
          "They exhibit increased objectivity in thinking",
          "They shift from impulsivity to adaptive ability",
          "They show abstract thinking and judgment"
        ],
        correctAnswer: 0,
        explanation: "Research shows no inherent sex differences in overall IQ emerging at ages 11–13, whereas abstract thinking, objectivity, and adaptive behavior do develop."
      },
      {
        question: "One learns Math by building on the Math concepts previously learned. This is an application of",
        choices: ["Constructivist", "Humanist", "Physiological", "S-R"],
        correctAnswer: 0,
        explanation: "Constructivism holds that learners actively construct new knowledge by building upon their prior knowledge and experiences."
      },
      {
        question: "The singing of the National Anthem in schools is an offshoot of the philosophy of:",
        choices: ["Nationalism", "Pragmatism", "Naturalism", "Socialism"],
        correctAnswer: 0,
        explanation: "Nationalism promotes patriotism, civic pride, and loyalty to one's country through shared symbols and rituals."
      },
      {
        question: "The environment in order to facilitate learning must be interactive. Which of the following best typifies this kind of environment?",
        choices: [
          "The child listens to a lecture on fossils given by the teacher",
          "The child goes out and discovers for himself some rock or fossil",
          "The child summarize the section on fossils in his science textbook",
          "The child copies a list of facts concerning fossils on the blackboard"
        ],
        correctAnswer: 1,
        explanation: "Hands-on exploration and discovery actively engage the learner with their environment."
      },
      {
        question: "When an adolescent combines ability to use deductive and inductive reasoning in constructing realistic rules that he can respect and live by, how does he perceive his environment?",
        choices: [
          "He views the world from his own perspective",
          "He sees the world and himself through the eyes of other people",
          "He interprets events from a limited views",
          "He sees events apart from himself and other people"
        ],
        correctAnswer: 1,
        explanation: "Mature adolescent reasoning enables perspective-taking, allowing them to view themselves and the world through others' eyes."
      },
      {
        question: "Who introduced the technique of using the drawing of a man as a measure of intelligence?",
        choices: ["Aristotle", "Herbert", "Goodenough", "Binet"],
        correctAnswer: 2,
        explanation: "Florence Goodenough developed the Draw-a-Man Test in 1926 to assess children's intellectual maturity."
      },
      {
        question: "Which Republic Act provides government assistance to students and teachers in private education?",
        choices: ["RA 7784", "RA 6728", "RA 7836", "RA 6675"],
        correctAnswer: 1,
        explanation: "Republic Act 6728 is the Government Assistance to Students and Teachers in Private Education (GASTPE) Act."
      },
      {
        question: "The authoritarian setting in the Filipino home is reinforced by a classroom teacher who:",
        choices: [
          "Is open to suggestions",
          "Encourage pupils to ask questions",
          "Prescribes what pupils should do",
          "Ask open ended questions"
        ],
        correctAnswer: 2,
        explanation: "Prescribing exactly what students must do without room for input reinforces an authoritarian dynamic."
      },
      {
        question: "Who among the following believes that learning requires disciplined attention, regular homework, and respect for legitimate authority?",
        choices: [
          "Essentialist",
          "Perennialist",
          "Progressivist",
          "Reconstructionist"
        ],
        correctAnswer: 0,
        explanation: "Essentialism emphasizes hard work, discipline, mastery of core basics, and respect for authority."
      },
      {
        question: "The Constitutional provision on language has the following aim, except:",
        choices: [
          "To make Filipino the sole medium of instruction",
          "To make the regional dialect as auxiliary media of instructions in regional school",
          "To maintain English as a second language",
          "To make Filipino the national Language and medium of instruction and communication"
        ],
        correctAnswer: 0,
        explanation: "The 1987 Philippine Constitution establishes a bilingual policy using both Filipino and English, not Filipino as the sole medium of instruction."
      },
      {
        question: "The tendency to emphasize so much on school beautification to the detriment of pupils' performance illustrates the:",
        choices: [
          "Filipino's lack of seriousness",
          "Filipino's love for \"porma\"",
          "Filipino's lack of reflection",
          "Filipino's sense of humor"
        ],
        correctAnswer: 1,
        explanation: "Prioritizing superficial appearance (beautification) over actual learning outcomes reflects the trait of \"porma\" over substance."
      },
      {
        question: "In order to avoid disgrace, a pregnant, unmarried woman takes drugs to induce abortion. Is she morally justified to do that?",
        choices: [
          "Yes, it can save her and child from disgrace when he grows up",
          "No, the act of inducing abortion is bad in itself",
          "No, the unborn child cannot be made to suffer the consequences of the sins of his parents",
          "No, it is better to prevent the child from coming into the world who will suffer very much due to the absence of a father"
        ],
        correctAnswer: 1,
        explanation: "In traditional moral philosophy and Philippine ethics, the end does not justify the means; an intrinsically wrong act cannot be justified by a desired outcome."
      },
      {
        question: "In which way does heredity affect the development of the learner?",
        choices: [
          "By placing limits beyond which the learner cannot develop",
          "By providing equal potential to all",
          "By compensating for what environment fails to develop",
          "By blocking the influence of environment"
        ],
        correctAnswer: 0,
        explanation: "Heredity sets the biological ceiling or genetic potential within which environmental factors operate."
      },
      {
        question: "The cultivation of reflective and meditative skills in teaching is an influence of:",
        choices: ["Taoism", "Shintoism", "Confucianism", "Zen Buddhism"],
        correctAnswer: 3,
        explanation: "Zen Buddhism places central emphasis on mindfulness, reflection, and meditation."
      },
      {
        question: "A child refuse to obey orders or displays negativism as a development trait. How may you best handle him?",
        choices: [
          "Detain him after office hours for him to do what he has been ordered to do",
          "Take every opportunity to praise him for every positive attitude display",
          "Insist on compliance to the same degree required of pupils",
          "Avoid giving him orders; if you do and he objects, take back the order"
        ],
        correctAnswer: 1,
        explanation: "Positive reinforcement—praising constructive behaviors—is the most effective way to guide a child through developmental negativism."
      },
      {
        question: "Which term refers to the collection of students' products and accomplishment for a period of evaluation purposes?",
        choices: [
          "Portfolio",
          "Observation report",
          "Anecdotal record",
          "Diary"
        ],
        correctAnswer: 0,
        explanation: "A portfolio is a purposeful collection of student work demonstrating effort, progress, and achievement over time."
      },
      {
        question: "Rights which cannot be renounced or transferred because they are necessary for the fulfillment of man's primordial obligations are called:",
        choices: [
          "Alienable rights",
          "Perfect rights",
          "Inalienable rights",
          "Acquired rights"
        ],
        correctAnswer: 2,
        explanation: "Inalienable rights (such as the right to life and liberty) are fundamental and cannot be surrendered or transferred."
      },
      {
        question: "Which is in line with equitable access to education but runs counter to quality?",
        choices: [
          "Selective retention of students",
          "Deregulated tuition fee hike",
          "Open admission",
          "Program accreditation"
        ],
        correctAnswer: 2,
        explanation: "Open admission maximizes access for all students, but without adequate support or standards, it can strain instructional quality."
      },
      {
        question: "A negative discrimination index means that:",
        choices: [
          "The items could not discriminate between the lower and upper group",
          "More from the lower group answered the test items correctly",
          "More from the upper group answered the test item correctly",
          "Less from the lower group got the test item correctly"
        ],
        correctAnswer: 1,
        explanation: "A negative discrimination index indicates a flawed item because more low-performing students answered it correctly than high-performing students."
      },
      {
        question: "Your teacher is of the opinion that the world and everything in it are ever changing and so teaches you the skill to cope with the changes. What is his governing philosophy?",
        choices: ["Experimentation", "Existentialism", "Realism", "Idealism"],
        correctAnswer: 0,
        explanation: "Experimentalism (pragmatism) views reality as constantly changing and focuses on teaching adaptive problem-solving skills."
      },
      {
        question: "For brainstorming to be effective which one should be out?",
        choices: [
          "Making use of the others ideas shared",
          "Teacher's judgmental attitude",
          "Non-threatening atmosphere",
          "Openness to idea"
        ],
        correctAnswer: 1,
        explanation: "Brainstorming requires deferring judgment so participants feel free to generate creative ideas without fear of criticism."
      },
      {
        question: "Which statement on spaced and massed learning is correct?",
        choices: [
          "Massed learning is better than spaced learning",
          "Massed learning is as effective as spaced learning",
          "Spaced learning is better than massed learning",
          "Both massed learning and spaced learning are not effective"
        ],
        correctAnswer: 2,
        explanation: "Spaced (distributed) practice consistently yields better long-term retention than massed practice (cramming)."
      },
      {
        question: "Which of the following measures should a teacher do to a principal whom she would like to file a case of sexual harassment without violating the relationship of the teacher and her superiors?",
        choices: [
          "Write an anonymous letter to a higher school official to denounce the superior",
          "Present the case before a competent authority and prepare to prove the charge",
          "Call a parent-teacher meeting and denounce the superior",
          "Encourage the other teachers and students to hold a demonstration to oust the superior"
        ],
        correctAnswer: 1,
        explanation: "The Code of Ethics states that a teacher may submit justifiable criticism or formal charges against an associate or superior before a competent authority with proper evidence."
      },
      {
        question: "Pick out the situation that illustrates the duty of a new teacher to the state:",
        choices: [
          "Take a long vacation which she firmly believes she deserves after four years of diligent study before taking the examination for teachers",
          "Take the licensure examination for teacher and an oath to do her best to help carry out the policies of the state",
          "Apply for teaching job where eligibility is not required to gain teaching experience before taking the teachers board examination",
          "Prepare for the wedding she and her boyfriend have long planned to be able to raise a family with children which they plan to rear as good citizen of our country"
        ],
        correctAnswer: 1,
        explanation: "Passing the licensure exam and taking the professional oath to uphold state educational policies fulfill a teacher's civic duty to the state."
      },
      {
        question: "A teacher is a facilitator of learning and of the development of the youth. Which practice is not keeping with his role as facilitator?",
        choices: [
          "Considers the multiple intelligences of learners",
          "Humiliates misbehaving pupils",
          "Dialogs with parents and with other members of the community",
          "Keeps himself abreast with educational trends"
        ],
        correctAnswer: 1,
        explanation: "Humiliating students damages their self-esteem and violates the teacher's ethical duty to foster a supportive learning environment."
      },
      {
        question: "Which one indicates a teacher's genuine enthusiasm and pride in teaching?",
        choices: [
          "Sticking to teaching for the moment that there are no better offers",
          "Telling everyone that he went to teaching for there was no other choice then",
          "Engaging himself in continuing professional education",
          "Belittling the remuneration one gets from teaching"
        ],
        correctAnswer: 2,
        explanation: "Actively pursuing continuing professional education demonstrates commitment, pride, and passion for the teaching profession."
      },
      {
        question: "In writing performance objective which word is not acceptable?",
        choices: ["Manipulate", "Integrate", "Delineate", "Comprehend"],
        correctAnswer: 3,
        explanation: "\"Comprehend\" is not directly observable or measurable; performance objectives must use concrete action verbs."
      },
      {
        question: "When is giving praise ineffective? When it:",
        choices: [
          "Uses the accomplishment of peers as the context for describing a student's present accomplishment",
          "Provides information to students about their competence and the value of their accomplishment",
          "Focuses students attention on her own task relevant behavior",
          "Shows spontaneity, variety and other signs of credibility"
        ],
        correctAnswer: 0,
        explanation: "Comparing a student to peers fosters unhealthy competition rather than focusing on the student's own effort and growth."
      },
      {
        question: "Which statement applies when scores distribution is negatively skewed?",
        choices: [
          "The mode corresponds to a lower value",
          "The median is higher than the mode",
          "The mode and median are equal",
          "The mean corresponds to a high value"
        ],
        correctAnswer: 0,
        explanation: "The designated answer from the source material is \"The mode corresponds to a lower value\"."
      },
      {
        question: "The use of the process approach gives the student the opportunity to:",
        choices: [
          "Learn on their own",
          "Apply the scientific method",
          "Make use of laboratory apparatuses",
          "Learn how to learn"
        ],
        correctAnswer: 3,
        explanation: "The process approach focuses on developing inquiry and thinking skills so students learn how to learn independently."
      },
      {
        question: "A comprehension skill of higher level which may be inferred or implied from reading is:",
        choices: [
          "Picking out the main idea",
          "Drawing conclusion",
          "Noting specific details",
          "Following direction"
        ],
        correctAnswer: 1,
        explanation: "Drawing conclusions requires reading between the lines to infer meaning not explicitly stated in the text."
      },
      {
        question: "In the Preamble of the Code of Ethics of Professional Teachers, which is not mention about teachers?",
        choices: [
          "Duly licensed professionals",
          "Possess dignity and reputation",
          "LET passers",
          "With high moral values"
        ],
        correctAnswer: 2,
        explanation: "The Preamble describes teachers as duly licensed professionals who possess dignity and reputation with high moral values, without specifically using the term \"LET passers.\""
      },
      {
        question: "What does a skewed score distribution mean?",
        choices: [
          "The scores are concentrated more at one end or the other end",
          "The mode, the mean and the median are equal",
          "The mean and median are equal",
          "The scores are normally distributed"
        ],
        correctAnswer: 0,
        explanation: "A skewed distribution is asymmetrical, meaning scores cluster heavily toward either the high end or the low end."
      },
      {
        question: "What is implied by a negatively skewed score distribution?",
        choices: [
          "The scores are evenly distributed from the left to the right",
          "Most pupils are underachievers",
          "Most of the scores are high",
          "Most of the scores are low"
        ],
        correctAnswer: 2,
        explanation: "In a negatively skewed distribution, the tail extends to the left and the bulk of the scores are concentrated on the high end."
      },
      {
        question: "Both Muslim and Christian value marriage but the Muslim practices polygamous marriage while the Christian practices monogamous marriage. What is this called?",
        choices: [
          "Cultural relativism",
          "Acculturation",
          "Ethical relativism",
          "Enculturation"
        ],
        correctAnswer: 0,
        explanation: "Cultural relativism is the principle of understanding a culture's beliefs and practices within its own cultural context."
      },
      {
        question: "Teacher wants to compare 2 concepts. With which technique can accomplish this best?",
        choices: ["K-W-L technique", "Venn diagram", "Spider web", "Histogram"],
        correctAnswer: 1,
        explanation: "A Venn diagram visually displays both the similarities (overlapping area) and differences between two concepts."
      },
      {
        question: "To build a sense of pride among Filipino youth what should be done?",
        choices: [
          "Re-study our history and stress on our achievements as a people",
          "Set aside the study of local history",
          "Re-study our history from the perspective of our colonizers",
          "Replace the study of folklores and myths with technical subjects"
        ],
        correctAnswer: 0,
        explanation: "Highlighting national achievements and heritage in history builds genuine cultural pride and identity."
      },
      {
        question: "When necessary conditions are present, the use of inductive method is preferred because:",
        choices: [
          "It gives the teacher more time to rest",
          "There is greater active participation on the part of the pupils",
          "It needs only few instruction materials",
          "Academic time is used wisely"
        ],
        correctAnswer: 1,
        explanation: "The inductive method actively involves students in observing examples and discovering general rules for themselves."
      },
      {
        question: "Which is the best reason why teacher begins a lesson in Math by checking and reviewing on the previous day's assignment and provides practice and drills?",
        choices: [
          "Check if parents guide their children in the making of assignment",
          "Make sure that the students understand the pre-requisite skills of the lesson",
          "Prepare the students for the mastery test",
          "Make learning interesting and enjoyable for students"
        ],
        correctAnswer: 1,
        explanation: "Mathematics is hierarchical; verifying mastery of prerequisite skills ensures students are ready for new concepts."
      },
      {
        question: "Which is a selective reading technique meant at getting at important facts very fast?",
        choices: ["Skim reading", "Scanning", "Oral reading", "Silent reading"],
        correctAnswer: 1,
        explanation: "Scanning involves rapidly moving the eyes over text to locate specific facts, names, dates, or keywords."
      },
      {
        question: "For counseling to be successful which assumption must be avoided?",
        choices: [
          "The environment must provide assurance of confidentiality",
          "The counselor tells the student what to do",
          "The student is willing to participate in the process",
          "The counselor must be able to relate to the student"
        ],
        correctAnswer: 1,
        explanation: "Effective counseling guides clients to make their own informed decisions rather than dictating what they should do."
      },
      {
        question: "What best indicates the effectiveness of classroom activities?",
        choices: [
          "The laughter and enjoyment of students",
          "The application of concept learned in daily life",
          "The utilization of varied techniques and approaches",
          "The variety of instructional materials used"
        ],
        correctAnswer: 1,
        explanation: "True learning effectiveness is demonstrated when students can transfer and apply classroom concepts to real-life situations."
      },
      {
        question: "The main purpose of the compulsory study of the Constitution in Philippine schools is to:",
        choices: [
          "Develop the students into responsible thinking citizens",
          "Acquaint students with the historical development of the Philippine Constitution",
          "Prepare students for law making",
          "Make constitutional experts of the students"
        ],
        correctAnswer: 0,
        explanation: "Teaching the Constitution aims to cultivate informed, patriotic, and responsible citizens who know their rights and civic duties."
      },
      {
        question: "Some students who are high in the scholastic aptitude test have failed in college. Some who are below the standards set for admission but who for various reasons were admitted, attained satisfactory standings. This proves that:",
        choices: [
          "Human beings are certainly predictable",
          "Admission tests are not accurate, hence should not be used",
          "Aptitude tests do not measure all factors important for success",
          "Aptitude test can be perfectly relied on"
        ],
        correctAnswer: 2,
        explanation: "Academic success also depends on non-cognitive factors like motivation, study habits, and perseverance, which aptitude tests do not measure."
      },
      {
        question: "If the teacher's pattern in questioning consists of calling on a student then asking the question:",
        choices: [
          "All students may be encouraged to participate",
          "The student called to answer may be able to think well of his answer",
          "The rest of the class may just dictate the answer",
          "The rest of the class may not engage themselves in thinking of the answer"
        ],
        correctAnswer: 3,
        explanation: "Naming a student before asking the question allows the rest of the class to disengage mentally since they know they won't be called."
      },
      {
        question: "Freud expounded that there is a period when young girls experience rivalry with their mother for their father's affection. This is called:",
        choices: [
          "Electra complex",
          "Oedipus complex",
          "Achilles syndrome",
          "Cassandra syndrome"
        ],
        correctAnswer: 0,
        explanation: "The Electra complex describes a young girl's rivalry with her mother for her father's affection during the phallic stage."
      },
      {
        question: "Education is a lifelong process. This simply means that education:",
        choices: [
          "May take place formally or informally to enable the individual to grow",
          "May take place anywhere and anytime the individual so desires",
          "Is a continuous process of experiencing and reorganizing experiences",
          "Take place in the school where the individual is exposed, self contained experiences"
        ],
        correctAnswer: 2,
        explanation: "John Dewey defined education as a continuous reconstruction and reorganization of experience throughout life."
      },
      {
        question: "What should a teacher do before constructing items for a particular test?",
        choices: [
          "Prepare a table of specifications",
          "Review the previous lessons",
          "Determine the length of time for answering it",
          "Announce to students the scope of the test"
        ],
        correctAnswer: 0,
        explanation: "A Table of Specifications (TOS) serves as a blueprint to ensure content validity and balanced coverage of learning objectives before writing test items."
      },
      {
        question: "Under which of the multiple choice type of test can this question be classified? \"Which of the following statement expresses this concept in different forms?\"",
        choices: ["Association", "Definition", "Difference", "Cause"],
        correctAnswer: 0,
        explanation: "Recognizing the same concept expressed in different forms tests the student's ability to make conceptual associations."
      },
      {
        question: "Of the following types of test which is the most subjective in scoring?",
        choices: ["Matching type", "Simple recall", "Multiple choice", "Essay"],
        correctAnswer: 3,
        explanation: "Essay tests allow open-ended responses, making their scoring more susceptible to rater subjectivity compared to objective tests."
      }
    ]
  },


 {
    id: "prof-d",
    name: "D - PROFESSIONAL EDUCATION",
    short: "PE",
    questions: [
      {
        question: "Parenting style influences children's development. Read the following parent's remarks for their children then, answer the question:\nParent C - Tells her child, \"You should do it my way or else. There is no discussion.\"\nParent D - Tells her husband, \"It is 10:00 PM, do you know where your child is?\"\nParent E - Tells her child, \"You know, you should have not done that. Let's talk about it so you can handle the situation better next time.\"\nParent F - Tells her child, \"You may do what you want. We will always be here for you, no matter what you do.\"\nWhich Parenting style is Authoritarian?",
        choices: ["D", "F", "E", "C"],
        correctAnswer: 3,
        explanation: "Authoritarian parenting is characterized by strict demands, absolute obedience, and no room for open discussion, as shown by Parent C."
      },
      {
        question: "A common complaint of teachers about pupils is this: \"You give them assignment, the following day they come without any. You teach them this today, ask them tomorrow and they don't know. It is as if there is nothing that you taught them at all.\" Based on the theory of information processing, what must teachers do to counteract pupil's forgetting?\nI. Work for meaningful learning by connecting lesson to what pupils know.\nII. Punish every child who can't give correct answers to questions\nIII. Reward every child who remembers past lessons",
        choices: ["III only", "I and III", "II and III", "II only"],
        correctAnswer: 1,
        explanation: "Connecting new lessons to prior knowledge promotes meaningful encoding, and positive reinforcement encourages retention."
      },
      {
        question: "Based on Bandura's theory, which conditions must be present for a student to learn from a model?\nI. Attention\nII. Retention\nIII. Motor reproduction\nIV. Motivation",
        choices: [
          "I and II",
          "[missing in scan]",
          "I, II, III and IV",
          "[missing in scan]"
        ],
        correctAnswer: 2,
        explanation: "Albert Bandura's Social Learning Theory identifies four essential steps for observational learning: Attention, Retention, Motor Reproduction, and Motivation."
      },
      {
        question: "To help a student learn to the optimum, Vygotsky advises us to bridge the student's present skill level and the desired skill level by",
        choices: ["Challenging", "Scaffolding", "Inspiring", "Motivating"],
        correctAnswer: 1,
        explanation: "Scaffolding provides temporary, structured support to help learners bridge their Zone of Proximal Development."
      },
      {
        question: "\"Do not cheat. Cheating does not pay. If you do, you cheat yourself\" says the voiceless voice from within you. In the context of Freud's theory, which is/are at work?",
        choices: ["Id", "Id and Superego", "Ego", "Superego"],
        correctAnswer: 3,
        explanation: "The superego acts as the moral conscience, reminding individuals of ethical standards and right versus wrong."
      },
      {
        question: "It is good to give students creative learning tasks because",
        choices: [
          "Development is affected by cultural changes",
          "The development of individuals is unique",
          "Development is the individual's choice",
          "Development is aided by stimulation"
        ],
        correctAnswer: 3,
        explanation: "Providing creative and engaging tasks stimulates cognitive and personal development."
      },
      {
        question: "In planning for instruction, can a teacher begin with assessment?",
        choices: [
          "No, it may discourage and scare the learners",
          "Yes, determine entry knowledge or skill",
          "Yes, to make the class pay attention",
          "No, assessment is only at the end of a lesson"
        ],
        correctAnswer: 1,
        explanation: "Diagnostic or pre-assessment at the beginning of instruction helps teachers determine students' prior knowledge and readiness."
      },
      {
        question: "Which among the following is closest to the real human digestive system for study in the classroom?",
        choices: [
          "Drawing of the human digestive system on the board",
          "Model of the human digestive system",
          "The human digestive system projected on an OHP",
          "Drawing of the human digestive system on a page of a textbook"
        ],
        correctAnswer: 1,
        explanation: "A three-dimensional model is a contrived experience that closely approximates the real object compared to flat 2D drawings or projections."
      },
      {
        question: "Here is a question: \"Is the paragraph a good one?\" Evaluate. If broken down to simplify, which is the best simplification?",
        choices: [
          "Why is the paragraph a good one? Prove",
          "Is the paragraph a good one? Why or Why not?",
          "If you asked to evaluate something, what do you do? Evaluate the paragraph?",
          "What are the qualities of a good paragraph? Does the paragraph have these qualities?"
        ],
        correctAnswer: 3,
        explanation: "Breaking evaluation down into identifying criteria first and then applying those criteria guides students through the evaluative process."
      },
      {
        question: "Which one is in support of greater interaction?",
        choices: [
          "Probing",
          "Repeating the question",
          "Not allowing a student to complete a response",
          "Selecting the same student respondents"
        ],
        correctAnswer: 0,
        explanation: "Probing encourages students to elaborate, clarify, and deepen their responses, fostering richer classroom interaction."
      },
      {
        question: "I want to compare two concepts. Which technique is most appropriate?",
        choices: [
          "Attribute wheel",
          "K-W-L techniques",
          "Venn diagram",
          "Spider web organizer"
        ],
        correctAnswer: 2,
        explanation: "A Venn diagram visually illustrates both the similarities and differences between two concepts."
      },
      {
        question: "For a discussion of a topic from various perspectives, it is best to hold a",
        choices: ["Debate", "Brainstorming", "Panel discussion", "Symposium"],
        correctAnswer: 2,
        explanation: "A panel discussion gathers multiple speakers to explore and discuss a topic from different viewpoints."
      },
      {
        question: "After establishing my learning objectives, what should I do to find out what my students already know and what they do not yet know in relation to my lesson objectives in the cognitive domain?",
        choices: [
          "Give a pretest",
          "Study the least learned competencies in the National Achievement Test",
          "Analyze my students grades last year",
          "Interview a sample of my students"
        ],
        correctAnswer: 0,
        explanation: "Administering a pretest directly measures students' baseline knowledge relative to the upcoming lesson objectives."
      },
      {
        question: "Which must be primarily considered in the choice of instructional aide?",
        choices: [
          "Must stimulate and maintain student interest",
          "Must be updated and relevant to Filipino setting",
          "Must be suited to the lesson objective",
          "Must be new and skillfully made"
        ],
        correctAnswer: 2,
        explanation: "Alignment with the lesson objectives is the foremost criterion in selecting any instructional aid."
      },
      {
        question: "For lesson clarity and effective retention, which should a teacher observe, according to Bruner's theory?",
        choices: [
          "Begin teaching at the concrete level but go beyond it by reaching the abstract",
          "Use purely verbal symbols in teaching",
          "Start at the concrete level and end there",
          "End teaching with verbal symbols"
        ],
        correctAnswer: 0,
        explanation: "Jerome Bruner's modes of representation progress from enactive (concrete) to iconic (pictorial) to symbolic (abstract)."
      },
      {
        question: "Is it advisable to use realias all the time?",
        choices: [
          "No, for the sake of variety of instructional materials",
          "No, only when feasible",
          "Yes, because there is no substitute for realias",
          "Yes, because it is the real thing"
        ],
        correctAnswer: 1,
        explanation: "Realia (real-life objects) are highly effective, but they should be used only when practical, safe, and feasible."
      },
      {
        question: "In the parlance of test construction, what does TOS mean?",
        choices: [
          "Table of Specification",
          "Team of Specifications",
          "Table of Specifics",
          "Terms of Specifications"
        ],
        correctAnswer: 0,
        explanation: "TOS stands for Table of Specifications, a blueprint that aligns test items with instructional objectives and content weight."
      },
      {
        question: "I want to develop creative thinking in my students, which one/s should I use?\nI. Problem solving II. Brainstorming III. Dramatics",
        choices: ["I and II", "II only", "III only", "I, II and III"],
        correctAnswer: 3,
        explanation: "Problem solving, brainstorming, and dramatics all foster divergent, imaginative, and creative thinking."
      },
      {
        question: "Which is/are effective method/s in teaching students critical reading skills?",
        choices: [
          "Read and interpret three different movie reviews",
          "Interpret editorials about a particular subject from three different newspaper",
          "Distinguish fiction from non-fiction materials",
          "Interpret editorials and read and interpret three different movie reviews"
        ],
        correctAnswer: 3,
        explanation: "Comparing multiple editorials and movie reviews trains students to evaluate bias, perspective, and arguments critically."
      },
      {
        question: "Which must go with self-assessment for it to be effective?",
        choices: [
          "Scoring rubric",
          "Consensus of evaluation results from teacher and student",
          "External monitor",
          "Public display of results of self-evaluation"
        ],
        correctAnswer: 0,
        explanation: "A scoring rubric provides clear, objective criteria so students can accurately evaluate their own work."
      },
      {
        question: "Which group of scores is most varied? The group with",
        choices: ["0.90 SD", "0.50 SD", "0.10 SD", "0.75 SD"],
        correctAnswer: 0,
        explanation: "A larger standard deviation (SD) indicates greater spread or variability among the scores."
      },
      {
        question: "The main purpose in administering a pretest and a posttest to students is to",
        choices: [
          "Measure gains in learning",
          "Measure the value of the material taught",
          "Keep adequate records",
          "Accustom the students to frequent testing"
        ],
        correctAnswer: 0,
        explanation: "Comparing pretest and posttest scores allows teachers to measure actual learning gains resulting from instruction."
      },
      {
        question: "Assessment is said to be authentic when the teacher",
        choices: [
          "Consider students' suggestion in teaching",
          "Gives valid and reliable paper-and-pencil test",
          "Gives students real-life task to accomplish",
          "Includes parents in the determination of assessment procedures"
        ],
        correctAnswer: 2,
        explanation: "Authentic assessment evaluates students' ability to apply knowledge and skills to meaningful, real-world tasks."
      },
      {
        question: "The following are computed means of a hundred-item test: Physical science, 38; Math, 52; English, 33. Based on the data which is true?",
        choices: [
          "The examinees seem to be very good in Physical Science",
          "The Math test appears to be the easiest among the three",
          "The examinees seem to excel in English",
          "The English test appears to be the easiest among the three"
        ],
        correctAnswer: 1,
        explanation: "Math has the highest mean score (52), suggesting it was the easiest test among the three subjects."
      },
      {
        question: "Does the development of the lesson on fraction conform to the bottom-up arrangement of the experiences in Edgar Dale's Cone of Experience?",
        choices: [
          "No",
          "Cannot be determined",
          "Yes",
          "Up to the second phase of the lesson only"
        ],
        correctAnswer: 2,
        explanation: "Moving from concrete, hands-on experiences up to abstract symbols follows the bottom-up progression of Dale's Cone of Experience."
      },
      {
        question: "CASE #2 - In a faculty recollection, teachers shared their thoughts of the learner:\nTeacher A - \"The learner is a product of his environment. Sometimes he has no choice. He is determined by his environment.\"\nTeacher B - \"The learner can choose what he can become despite his environment.\"\nTeacher C - \"The learner is a social being who learns well through an active interplay with others.\"\nTeacher D - \"The learner is a rational being. Schools should develop his rational and moral powers.\"\n\nWhose philosophical concept is that of Teacher A?",
        choices: ["Rationalist", "Behaviorist", "Existentialist", "Progressivist"],
        correctAnswer: 1,
        explanation: "Behaviorism views human behavior and learning as shaped and determined by environmental stimuli and conditioning."
      },
      {
        question: "CASE #2: Teacher B - \"The learner can choose what he can become despite his environment.\"\nTeacher B's response comes from the mouth of a/an",
        choices: ["Behaviorist", "Existentialist", "Essentialist", "Perennialist"],
        correctAnswer: 1,
        explanation: "Existentialism emphasizes free will, personal choice, and self-determination regardless of external circumstances."
      },
      {
        question: "CASE #2: Teacher C - \"The learner is a social being who learns well through an active interplay with others.\"\nIf you agree with Teacher C, you are more of a/an",
        choices: ["Perennialist", "Rationalist", "Essentialist", "Progressivist"],
        correctAnswer: 3,
        explanation: "Progressivism emphasizes active, social, and experiential learning through interaction with others."
      },
      {
        question: "CASE #2: Teacher D - \"The learner is a rational being. Schools should develop his rational and moral powers.\"\nIf you identify yourself with Teacher D, you adhere to what philosophy?",
        choices: ["Progressivist", "Behaviorist", "Existentialist", "Perennialist"],
        correctAnswer: 3,
        explanation: "Perennialism focuses on cultivating the intellect, rationality, and enduring moral values."
      },
      {
        question: "CASE #2: Teacher A (environment determines the learner), Teacher B (learner chooses what to become), Teacher C (social learner), Teacher D (rational being).\nWhose response denies man's free will?",
        choices: ["Teacher A", "Teacher C", "Teacher D", "Teacher B"],
        correctAnswer: 0,
        explanation: "Teacher A's strict behaviorist view states that the learner has no choice and is completely determined by the environment."
      },
      {
        question: "CASE #4 - On the first day of school, Teacher Yveta oriented her class on procedures to be observed in passing papers, getting textbooks from and returning the same on the bookshelf, leaving the room for necessity, and conducting group work. She arranged the chairs in such a way that students can interact and can move around without unnecessarily distracting those seated. She involved the class in the formulation of rules to ensure punctuality, order and cleanliness in the classroom.\n\nOn what belief is Teacher Yveta's management practice anchored?",
        choices: [
          "Classroom rules need to be imposed for order's sake",
          "A teacher must lord her power over her students to be an effective classroom manager",
          "A reactive classroom management style is effective",
          "The classroom environment affects learning"
        ],
        correctAnswer: 3,
        explanation: "Proactively organizing physical space, routines, and rules reflects the belief that a well-structured classroom environment directly supports learning."
      },
      {
        question: "CASE #4: Teacher Yveta involved her students in the formulation of class rules. Which describes her classroom management style?",
        choices: ["Benevolent", "Authoritarian", "Democratic", "Laissez-faire"],
        correctAnswer: 2,
        explanation: "Involving students in decision-making and rule formulation is the hallmark of a democratic classroom management style."
      },
      {
        question: "An integrative, conceptual approach introduced by Roldan that has as its highest levels in the development of _______ thinking skills.",
        choices: ["Interpretative", "Creative", "Critical", "Literal"],
        correctAnswer: 2,
        explanation: "Roldan's integrative, conceptual approach culminates in the development of critical thinking skills."
      },
      {
        question: "If a student thinks about thinking, he is involved in the process called",
        choices: [
          "Higher order thinking",
          "Metacognition",
          "Critical thinking",
          "Creative thinking"
        ],
        correctAnswer: 1,
        explanation: "Metacognition is awareness and control over one's own cognitive processes—thinking about thinking."
      },
      {
        question: "The use of drills in the classroom is rooted on Thorndike's law of",
        choices: ["Readiness", "Effect", "Exercise", "Belongingness"],
        correctAnswer: 2,
        explanation: "Thorndike's Law of Exercise states that repeated practice (drills) strengthens stimulus-response connections."
      },
      {
        question: "The following are some drill techniques, except",
        choices: [
          "Challenging students to be above the level of the class",
          "Asking pupils to repeat answers",
          "Giving short quiz and having students grade papers",
          "Assigning exercises from a workbook"
        ],
        correctAnswer: 0,
        explanation: "Drills are meant to reinforce and automate learned skills at the students' current level, not to push them beyond the level of the class."
      },
      {
        question: "The process of task analysis ends up in the formulation of:",
        choices: [
          "Instructional objectives",
          "Enabling objectives",
          "Goals of learning",
          "Behavioral objectives"
        ],
        correctAnswer: 0,
        explanation: "Task analysis breaks down a complex skill into component steps to formulate clear instructional objectives."
      },
      {
        question: "For city-bred students to think that their culture is better than those from the province is a concrete example of",
        choices: [
          "Ethical relativism",
          "Ethnocentrism",
          "Cultural relativism",
          "Xenocentrism"
        ],
        correctAnswer: 1,
        explanation: "Ethnocentrism is judging another culture as inferior while viewing one's own culture as superior."
      },
      {
        question: "Who were the Thomasites?",
        choices: [
          "The first American teachers that help in establishing the public educational system in the Philippines",
          "The soldiers who doubted the success of the public educational system to be set in the Philippines",
          "The first religious group who came to the Philippines on board the US transports Thomas",
          "The devotees to St. Thomas Aquinas who came to evangelize"
        ],
        correctAnswer: 0,
        explanation: "The Thomasites were a group of American teachers who arrived in the Philippines in 1901 aboard the USS Thomas to establish the public school system."
      },
      {
        question: "Which teaching activity is founded on Bandura's social learning theory?",
        choices: [
          "Questioning",
          "Inductive reasoning",
          "Modeling",
          "Interactive teaching"
        ],
        correctAnswer: 2,
        explanation: "Bandura's Social Learning Theory centers on observational learning through modeling."
      },
      {
        question: "The claim of a benefactor to the gratitude of his protégé is an example of a (an):",
        choices: [
          "Acquired right",
          "Perfect right",
          "Imperfect right",
          "Alienable right"
        ],
        correctAnswer: 2,
        explanation: "An imperfect right is a moral claim (like gratitude) that is not legally enforceable."
      },
      {
        question: "Which appropriate teaching practice flows from this research finding on the brain: \"The brain's emotional center is tied its ability to learn.\"",
        choices: [
          "Create a learning environment that encourages students to explore their feelings and ideas freely",
          "Come up with highly competitive games where winners will feel happily",
          "Establish this discipline of being judgmental in attitude",
          "Tell the students to participate in class activities or else they won't receive plus points in class recitation"
        ],
        correctAnswer: 0,
        explanation: "An emotionally safe and supportive classroom allows students to explore ideas freely, enhancing brain-based learning."
      },
      {
        question: "If student's inappropriate behavior is low level or mild and that it appears that the misbehavior will not spread to others, it is sometimes best for the teacher not to take notice of it. What influence technique is this?",
        choices: [
          "Planned ignoring",
          "Antiseptic bouncing",
          "Proximity control",
          "Signal interference"
        ],
        correctAnswer: 0,
        explanation: "Planned ignoring intentionally withholds attention from minor, non-disruptive misbehavior so it extinguishes without interrupting the lesson."
      },
      {
        question: "Material development at the expense of human development points to the need to do more in school. This is base on which pillar of learning?",
        choices: [
          "Learning to do",
          "Learning to know",
          "Learning to live together",
          "Learning to be"
        ],
        correctAnswer: 2,
        explanation: "Learning to live together emphasizes human values, empathy, and social harmony over purely material progress."
      },
      {
        question: "The specialization requires of every professional teacher for him/her to be competent is in line with which pillar of learning?",
        choices: [
          "Learning to know",
          "Learning to be",
          "Learning to live together",
          "Learning to do"
        ],
        correctAnswer: 0,
        explanation: "Learning to know involves acquiring mastery of subject matter knowledge and specialized intellectual tools."
      },
      {
        question: "Which pillar of learning is aimed at the holistic development of man and his complete fulfillment?",
        choices: [
          "Learning to live together",
          "Learning to be",
          "Learning to know",
          "Learning to do"
        ],
        correctAnswer: 1,
        explanation: "Learning to be focuses on the all-around development of the whole person—mind, body, creativity, and character."
      },
      {
        question: "A father tells his daughter \"You are a woman. You are meant for the home and so for you, going to school is not necessary.\" Is the father correct?",
        choices: [
          "It depends on the place where the daughter and the father live",
          "No, there is gender equality in education",
          "Yes, women are meant to be a mother only",
          "No, today women can take on the jobs of men"
        ],
        correctAnswer: 1,
        explanation: "Education is a universal human right, and gender equality guarantees equal educational opportunities for both men and women."
      },
      {
        question: "Despite of opposition from some school official, DepEd has continuously enforced the \"no collection of fees\" policy during enrolment period in public schools. Is this policy in accordance with EFA goals?",
        choices: [
          "No, it violates the mandate of equality education",
          "Yes, it somewhat eliminates gender disparities",
          "Yes, it supports equitable access to basic education",
          "No, it does not support parent of adult education"
        ],
        correctAnswer: 2,
        explanation: "Removing financial barriers during enrollment directly supports Education for All (EFA) by ensuring equitable access to basic education."
      },
      {
        question: "\"Specialization is knowing more and more about less and less.\" Hence, it is better to be a generalist, claims Teacher Fonda. Which Philosophy does Teacher Fonda subscribe to?",
        choices: [
          "Existentialism",
          "Perennialism",
          "Essentialism",
          "Progressivism"
        ],
        correctAnswer: 2,
        explanation: "Essentialism emphasizes a broad, common core of essential knowledge and foundational skills for all learners rather than narrow specialization."
      },
      {
        question: "Mencius believed that all people are born good. This thought on the innate goodness of people makes it easier to _______ our pupils.",
        choices: ["teach", "respect", "like", "motivate"],
        correctAnswer: 1,
        explanation: "Believing in the inherent goodness and dignity of every learner naturally fosters genuine respect for them."
      },
      {
        question: "A student complains to you about his failing grade. When you recomputed you found out that you committed an error in his grade computation. Your decision is not to accept the erroneous computation before the student and so leave the failing grade as is for fear that you may lose credibility. Is this morally right?",
        choices: [
          "No, the reason for not accepting the error before the students is flimsy",
          "No, the end does not justify the means",
          "Yes, the end justifies the means",
          "Yes, as a teacher you must maintain your credibility"
        ],
        correctAnswer: 1,
        explanation: "Protecting one's reputation (the end) never justifies intentionally giving an unfair, erroneous grade (the means)."
      },
      {
        question: "Which violate(s) the principle of respect?\nI. Teacher Ana tells her students that what Teacher Beth taught is wrong.\nII. To retaliate, Teacher Beth advises students not to enroll in Teacher Ana's class.\nIII. Teacher Catherine secretly gives way to a special favor (e.g. add 2 points to grade) requested by student Alex who is vying for honors.",
        choices: ["II and III", "I, II and III", "I and II", "I and III"],
        correctAnswer: 1,
        explanation: "Discrediting colleagues, retaliating against them, and showing unfair favoritism all violate professional ethics and respect."
      },
      {
        question: "The task of setting up routine activities for effective classroom management is a task that a teacher should undertake",
        choices: [
          "as soon as the students have adjusted to their schedule",
          "on the very first day of school",
          "every day at the start of the session",
          "every homeroom day"
        ],
        correctAnswer: 1,
        explanation: "Establishing clear classroom routines on the very first day of school sets expectations early and prevents management problems."
      },
      {
        question: "Which practice does not fit in a classroom that recognizes individual differences?",
        choices: [
          "Uniform requirements",
          "Sharing from multiple perspective",
          "Accommodating student's learning styles",
          "Various modes of assessing learning"
        ],
        correctAnswer: 0,
        explanation: "Imposing rigid, uniform requirements ignores students' diverse abilities, interests, and learning needs."
      },
      {
        question: "Teacher Benny says: \"If it is billiard that brings students out of the classroom, let us bring it into the classroom. Perhaps, I can use it to teach Math.\" To which philosophy does Teacher Benny adhere?",
        choices: [
          "Progressivism",
          "Existentialism",
          "Essentialism",
          "Reconstructionism"
        ],
        correctAnswer: 0,
        explanation: "Progressivism connects curriculum to students' real-life interests and experiences to make learning relevant and engaging."
      },
      {
        question: "\"The greatest happiness lies in the contemplative use of the mind\", said Plato. Therefore, let us give more opportunities for our students to do",
        choices: [
          "Social interaction",
          "Introspection",
          "Role playing",
          "Cooperative learning"
        ],
        correctAnswer: 1,
        explanation: "Introspection involves deep reflection and contemplative thought, aligning with Plato's philosophy."
      },
      {
        question: "Which can run counter to the encouragement you give to your students to ask questions?",
        choices: [
          "Eye to eye contact",
          "An encouraging hand gesture",
          "Radiant face",
          "Knitted eyebrows when a question is raised"
        ],
        correctAnswer: 3,
        explanation: "Knitted eyebrows signal annoyance, skepticism, or disapproval, which discourages students from asking questions."
      },
      {
        question: "Which of the UNESCO's four pillars of education is most related to peace education?",
        choices: [
          "Learning to do",
          "Learning to know",
          "Learning to live",
          "Learning to be"
        ],
        correctAnswer: 2,
        explanation: "Learning to live together promotes peace, mutual respect, and intercultural understanding."
      },
      {
        question: "A Principal tells her teacher that training in the humanities is most important. To which educational philosophy does he adhere?",
        choices: [
          "Perennialism",
          "Existentialism",
          "Essentialism",
          "Progressivism"
        ],
        correctAnswer: 0,
        explanation: "Perennialism values timeless classical knowledge and liberal arts/humanities education."
      },
      {
        question: "Jonna, a principal, shares this thought with her teachers: \"Subject matter should help students understand and appreciate themselves as unique individuals who accept complete responsibility for their thoughts, feelings and action.\" From which philosophy is this thought based?",
        choices: [
          "Essentialism",
          "Perennialism",
          "Progressivism",
          "Existentialism"
        ],
        correctAnswer: 3,
        explanation: "Existentialism centers on individual uniqueness, freedom, and personal responsibility."
      },
      {
        question: "Which is true when standard deviation is big?",
        choices: [
          "Scores are concentrated",
          "Scores are not extremes",
          "Scores are spread apart",
          "The bell curve shape is steep"
        ],
        correctAnswer: 2,
        explanation: "A large standard deviation means individual scores are widely dispersed or spread apart from the mean."
      },
      {
        question: "Rights which cannot be renounced or transferred because they are necessary for the fulfillment of man's primordial obligations are called:",
        choices: [
          "Alienable rights",
          "Perfect rights",
          "Inalienable rights",
          "Acquired rights"
        ],
        correctAnswer: 2,
        explanation: "Inalienable rights are inherent and cannot be surrendered, waived, or transferred."
      },
      {
        question: "Your teacher is of the opinion that the world and everything in it are ever changing and so teaches you the skill to cope with the changes. What is his governing philosophy?",
        choices: ["Experimentation", "Existentialism", "Realism", "Idealism"],
        correctAnswer: 0,
        explanation: "Experimentalism (pragmatism) views reality as constantly changing and focuses on teaching adaptive problem-solving skills."
      },
      {
        question: "For brainstorming to be effective which one should be out?",
        choices: [
          "Making use of the others ideas shared",
          "Teacher's judgmental attitude",
          "Non-threatening atmosphere",
          "Openness to idea"
        ],
        correctAnswer: 1,
        explanation: "A judgmental attitude stifles creativity and discourages participants from sharing ideas freely during brainstorming."
      },
      {
        question: "A group of people asserts that their culture is superior to another. This exemplifies:",
        choices: [
          "Cultural gap",
          "Ethnocentrism",
          "Cultural conflict",
          "Norm conflict"
        ],
        correctAnswer: 1,
        explanation: "Ethnocentrism is the belief that one's own cultural group is superior to others."
      },
      {
        question: "A test consists of a graph showing the relationship between age and population. Follow a series of true-false items based on the graph. Which type of test does this illustrate?",
        choices: [
          "Laboratory exercise",
          "Interpretative",
          "Problem solving",
          "Performance"
        ],
        correctAnswer: 1,
        explanation: "An interpretative exercise presents introductory material (like a graph or chart) followed by objective questions that require analyzing and interpreting that data."
      },
      {
        question: "In the Preamble of the Code of Ethics of Professional Teachers, which is not mention about teachers?",
        choices: [
          "Duly licensed professionals",
          "Possess dignity and reputation",
          "LET passers",
          "With high moral values"
        ],
        correctAnswer: 2,
        explanation: "The Preamble refers to teachers as duly licensed professionals with dignity, reputation, and high moral values, without explicitly using the phrase \"LET passers.\""
      },
      {
        question: "What does a skewed score distribution mean?",
        choices: [
          "The scores are concentrated more at one end or the other end",
          "The mode, the mean and the median are equal",
          "The mean and median are equal",
          "The scores are normally distributed"
        ],
        correctAnswer: 0,
        explanation: "A skewed distribution is asymmetrical, with most scores clustered toward either the high or low end."
      },
      {
        question: "What is implied by a negatively skewed score distribution?",
        choices: [
          "The scores are evenly distributed from the left to the right",
          "Most pupils are underachievers",
          "Most of the scores are high",
          "Most of the scores are low"
        ],
        correctAnswer: 2,
        explanation: "In a negatively skewed distribution, the tail points left and the majority of scores are concentrated on the high end."
      },
      {
        question: "Which of the following will you recommend to a senior high school scholar who is impregnated by a fellow student?",
        choices: [
          "Tell her parent about her condition",
          "Stop schooling until after she gives birth",
          "Direct her to an abortion clinic",
          "Force her boyfriend to marry her"
        ],
        correctAnswer: 0,
        explanation: "Informing her parents ensures she receives proper emotional, medical, and family support."
      },
      {
        question: "The government prescribes a higher percentage on the administration of educational institution to Filipino citizens in order to:",
        choices: [
          "Minimize the unemployment problem",
          "Produce globally competitive graduates",
          "Protect the rights of the citizen",
          "Ensure the teaching of Filipino"
        ],
        correctAnswer: 2,
        explanation: "Constitutional provisions requiring Filipino ownership and administration of schools protect national sovereignty and the rights of citizens."
      },
      {
        question: "The main contribution of the Arroyo Administration in education is Republic Act No. 9155. This provision:",
        choices: [
          "Started the national scholarship program",
          "Renamed the DECS to DepEd",
          "Conceptualized the K-12 Education Program",
          "Established the study now-pay later system"
        ],
        correctAnswer: 1,
        explanation: "RA 9155 (Governance of Basic Education Act of 2001) renamed the Department of Education, Culture and Sports (DECS) to the Department of Education (DepEd)."
      },
      {
        question: "The main purpose of compulsory education of the constitution is to:",
        choices: [
          "Prepare students to be lawyer",
          "Develop students into responsible thinking citizen",
          "Acquaint students with the historical development of the constitution",
          "Make students constitutional expert"
        ],
        correctAnswer: 1,
        explanation: "Teaching the Constitution aims to cultivate informed, patriotic, and responsible citizens."
      },
      {
        question: "Which of the following situations which violate the principle of respect?",
        choices: [
          "Teacher B is giving special favor to students to please so that she can get a remarkable result in the evaluation",
          "Teacher A tells her student that what teacher B taught is wrong",
          "Teacher B, upon learning what teacher A did, asked the students not to attend her class",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All three actions violate professional ethics, fairness, and mutual respect among teachers and students."
      },
      {
        question: "Some children go through a period of intense appetite when they eat or chew on all sorts of inedible substances. This is called:",
        choices: ["Pica", "Enuresis", "Encopresis", "Anorexia"],
        correctAnswer: 0,
        explanation: "Pica is an eating disorder characterized by persistently eating non-nutritive, inedible substances."
      },
      {
        question: "When asked, students of teacher Eric described him as someone who knows what he is talking about. Teacher Eric therefore exhibits a power known as:",
        choices: [
          "Expert power",
          "Reward power",
          "Referent power",
          "Legitimate power"
        ],
        correctAnswer: 0,
        explanation: "Expert power stems from a teacher's deep mastery of subject matter and perceived competence."
      },
      {
        question: "Which is/are sign/s of the student with Attention Deficit Disorder?",
        choices: [
          "Impatient while waiting for his/her turn during games",
          "Completes work before shifting to another",
          "Excessively quiet",
          "Cares for his/her personal things"
        ],
        correctAnswer: 0,
        explanation: "Impulsivity and difficulty waiting for one's turn are common behavioral indicators of Attention Deficit Disorder."
      },
      {
        question: "Which can run counter to the encouragement you give to your students to ask questions?",
        choices: [
          "Eye to eye contact",
          "An encouraging hand gesture",
          "Radiant face",
          "Knitted eyebrows when a question is raised"
        ],
        correctAnswer: 3,
        explanation: "Frowning or knitting eyebrows conveys disapproval, discouraging students from asking questions."
      },
      {
        question: "Which term refers to the collection of students' products and accomplishment for a period of evaluation purposes?",
        choices: [
          "Portfolio",
          "Observation report",
          "Anecdotal record",
          "Diary"
        ],
        correctAnswer: 0,
        explanation: "A portfolio is a systematic collection of student work assembled over time to evaluate progress and achievement."
      },
      {
        question: "The practice of non-graded instruction stems from ____?",
        choices: [
          "Progressivism",
          "Reconstructionism",
          "Existentialism",
          "Essentialism"
        ],
        correctAnswer: 0,
        explanation: "Progressivism emphasizes flexible, child-centered instruction that allows learners to progress at their own pace rather than rigid grade-level lockstep."
      }
    ]
  },


  { id:"major-pe-a",
  name: "A - MAJOR - PHYSICAL EDUCATION",
  short: "PE",
  questions: [
    {
      question: "A program that challenges students to master tactics involving strength, balance, flexibility, agility, and rhythm in a classroom standard of learning fundamentals with the maximum safety measures.",
      choices: ["Educational Gymnastics", "Competitive Gymnastics", "Therapeutic Remedial Gymnastics", "Creative Gymnastics"],
      correctAnswer: 0,
      explanation: "Educational Gymnastics focuses on teaching fundamental movement skills safely in a classroom setting."
    },
    {
      question: "The most important phase of the gymnastics program, because this is where the ability of the performer is tested as he rolls to and fro, twists, turns and springs about on the mat, floor and in the air.",
      choices: ["Tumbling", "Stunts", "Rhythmic Gymnastics", "Pyramid Building"],
      correctAnswer: 0,
      explanation: "Tumbling tests a gymnast's control and agility through rolls, twists, turns, and aerial springs."
    },
    {
      question: "A position where the body is curved like an arc of a circle, with the hip forward and the head and trunk bent backward.",
      choices: ["Arch", "Tuck", "Split", "Scale"],
      correctAnswer: 0,
      explanation: "An arch is a curved body position with the hips pushed forward and the head and trunk bent backward."
    },
    {
      question: "The preparatory position in backward roll where the feet are held together with knees straight and trunk bent forward towards the legs.",
      choices: ["Squat", "Pike", "Tuck", "Straddle"],
      correctAnswer: 1,
      explanation: "A pike position keeps the legs straight and together while bending the trunk forward toward them."
    },
    {
      question: "Exercises are selected for the purpose of preparing the body for more complicated movements and skills. Exercises for the warm-up can also be considered as \"Calisthenics.\"",
      choices: ["Cool Down Exercises", "Marching Exercises", "Rhythmic Exercises", "Conditioning Program"],
      correctAnswer: 3,
      explanation: "A conditioning program prepares the body for more complex physical movements and skills."
    },
    {
      question: "Artistic gymnastic terminology for tumbling type movements. Examples are cartwheel, handspring, etc.",
      choices: ["Stretchy", "Elastic", "Acrobatic", "Supple"],
      correctAnswer: 2,
      explanation: "Acrobatic refers to tumbling-type movements such as cartwheels and handsprings."
    },
    {
      question: "It is an aesthetic combination of the body movements to music with portable apparatus.",
      choices: ["Artistic Gymnastics", "Educational Gymnastics", "Rhythmic Sportive Gymnastics", "Sports Aerobics"],
      correctAnswer: 2,
      explanation: "Rhythmic Sportive Gymnastics combines graceful body movements with music and hand-held apparatus."
    },
    {
      question: "A gymnastics position in which the legs are separated sideways.",
      choices: ["Scale", "Straddle", "Split", "Supine"],
      correctAnswer: 1,
      explanation: "A straddle is a position in which the legs are extended apart to the sides."
    },
    {
      question: "It means bending or reducing length. It decreases the angle of the joint.",
      choices: ["Extension", "Contraction", "Flexion", "Reduction"],
      correctAnswer: 2,
      explanation: "Flexion is the bending movement that decreases the angle between two body parts at a joint."
    },
    {
      question: "He was the first to conduct gymnastics as part of education. He was the first modern writer and teacher of organized gymnastics for whom records exist.",
      choices: ["Per Henrik Ling", "Franz Nachtegall", "Johann Basedow", "Gerhard Vieth"],
      correctAnswer: 2,
      explanation: "Johann Basedow was the first to integrate organized gymnastics into a school curriculum."
    },
    {
      question: "It is a self-motivating activity, where one can manipulate the different parts of the body into varied positions or movements.",
      choices: ["Physical Education", "Physical Fitness", "Gymnastics", "Movements"],
      correctAnswer: 2,
      explanation: "Gymnastics is a self-motivating activity involving controlled manipulation of the body into various positions."
    },
    {
      question: "A person who helps a performer to go about a skill for the first time.",
      choices: ["Helper", "Spotter", "Assistant", "Spotting"],
      correctAnswer: 1,
      explanation: "A spotter assists and protects a gymnast while learning or performing a skill."
    },
    {
      question: "This locomotor movement, which is a combination of a step and a cut that shows shifting of weight or displacement of the other foot.",
      choices: ["Leap", "Skip", "Gallop", "Hop"],
      correctAnswer: 2,
      explanation: "A gallop combines a step and a cut, displacing the weight from one foot to the other."
    },
    {
      question: "Great Grandfather of Gymnastics who wrote many influential books including Gymnastics for Youth in 1793.",
      choices: ["Johann Guts Muth", "Johann Pestalozzi", "Friedrich Ludwig Jahn", "Adolph Spiess"],
      correctAnswer: 0,
      explanation: "Johann Guts Muth is known as the Great Grandfather of Gymnastics and authored Gymnastics for Youth."
    },
    {
      question: "The muscles move a limb away from the vertical mid-line of the body.",
      choices: ["Abduction", "Extension", "Adduction", "Rotation"],
      correctAnswer: 0,
      explanation: "Abduction is the movement of a limb away from the midline of the body."
    },
    {
      question: "Which of these body parts keeps one in state of equilibrium during a one-leg balance?",
      choices: ["Legs", "Arms", "Trunk", "Head"],
      correctAnswer: 1,
      explanation: "Extending the arms helps counterbalance the body and maintain equilibrium during a one-leg balance."
    },
    {
      question: "Little or no trust in the athlete",
      choices: ["Authoritarian", "Cooperative", "Casual"],
      correctAnswer: 0,
      explanation: "An authoritarian coaching style is strict and places little to no trust in the athlete's decision-making."
    },
    {
      question: "Athlete with a flexible training structure",
      choices: ["Cooperative", "Authoritarian", "Casual"],
      correctAnswer: 0,
      explanation: "A cooperative coaching style shares decision-making and maintains a flexible training structure."
    },
    {
      question: "Athletes make all the decisions",
      choices: ["Casual", "Authoritarian", "Cooperative"],
      correctAnswer: 0,
      explanation: "In a casual coaching style, the coach takes a hands-off approach and lets athletes make all decisions."
    },
    {
      question: "Support the body like the framework of a building",
      choices: ["Skeleton", "Muscles", "Bones"],
      correctAnswer: 0,
      explanation: "The skeleton provides the structural framework that supports the human body."
    },
    {
      question: "Joins muscle to bone",
      choices: ["Tendons", "Bones", "Muscles"],
      correctAnswer: 0,
      explanation: "Tendons are fibrous connective tissues that attach muscles to bones."
    },
    {
      question: "Approximately 200 in human body",
      choices: ["Muscles", "Tendons", "Skeleton [Note: Bones]"],
      correctAnswer: 2,
      explanation: "The adult human skeleton consists of approximately 206 bones."
    },
    {
      question: "Can only pull not push",
      choices: ["Bones", "Muscles", "Tendons"],
      correctAnswer: 1,
      explanation: "Muscles generate force only by contracting (pulling) and cannot push."
    },
    {
      question: "Joins bone to bone",
      choices: ["Cells", "Nerves", "Ligaments"],
      correctAnswer: 2,
      explanation: "Ligaments are strong bands of connective tissue that connect bones to other bones."
    },
    {
      question: "Unit of living material that is the base building block of life",
      choices: ["Ligaments", "Cells", "Nerves"],
      correctAnswer: 1,
      explanation: "Cells are the basic structural and functional units of all living organisms."
    },
    {
      question: "Carry information around the body by electrical signals",
      choices: ["Nerves", "Ligaments", "Cells"],
      correctAnswer: 0,
      explanation: "Nerves transmit electrical impulses throughout the body to coordinate movement and sensation."
    },
    {
      question: "Uses oxygen and produces easily disposed waste products",
      choices: ["Aerobic lactic Energy System", "Anaerobic lactic Energy System", "Anaerobic alactic Energy System"],
      correctAnswer: 0,
      explanation: "The aerobic energy system uses oxygen and produces waste products like carbon dioxide and water that are easily eliminated."
    },
    {
      question: "Intense activity for less than 10 seconds",
      choices: ["Aerobic lactic Energy System", "Anaerobic lactic Energy System", "Anaerobic alactic Energy System"],
      correctAnswer: 2,
      explanation: "The anaerobic alactic (ATP-PC) system powers short, explosive efforts lasting under 10 seconds."
    },
    {
      question: "The energy system most used by the 400 meter racer",
      choices: ["Aerobic lactic Energy System", "Anaerobic lactic Energy System", "Anaerobic alactic Energy System"],
      correctAnswer: 1,
      explanation: "The anaerobic lactic system is the primary energy source for high-intensity events like the 400-meter sprint."
    },
    {
      question: "Fitness reduces when training stops",
      choices: ["Law of Specificity", "Law of Overload", "Law of Reversibility"],
      correctAnswer: 2,
      explanation: "The Law of Reversibility states that fitness gains are lost when regular training ceases."
    },
    {
      question: "Specific adaptation to applied training loads",
      choices: ["Law of Specificity", "Law of Overload", "Law of Reversibility"],
      correctAnswer: 0,
      explanation: "The Law of Specificity states that the body adapts specifically to the type of training load applied."
    },
    {
      question: "Results in overcompensation",
      choices: ["Law of Specificity", "Law of Overload", "Law of Reversibility"],
      correctAnswer: 1,
      explanation: "Applying a training stimulus greater than what the body is used to (overload) leads to overcompensation and improved fitness."
    },
    {
      question: "Gradually reduces with age",
      choices: ["Flexibility", "Coordination", "Speed", "Endurance"],
      correctAnswer: 0,
      explanation: "Flexibility naturally declines with age unless maintained through regular stretching."
    },
    {
      question: "Volume of training is gradually reduced and intensity increased",
      choices: ["Competition Period", "Transition Period", "Preparation Period"],
      correctAnswer: 0,
      explanation: "During the competition period, training volume decreases while intensity peaks to optimize performance."
    },
    {
      question: "Volume of training gradually increases",
      choices: ["Competition Period", "Transition Period", "Preparation Period"],
      correctAnswer: 2,
      explanation: "In the preparation period, training volume is progressively increased to build a strong fitness base."
    },
    {
      question: "Motor programs develop most",
      choices: ["Intermediate stage", "Beginning stage", "Advanced stage"],
      correctAnswer: 0,
      explanation: "Motor programs develop and refine most significantly during the intermediate stage of skill learning."
    },
    {
      question: "Athletes need to practice skill under different and difficult conditions",
      choices: ["Intermediate stage", "Beginning stage", "Advanced stage"],
      correctAnswer: 2,
      explanation: "At the advanced stage, athletes practice skills under varied and challenging game-like conditions."
    },
    {
      question: "Completed when the athlete can perform a rough form of the skill",
      choices: ["Intermediate stage", "Beginning stage", "Advanced stage"],
      correctAnswer: 1,
      explanation: "The beginning stage is complete once the athlete can execute a basic, rough form of the skill."
    },
    {
      question: "Body repair and growth",
      choices: ["Protein", "Vitamins", "Minerals", "Carbohydrate"],
      correctAnswer: 0,
      explanation: "Protein is essential for building, maintaining, and repairing body tissues."
    },
    {
      question: "Essential fuel control rate of chemical reactions",
      choices: ["Protein", "Vitamins", "Minerals", "Carbohydrate"],
      correctAnswer: 1,
      explanation: "Vitamins help regulate metabolic processes and control the rate of chemical reactions in the body."
    },
    {
      question: "Adds non-digestible bulk to food",
      choices: ["Protein", "Fiber", "Minerals", "Carbohydrate"],
      correctAnswer: 1,
      explanation: "Fiber adds indigestible bulk to food, aiding healthy digestion."
    },
    {
      question: "50%-70% of the body",
      choices: ["Water", "Vitamins", "Minerals", "Carbohydrate"],
      correctAnswer: 0,
      explanation: "Water makes up roughly 50% to 70% of total human body weight."
    },
    {
      question: "Slowly digested fuel",
      choices: ["Fat", "Vitamins", "Minerals", "Carbohydrate"],
      correctAnswer: 0,
      explanation: "Fat is a concentrated energy source that is digested more slowly than carbohydrates."
    },
    {
      question: "This term is executed by swinging the arm downward across the body, as if scooping, with trunk bending forward following the arm.",
      choices: ["Salok", "Swing", "Hayon-hayon", "Sarok"],
      correctAnswer: 0,
      explanation: "Salok is a Philippine folk dance term describing a scooping downward swing of the arm across the body."
    },
    {
      question: "Which is executed by moving the hand from the wrist either clockwise or counterclockwise?",
      choices: ["Kulintang", "Kumintang", "Cross Arm", "Outside Hand"],
      correctAnswer: 1,
      explanation: "Kumintang is the graceful rotation of the hand from the wrist in a clockwise or counterclockwise direction."
    },
    {
      question: "With the weight of the body on one foot, hit the floor with the ball of the other foot after which the foot is lifted from the floor. This dance term is called:",
      choices: ["Close", "Brush Step", "Touch", "Slide"],
      correctAnswer: 1,
      explanation: "A brush step involves striking the floor with the ball of the free foot and lifting it off the floor."
    },
    {
      question: "Which is done when one crosses the right foot or left foot in front of the left (R), bends the body slightly forward, and crosses the hands down in front with the right (L) hand over the left (R)?",
      choices: ["Saludo", "Sarok", "Arms in lateral position", "Set"],
      correctAnswer: 1,
      explanation: "Sarok is a folk dance movement combining a crossed foot, slight forward bend, and crossed hands in front."
    },
    {
      question: "Which is referred to when one places the foot in a certain desired position without putting weight on it and makes the sole of the foot rest flat on the floor?",
      choices: ["Point", "Place", "Saludo", "Set"],
      correctAnswer: 1,
      explanation: "To place means setting the foot flat on the floor in a desired position without transferring weight onto it."
    },
    {
      question: "What position is described when arms are at the side, horizontal, elbows bent at a right angle, forearms parallel to the head, and palms facing inward?",
      choices: ["Arms in T Position", "Arms in Reverse T Position", "Arms in Lateral Position", "Arms in Oblique Upward Position"],
      correctAnswer: 1,
      explanation: "Arms in Reverse T Position has the upper arms horizontal at the sides with forearms bent upward parallel to the head."
    },
    {
      question: "Who is known as the \"Mother, Dean and Champion of Philippine Folk Dance\"?",
      choices: ["Francisca Reyes Aquino", "Tessy Alfonso", "Fabia de la Rosa", "Fely Franquelli"],
      correctAnswer: 0,
      explanation: "Francisca Reyes Aquino is a National Artist of the Philippines honored as the Mother of Philippine Folk Dance."
    },
    {
      question: "Which dance is based on music played at bullfights during the entrance (paseo) or passes (faena) just before the kill?",
      choices: ["Rumba", "Pasodoble", "Salsa", "Samba"],
      correctAnswer: 1,
      explanation: "Pasodoble is a dramatic Spanish dance modeled after the movements and music of a bullfight."
    },
    {
      question: "This consists of the basic movement of stepping forward or backward and shifting weight between feet, with an additional quick set of three steps. Which is described?",
      choices: ["Cha-Cha-Cha", "Salsa", "Rumba", "Pasodoble"],
      correctAnswer: 0,
      explanation: "Cha-Cha-Cha features a rock step followed by a quick three-step chasse (cha-cha-cha)."
    },
    {
      question: "Which dance consists of two quick steps and then a third slower step that takes two beats to execute? Dancers use a box-like pattern to their movements.",
      choices: ["Cha-Cha-Cha", "Salsa", "Rumba", "Pasodoble"],
      correctAnswer: 2,
      explanation: "Rumba uses a slow-quick-quick rhythm often danced in a box step pattern."
    },
    {
      question: "This dance originated in the Caribbean, with strong African influence. Couples typically perform together, centered on a four-beat combination of two quick steps and a slow step with a pause or tap. Which dance is described?",
      choices: ["Cha-Cha-Cha", "Salsa", "Rumba", "Pasodoble"],
      correctAnswer: 1,
      explanation: "Salsa is a Caribbean partner dance with African roots built around a quick-quick-slow beat with a pause or tap."
    },
    {
      question: "A 3-minute dance presentation wherein sounds are produced when small metal plates on a dancer's shoes make contact with a hard floor. Which dance is described?",
      choices: ["Flamenco", "Tap Dance", "Belly Dancing", "Flamingo"],
      correctAnswer: 1,
      explanation: "Tap dance creates percussive rhythms using metal plates attached to the soles of the dancer's shoes."
    },
    {
      question: "Which of the following is a combination of a step and a leap with feet alternating after each step-hop?",
      choices: ["Leap", "Step", "Hop", "Gallop"],
      correctAnswer: 1,
      explanation: "The designated answer from the source material is Step."
    },
    {
      question: "Non-locomotor movements are performed using a stable base of support which include the following EXCEPT:",
      choices: ["Pushing", "Galloping", "Bending", "Twisting"],
      correctAnswer: 1,
      explanation: "Galloping is a locomotor movement because it travels across space, whereas pushing, bending, and twisting are non-locomotor."
    },
    {
      question: "During the folk dance competition, Toffy stamps her right foot at the side and taps with the same foot close to the left foot. Which among the following was executed?",
      choices: ["Bilao", "Jaleo", "Panadyak", "None of the Above"],
      correctAnswer: 2,
      explanation: "Panadyak is a folk dance step consisting of a stamp in front or at the side followed by a tap with the same foot close to the other."
    },
    {
      question: "Locomotor movements are skills that transfer from one place to another which include the following EXCEPT:",
      choices: ["Walking", "Hopping", "Swinging", "Sliding"],
      correctAnswer: 2,
      explanation: "Swinging is a non-locomotor movement performed in place without traveling."
    },
    {
      question: "Which of the following is a movement done by transferring weight from one foot to the other foot while experiencing an elongated moment of flight with neither foot touching the ground?",
      choices: ["Leap", "Hop", "Jump", "None of the Above"],
      correctAnswer: 0,
      explanation: "A leap transfers weight from one foot to the other with a sustained airborne phase."
    },
    {
      question: "Which of the following refers to a term where the legs are extended sideways?",
      choices: ["Straddle", "Supine", "Scale", "Split"],
      correctAnswer: 0,
      explanation: "Straddle refers to a position with the legs extended apart to the sides."
    },
    {
      question: "The preparatory position in a backward roll where the feet are held together with knees straight and trunk bent forward towards the legs is",
      choices: ["Straddle", "Squat", "Pike", "Tuck"],
      correctAnswer: 2,
      explanation: "A pike position keeps the legs straight and together with the trunk bent forward."
    },
    {
      question: "Locomotor movement is defined as the transfer of the body weight from one place to another. Which among the following is a locomotor movement?",
      choices: ["Leg kicks forward and backward with the right foot", "Swinging the right leg forward and backward", "Shaking the hands and shoulders", "Leaping on the right foot"],
      correctAnswer: 3,
      explanation: "Leaping moves the body from one place to another, making it a locomotor movement."
    },
    {
      question: "Which among the following is a mild activity used as the body slows down until the pulse and breathing rates return to normal?",
      choices: ["Cool Down", "Warm-Up", "Relaxation", "Rest"],
      correctAnswer: 0,
      explanation: "A cool down gradually lowers heart rate and breathing back to resting levels after exercise."
    },
    {
      question: "When a shuttle touches a permanent fixture it is:",
      choices: ["A 'let'", "A good return", "A fault", "A must for the opponent to reach for it"],
      correctAnswer: 2,
      explanation: "In badminton, hitting the shuttlecock into a permanent fixture such as the ceiling or walls is a fault."
    },
    {
      question: "When serving, the racket head should:",
      choices: ["Be pointing to the floor", "Be higher than the waist", "Be below the knees at impact", "Be below the racket hand at impact"],
      correctAnswer: 3,
      explanation: "A legal badminton serve requires the racket head to be below the racket hand at the moment of impact."
    },
    {
      question: "The ball is _______ from the last moment at which it is stationary on the palm of the free hand before being intentionally projected in service until the rally is decided as a let or a point.",
      choices: ["Dead", "Alive", "Let", "Serve"],
      correctAnswer: 1,
      explanation: "In table tennis, the ball is considered in play (alive) from the moment it leaves the stationary palm during service until the rally ends."
    },
    {
      question: "A _______ is the period during which the ball is in play.",
      choices: ["Rally", "Alive", "Let", "Serve"],
      correctAnswer: 0,
      explanation: "A rally is the period during which the ball is in play."
    },
    {
      question: "A _______ is a rally of which the result is not scored.",
      choices: ["Dead", "Alive", "Let", "Serve"],
      correctAnswer: 2,
      explanation: "A let is a rally whose outcome is not scored and must be replayed."
    },
    {
      question: "The player due to strike the ball second in a rally.",
      choices: ["Server", "Receiver", "Server's Partner", "Receiver's Partner"],
      correctAnswer: 1,
      explanation: "The receiver is the player who returns the serve, striking the ball second in a rally."
    },
    {
      question: "A _______ is a rally of which the result is scored.",
      choices: ["Dead", "Alive", "Let", "Point"],
      correctAnswer: 3,
      explanation: "A point is a rally whose result is officially scored."
    },
    {
      question: "Anything that a player _______ includes anything that he was wearing or carrying, other than the ball, at the start of the rally.",
      choices: ["Watch", "Wear", "Bear", "Bring"],
      correctAnswer: 1,
      explanation: "In table tennis rules, anything a player 'wears' or carries at the start of the rally (other than the ball) counts as part of their equipment/apparel."
    },
    {
      question: "_______ is the hand carrying the racket.",
      choices: ["[Left hand]", "Right hand", "Racket hand", "Free hand"],
      correctAnswer: 2,
      explanation: "The racket hand is the hand holding the racket, while the other is the free hand."
    },
    {
      question: "Which is continuous tapping of the ball with your hands or palm towards the floor with full control and follow through?",
      choices: ["Passing", "Dribbling", "Spiking", "Stopping"],
      correctAnswer: 1,
      explanation: "Dribbling is the controlled, continuous bouncing of the ball on the floor using the hand."
    },
    {
      question: "Which foul is committed by a player which involves contact with an opponent?",
      choices: ["Personal Foul", "Intentional Foul", "Double Foul", "Technical foul"],
      correctAnswer: 0,
      explanation: "A personal foul involves illegal physical contact with an opposing player."
    },
    {
      question: "This phase of the program makes a picture (mural) out of body static positions. The positions should be properly arranged and selected, so that they form the shape of a pyramid.",
      choices: ["Stunts", "Pyramid Building", "Rhythmic Gymnastics", "Conditioning Program"],
      correctAnswer: 1,
      explanation: "Pyramid building arranges static body positions into structured, balanced formations resembling a pyramid."
    }
  ]
}
  
];

const $ = id => document.getElementById(id);
const screens = { menu:$("menu-screen"), quiz:$("quiz-screen"), report:$("report-screen") };
let activeCategory = null;
let quizQuestions = [];
let currentIndex = 0;
let recordedAnswers = [];
let startTime = 0;
let timerInterval = null;
let elapsedSeconds = 0;
let reportFilter = "all";
let isWrongOnlyAttempt = false;

function shuffleArray(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function showScreen(screen) {
  Object.values(screens).forEach(node => node.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top:0, behavior:"smooth" });
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2,"0");
  const seconds = (totalSeconds % 60).toString().padStart(2,"0");
  return `${minutes}:${seconds}`;
}

function updateTimer() {
  elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
  $("timer").textContent = formatTime(elapsedSeconds);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  updateTimer();
}

function renderCategories() {
  const grid = $("category-grid");
  grid.innerHTML = "";
  quizCategories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    const icon = document.createElement("span");
    icon.className = "category-icon";
    icon.textContent = category.short;
    const copy = document.createElement("span");
    copy.className = "category-copy";
    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = category.name;
    const meta = document.createElement("span");
    meta.className = "category-meta";
    meta.textContent = `${category.questions.length} sample question${category.questions.length === 1 ? "" : "s"} · Start practice`;
    copy.append(name,meta);
    const arrow = document.createElement("span");
    arrow.className = "category-arrow";
    arrow.textContent = "→";
    button.append(icon,copy,arrow);
    button.addEventListener("click", () => startQuiz(category.id, false));
    grid.appendChild(button);
  });
}

function prepareQuestions(category, wrongOnly) {
  let source = category.questions.map((question, originalIndex) => ({...question, originalIndex}));
  if (wrongOnly) {
    const missedIndexes = new Set(recordedAnswers.filter(answer => !answer.isCorrect).map(answer => answer.originalIndex));
    source = source.filter(question => missedIndexes.has(question.originalIndex));
  }
  return shuffleArray(source).map(question => {
    const options = question.choices.map((text,index) => ({text, isCorrect:index === question.correctAnswer}));
    const shuffledOptions = shuffleArray(options);
    return {...question, shuffledOptions, correctOptionIndex:shuffledOptions.findIndex(option => option.isCorrect)};
  });
}

function startQuiz(categoryId, wrongOnly = false) {
  activeCategory = quizCategories.find(category => category.id === categoryId);
  isWrongOnlyAttempt = wrongOnly;
  quizQuestions = prepareQuestions(activeCategory, wrongOnly);
  if (!quizQuestions.length) return;
  currentIndex = 0;
  recordedAnswers = [];
  startTime = Date.now();
  elapsedSeconds = 0;
  $("category-label").textContent = activeCategory.name + (wrongOnly ? " · INCORRECT ANSWERS" : "");
  $("timer").textContent = "00:00";
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  showScreen(screens.quiz);
  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  $("question-counter").textContent = `Question ${currentIndex + 1} of ${total}`;
  $("question-number").textContent = String(currentIndex + 1).padStart(2,"0");
  $("score-counter").textContent = recordedAnswers.filter(answer => answer.isCorrect).length;
  $("progress-bar").style.width = `${(currentIndex / total) * 100}%`;
  $("question-text").textContent = question.question;
  $("choices").innerHTML = "";
  $("feedback").className = "feedback hidden";
  $("feedback").textContent = "";
  $("answer-hint").textContent = "Select one answer to continue.";
  $("next-button").classList.add("hidden");
  $("next-button").innerHTML = currentIndex === total - 1 ? "View results <span aria-hidden=\"true\">→</span>" : "Next question <span aria-hidden=\"true\">→</span>";

  question.shuffledOptions.forEach((option,index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    const letter = document.createElement("span");
    letter.className = "choice-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.textContent = option.text;
    button.append(letter,text);
    button.addEventListener("click", () => selectAnswer(index));
    $("choices").appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentIndex];
  const selectedOption = question.shuffledOptions[selectedIndex];
  const isCorrect = selectedOption.isCorrect;
  recordedAnswers.push({
    originalIndex:question.originalIndex,
    question:question.question,
    selectedText:selectedOption.text,
    selectedLetter:String.fromCharCode(65 + selectedIndex),
    correctText:question.shuffledOptions[question.correctOptionIndex].text,
    correctLetter:String.fromCharCode(65 + question.correctOptionIndex),
    isCorrect,
    explanation:question.explanation || ""
  });

  [...$("choices").children].forEach((button,index) => {
    button.disabled = true;
    if (index === question.correctOptionIndex) button.classList.add("answer-correct");
    if (index === selectedIndex) button.classList.add(isCorrect ? "selected-correct" : "selected-wrong");
  });

  const feedback = $("feedback");
  feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  feedback.textContent = isCorrect
    ? `Correct! ${question.explanation || "You selected the right answer."}`
    : `Not quite. The correct answer is ${question.correctLetter || String.fromCharCode(65 + question.correctOptionIndex)}. ${recordedAnswers.at(-1).correctText}. ${question.explanation || ""}`;
  $("answer-hint").textContent = "Answer recorded.";
  $("score-counter").textContent = recordedAnswers.filter(answer => answer.isCorrect).length;
  $("next-button").classList.remove("hidden");
}

function goNext() {
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  stopTimer();
  $("progress-bar").style.width = "100%";
  showReport();
}

function showReport() {
  const total = recordedAnswers.length;
  const correct = recordedAnswers.filter(answer => answer.isCorrect).length;
  const wrong = total - correct;
  const percentage = total ? Math.round(correct / total * 100) : 0;
  $("result-percent").textContent = `${percentage}%`;
  $("result-fraction").textContent = `${correct} out of ${total} correct`;
  $("result-correct").textContent = correct;
  $("result-wrong").textContent = wrong;
  $("result-time").textContent = formatTime(elapsedSeconds);
  $("report-subtitle").textContent = `${activeCategory.name}${isWrongOnlyAttempt ? " · Incorrect-answer review" : ""} — your attempt is complete.`;
  $("review-wrong-button").classList.toggle("hidden", wrong === 0);
  $("no-wrong").classList.add("hidden");
  reportFilter = "all";
  document.querySelectorAll(".filter-button").forEach(button => button.classList.toggle("active", button.dataset.filter === "all"));
  renderReportList();
  showScreen(screens.report);
}

function renderReportList() {
  const list = $("report-list");
  list.innerHTML = "";
  const filtered = recordedAnswers.filter(answer => reportFilter === "all" || !answer.isCorrect);
  $("no-wrong").classList.toggle("hidden", filtered.length !== 0 || reportFilter !== "wrong");
  filtered.forEach((answer,index) => {
    const item = document.createElement("article");
    item.className = `report-item ${answer.isCorrect ? "correct" : "wrong"}`;
    const status = document.createElement("span");
    status.className = `report-status ${answer.isCorrect ? "correct" : "wrong"}`;
    status.textContent = answer.isCorrect ? "✓ Correct" : "✕ Incorrect";
    const question = document.createElement("p");
    question.className = "report-question";
    question.textContent = `Question ${recordedAnswers.indexOf(answer) + 1}. ${answer.question}`;
    const yourAnswer = document.createElement("p");
    yourAnswer.className = "report-answer";
    yourAnswer.textContent = `Your answer: ${answer.selectedLetter}. ${answer.selectedText}`;
    const correctAnswer = document.createElement("p");
    correctAnswer.className = "report-answer";
    correctAnswer.textContent = `Correct answer: ${answer.correctLetter}. ${answer.correctText}`;
    item.append(status,question,yourAnswer,correctAnswer);
    if (answer.explanation) {
      const explanation = document.createElement("p");
      explanation.className = "report-explanation";
      explanation.textContent = `Explanation: ${answer.explanation}`;
      item.appendChild(explanation);
    }
    list.appendChild(item);
  });
}

function returnToMenu() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  activeCategory = null;
  showScreen(screens.menu);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  $("theme-icon").textContent = dark ? "☀" : "☾";
  $("theme-toggle").setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  $("theme-toggle").title = dark ? "Switch to light mode" : "Switch to dark mode";
  try { localStorage.setItem("let-reviewer-theme", theme); } catch (_) {}
}

function initializeTheme() {
  let saved = null;
  try { saved = localStorage.getItem("let-reviewer-theme"); } catch (_) {}
  const preferred = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(saved || preferred);
}

$("theme-toggle").addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
$("back-to-menu").addEventListener("click", returnToMenu);
$("return-button").addEventListener("click", returnToMenu);
$("home-link").addEventListener("click", event => { event.preventDefault(); returnToMenu(); });
$("retry-button").addEventListener("click", () => startQuiz(activeCategory.id, false));
$("review-wrong-button").addEventListener("click", () => startQuiz(activeCategory.id, true));
$("next-button").addEventListener("click", goNext);
document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    reportFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
    renderReportList();
  });
});

renderCategories();
initializeTheme();
showScreen(screens.menu);
