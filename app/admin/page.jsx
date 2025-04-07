import DashboardLayout from "./components/DashboardLayout";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl pt-14 font-bold mb-4">
          Welcome to Your Admin Dashboard
        </h2>
        <p>Use the sidebar to navigate between editing your profile, adding new blogs, or managing existing blogs.</p>
      </div>
    </DashboardLayout>
  );
}
