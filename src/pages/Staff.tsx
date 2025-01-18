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

export function Staff() {
    const handleSave = (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        // Here you would typically send this data to your backend
    };

    const staffFormConfig = {
        title: "Staff",
        description: "Enter the details for the new crop.",
        fields: [
            { id: "staffId", label: "Staff ID", type: "text", placeholder: "Enter Staff ID" },
            { id: "firstName", label: "First Name", type: "text", placeholder: "Enter First Name" },
            { id: "secondName", label: "Second Name", type: "text", placeholder: "Enter Second Name" },
            { id: "designation", label: "Designation", type: "text", placeholder: "Enter Designation" },
            {
                id: "gender",
                label: "Gender",
                type: "select",
                placeholder: "Select Gender",
                options: [
                    { value: "MALE", label: "MALE" },
                    { value: "FEMALE", label: "FEMALE" }
                ]
            },
            { id: "dob", label: "Date of birth", type: "date" },
            { id: "joinedDate", label: "Joined Date", type: "date" },
            { id: "address1", label: "Building no or name", type: "text", placeholder: "Enter Building number or name" },
            { id: "address2", label: "Street or lane", type: "text", placeholder: "Enter Street or lane" },
            { id: "address3", label: "Main city", type: "text", placeholder: "Enter Main city" },
            { id: "address4", label: "Main state", type: "text", placeholder: "Enter Main state" },
            { id: "address5", label: "Postal code", type: "text", placeholder: "Enter Postal code" },
            { id: "contactNo", label: "Contact No", type: "text", placeholder: "Enter Contact No" },
            { id: "staffEmail", label: "Email", type: "email", placeholder: "Enter Email Address" },
            {
                id: "role",
                label: "Role",
                type: "select",
                placeholder: "Select Role ID",
                options: [
                    { value: "ADMIN", label: "ADMIN" },
                    { value: "MANAGER", label: "MANAGER" },
                    { value: "SCIENTIST", label: "SCIENTIST" },
                ]
            },
            {
                id: "fieldId",
                label: "Field",
                type: "select",
                placeholder: "Select Field ID",
                options: [
                    { value: "F001", label: "F001" },
                    { value: "F002", label: "F002" }
                ]
            },
        ],
    };

    const staffs = [
        {
            staffId: "S001",
            firstName: "Roshen",
            secondName: "Perera",
            designation: "CEO",
            gender: "MALE",
            dob: "11/07/2005",
            joinedDate: "01/04/2025",
            address1: "No 28/D",
            address2: "Rathnapura Road",
            address3: "Diurumpitiya",
            address4: "Getahaththa",
            address5: "70620",
            contactNo: "0760199035",
            staffEmail: "roshenpilishiyanperera@gmail.com",
            role: "ADMIN",
            fieldId: "F001"
        }
    ]

    return (
        <div className="pt-20 container mx-auto">

            <div className="flex justify-between items-center">
                <GenericFormCard {...staffFormConfig} onSave={handleSave} />

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
                            <TableHead className="w-[100px]">Staff ID</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Second Name</TableHead>
                            <TableHead>Designation</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Date of Birth</TableHead>
                            <TableHead>Joined Date</TableHead>
                            <TableHead>Building no or name</TableHead>
                            <TableHead>Street or lane</TableHead>
                            <TableHead>Main city</TableHead>
                            <TableHead>Main state</TableHead>
                            <TableHead>Postal code</TableHead>
                            <TableHead>Contact No</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {staffs.map((staff) => (
                            <TableRow key={staff.staffId}>
                                <TableCell className="font-medium">{staff.staffId}</TableCell>
                                <TableCell>{staff.firstName}</TableCell>
                                <TableCell>{staff.secondName}</TableCell>
                                <TableCell>{staff.designation}</TableCell>
                                <TableCell>{staff.gender}</TableCell>
                                <TableCell>{staff.dob}</TableCell>
                                <TableCell>{staff.joinedDate}</TableCell>
                                <TableCell>{staff.address1}</TableCell>
                                <TableCell>{staff.address2}</TableCell>
                                <TableCell>{staff.address3}</TableCell>
                                <TableCell>{staff.address4}</TableCell>
                                <TableCell>{staff.address5}</TableCell>
                                <TableCell>{staff.contactNo}</TableCell>
                                <TableCell>{staff.staffEmail}</TableCell>
                                <TableCell className="columns-auto"><Button variant="destructive">Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
