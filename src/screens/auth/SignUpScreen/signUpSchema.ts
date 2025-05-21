import { z } from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const sigUpSchema = z.object({
  username: z.string().regex(userNameRegex),
  fullName: z.string().min(3, 'Nome muito curto').max(50, 'Nome muito longo'),
  email: z.string().email(),
  password: z.string().min(8, 'Senha muito curta'),
});

export type SignUpSchema = z.infer<typeof sigUpSchema>;