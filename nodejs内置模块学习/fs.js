
// File System内置模块

// 用途:提供对文件系统的访问接口，可以用来读写文件，获取文件信息
import { log } from 'node:console';
import *as fs from 'node:fs/promises';

// 1.文件读写
// 异步读取：fs.readFile(path, [options], callback)
// 同步读取：fs.readFileSync(path, [options])


// 异步写入：fs.writeFile(file, data, [options], callback)
// 同步写入：fs.writeFileSync(file, data, [options])

// (1)读写文件
// 异步读取文件
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('异步读取内容', data);
// })


// 同步读取文件
// try {
//   const data = fs.readFileSync('example.html', 'utf8')
//   console.log('同步读取内容:', data);
// } catch (err) {
//   console.error('同步读取错误:', err);
// }


// (2)同步异步写入文件操作

// 实现个小想法，读取example.html文件，然后写入example.txt
// fs.readFile(`example.html`, 'utf8', (err, data) => {
//   if (err) throw err;
//   fs.writeFile('example.txt', data, err => {
//     if (err) throw err;
//     console.log('异步写入成功');
//   })
// })


// (3) 追加文件
// 异步追加：fs.appendFile(file, data, [options], callback)
// 同步追加：fs.appendFileSync(file, data, [options])

// fs.appendFile('Choria.txt', 'choria 是一个大傻逼喵', err => {
//   if (err) throw err;
//   console.log('追加成功');
//   fs.readFile(`Choria.txt`, 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data);
//   })
// })

// (4) 删除文件
// 异步删除：fs.unlink(path, callback)
// 同步删除：fs.unlinkSync(path)

// fs.unlink('example.txt', err => {
//   if (err) throw err;
//   console.log('文件已删除');
// })


// 目录操作
// (1) 创建目录
// 异步创建：fs.mkdir(path, [options], callback)
// 同步创建：fs.mkdirSync(path, [options])

// fs.mkdir('new-folder/sub-folder', { recursive: true }, (err) => {
//   if (err) throw err
//   console.log('目录创建成功');


//   fs.appendFile('Carla', '卡拉被放进了新创建的文件夹里啦~', err => {
//     if (err) throw err
//     console.log('添加文件成功');
//   })
// })

// (2) 删除目录
// 异步删除：fs.rmdir(path, callback)
// 同步删除：fs.rmdirSync(path)
fs.rmdir(`new-folder/sub-folder`, (err) => {
  if (err) throw err
  console.log('目录已删除');
})