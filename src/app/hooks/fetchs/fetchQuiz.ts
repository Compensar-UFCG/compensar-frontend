import { Quiz } from "@interfaces/quiz.types";

export async function fetchQuiz(quiz: Quiz) {
  fetch('/api/pdf', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(quiz)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao gerar o PDF');
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${quiz.title}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Erro ao baixar o PDF:', error);
    });
}