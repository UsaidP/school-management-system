import React from "react";

const NAVIGATION_ITEMS = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Teachers", path: "/teachers" },
  {
    label: "Students/Classes",
    path: "/students",
    subItems: [
      { label: "All students", path: "/students/all" },
      { label: "Admission form", path: "/students/admission" },
      { label: "Student promotion", path: "/students/promotion" },
      { label: "Class", path: "/students/class" },
    ],
  },
  { label: "Billing", path: "/billing" },
  { label: "Settings and profile", path: "/settings" },
];

const NavigationItem = ({ label, badge }) => (
  <div className="flex items-center justify-center gap-x-4 py-2 px-4 rounded hover:bg-blue-900 transition-colors">
    <div className="font-semibold">{label}</div>
    {badge && (
      <div className="rounded-lg bg-blue-200 h-screen px-2 text-center text-xs text-blue-950">
        {badge}
      </div>
    )}
  </div>
);

const Sidebar = () => (
  <nav className="flex  min-w-96 flex-col text-left bg-fedral_blue text-white">
    <div className=" p-9 flex justify-center font-semibold">
      <a href="/">
        <img src="./logo.png" alt="logo" width={60} height={60} />
      </a>
    </div>

    <div className="flex flex-col space-y-2 p-4 items-start">
      {NAVIGATION_ITEMS.map((item) => (
        <div key={item.path}>
          <NavigationItem label={item.label} badge={item.badge} />
          {item.subItems && (
            <div className=" my-2 flex flex-col space-y-2 mx-4 min-w-48 bg-fedral_blue-700 p-3 rounded items-start">
              {item.subItems.map((subItem) => (
                <NavigationItem key={subItem.path} label={subItem.label} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </nav>
);

const Home = ({ className = "" }) => {
  return (
    <div className="flex min-h-screen bg-light_cyan-800">
      <Sidebar />
      <main className="flex-1 p-12">
        <h1 className="font-inter text-3xl font-semibold">All students</h1>
      </main>
    </div>
  );
};

export default Home;
