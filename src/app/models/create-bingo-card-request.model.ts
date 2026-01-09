export class CreateBingoCardRequest {
    size: number = 1; //integer, required
    allowDuplicates?: boolean = false;
    categoryPoolIds?: string[];
}