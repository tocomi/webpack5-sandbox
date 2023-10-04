module.exports = {
  plugins: [
    [
      'polyfill-corejs3',
      {
        // entry-global, usage-global, usage-pure のいずれかを指定
        method: 'usage-pure',
        // core-jsのバージョン情報を与えると、より最適な結果を出してくれる
        version: '3.33.0',
      },
    ],
  ],
};
