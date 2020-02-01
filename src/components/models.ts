
export class BookData {
    public title: string;
    public author: string;
    public coverUrl: string;
    public link: string;
}

export class BookGroup {
    public groupName: string;
    public books: BookData[];
}