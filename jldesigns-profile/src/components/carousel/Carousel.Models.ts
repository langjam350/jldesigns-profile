export interface ICarouselSlide {
    id: number;
    title: string;
    description: string;
    image: string; // URL or path to the image in blob storage
};

export class CarouselSlide implements ICarouselSlide {
    id: number;
    title: string;
    description: string;
    image: string;

    constructor(id: number, title: string, description: string, image: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}