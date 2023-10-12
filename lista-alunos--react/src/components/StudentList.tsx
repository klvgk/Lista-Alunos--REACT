import { Student } from "@/types/Student";

type Props = {
    students: Student[];
}

export const StudentList = ({ students }: Props) => {

    const list = students.map(student =>
        <tr key={student.id} className="flex bg-gray-900 justify-center items-center w-screen text-center border-b-2 border-b-gray-600 p-3">
            <td className="w-[400px] flex flex-row items-center">

                <img className="w-10 h-10 rounded-full" src={student.avatar} alt="avatar" />

                <div className="pl-5 text-left">
                    <div className="font-bold">{student.name}</div>
                    <div>{student.email}</div>
                </div>
            </td>
            <td className="flex-1 justify-center items-center flex ">
                {student.active &&
                    <div className=" border-2 w-20 items-center rounded-lg bg-green-800">Active</div>
                }
                {!student.active &&
                    <div className=" border-2 w-20 items-center rounded-lg bg-red-800">Inactive</div>
                }
            </td>
            <td className="flex-1">{student.grade1}</td>
            <td className="flex-1">{student.grade2}</td>
            <td className="flex-1">
                {student.active && ((student.grade1 + student.grade2) / 2).toFixed(1)}
                {!student.active && '--'}
            </td>
        </tr>
    );

    return (
        <>
            <table className="">
                <thead>
                    <tr className="flex justify-center items-center w-screen bg-sky-950 p-2">
                        <th className="w-[400px]">Name</th>
                        <th className="flex-1">Status</th>
                        <th className="flex-1">Grade 1</th>
                        <th className="flex-1">Grade 2</th>
                        <th className="flex-1">Final Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    );

}