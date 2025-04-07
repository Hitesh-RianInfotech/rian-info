import DashboardLayout from "./components/DashboardLayout";
import { TrendingUp, Users, FileText, Calendar, ArrowUp, ArrowDown } from "lucide-react";

export default function AdminDashboard() {
  // Sample data for dashboard stats
  const stats = [
    { 
      title: "Total Visitors", 
      value: "24.5K", 
      change: "+12.4%", 
      trend: "up", 
      icon: Users, 
      color: "bg-blue-500" 
    },
    { 
      title: "Published Posts", 
      value: "42", 
      change: "+8.2%", 
      trend: "up", 
      icon: FileText, 
      color: "bg-indigo-500" 
    },
    { 
      title: "Engagement Rate", 
      value: "18.3%", 
      change: "-2.4%", 
      trend: "down", 
      icon: TrendingUp, 
      color: "bg-purple-500" 
    },
    { 
      title: "Latest Post", 
      value: "2 days ago", 
      change: "", 
      trend: "neutral", 
      icon: Calendar, 
      color: "bg-pink-500" 
    }
  ];

  // Sample data for recent activities
  const recentActivities = [
    { action: "New comment on", target: "Getting Started with React", time: "2 hours ago" },
    { action: "Published article", target: "Best Practices for SEO", time: "Yesterday" },
    { action: "Updated profile", target: "Bio and avatar", time: "2 days ago" },
    { action: "Responded to comment on", target: "Building Modern UIs", time: "3 days ago" }
  ];

  return (
    <DashboardLayout>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header section with greeting and date */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, Admin</h1>
          <p className="text-gray-500 mt-2">Here's what's happening with your blog today.</p>
        </div>

        {/* Stats cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <p className="text-2xl font-bold mt-1 text-gray-800">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-lg p-2 text-white`}>
                  <stat.icon size={20} />
                </div>
              </div>
              {stat.change && (
                <div className="mt-2 flex items-center">
                  {stat.trend === "up" ? (
                    <ArrowUp size={14} className="text-green-500" />
                  ) : stat.trend === "down" ? (
                    <ArrowDown size={14} className="text-red-500" />
                  ) : null}
                  <span className={`text-sm ml-1 ${
                    stat.trend === "up" ? "text-green-500" : 
                    stat.trend === "down" ? "text-red-500" : ""
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-400 text-sm ml-1">vs last month</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content area with quick actions and recent activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick actions panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Post
              </button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Moderate Comments
              </button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                Update Profile
              </button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                View Analytics
              </button>
            </div>
          </div>

          {/* Recent activity panel */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <p className="text-gray-800">
                      {activity.action} <span className="font-medium">{activity.target}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View all activity</a>
            </div>
          </div>
        </div>

        {/* Footer with help text */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">Need help? Check out our <a href="#" className="text-blue-600 hover:underline">documentation</a> or <a href="#" className="text-blue-600 hover:underline">contact support</a>.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}