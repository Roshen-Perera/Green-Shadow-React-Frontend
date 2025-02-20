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
import {Crops} from "@/model/Crops.ts";
import {deleteCrop, saveCrops, updateCrops} from "@/reducers/CropSlice.ts";

// const crops = [
//     {
//         cropId: "C001",
//         cropName: "North Meadow",
//         cropScientificName: "100 Acres",
//         cropCategory: "Avissawella",
//         cropSeason: "Avissawella",
//         cropImage1: "https://img.freepik.com/premium-photo/summer-cropSeason-rye-plants-against-blue-sky-rye-crop-with-green-unripe-rye-spikelets_252085-13110.jpg?semt=ais_hybrid?",
//         cropFieldId: "F001"
//     }
// ]

export function Crop() {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const crops = useSelector(state => state.crop.value)
    const dispatch = useDispatch()

    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        dispatch(
            saveCrops({
                cropId: formData.cropId,
                cropName: formData.cropName,
                cropScientificName: formData.cropScientificName,
                cropCategory: formData.cropCategory,
                cropSeason: formData.cropSeason,
                cropImage1: formData.cropImage1,
                cropFieldId: formData.cropFieldId,
            })
        )
    };

    const handleUpdate = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        dispatch(
            updateCrops({
                cropId: formData.cropId,
                cropName: formData.cropName,
                cropScientificName: formData.cropScientificName,
                cropCategory: formData.cropCategory,
                cropSeason: formData.cropSeason,
                cropImage1: formData.cropImage1,
                cropFieldId: formData.cropFieldId,
            })
        )
    };

    const handleDelete = (cropId: string) => {
        dispatch(deleteCrop(cropId));
    }

    const cropFormConfig = {
        title: "Crop",
        description: "Enter the details for the new crop.",
        fields: [
            { id: "cropId", label: "Crop ID", type: "text", placeholder: "Enter Crop ID" },
            { id: "cropName", label: "Crop Name", type: "text", placeholder: "Enter Crop Name" },
            { id: "cropScientificName", label: "Scientific", type: "text", placeholder: "Enter Scientific Name" },
            { id: "cropCategory", label: "Category", type: "text", placeholder: "Enter Crop Category" },
            { id: "cropSeason", label: "Season", type: "text", placeholder: "Enter Season" },
            { id: "cropImage1", label: "Crop Image", type: "file" },
            {
                id: "cropFieldId",
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

    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...cropFormConfig} onSave={handleSave} onUpdate={handleUpdate} />

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
                        {crops.map((crop: Crops) => (
                            <TableRow key={crop.cropId}>
                                <TableCell className="font-medium">{crop.cropId}</TableCell>
                                <TableCell>{crop.cropName}</TableCell>
                                <TableCell>{crop.cropScientificName}</TableCell>
                                <TableCell>{crop.cropCategory}</TableCell>
                                <TableCell>{crop.cropSeason}</TableCell>
                                <TableCell className="columns-3xs		">
                                    <img src={crop.cropImage1} alt={`${crop.cropName} Image 1`} width={50} height={50} />
                                </TableCell>
                                <TableCell>{crop.cropFieldId}</TableCell>
                                <TableCell className="columns-auto">
                                    <Button variant="destructive" onClick={() => handleDelete(crop.cropId)}>
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
