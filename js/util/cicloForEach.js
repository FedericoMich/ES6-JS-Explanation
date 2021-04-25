const arrImages = [
    {
        name: 'Immagine 1',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 2',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 3',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 4',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 5',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 6',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    },
    {
        name: 'Immagine 7',
        src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
    }
]

export function elaboraElemento(image){
    console.log(image.name);
    console.log(image.src);
}


return arrImages.forEach(elaboraElemento(image));