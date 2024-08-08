import { hash, verify } from 'argon2';

export const creationHash = async (textPlain: string) => {
  return hash(textPlain);
};

export const validationHash = async (textPlain: string, textHash: string) => {
  try {
    return verify(textHash, textPlain);
  } catch (error) {
    return false;
  }
};
