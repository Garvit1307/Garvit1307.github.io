
// this is the multiple choice questions
const questionsMCQ = [
  {
    question: 'What are the official colors of FBLA?',
    answers: [
      { text: 'Blue and Gold', correct: true },
      { text: 'Red and Blue', correct: false },
      { text: 'Black and White', correct: false },
      { text: 'Black and Gold', correct: false }

    ]
  },
  {
    question: 'How many stanzas does the FBLA creed have?',
    answers: [
      { text: '2 - two', correct: false },
      { text: '7 - seven', correct: true },
      { text: '6 - six', correct: false },
      { text: '12 - twelve', correct: false }
    ]
  },
  {
    question: 'Who is the founder of FBLA?',
    answers: [
      { text: 'Garvit Sharma', correct: false },
      { text: 'Monty Rhodes', correct: false },
      { text: 'Hamden L. Forkner', correct: true },
      { text: 'David J. Schwartz', correct: false }
    ]
  },
  {
    question: 'In the officer installation ceremony, what color candle represents the chapter in its entirety?',
    answers: [
      { text: 'white', correct: true },
      { text: 'gold', correct: false },
      { text: 'Black', correct: false },
      { text: 'Blue', correct: false }

    ]
  },
  {
    question: 'Where was the first FBLA chapter was chartered?',
    answers: [
      { text: 'Cumming, Georgia', correct: false },
      { text: 'Johnson City, Tennessee', correct: true },
      { text: 'Reston, VA', correct: false },
      { text: 'In the local library', correct: false }
    ]
  },
  {
    question: 'What date was the first FBLA chapter chartered?',
    answers: [
      { text: 'January 21, 1960', correct: false },
      { text: 'February 14, 1947', correct: false },
      { text: 'February 3rd, 1942', correct: true },
      { text: 'March 14, 1942', correct: false }
    ]
  },
  {
    question: 'What year and what group purchased the land for the FBLA-PBL National Center?',
    answers: [
      { text: '1981, Conrad N. Hilton foundation', correct: true },
      { text: '1981, Purdue G. Foundation', correct: false },
      { text: '1981, Coca - Cola.corp', correct: false },
      { text: '1947, Carnegie H. Foundation', correct: false }

    ]
  },
  {
    question: 'What are the three words across the top of the FBLA emblem?',
    answers: [
      { text: 'Dare to Dream', correct: false },
      { text: 'FBLA, PBL, Aspire', correct: false },
      { text: 'March of Dimes', correct: false },
      { text: 'Service, Education, Progress', correct: true }
    ]
  },
  {
    question: 'In what year was Phi Beta Lambda created?',
    answers: [
      { text: 'Hands down, 1812!', correct: false },
      { text: '1956', correct: false },
      { text: '1958', correct: true },
      { text: '1948', correct: false }
    ]
  },
  {
    question: 'Who was the first executive director of FBLA-PBL?',
    answers: [
      { text: 'Dr. Edward Miller', correct: true },
      { text: 'Monty Rhodes', correct: false },
      { text: 'Dr.Garvit Sharma', correct: false },
      { text: 'Dr.Kavin Siva', correct: false }

    ]
  },
  {
    question: 'Who is the Conference Director of FBLA-PBL?',
    answers: [
      { text: 'Dr.Garvit Sharma', correct: false },
      { text: 'Richard Bowen', correct: true },
      { text: 'Dr.Kavin Siva', correct: false },
      { text: 'Monty Rhodes', correct: false }
    ]
  },
  {
    question: 'Who is the Director of Membership for FBLA-PBL?',
    answers: [
      { text: 'Dr.Garvit Sharma', correct: false },
      { text: 'Monty Rhodes', correct: false },
      { text: 'Robert T. Kiyosaki', correct: false },
      { text: 'Lisa Frye Smothers', correct: true }
    ]
  },
  {
    question: 'Where is the National FBLA-PBL Center located?',
    answers: [
      { text: 'Reston, NY', correct: false },
      { text: 'Times Square, NY', correct: false },
      { text: 'Reston, VA', correct: true },
      { text: 'Reston, WA', correct: false }
    ]
  },
  {
    question: 'Who is the Director of Education for FBLA-PBL?',
    answers: [
      { text: 'Dr.Eeshwaran Swamy', correct: false },
      { text: 'Barbara Small', correct: true },
      { text: 'Dr.Garvit Sharma', correct: false },
      { text: 'Monty Rhodes', correct: false }
    ]
  }
]

