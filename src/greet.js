export const unusedFunction = () => {
  console.log('Good morning.');
};

export const hello = ({ name }) => {
  console.log(`🐯 Hello ${name}`);
};

export const usePromise = ({ message }) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      console.log(`🐼 resolve ${message}`);
      resolve(message);
    }, 300);
  });
};
