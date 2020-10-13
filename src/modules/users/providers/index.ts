import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptsHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptsHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptsHashProvider);
