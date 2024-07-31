import SidebarStudent from "../../../components/layout/students/sidebar";
import TopBarStudents from "../../../components/layout/students/topbar-students";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#FAF9F9]">
      <SidebarStudent />
      <TopBarStudents />
      <main className="min-h-screen h-full max-w-[calc(100vw-20rem)] ml-80 mt-20">{children}</main>
    </div>
  );
}

export default layout;
