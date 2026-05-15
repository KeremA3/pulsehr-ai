// src/firebase/firestoreService.js

import {

  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp

} from "firebase/firestore";

import {

  db

} from "./config";

/* ================================================= */
/* COLLECTIONS */
/* ================================================= */

const employeeCollection =
  collection(db, "employees");

const attendanceCollection =
  collection(db, "attendance");

const departmentCollection =
  collection(db, "departments");

const employeeProfileCollection =
  collection(db, "employeeProfiles");

/* ================================================= */
/* EMPLOYEES */
/* ================================================= */

export const addEmployee =
  async (employee) => {

    await addDoc(

      employeeCollection,

      {

        ...employee,

        createdAt:
          serverTimestamp()

      }
    );
  };

export const getEmployees =
  async () => {

    const snapshot =
      await getDocs(
        employeeCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };

export const deleteEmployee =
  async (id) => {

    await deleteDoc(

      doc(
        employeeCollection,
        id
      )
    );
  };

/* ================================================= */
/* ATTENDANCE */
/* ================================================= */

export const checkInEmployee =
  async (

    employeeName

  ) => {

    await addDoc(

      attendanceCollection,

      {

        employeeName,

        type: "Giriş",

        time:
          new Date()
            .toLocaleString(),

        createdAt:
          serverTimestamp()

      }
    );
  };

export const checkOutEmployee =
  async (

    employeeName

  ) => {

    await addDoc(

      attendanceCollection,

      {

        employeeName,

        type: "Çıkış",

        time:
          new Date()
            .toLocaleString(),

        createdAt:
          serverTimestamp()

      }
    );
  };

export const getAttendanceLogs =
  async () => {

    const snapshot =
      await getDocs(
        attendanceCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };

/* ================================================= */
/* DEPARTMENTS */
/* ================================================= */

export const getDepartments =
  async () => {

    const snapshot =
      await getDocs(
        departmentCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };

/* ================================================= */
/* EMPLOYEE PROFILES */
/* ================================================= */

export const createEmployeeProfile =
  async (

    email,
    department

  ) => {

    await addDoc(

      employeeProfileCollection,

      {

        email,

        department,

        role: "employee",

        createdAt:
          serverTimestamp()

      }
    );
  };

export const getEmployeeProfiles =
  async () => {

    const snapshot =
      await getDocs(
        employeeProfileCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };/* ================================================= */
/* NOTIFICATIONS */
/* ================================================= */

const notificationCollection =
  collection(
    db,
    "notifications"
  );

/* CREATE NOTIFICATION */

export const createNotification =
  async (

    employeeName,
    message

  ) => {

    await addDoc(

      notificationCollection,

      {

        employeeName,

        message,

        createdAt:
          serverTimestamp()

      }
    );
  };

/* GET NOTIFICATIONS */

export const getNotifications =
  async (
    employeeName
  ) => {

    const snapshot =
      await getDocs(
        notificationCollection
      );

    return snapshot.docs
      .map((doc) => ({

        id: doc.id,

        ...doc.data()

      }))
      .filter(
        (item) =>

          item.employeeName ===
          employeeName
      );
  };/* ================================================= */
/* LEAVE REQUESTS */
/* ================================================= */

const leaveCollection =
  collection(
    db,
    "leaveRequests"
  );

/* CREATE LEAVE */

export const createLeaveRequest =
  async (

    employeeName,
    reason

  ) => {

    await addDoc(

      leaveCollection,

      {

        employeeName,

        reason,

        status: "Bekliyor",

        createdAt:
          serverTimestamp()

      }
    );
  };

/* GET LEAVES */

export const getLeaveRequests =
  async () => {

    const snapshot =
      await getDocs(
        leaveCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };

/* UPDATE STATUS */

export const updateLeaveStatus =
  async (

    id,
    status

  ) => {

    await updateDoc(

      doc(
        leaveCollection,
        id
      ),

      {

        status

      }
    );
  };/* ================================================= */
/* PAYROLL */
/* ================================================= */

const payrollCollection =
  collection(
    db,
    "payroll"
  );

/* CREATE PAYROLL */

export const createPayroll =
  async (

    employeeName,
    salary,
    bonus,
    paymentDate

  ) => {

    await addDoc(

      payrollCollection,

      {

        employeeName,

        salary,

        bonus,

        paymentDate,

        createdAt:
          serverTimestamp()

      }
    );
  };

/* GET PAYROLLS */

export const getPayrolls =
  async () => {

    const snapshot =
      await getDocs(
        payrollCollection
      );

    return snapshot.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      }))
  };