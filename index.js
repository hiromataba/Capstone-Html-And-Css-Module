import data from './data.js';

const menuBtn = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.nav-links');
const closeMenuBtn = document.querySelector('.close-menu-btn button');
const myFeatures = data.features;

menuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'flex';
  menuLinks.classList.add('menu-links');
});
closeMenuBtn.addEventListener('click', () => {
  menuLinks.style.display = 'none';
  menuLinks.classList.remove('menu-links');
});
const speakerGrid = document.querySelector('.feature .speaker-grid');
function implementFeatures() {
  myFeatures.forEach((feature) => {
    // Create Article
    const featureArticle = document.createElement('article');
    featureArticle.classList.add('feature-article');
    const featureImage = document.createElement('div');
    featureImage.classList.add('feature-image');
    const featurePic = document.createElement('img');
    featurePic.src = feature.featureImage;
    feature.alt = 'Feature Image';
    featureImage.appendChild(featurePic);
    featureArticle.appendChild(featureImage);

    // Add Article Info
    const articleInfo = document.createElement('div');
    articleInfo.classList.add('arcticle-info');
    const authorName = document.createElement('h3');
    authorName.classList.add('author-name');
    authorName.innerText = feature.featureName;
    articleInfo.appendChild(authorName);

    // Add Article Description
    const authorWord = document.createElement('p');
    authorWord.classList.add('author-word');
    authorWord.innerText = feature.featureDescription;
    articleInfo.appendChild(authorWord);

    // Add Article Message
    const articleMessage = document.createElement('p');
    articleMessage.classList.add('author-message');
    articleMessage.innerText = feature.featureMessage;
    articleInfo.appendChild(articleMessage);

    featureArticle.appendChild(articleInfo);

    speakerGrid.appendChild(featureArticle);
  });
}

implementFeatures();