export interface ComicPanel {
    id: string;
    imageUrl: string;
}

export interface Comic {
    id: string;
    title: string;
    panels: ComicPanel[];
}