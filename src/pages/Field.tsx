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

export function Field() {
    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
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

    const image = "https://img.freepik.com/premium-photo/summer-season-rye-plants-against-blue-sky-rye-field-with-green-unripe-rye-spikelets_252085-13110.jpg?semt=ais_hybrid"
    const fields = [
        {
            fieldId: "F001",
            fieldName: "North Meadow",
            fieldExtent: "100 Acres",
            fieldLocation: "Avissawella",
            fieldImage1: "https://img.freepik.com/premium-photo/summer-season-rye-plants-against-blue-sky-rye-field-with-green-unripe-rye-spikelets_252085-13110.jpg?semt=ais_hybrid?",
            fieldImage2: image+"?height=50&width=50",
        },
        {
            fieldId: "F002",
            fieldName: "South Pasture",
            fieldExtent: "100 Acres",
            fieldLocation: "Avissawella",
            fieldImage1: image+"?height=50&width=50",
            fieldImage2: image+"?height=50&width=50",
        },
        {
            fieldId: "F003",
            fieldName: "East Orchard",
            fieldExtent: "100 Acres",
            fieldLocation: "Avissawella",
            fieldImage1: image+"?height=50&width=50",
            fieldImage2: image+"?height=50&width=50",
        },
        {
            fieldId: "F004",
            fieldName: "West Vineyard",
            fieldExtent: "100 Acres",
            fieldLocation: "Avissawella",
            fieldImage1: image+"?height=50&width=50",
            fieldImage2: image+"?height=50&width=50",
        },
    ]

    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...fieldFormConfig} onSave={handleSave} />

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
                        {fields.map((field) => (
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
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
