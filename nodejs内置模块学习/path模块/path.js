const fs = require('fs')
//引入path模块对象
const path = require('path')
//调用path.join() 配合 _dirname 组成目标文件的绝对路径
fs.readFile(path.join(__dirname, 'path.txt'), (err, data) => {


  console.log(__dirname);
  if (err) {
    console.log(err)
  }
  console.log(data.toString())
})