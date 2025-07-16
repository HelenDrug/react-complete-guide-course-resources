export interface QuestionType {
    id: string;
    text: string;
    answers: AnswerType[];
}

export type AnswerType = string

export type AnswerState = 'correct' | 'incorrect' | 'unanswered' | 'answered';