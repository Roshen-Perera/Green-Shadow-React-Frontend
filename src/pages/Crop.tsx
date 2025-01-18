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
const handleSave = (formData: Record<string, string>) => {
    console.log('Form data:', formData);
    // Here you would typically send this data to your backend
};

const cropFormConfig = {
    title: "Crop",
    description: "Enter the details for the new crop.",
    fields: [
        { id: "cropId", label: "Crop ID", type: "text", placeholder: "Enter Crop ID" },
        { id: "cropName", label: "Crop Name", type: "text", placeholder: "Enter Crop Name" },
        { id: "cropScientificName", label: "Crop Name", type: "text", placeholder: "Enter Crop Name" },
        { id: "category", label: "Location", type: "text", placeholder: "Enter Location" },
        { id: "season", label: "Extent Size", type: "text", placeholder: "Enter Extent Size" },
        { id: "cropImage1", label: "Crop Image 1", type: "file" },
        {
            id: "fieldId",
            label: "Field ID",
            type: "select",
            placeholder: "Select Field ID",
            options: [
                { value: "F001", label: "F001" },
                { value: "F002", label: "F002" }
            ]
        }
    ],
};

const crops = [
    {
        cropId: "C001",
        cropName: "North Meadow",
        cropScientificName: "100 Acres",
        category: "Avissawella",
        season: "Avissawella",
        cropImage1: "https://img.freepik.com/premium-photo/summer-season-rye-plants-against-blue-sky-rye-crop-with-green-unripe-rye-spikelets_252085-13110.jpg?semt=ais_hybrid?",
        fieldId: "F001"
    }
]

export function Crop() {
    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...cropFormConfig} onSave={handleSave} />

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
                            <TableHead className="w-[100px]">Crop ID</TableHead>
                            <TableHead>Crop Name</TableHead>
                            <TableHead>Crop Scientific Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Season</TableHead>
                            <TableHead>Crop Image</TableHead>
                            <TableHead>Field Id</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {crops.map((crop) => (
                            <TableRow key={crop.cropId}>
                                <TableCell className="font-medium">{crop.cropId}</TableCell>
                                <TableCell>{crop.cropName}</TableCell>
                                <TableCell>{crop.cropScientificName}</TableCell>
                                <TableCell>{crop.category}</TableCell>
                                <TableCell>{crop.season}</TableCell>
                                <TableCell className="columns-3xs		">
                                    <img src={crop.cropImage1} alt={`${crop.cropName} Image 1`} width={50} height={50} />
                                </TableCell>
                                <TableCell>{crop.fieldId}</TableCell>
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
