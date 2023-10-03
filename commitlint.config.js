module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?:\[(.+)\]:)?\s*(\w+):\s(.+)$/,
      headerCorrespondence: ["issue", "type", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "type-enum": (parsed, _when, expectedValue) => {
          const { type } = parsed
          if (type && !expectedValue.includes(type)) {
            return [
              false,
              `type must be one of ${expectedValue.join("", "")}`
            ]
          }
          return [true, ""]
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "fix", // 버그 수정
        "feat", // 신규 기능
        "refactor", // 리팩토링
        "remove", // 삭제
        "blog", // 블로그 글
        "breaking", // breaking changes
        "style", // 스타일 변경
        "ci", // ci 수정
        "chore", // 기타 변경
        "deploy", // 배포
        "type", // 타입 변경
        "install" // 패키지 신규 설치
      ],
    ],
  },
}
