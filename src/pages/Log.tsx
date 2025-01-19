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


export function Log() {
    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        // Here you would typically send this data to your backend
    };

    const logFormConfig = {
        title: "Log",
        description: "Enter the details for the new log.",
        fields: [
            { id: "logId", label: "Log ID", type: "text", placeholder: "Enter Log ID" },
            { id: "logDate", label: "Log Date", type: "date"},
            { id: "logObservation", label: "Log Observation", type: "text", placeholder: "Enter Log Observation" },
            { id: "logImage", label: "Log Image", type: "file" },
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
            {
                id: "cropId",
                label: "Crop ID",
                type: "select",
                placeholder: "Select Crop ID",
                options: [
                    { value: "C001", label: "C001" },
                    { value: "C002", label: "C002" }
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
            }
        ],
    };

    const logs = [
        {
            logId: "C001",
            logDate: "North Meadow",
            logObservation: "100 Acres",
            logImage: "https://img.freepik.com/premium-photo/summer-season-rye-plants-against-blue-sky-rye-log-with-green-unripe-rye-spikelets_252085-13110.jpg?semt=ais_hybrid?",
            fieldId: "F001",
            cropId: "C001",
            staffId: "S001"
        }
    ]
    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...logFormConfig} onSave={handleSave} />

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
                            <TableHead className="w-[100px]">Log ID</TableHead>
                            <TableHead>Log Date</TableHead>
                            <TableHead>Log Observation</TableHead>
                            <TableHead>Log Image</TableHead>
                            <TableHead>Field Id</TableHead>
                            <TableHead>Crop Id</TableHead>
                            <TableHead>Staff Id</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {logs.map((log) => (
                            <TableRow key={log.logId}>
                                <TableCell className="font-medium">{log.logId}</TableCell>
                                <TableCell>{log.logDate}</TableCell>
                                <TableCell>{log.logObservation}</TableCell>
                                <TableCell className="columns-3xs		">
                                    <img src={log.logImage} alt={`${log.logObservation} Image 1`} width={50} height={50} />
                                </TableCell>
                                <TableCell>{log.fieldId}</TableCell>
                                <TableCell>{log.cropId}</TableCell>
                                <TableCell>{log.staffId}</TableCell>
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
