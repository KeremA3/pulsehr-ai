import { useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs
} from "firebase/firestore";

import { auth, db } from "./firebase";

import LoginPage from "./components/LoginPage";
import Sidebar from "./components/Sidebar";
import EmployeeTable from "./components/EmployeeTable";
import AIAnalytics from "./components/AIAnalytics";
import DashboardCards from "./components/DashboardCards";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";

export default function App() {
  /* AUTH */

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  /* EMPLOYEE ACCOUNT */

  const [employeeEmail,
    setEmployeeEmail] =
    useState("");

  const [employeePassword,
    setEmployeePassword] =
    useState("");

  /* DARK MODE */

  const [darkMode, setDarkMode] =
    useState(false);

  /* EMPLOYEE FORM */

  const [name, setName] =
    useState("");

  const [department,
    setDepartment] =
    useState("Yazılım");

  /* SEARCH */

  const [search, setSearch] =
    useState("");

  const [filterDepartment,
    setFilterDepartment] =
    useState("Tümü");

  /* EMPLOYEES */

  const [employees,
    setEmployees] =
    useState([]);

  /* AUTH STATE */

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          setIsLoggedIn(!!user);

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  /* FETCH EMPLOYEES */

  useEffect(() => {
    const fetchEmployees =
      async () => {
        try {
          const querySnapshot =
            await getDocs(
              collection(
                db,
                "employees"
              )
            );

          const employeeList =
            querySnapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data()
              })
            );

          setEmployees(
            employeeList
          );

        } catch (error) {
          console.log(error);
        }
      };

    fetchEmployees();
  }, []);

  /* LOGIN */

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    } catch (error) {
      alert(error.message);
    }
  };

  /* LOGOUT */

  const handleLogout =
    async () => {
      await signOut(auth);
    };

  /* CREATE EMPLOYEE */

  const addEmployee =
    async () => {
      if (
        !name.trim() ||
        !employeeEmail ||
        !employeePassword
      ) {
        alert(
          "Tüm alanları doldur."
        );

        return;
      }

      try {
        /* CREATE AUTH USER */

        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            employeeEmail,
            employeePassword
          );

        const user =
          userCredential.user;

        /* FIRESTORE SAVE */

        const newEmployee = {
          uid: user.uid,

          name,

          department,

          email: employeeEmail,

          checkIn: null,

          checkOut: null,

          late: false,

          createdAt:
            new Date()
        };

        const docRef =
          await addDoc(
            collection(
              db,
              "employees"
            ),
            newEmployee
          );

        setEmployees([
          ...employees,
          {
            id: docRef.id,
            ...newEmployee
          }
        ]);

        /* RESET */

        setName("");

        setDepartment(
          "Yazılım"
        );

        setEmployeeEmail("");

        setEmployeePassword("");

        alert(
          "Personel hesabı oluşturuldu 🚀"
        );

      } catch (error) {
        console.log(error);

        alert(error.message);
      }
    };

  /* CHECK-IN */

  const checkIn = (id) => {
    const now = new Date();

    const isLate =
      now.getHours() > 9 ||
      (now.getHours() === 9 &&
        now.getMinutes() > 0);

    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              checkIn:
                now.toLocaleTimeString(),
              late: isLate
            }
          : emp
      )
    );
  };

  /* CHECK-OUT */

  const checkOut = (id) => {
    const now = new Date();

    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              checkOut:
                now.toLocaleTimeString()
            }
          : emp
      )
    );
  };

  /* DELETE */

  const deleteEmployee = (id) => {
    setEmployees((prev) =>
      prev.filter(
        (employee) =>
          employee.id !== id
      )
    );
  };

  /* FILTER */

  const filteredEmployees =
    employees.filter(
      (employee) => {
        const matchesSearch =
          employee.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesDepartment =
          filterDepartment ===
          "Tümü"
            ? true
            : employee.department ===
              filterDepartment;

        return (
          matchesSearch &&
          matchesDepartment
        );
      }
    );

  /* AI */

  const totalEmployees =
    employees.length;

  const checkedInEmployees =
    employees.filter(
      (employee) =>
        employee.checkIn
    ).length;

  const lateEmployees =
    employees.filter(
      (employee) =>
        employee.late
    ).length;

  const normalEmployees =
    totalEmployees -
    lateEmployees;

  const riskScore =
    totalEmployees > 0
      ? Math.round(
          (lateEmployees /
            totalEmployees) *
            100
        )
      : 0;

  let aiMessage =
    "Tüm departmanlar normal çalışıyor.";

  let riskColor =
    "text-green-400";

  if (riskScore >= 50) {
    aiMessage =
      "Yüksek risk tespit edildi.";

    riskColor =
      "text-red-400";

  } else if (
    riskScore >= 25
  ) {
    aiMessage =
      "Orta seviye risk tespit edildi.";

    riskColor =
      "text-yellow-400";
  }

  const chartData = [
    {
      name: "Normal",
      value:
        normalEmployees
    },

    {
      name: "Geç",
      value:
        lateEmployees
    }
  ];

  /* LOADING */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-3xl font-bold">
        PulseHR AI Loading...
      </div>
    );
  }

  /* LOGIN */

  if (!isLoggedIn) {
    return (
      <LoginPage
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    );
  }

  /* DASHBOARD */

  return (
    <div
      className={`flex min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <Sidebar />

      <div className="flex-1 p-8">
        {/* TOP BAR */}

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }
              className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              {darkMode
                ? "☀️ Light"
                : "🌙 Dark"}
            </button>

            <button
              onClick={
                handleLogout
              }
              className="bg-red-600 text-white px-5 py-3 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* DASHBOARD */}

        <DashboardCards
          totalEmployees={
            totalEmployees
          }
          checkedInEmployees={
            checkedInEmployees
          }
          lateEmployees={
            lateEmployees
          }
        />

        {/* AI */}

        <AIAnalytics
          riskScore={
            riskScore
          }
          riskColor={
            riskColor
          }
          aiMessage={
            aiMessage
          }
          chartData={
            chartData
          }
        />

        {/* FORM */}

        <EmployeeForm
          name={name}
          setName={setName}
          department={
            department
          }
          setDepartment={
            setDepartment
          }
          employeeEmail={
            employeeEmail
          }
          setEmployeeEmail={
            setEmployeeEmail
          }
          employeePassword={
            employeePassword
          }
          setEmployeePassword={
            setEmployeePassword
          }
          addEmployee={
            addEmployee
          }
        />

        {/* FILTER */}

        <SearchFilter
          search={search}
          setSearch={
            setSearch
          }
          filterDepartment={
            filterDepartment
          }
          setFilterDepartment={
            setFilterDepartment
          }
        />

        {/* TABLE */}

        <EmployeeTable
          filteredEmployees={
            filteredEmployees
          }
          checkIn={
            checkIn
          }
          checkOut={
            checkOut
          }
          deleteEmployee={
            deleteEmployee
          }
        />
      </div>
    </div>
  );
}