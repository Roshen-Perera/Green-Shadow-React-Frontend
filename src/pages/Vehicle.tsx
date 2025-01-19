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


export function Vehicle() {
    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        // Here you would typically send this data to your backend
    };

    const vehicleFormConfig = {
        title: "Vehicle",
        description: "Enter the details for the new vehicle.",
        fields: [
            { id: "vehicleId", label: "Vehicle ID", type: "text", placeholder: "Enter Vehicle ID" },
            { id: "vehiclePlateNumber", label: "Vehicle Name", type: "text", placeholder: "Enter Vehicle Name" },
            {
                id: "vehicleCategory",
                label: "Vehicle Category",
                type: "select",
                placeholder: "Select Vehicle Category",
                options: [
                    { value: "car", label: "Car" },
                    { value: "motorcycle", label: "Motorcycle" },
                    { value: "bus", label: "Bus" },
                    { value: "bicycle", label: "Bicycle" },
                    { value: "van", label: "Van" },
                    { value: "suv", label: "SUV" },
                    { value: "pickup", label: "Pickup Truck" },
                    { value: "truck", label: "Truck" },
                    { value: "lorry", label: "Lorry" },
                    { value: "tractor", label: "Tractor" },
                    { value: "trailer", label: "Trailer" },
                    { value: "minivan", label: "Minivan" },
                ]
            },
            {
                id: "fuelType",
                label: "Fuel Type",
                type: "select",
                placeholder: "Select Fuel Type",
                options: [
                    { value: "petrol", label: "Petrol" },
                    { value: "diesel", label: "Diesel" },
                    { value: "electric", label: "Electric" },
                    { value: "hybrid", label: "Hybrid (Petrol/Electric)" },
                    { value: "cng", label: "CNG (Compressed Natural Gas)" },
                    { value: "lng", label: "LNG (Liquefied Natural Gas)" },
                    { value: "lpg", label: "LPG (Liquefied Petroleum Gas)" },
                    { value: "ethanol", label: "Ethanol" },
                    { value: "biodiesel", label: "Biodiesel" },
                    { value: "hydrogen", label: "Hydrogen" },
                    { value: "kerosene", label: "Kerosene" },
                    { value: "solar", label: "Solar" },
                ]
            },
            {
                id: "vehicleAvailability",
                label: "Vehicle Availability",
                type: "select",
                placeholder: "Select Vehicle Availability",
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
            { id: "vehicleRemarks", label: "Vehicle Remarks", type: "text", placeholder: "Enter Vehicle Remarks" },
        ],
    };

    const vehicles = [
        {
            vehicleId: "V001",
            vehiclePlateNumber: "LY-5495",
            vehicleCategory: "Lorry",
            fuelType: "Diesel",
            vehicleAvailability: "Available",
            staffId: "S001",
            vehicleRemarks: "vehicles",
        }
    ]
    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...vehicleFormConfig} onSave={handleSave} />

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
                            <TableHead className="w-[100px]">Vehicle ID</TableHead>
                            <TableHead>Vehicle Plate Number</TableHead>
                            <TableHead>Vehicle Category</TableHead>
                            <TableHead>Fuel Type</TableHead>
                            <TableHead>Vehicle Availability</TableHead>
                            <TableHead>Staff Id</TableHead>
                            <TableHead>Vehicle Remarks</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {vehicles.map((vehicle) => (
                            <TableRow key={vehicle.vehicleId}>
                                <TableCell className="font-medium">{vehicle.vehicleId}</TableCell>
                                <TableCell>{vehicle.vehiclePlateNumber}</TableCell>
                                <TableCell>{vehicle.vehicleCategory}</TableCell>
                                <TableCell>{vehicle.fuelType}</TableCell>
                                <TableCell>{vehicle.vehicleAvailability}</TableCell>
                                <TableCell>{vehicle.staffId}</TableCell>
                                <TableCell>{vehicle.vehicleRemarks}</TableCell>
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
