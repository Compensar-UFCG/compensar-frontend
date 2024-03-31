import { createContext, useContext, useState } from 'react';

import { Question, Questions } from '@interfaces/question.types';

interface HomeContextProps {
  myQuestions: Questions;
  hasQuestion: boolean;
  saveMyQuestions: (question: Question) => void;
  removeMyQuestions: (question: Question) => void;
  containQuestion: (questionId: string) => boolean;
}

const HomeContext = createContext<HomeContextProps>({
  myQuestions: [],
  hasQuestion: false,
  saveMyQuestions: (question: Question) => console.log(question),
  removeMyQuestions: (question: Question) => console.log(question),
  containQuestion: (questionId: string) => false,
});

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [myQuestions, setQuestions] = useState<Questions>([])
  const [hasQuestion, setHasQuestion] = useState(false);

  const saveMyQuestions = (question: Question) => {
    setHasQuestion(true);
    setQuestions([...myQuestions, question]);
  };

  const removeMyQuestions = (question: Question) => {
    setQuestions(myQuestions.filter(questionElement => questionElement._id !== question._id));
    if(myQuestions.length === 1) setHasQuestion(false);
  };

  const containQuestion = (questionId: string) => !!myQuestions.filter(questionElement => questionElement._id === questionId).length

  return (
    <HomeContext.Provider value={{ myQuestions, hasQuestion, saveMyQuestions, removeMyQuestions, containQuestion }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeSessionContext = () => useContext(HomeContext);
