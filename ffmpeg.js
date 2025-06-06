//学习使用ffmpeg的相关知识


// 调用child_process子进程
const { execSync } = require(`child_process`)

execSync(`ffmpeg -i 无尽列车S1E8.mp4 无尽列车S1E8.mp3`, { stdio: `inherit` })