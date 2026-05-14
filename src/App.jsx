import {

  useEffect,
  useState

} from "react";

import {

  onAuthStateChanged

} from "firebase/auth";

import {

  auth

} from "./firebase/config";

import {

  getEmployeeProfiles

} from "./firebase/firestoreService";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EmployeeDashboard from "./components/EmployeeDashboard";

import {

  logoutUser

} from "./firebase/authService";

export default function App() {

  const [user,
    setUser] =
    useState(null);

  const [role,
    setRole] =
    useState(null);

  const [loading,
    setLoading] =
    useState(true);

  /* AUTH */

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(

        auth,

        async (currentUser) => {

          if (!currentUser) {

            setUser(null);
            setRole(null);
            setLoading(false);

            return;
          }

          setUser(currentUser);

          /* ADMIN */

          if (

            currentUser.email ===
            "admin@pulsehr.com"

          ) {

            setRole("admin");

            setLoading(false);

            return;
          }

          /* EMPLOYEE */

          const profiles =
            await getEmployeeProfiles();

          const employee =
            profiles.find(

              (item) =>

                item.email ===
                currentUser.email

            );

          if (employee) {

            setRole(
              employee.role
            );

          } else {

            setRole(
              "employee"
            );
          }

          setLoading(false);
        }
      );

    return () =>
      unsubscribe();

  }, []);

  /* LOGOUT */

  const handleLogout =
    async () => {

      await logoutUser();

      setUser(null);
      setRole(null);
    };

  /* LOADING */

  if (loading) {

    return (

      <div className="min-h-screen bg-black flex items-center justify-center text-white text-2xl font-black">

        PulseHR AI yükleniyor...

      </div>

    );
  }

  /* LOGIN */

  if (!user) {

    return <Login />;
  }

  /* ADMIN */

  if (role === "admin") {

    return (

      <Dashboard
        handleLogout={handleLogout}
      />

    );
  }

  /* EMPLOYEE */

  return (

    <EmployeeDashboard
      handleLogout={handleLogout}
    />

  );
}