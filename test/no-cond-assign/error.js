/**
 * 禁止条件语句中出现赋值操作
 * 除非这个赋值语句被括号包裹起来
 */
if ((x = 0)) {
  // do something
}