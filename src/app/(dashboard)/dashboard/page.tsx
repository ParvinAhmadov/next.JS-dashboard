
"use client"
import Table from "@/components/Loading/table";
import { useRequest } from "@/http/axiosFetcher";
export default function Dashboard() {
    const { data, isLoading, error } = useRequest("listdata", {
        module: "listApi",
        method: "GET",
      });
    // const columns = [
    //     { header: "Project Name", access: "name" },
    //     { header: "Description", access: "desc" },
    //     { header: "Team", access: "teamimg1" }, 
    //     { header: "Assigned Date", access: "assigneddate" },
    //     { header: "Due Date", access: "duedata" },
    //     { header: "Status", access: "status" },
    //     { header: "Priority", access: "priority" },
    // ];
    return (
        <div className="container-fluid">
            <Table  />
        </div>
    )
}