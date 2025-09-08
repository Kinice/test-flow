Object.keys(process.env).forEach(key => {
  console.log(key, process.env[key])
})
for (let i = 0; i < 2000; i++) {
  console.log('我输出了这么多行了：', i);
}
