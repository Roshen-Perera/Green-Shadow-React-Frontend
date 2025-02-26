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
import { addCrop, deleteCrop, getCrop } from "@/reducers/CropSlice";
import { AppDispatch } from "@/store/Store";
import { useEffect, useState } from "react";
import { updateField } from "@/reducers/FieldSlice";
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

    const dispatch = useDispatch<AppDispatch>();
    const crops = useSelector((state: { crop: Crops[] }) => state.crop);


    const handleSave =  async (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        
        const cropImage1 = (
            document.getElementById("cropImage1") as HTMLInputElement
        ).files?.[0];

        const newForm = new FormData();
        newForm.append("cropId", formData.cropId);
        newForm.append("cropName", formData.cropName);
        newForm.append("cropScientificName", formData.cropScientificName);
        newForm.append("cropCategory", formData.cropCategory);
        newForm.append("cropSeason", formData.cropSeason);
        newForm.append("cropFieldId", formData.cropFieldId);

        if (cropImage1) newForm.append("cropImage1", cropImage1);

        await dispatch(addCrop(newForm));
        await dispatch(getCrop());
    };

    const handleUpdate = async (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        const cropImage1 = (
          document.getElementById("cropImage1") as HTMLInputElement
        ).files?.[0];

        const newForm = new FormData();
        newForm.append("cropId", formData.cropId);
        newForm.append("cropName", formData.cropName);
        newForm.append("cropScientificName", formData.cropScientificName);
        newForm.append("cropCategory", formData.cropCategory);
        newForm.append("cropSeason", formData.cropSeason);
        newForm.append("cropFieldId", formData.cropFieldId);

        if (cropImage1) newForm.append("cropImage1", cropImage1);

        await dispatch(updateField(newForm));
        await dispatch(getCrop());
    };

    const handleDelete = async (cropId: string) => {
        const result = confirm("Want to delete?");
        if (result) {
          await dispatch(deleteCrop(cropId));
        } else {
            return;
        }

       
       await dispatch(getCrop());
    }

    useEffect(() => {
      if (crops.length === 0) dispatch(getCrop());
    }, [dispatch, crops.length]);

    const [fieldOptions, setFieldOptions] = useState([]);

useEffect(() => {
  const token = localStorage.getItem("jwt_token");
  fetch("http://localhost:3000/field/get", {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "", // Add your token if required
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const options = data.map((field: { fieldId: string }) => ({
        value: field.fieldId,
        label: field.fieldId,
      }));
      setFieldOptions(options);
      console.log("Field options:", options);
    })
    .catch((error) => console.error("Error fetching fields:", error));
}, []);

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
                options: fieldOptions, // Dynamically populated options
            },
        ],
    };

    return (
      <div className="pt-20 container mx-auto">
        <div className="flex justify-between items-center">
          <GenericFormCard
            {...cropFormConfig}
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
                <TableHead className="w-[100px]">Crop ID</TableHead>
                <TableHead>Crop Name</TableHead>
                <TableHead>Crop Scientific Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Season</TableHead>
                <TableHead>Crop Image</TableHead>
                <TableHead>Field Id</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                crops
                  .filter(
                    (crop: Crops, index, self) =>
                      crop &&
                      index ===
                        self.findIndex((c: Crops) => c?.cropId === crop?.cropId)
                  )
                  .map((crop: Crops) => (
                    <TableRow key={crop.cropId}>
                      <TableCell className="font-medium">
                        {crop.cropId}
                      </TableCell>
                      <TableCell>{crop.cropName}</TableCell>
                      <TableCell>{crop.cropScientificName}</TableCell>
                      <TableCell>{crop.cropCategory}</TableCell>
                      <TableCell>{crop.cropSeason}</TableCell>
                      <TableCell>
                        <img
                          src={`data:image/png;base64,${crop.cropImage1}`}
                          width="140"
                        />
                      </TableCell>
                      <TableCell>{crop.cropFieldId}</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          onClick={() => handleDelete(crop.cropId)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                };
            </TableBody>
          </Table>
        </div>
      </div>
    );
}