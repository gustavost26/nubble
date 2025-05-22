import { z } from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const sigUpSchema = z.object({
  username: z.string().regex(userNameRegex).toLowerCase(),
  fullName: z.string().min(3, 'Nome muito curto').max(50, 'Nome muito longo').transform(value => {
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha muito curta'),
});

export type SignUpSchema = z.infer<typeof sigUpSchema>;