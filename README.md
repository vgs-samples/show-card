<p align="center"><a href="https://www.verygoodsecurity.com/"><img src="https://avatars0.githubusercontent.com/u/17788525" width="128" alt="VGS Logo"></a></p>
<p align="center"><b>Show Card with VGS Reverse Proxy</b></p>

# Instructions for using this App
This app demonstrates a use case using VGS reverse proxy to reveal card back to card holder.

![appdemo](reveal-card.gif "demo")


## Run App
```
npm install
```
```
node server.js
```
You can check the portable database to see VGS tokens of pans are stored there. The alias format used here is `Payment Card - Prefixed, Luhn Valid, 19 Digits Fixed Length`

 ![storage](card-storage.png "stored payments")

## Run Ngrok

./ngrok http 3000

## VGS Dashboard Route Config

 ![exampleinbound](inbound-setup.png "example inbound route")