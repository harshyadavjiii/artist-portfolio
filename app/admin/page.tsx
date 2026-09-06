import { redirect } from "next/navigation";
import { isAdmin } from "../../lib/auth";
import AdminEditor from "./admin-editor";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");
  return <AdminEditor />;
}
