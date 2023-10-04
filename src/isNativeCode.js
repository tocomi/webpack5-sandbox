export const isNativeCode = async ({ method }) => {
  console.log(
    '🐻 isNativeCode',
    /\{\s+\[native code\]/.test(Function.prototype.toString.call(method))
  );
};
