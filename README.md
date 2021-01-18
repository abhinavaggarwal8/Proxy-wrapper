setup instructions

npm i


run test developemnt server
npm run dev

or

run production build with pm2
build prod = npm run build
npm i pm2
pm2 start ./build/index.js



Test API
POST : http://localhost:3000/v1/user/login
form-data
email:myemail@email.com
password:MyPassword
dataType:json (optional for json formated response)
input:who is prime minister of india
