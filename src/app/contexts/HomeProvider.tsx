import { createContext, useContext, useState } from 'react';

import { Question, Questions } from '@interfaces/question.types';

interface HomeContextProps {
  myQuestions: Questions;
  saveMyQuestions: (question: Question) => void;
}

const HomeContext = createContext<HomeContextProps>({
  myQuestions: [],
  saveMyQuestions: (question: Question) => console.log(question)
});

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
  const [myQuestions, setQuestions] = useState<Questions>([])

  const saveMyQuestions = (question: Question) => setQuestions([...myQuestions, question]);

  return (
    <HomeContext.Provider value={{ myQuestions, saveMyQuestions }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeSessionContext = () => useContext(HomeContext);
