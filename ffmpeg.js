//学习使用ffmpeg
const { execSync } = require(`child_process`)

execSync(`ffmpeg -i 无尽列车S1E8.mp4 无尽列车S1E8.mp3`, { stdio: `inherit` })