import { Button } from "@/components/ui/button.tsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Input} from "@/components/ui/input.tsx";
import {GenericFormCard} from "@/components/ui/form-card.tsx";
import {useDispatch, useSelector} from "react-redux";
import {deleteField, saveFields, updateFields} from "@/reducers/FieldSlice.ts";
import {Fields} from "@/model/Fields.ts";

export function Field() {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const fields = useSelector(state => state.field.value)
    const dispatch = useDispatch()

    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        dispatch(
            saveFields({
                fieldId: formData.fieldId,
                fieldName: formData.fieldName,
                fieldLocation: formData.fieldLocation,
                fieldExtent: formData.fieldExtent,
                fieldImage1: formData.fieldImage1,
                fieldImage2: formData.fieldImage2,
            })
        )
    };

    const handleUpdate = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        dispatch(
            updateFields({
                fieldId: formData.fieldId,
                fieldName: formData.fieldName,
                fieldLocation: formData.fieldLocation,
                fieldExtent: formData.fieldExtent,
                fieldImage1: formData.fieldImage1,
                fieldImage2: formData.fieldImage2,
            })
        )
    };

    const handleDelete = (fieldId: string) => {
        dispatch(deleteField(fieldId));
    };

    const fieldFormConfig = {
        title: "Field",
        description: "Enter the details for the new field.",
        fields: [
            { id: "fieldId", label: "Field ID", type: "text", placeholder: "Enter Field ID" },
            { id: "fieldName", label: "Field Name", type: "text", placeholder: "Enter Field Name" },
            { id: "fieldExtent", label: "Location", type: "text", placeholder: "Enter Location" },
            { id: "fieldLocation", label: "Extent Size", type: "text", placeholder: "Enter Extent Size" },
            { id: "fieldImage1", label: "Field Image 1", type: "file" },
            { id: "fieldImage2", label: "Field Image 2", type: "file" },
        ],
    };

    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...fieldFormConfig} onSave={handleSave} onUpdate={handleUpdate}  />

                <div className="inline-flex">
                    <Input className="mr-4"></Input>
                    <Button className="bg-green-500 text-white hover:bg-green-600" >
                        Search
                    </Button>
                </div>
            </div>
            <div className="pt-10">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Field ID</TableHead>
                            <TableHead>Field Name</TableHead>
                            <TableHead>Extent Size</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Field Image 1</TableHead>
                            <TableHead>Field Image 2</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fields.map((field:Fields) => (
                            <TableRow key={field.fieldId}>
                                <TableCell className="font-medium">{field.fieldId}</TableCell>
                                <TableCell>{field.fieldName}</TableCell>
                                <TableCell>{field.fieldExtent}</TableCell>
                                <TableCell>{field.fieldLocation}</TableCell>
                                <TableCell className="columns-3xs		">
                                    <img src={field.fieldImage1} alt={`${field.fieldName} Image 1`} width={50} height={50} />
                                </TableCell>
                                <TableCell className="columns-3xs">
                                    <img src={field.fieldImage2} alt={`${field.fieldName} Image 2`} width={50} height={50} />
                                </TableCell>
                                <TableCell className="columns-auto">
                                    <Button variant="destructive" onClick={() => handleDelete(field.fieldId)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
