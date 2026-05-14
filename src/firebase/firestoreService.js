import {

  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  updateDoc

} from "firebase/firestore";

import {

  db

} from "./config";

/* EMPLOYEES */

const employeeCollection =
  collection(
    db,
    "employees"
  );

/* GET EMPLOYEES */

export const getEmployees =
  async () => {

    const data =
      await getDocs(
        employeeCollection
      );

    return data.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      })
    );
  };

/* ADD EMPLOYEE */

export const addEmployee =
  async (
    employee
  ) => {

    await addDoc(

      employeeCollection,

      employee

    );
  };

/* DELETE EMPLOYEE */

export const deleteEmployee =
  async (id) => {

    const employeeDoc =
      doc(
        db,
        "employees",
        id
      );

    await deleteDoc(
      employeeDoc
    );
  };

/* ATTENDANCE */

const attendanceCollection =
  collection(
    db,
    "attendance"
  );

/* CHECK IN */

export const checkInEmployee =
  async (
    employeeName
  ) => {

    const now =
      new Date();

    await addDoc(

      attendanceCollection,

      {

        employeeName,

        type: "check-in",

        createdAt:
          serverTimestamp(),

        hour:
          now.getHours(),

        minute:
          now.getMinutes()

      }
    );
  };

/* CHECK OUT */

export const checkOutEmployee =
  async (
    employeeName
  ) => {

    const now =
      new Date();

    await addDoc(

      attendanceCollection,

      {

        employeeName,

        type: "check-out",

        createdAt:
          serverTimestamp(),

        hour:
          now.getHours(),

        minute:
          now.getMinutes()

      }
    );
  };

/* GET ATTENDANCE */

export const getAttendanceLogs =
  async () => {

    const q =
      query(

        attendanceCollection,

        orderBy(
          "createdAt",
          "desc"
        )

      );

    const data =
      await getDocs(q);

    return data.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      })
    );
  };

/* LEAVE REQUESTS */

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

        status: "Beklemede",

        createdAt:
          serverTimestamp()

      }
    );
  };

/* GET LEAVES */

export const getLeaveRequests =
  async () => {

    const data =
      await getDocs(
        leaveCollection
      );

    return data.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      })
    );
  };

/* UPDATE LEAVE STATUS */

export const updateLeaveStatus =
  async (

    id,
    status

  ) => {

    const leaveDoc =
      doc(

        db,
        "leaveRequests",
        id

      );

    await updateDoc(

      leaveDoc,

      {

        status

      }
    );
  };

/* NOTIFICATIONS */

const notificationCollection =
  collection(
    db,
    "notifications"
  );

/* CREATE NOTIFICATION */

export const createNotification =
  async (

    user,
    message

  ) => {

    await addDoc(

      notificationCollection,

      {

        user,

        message,

        createdAt:
          serverTimestamp()

      }
    );
  };

/* GET NOTIFICATIONS */

export const getNotifications =
  async (
    user
  ) => {

    const data =
      await getDocs(
        notificationCollection
      );

    return data.docs
      .map((doc) => ({

        id: doc.id,

        ...doc.data()

      }))
      .filter(
        (item) =>
          item.user === user
      );
  };const payrollCollection =
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

/* GET PAYROLL */

export const getPayrolls =
  async () => {

    const data =
      await getDocs(
        payrollCollection
      );

    return data.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      })
    );
  };

/* GET EMPLOYEE PAYROLL */

export const getEmployeePayroll =
  async (
    employeeName
  ) => {

    const data =
      await getDocs(
        payrollCollection
      );

    return data.docs
      .map((doc) => ({

        id: doc.id,

        ...doc.data()

      }))
      .filter(
        (item) =>
          item.employeeName ===
          employeeName
      );
  };const employeeProfileCollection =
  collection(
    db,
    "employeeProfiles"
  );

/* CREATE EMPLOYEE PROFILE */

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

/* GET EMPLOYEE PROFILE */

export const getEmployeeProfiles =
  async () => {

    const data =
      await getDocs(
        employeeProfileCollection
      );

    return data.docs.map(
      (doc) => ({

        id: doc.id,

        ...doc.data()

      })
    );
  };