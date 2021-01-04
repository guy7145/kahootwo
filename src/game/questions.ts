export type Question = {
    questionText: string,
    answers: string[],
    correctAnswerIndex: number,
    type: 'normal' | 'scary';
};

export const questions: Question[] = [
    {
        questionText: "Who am I?",
        answers: ["Crash", "Monster", "Guy Danielli", "Ido ben amihai"],
        correctAnswerIndex: 0,
        type: 'normal',
    },
    {
        questionText: "What do you do?",
        answers: ["Run", "Poop", "Eat", "Ido ben amihai"],
        correctAnswerIndex: 3,
        type: 'scary',
    },
];

questions.forEach(q => {
    if (q.correctAnswerIndex < 0 || q.correctAnswerIndex >= q.answers.length) {
        throw new Error(`question misconfiguration ("${q.questionText}")`);
    }
});
