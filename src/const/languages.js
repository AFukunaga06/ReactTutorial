const LANGUAGES = [ ];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000);
  });
};
