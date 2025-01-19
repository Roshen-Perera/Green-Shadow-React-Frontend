export class Fields {
    fieldId: string;
    fieldName: string;
    fieldExtent: string;
    fieldLocation: string;
    fieldImage1: string;
    fieldImage2: string;

    constructor(fieldId: string, fieldName: string, fieldExtent: string, fieldLocation: string, fieldImage1: string, fieldImage2: string) {
        this.fieldId = fieldId;
        this.fieldName = fieldName;
        this.fieldExtent = fieldExtent;
        this.fieldLocation = fieldLocation;
        this.fieldImage1 = fieldImage1
        this.fieldImage2 = fieldImage2
    }
}

