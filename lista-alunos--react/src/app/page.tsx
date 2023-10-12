import { StudentList } from "@/components/StudentList";
import { students } from "@/data/students";

function Page() {
  return (
    <StudentList students={students}/>
  )
}

export default Page;