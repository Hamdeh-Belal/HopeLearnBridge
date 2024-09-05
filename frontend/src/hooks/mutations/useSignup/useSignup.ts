import { useMutation } from '@tanstack/react-query';
import { signup, SignupFormData } from '../../../services/api/signupApi';

export const useSignup = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: async (data: SignupFormData) => {
      return await signup(data);
    },
  });

  const errorMessage = error ? error.message : null;

  return {
    isPending,
    isError,
    errorMessage,
    mutate,
    reset,
  };
};