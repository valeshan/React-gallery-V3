## Flickr Image Gallery using React

The image gallery contains a search bar and 3 default topics and accesses Flickr's image library for your search term then posts them in a reasonably presentable format.

![gallery-sample](https://user-images.githubusercontent.com/26535288/44889887-4f3e3800-ad1b-11e8-8cae-c53e33dee32c.PNG)


To get started, please create a config file inside the ```config``` folder located inside the ```src``` folder, and name it ```Config.js```. Format it in the following way, with your own Flickr API key:

```
const apiKey = 'insert API key here';

export default apiKey;
```
Once you've installed all the dependencies with ```npm install```, simply run ```npm start``` on your CLI and you're good to go!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
