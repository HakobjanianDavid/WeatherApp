import { template } from "../htmlTemplate";

export function redrawBackground(city) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let api = `${proxy}https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={someKey}&tags=%27${city}city%27&tag_mode=all&sort=relevance&per_page=50&content_type=1&format=json&nojsoncallback=1%27&pretty=1&no_annotations=1`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const {photo} = data.photos;
            const randomNumber = getRandomArbitrary(0, 40).toFixed();
            const {farm, server, id, secret} = photo[randomNumber];
            
            template.mainWrap.style.background = `linear-gradient( rgba(255, 255, 255, 0), rgba(0.3, 0.5, 0, 0.3) ), url(http://farm${farm}.static.flickr.com/${server}/${id}_${secret}_b.jpg) no-repeat`;
            template.mainWrap.style.backgroundSize = 'cover';
            template.mainWrap.style.backgroundPosition = 'center center';

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }
        })
        .catch(
            function(e) {
                throw new Error(e);
            }
        );
}