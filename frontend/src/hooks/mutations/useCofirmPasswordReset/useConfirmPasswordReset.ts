import { useMutation } from '@tanstack/react-query';
import { confirmPasswordReset, ConfirmPasswordResetFormData } from '../../../services/api/confirmPasswordResetApi';


export const useConfirmPasswordReset = () => {
  const { mutate, isPending, error, reset, isError } = useMutation({
    mutationKey: ['resetPassword'],
    mutationFn: async (data: ConfirmPasswordResetFormData) => {
      return await confirmPasswordReset(data);
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