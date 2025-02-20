export class Crops {
    cropId: string;
    cropName: string;
    cropScientificName: string;
    cropCategory: string;
    cropSeason: string;
    cropImage1: string;
    cropFieldId: string;

    constructor(cropId: string, cropName: string, cropScientificName: string, cropCategory: string, cropSeason: string, cropImage1: string, cropFieldId: string) {
        this.cropId = cropId;
        this.cropName = cropName;
        this.cropScientificName = cropScientificName;
        this.cropCategory = cropCategory;
        this.cropSeason = cropSeason
        this.cropImage1 = cropImage1
        this.cropFieldId = cropFieldId
    }
}

