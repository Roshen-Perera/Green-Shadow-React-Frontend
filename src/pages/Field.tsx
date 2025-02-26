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
import {Fields} from "@/model/Fields.ts";
import { AppDispatch } from "@/store/Store";
import { addField, deleteField, getField, updateField } from "@/reducers/FieldSlice";
import { useEffect } from "react";

export function Field() {

    const dispatch = useDispatch<AppDispatch>();
    const fields = useSelector((state: { field: Fields[] }) => state.field);


    const handleSave = async (formData: Record<string, string>) => {
        console.log('Form data:', formData);

        const fieldImage1 = (
          document.getElementById("fieldImage1") as HTMLInputElement
        ).files?.[0];
        const fieldImage2 = (
          document.getElementById("fieldImage2") as HTMLInputElement
        ).files?.[0];


        const newForm = new FormData();
        newForm.append("fieldId", formData.fieldId);
        newForm.append("fieldName", formData.fieldName);
        newForm.append("fieldLocation", formData.fieldLocation);
        newForm.append("fieldExtent", formData.fieldExtent);
        

        if (fieldImage1) newForm.append("fieldImage1", fieldImage1);
        if (fieldImage2) newForm.append("fieldImage2", fieldImage2);


        await dispatch(addField(
            newForm
        ));
        await dispatch(getField());
        
    };

    const handleUpdate = async (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        const fieldImage1 = (
          document.getElementById("fieldImage1") as HTMLInputElement
        ).files?.[0];
        const fieldImage2 = (
          document.getElementById("fieldImage2") as HTMLInputElement
        ).files?.[0];

        const newForm = new FormData();
        newForm.append("fieldId", formData.fieldId);
        newForm.append("fieldName", formData.fieldName);
        newForm.append("fieldLocation", formData.fieldLocation);
        newForm.append("fieldExtent", formData.fieldExtent);

        if (fieldImage1) newForm.append("fieldImage1", fieldImage1);
        if (fieldImage2) newForm.append("fieldImage2", fieldImage2);

        await dispatch(updateField(newForm));
        await dispatch(getField());
        
        alert("Field Added Successfully");
    };

    const handleDelete = async (fieldId: string) => {
        await dispatch(deleteField(fieldId));
        await dispatch(getField());
    };

    useEffect(() => {
      if (fields.length === 0) dispatch(getField());
    }, [dispatch, fields.length]);

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
          <GenericFormCard
            {...fieldFormConfig}
            onSave={handleSave}
            onUpdate={handleUpdate}
          />

          <div className="inline-flex">
            <Input className="mr-4"></Input>
            <Button className="bg-green-500 text-white hover:bg-green-600">
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
              {fields
                .filter(
                  (field: Fields, index, self) =>
                    field &&
                    index ===
                    self.findIndex((f: Fields) => f?.fieldId === field?.fieldId)
                )
                .map((field: Fields) => (
                  <TableRow key={field.fieldId}>
                    <TableCell className="font-medium">
                      {field.fieldId}
                    </TableCell>
                    <TableCell>{field.fieldName}</TableCell>
                    <TableCell>{field.fieldExtent}</TableCell>
                    <TableCell>{field.fieldLocation}</TableCell>
                    <TableCell className="columns-3xs">
                      <img
                        src={`data:image/png;base64,${field.fieldImage1}`}
                        width="140"
                      />
                    </TableCell>
                    <TableCell className="columns-3xs">
                      <img
                        src={`data:image/png;base64,${field.fieldImage2}`}
                        width="140"
                      />
                    </TableCell>
                    <TableCell className="columns-auto">
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(field.fieldId)}
                      >
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
