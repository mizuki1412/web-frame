export default {
  test: {
    // request 层 import 了 antdv-next（message），jsdom 环境更接近宿主；
    // 其余用例为纯函数（分页/权限/加密互操作向量）
    environment: "jsdom",
    include: ["backend/**/*.test.js", "store/**/*.test.js"],
  },
}
