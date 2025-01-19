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


export function Equipment() {
    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        // Here you would typically send this data to your backend
    };

    const equipmentFormConfig = {
        title: "Equipment",
        description: "Enter the details for the new equipment.",
        fields: [
            { id: "equipmentId", label: "Equipment ID", type: "text", placeholder: "Enter Equipment ID" },
            { id: "equipmentName", label: "Equipment Name", type: "text", placeholder: "Enter Equipment Name" },
            {
                id: "equipmentType",
                label: "Equipment Type",
                type: "select",
                placeholder: "Select Equipment Type",
                options: [
                    { value: "Electrical", label: "Electrical" },
                    { value: "Mechanical", label: "Mechanical" }
                ]
            },
            {
                id: "equipmentAvailability",
                label: "Equipment Availability",
                type: "select",
                placeholder: "Select Equipment Availability",
                options: [
                    { value: "Available", label: "Available" },
                    { value: "Unavailable", label: "Unavailable" },
                    { value: "UnderMaintenance", label: "UnderMaintenance" }
                ]
            },
            {
                id: "staffId",
                label: "Staff ID",
                type: "select",
                placeholder: "Select Staff ID",
                options: [
                    { value: "S001", label: "S001" },
                    { value: "S002", label: "S002" }
                ]
            },
            {
                id: "fieldId",
                label: "Field ID",
                type: "select",
                placeholder: "Select Field ID",
                options: [
                    { value: "F001", label: "F001" },
                    { value: "F002", label: "F002" }
                ]
            },
        ],
    };

    const equipments = [
        {
            equipmentId: "E001",
            equipmentName: "Harvester",
            equipmentType: "Mechanical",
            equipmentAvailability: "Available",
            staffId: "S001",
            fieldId: "F001",

        }
    ]
    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...equipmentFormConfig} onSave={handleSave} />

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
                            <TableHead className="w-[100px]">Equipment ID</TableHead>
                            <TableHead>Equipment Name</TableHead>
                            <TableHead>Equipment Type</TableHead>
                            <TableHead>Equipment Availability</TableHead>
                            <TableHead>Staff Id</TableHead>
                            <TableHead>Field Id</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {equipments.map((equipment) => (
                            <TableRow key={equipment.equipmentId}>
                                <TableCell className="font-medium">{equipment.equipmentId}</TableCell>
                                <TableCell>{equipment.equipmentName}</TableCell>
                                <TableCell>{equipment.equipmentType}</TableCell>
                                <TableCell>{equipment.equipmentAvailability}</TableCell>
                                <TableCell>{equipment.staffId}</TableCell>
                                <TableCell>{equipment.fieldId}</TableCell>
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
