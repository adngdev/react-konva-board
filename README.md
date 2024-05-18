## Table of Contents
- [Inspiration](#inspiration)
- [Library](#library)
- [Design](#design)
- [Limitation](#limitation)

## Inspiration <a name="inspiration"></a>
The app was an attempt to replicate several aspects of the design board by Canva.

## Library and APis <a name="library"></a>
react-konva
```bash
npm i react-konva
```
Unplash API
[https://unsplash.com/documentation](https://unsplash.com/documentation)

Pinterest API
[https://developers.pinterest.com/](https://developers.pinterest.com/)


## Design <a name="design"></a>
Initial Design
![Prototype](/public/prototype.png)

Final Design
![Prototype](/public/finalDesign.png)

## Limitation <a name="limitation"></a>
1. The project was solely front-end. Therefore, after a refresh, the removed background image won't be visible (the URL is temporarily kept in the browser).
2. Only 20 random images from Unsplash were shown at a time because pagination was not implemented (less efficient to process pagination in the front-end).
3. No upload of personal images due to not setting up an S3 bucket and no server for processing images (also concerns about random images from users without accounts).
4. No color changing of text/background.
5. Minimal text related functonalities (No font changes, custom font size, italic,...)
