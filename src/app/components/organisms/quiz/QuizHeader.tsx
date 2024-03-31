import { Dispatch, FC, SetStateAction, useState } from "react";
import { Controller } from "react-hook-form";

import { Quiz, QuizForm } from "@interfaces/quiz.types";

import { useHomeSessionContext } from "@contexts/HomeProvider";
import { fetchQuiz } from "@hooks/fetchs/fetchQuiz";
import { useFormQuiz } from "./useFormQuiz";

import { Box, IconButton, InputAdornment   } from "@mui/material";
import Input from "@components/atoms/Input";

import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

interface QuizHeaderProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const QuizHeader: FC<QuizHeaderProps> = ({ setOpen }) => {
  const [hasEdit, setHasEdit] = useState(false);
  
  const { control, handleSubmit } = useFormQuiz();
  const { myQuestions, hasQuestion } = useHomeSessionContext();
  
  const submitQuiz = (form: QuizForm) => {
    const quiz: Quiz = {
      title: form.title,
      questions: myQuestions,
    }

    fetchQuiz(quiz)
  }
  
  return (
    <form onSubmit={handleSubmit(submitQuiz)}>
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Controller
          name="title"
          control={control}
          render={({ field, formState: { errors } }) => (
            <Input
              showError={!!errors.title?.message}
              errorMessage={errors.title?.message}
              variant="standard"
              fullWidth
              disabled={!hasEdit}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle edit visibility"
                    onClick={() => setHasEdit(!hasEdit)}
                    size="small"
                  >
                    {!hasEdit && <EditIcon fontSize="small" color="primary"/>}
                  </IconButton>
                </InputAdornment>
              }}
              {...field}
              onBlur={() => setHasEdit(false)}
            />
          )}
        />
        <Box sx={{ display: 'flex' }}>
          <IconButton type="submit" size="small" color="primary" disabled={!hasQuestion}>
            <DownloadIcon />
          </IconButton>
          <IconButton size="small" onClick={() => setOpen(false)}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        </Box>
      </Box>
    </form>
  )
}

export default QuizHeader;