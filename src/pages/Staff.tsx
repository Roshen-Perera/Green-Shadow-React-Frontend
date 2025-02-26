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
import { AppDispatch } from "@/store/Store";
import { useDispatch, useSelector } from "react-redux";
import Staffs from "@/model/Staffs";
import { addStaff, deleteStaff, getStaff, updateStaff } from "@/reducers/StaffSlice";
import { useEffect } from "react";

export function Staff() {

    const dispatch = useDispatch<AppDispatch>();
    const staffs = useSelector((state: { staff:Staffs[] }) => state.staff);


    const handleSave = async (formData: Record<string, string>) => {
        console.log('Form data:', formData);
        

        await dispatch(addStaff(
          {
            staffId: formData.staffId,
            firstName: formData.firstName,
            lastName: formData.secondName,
            designation: formData.designation,
            gender: formData.gender,
            dob: formData.dob,
            joinedDate: formData.joinedDate,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            addressLine3: formData.addressLine3,
            addressLine4: formData.addressLine4,
            addressLine5: formData.addressLine5,
            contactNo: formData.contactNo,
            email: formData.email,
            role: formData.role,
            staffFieldId: formData.staffFieldId
          }  
        ));
        await dispatch(getStaff());
    };

    const handleDelete = async (staffId: string) => {
        await dispatch(deleteStaff(staffId));
        await dispatch(getStaff());
    };

    const handleUpdate = async (formData: Record<string, string>) => {
      console.log("Form data:", formData);

      await dispatch(
        updateStaff({
          staffId: formData.staffId,
          firstName: formData.firstName,
          lastName: formData.secondName,
          designation: formData.designation,
          gender: formData.gender,
          dob: formData.dob,
          joinedDate: formData.joinedDate,
          addressLine1: formData.addressLine1,
          addressLine2: formData.addressLine2,
          addressLine3: formData.addressLine3,
          addressLine4: formData.addressLine4,
          addressLine5: formData.addressLine5,
          contactNo: formData.contactNo,
          email: formData.email,
          role: formData.role,
          staffFieldId: formData.staffFieldId,
        })
      );
      await dispatch(getStaff());
    };


    useEffect(() => {
      if (staffs.length === 0) dispatch(getStaff());
    }, [dispatch, staffs.length]);

    const staffFormConfig = {
      title: "Staff",
      description: "Enter the details for the new crop.",
      fields: [
        {
          id: "staffId",
          label: "Staff ID",
          type: "text",
          placeholder: "Enter Staff ID",
        },
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter First Name",
        },
        {
          id: "secondName",
          label: "Second Name",
          type: "text",
          placeholder: "Enter Second Name",
        },
        {
          id: "designation",
          label: "Designation",
          type: "text",
          placeholder: "Enter Designation",
        },
        {
          id: "gender",
          label: "Gender",
          type: "select",
          placeholder: "Select Gender",
          options: [
            { value: "MALE", label: "MALE" },
            { value: "FEMALE", label: "FEMALE" },
          ],
        },
        { id: "dob", label: "Date of birth", type: "date" },
        { id: "joinedDate", label: "Joined Date", type: "date" },
        {
          id: "addressLine1",
          label: "Building no or name",
          type: "text",
          placeholder: "Enter Building number or name",
        },
        {
          id: "addressLine2",
          label: "Street or lane",
          type: "text",
          placeholder: "Enter Street or lane",
        },
        {
          id: "addressLine3",
          label: "Main city",
          type: "text",
          placeholder: "Enter Main city",
        },
        {
          id: "addressLine4",
          label: "Main state",
          type: "text",
          placeholder: "Enter Main state",
        },
        {
          id: "addressLine5",
          label: "Postal code",
          type: "text",
          placeholder: "Enter Postal code",
        },
        {
          id: "contactNo",
          label: "Contact No",
          type: "text",
          placeholder: "Enter Contact No",
        },
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter Email Address",
        },
        {
          id: "role",
          label: "Role",
          type: "select",
          placeholder: "Select Role ID",
          options: [
            { value: "ADMIN", label: "ADMIN" },
            { value: "MANAGER", label: "MANAGER" },
            { value: "SCIENTIST", label: "SCIENTIST" },
          ],
        },
        {
          id: "staffFieldId",
          label: "staff",
          type: "select",
          placeholder: "Select staff ID",
          options: [
            { value: "F001", label: "F001" },
            { value: "F002", label: "F002" },
          ],
        },
      ],
    };

    return (
      <div className="pt-20 container mx-auto">
        <div className="flex justify-between items-center">
          <GenericFormCard
            {...staffFormConfig}
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
              {staffs
                .filter(
                  (staff: Staffs, index, self) =>
                    staff &&
                    index ===
                    self.findIndex((s: Staffs) => s?.staffId === staff?.staffId)
                )
                .map((staff: Staffs) => (
                  <TableRow key={staff.staffId}>
                    <TableCell className="font-medium">
                      {staff.staffId}
                    </TableCell>
                    <TableCell>{staff.firstName}</TableCell>
                    <TableCell>{staff.lastName}</TableCell>
                    <TableCell>{staff.designation}</TableCell>
                    <TableCell>{staff.gender}</TableCell>
                    <TableCell>{staff.dob}</TableCell>
                    <TableCell>{staff.joinedDate}</TableCell>
                    <TableCell>{staff.addressLine1}</TableCell>
                    <TableCell>{staff.addressLine2}</TableCell>
                    <TableCell>{staff.addressLine3}</TableCell>
                    <TableCell>{staff.addressLine4}</TableCell>
                    <TableCell>{staff.addressLine5}</TableCell>
                    <TableCell>{staff.contactNo}</TableCell>
                    <TableCell>{staff.email}</TableCell>
                    <TableCell className="columns-auto">
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(staff.staffId)}
                      >
                        Delete
                      </Button>{" "}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
}
