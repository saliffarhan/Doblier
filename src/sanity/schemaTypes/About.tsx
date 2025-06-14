
const aboutSchema = {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
      {
        name: 'question1',
        title: 'Question 1',
        type: 'string',
      },
      {
        name: 'answer1',
        title: 'Answer 1',
        type: 'text',
      },
      {
        name: 'question2',
        title: 'Question 2',
        type: 'string',
      },
      {
        name: 'answer2',
        title: 'Answer 2',
        type: 'text',
      },
      {
        name: 'question3',
        title: 'Question 3',
        type: 'string',
      },
      {
        name: 'answer3',
        title: 'Answer 3',
        type: 'text',
      },
      {
        name: 'question4',
        title: 'Question 4',
        type: 'string',
      },
      {
        name: 'answer4',
        title: 'Answer 4',
        type: 'text',
      },
      {
        name: 'addQuestions',
        title: 'Add Questions',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  

export default aboutSchema