// These are the true and false questions
const questionsTF = [
  {
    question: 'The groundbreaking for the National Center was held on 1990',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'The Professional Division created on 1988',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'In the absence of the president and vice-president at a regular meeting, the director should call he meeting to order',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'The Falcon on the emblem denotes our belief in democracy, liberty, and the American way of life',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'the National Board of Directors is the policy making body for national FBLA-PBL, Inc.',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'NBEA stands for National Business Education Association',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'The four divisions of FBLA-PBL are FBLA-Middle Level, FBLA, PBL, and Professional Division',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'FBLA-PBL, Inc. primarily funded by donations',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'The largest room at the National Center is the Conference room was a gift from Germany',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'The initials USDE stand for - United States Department of Electronics',
    answers: [
      { text: 'True', correct: false},
      { text: 'False', correct: true }
    ]
  },
  {
    question: 'The initials LIFT in Mission LIFT stand for - Leading Into the Future Leader',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  },
  {
    question: 'The name of the national publication for FBLA and FBLA-Middle Level members is - Tomorrows Business Leader',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  }
]

// These are the dropdown questions

const questionsDropdown = [
  {
    question: 'What is the national publication for FBLA and FBLA-Middle level advisers called?',
    answers: [
      { text: 'Hotline', correct: true },
      { text: 'FBLA News', correct: false }
    ]
  },
  {
    question: 'What is the name of the publication that each local chapter receives that contains all the information about FBLA—national constitution and bylaws, national programs, national organization, etc.?',
    answers: [
      { text: 'FBLA Management Guidelines', correct: false },
      { text: 'Chapter Management Handbook', correct: true }
    ]
  },
  {
    question: 'What is the national program called that encourages chapters from all divisions to team up to leverage their potential for success?',
    answers: [
      { text: 'Connecting Chapters', correct: true },
      { text: 'Aspire', correct: false }
    ]
  },
  {
    question: 'The national recognition program that recognizes FBLA members who recruit at least four new members is called?',
    answers: [
      { text: 'March of Dimes', correct: false },
      { text: '8Night of the "Body Snatchers" II', correct: true }
    ]
  },
  {
    question: 'The national recognition program that recognized local FBLA chapters who either maintain or increase their local chapter membership over last years total?',
    answers: [
      { text: 'Membership Achievement Award', correct: true },
      { text: 'FBLA BAA awards', correct: false }
    ]
  },
  {
    question: 'What is meant by the statement that FBLA-PBL membership is unified?',
    answers: [
      { text: 'Must be a member at local, state, and national levels', correct: false },
      { text: 'Does not have to be at a local, state and national levels', correct: true }
    ]
  },
  {
    question: 'What are the dates of National FBLA-PBL week?',
    answers: [
      { text: 'March 14', correct: false },
      { text: 'Second week in February', correct: true }
    ]
  },
  {
    question: 'Which officer presides over and conducts meetings according to Parliamentary Procedure?',
    answers: [
      { text: 'Secretary', correct: false },
      { text: 'President', correct: true }
    ]
  },
  {
    question: 'When is a local chapter considered inactive?',
    answers: [
      { text: 'After failing to pay dues for one year', correct: true },
      { text: 'After showing little improvement in competitions', correct: false }
    ]
  },
  {
    question: 'What is another name for a written plan of action?',
    answers: [
      { text: 'Program of Service', correct: false },
      { text: 'Program of Work', correct: true }
    ]
  },
  {
    question: 'What color of candle symbolizes the office of president?',
    answers: [
      { text: 'Blue and Gold', correct: false },
      { text: 'Red', correct: true }
    ]
  },
  {
    question: 'There are how many FBLA-Middle goals?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
]

// Fill in the blank
// problem with unknown answer need to fix.

const questionsFill = [
  {
    question: 'Excluding the three division presidents, how many years is the term of office for National Board of Director members?',
    answers: [
      { text: 'three', correct: true },
      { text: '3', correct: true },
      { text: 'idk yo', correct: false }

    ]
  },
  {
    question: 'Who is the FBLA-PBL President and CEO - before 2019?',
    answers: [
      { text: 'Jean Buckley', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Who is the FBLA-PBL Communications Manager?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'George Mocharko', correct: true }
    ]
  },
  {
    question: 'What officer counts the votes and then records them during an election?',
    answers: [
      { text: '6', correct: false },
      { text: 'Secretary', correct: true }
    ]
  },
  {
    question: 'In the officer installation ceremony, what color candle symbolized office of reporter?',
    answers: [
      { text: 'Violet', correct: true },
      { text: 'answerhsdblj', correct: true }
    ]
  },
  {
    question: 'Who determines national dues?',
    answers: [
      { text: 'National Board of Directors', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Which month is National Education for Business month?',
    answers: [
      { text: 'November', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which month is National Education for Business month?',
    answers: [
      { text: '6', correct: false },
      { text: '1991', correct: true }
    ]
  },
  {
    question: 'Who needs to approve a new chapter application before it is forwarded to the National office?',
    answers: [
      { text: 'State chairman', correct: true },
      { text: 'answer', correct: true }
    ]
  },
  {
    question: 'How many administrative regions does National FBLA-PBL have?',
    answers: [
      { text: 'Five', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'What year did FBLA gain independent status?',
    answers: [
      { text: '1969', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What year was FBLA-Middle Level division established at the national level?',
    answers: [
      { text: '1994', correct: true }
    ]
  }
]


