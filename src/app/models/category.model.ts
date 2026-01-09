import { GenreType } from "./genre-type.model";
export class Category {
    id?: string;
    name?: string;
    system?: boolean; //not sure what this is used for???
    genreType?: GenreType;
}