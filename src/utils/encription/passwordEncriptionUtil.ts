import bcrypt from 'bcrypt';


export const encryptPassword = async (
  notEncryptedPassword: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(notEncryptedPassword, salt);
  return encryptedPassword;
};

export const validatePassword = async (
  notEncryptedPassword: string,
  encryptedPassword: string
): Promise<boolean> => await bcrypt.compare(notEncryptedPassword, encryptedPassword);