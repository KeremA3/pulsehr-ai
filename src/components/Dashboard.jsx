import { useState } from "react";

import ModernSidebar from "./ModernSidebar";
import GlassTopbar from "./GlassTopbar";
import CinematicHero from "./CinematicHero";
import ModernStats from "./ModernStats";
import EmployeeManager from "./EmployeeManager";
import AIAnalytics from "./AIAnalytics";
import NotificationCenter from "./NotificationCenter";
import LeaveManagement from "./LeaveManagement";
import AdvancedCharts from "./AdvancedCharts";
import PremiumSectionHeader from "./PremiumSectionHeader";
import QuickActions from "./QuickActions";
import PageTransition from "./PageTransition";
import FloatingBackground from "./FloatingBackground";
import SystemSettings from "./SystemSettings";
import MobileBottomBar from "./MobileBottomBar";
import RealtimeActivityFeed from "./RealtimeActivityFeed";

import AttendancePanel from "./AttendancePanel";
import AdminAttendancePanel from "./AdminAttendancePanel";
import AdminLeavePanel from "./AdminLeavePanel";
import CreateEmployeeAccount from "./CreateEmployeeAccount";
import PayrollManagement from "./PayrollManagement";
import CalendarSystem from "./CalendarSystem";

export default function Dashboard({ handleLogout }) {

  const [activeSection, setActiveSection] = useState("Genel Bakış");

  const renderSection = () => {
    switch (activeSection) {

      case "Çalışanlar":
        return (
          <PageTransition>
            <PremiumSectionHeader
              title="Çalışanlar"
              description="Kurumsal çalışan yönetim sistemini yönetin."
            />
            <EmployeeManager />
          </PageTransition>
        );

      case "Analitik":
        return (
          <PageTransition>
            <div className="space-y-8">
              <PremiumSectionHeader
                title="Analitik"
                description="Gerçek zamanlı yapay zeka destekli analiz sistemleri."
              />
              <QuickActions />
              <AIAnalytics />
              <AdvancedCharts />
            </div>
          </PageTransition>
        );

      case "Bildirimler":
        return (
          <PageTransition>
            <PremiumSectionHeader
              title="Bildirimler"
              description="Canlı sistem bildirimleri ve workforce uyarıları."
            />
            <NotificationCenter />
          </PageTransition>
        );

      case "İzin Yönetimi":
        return (
          <PageTransition>
            <PremiumSectionHeader
              title="İzin Yönetimi"
              description="Premium çalışan izin takip sistemi."
            />
            <LeaveManagement />
          </PageTransition>
        );

      case "Ayarlar":
        return (
          <PageTransition>
            <div className="space-y-8">
              <PremiumSectionHeader
                title="Ayarlar"
                description="Kurumsal sistem tercihlerini yönetin."
              />
              <SystemSettings />
            </div>
          </PageTransition>
        );

      default:
        return (
          <PageTransition>
            <div className="space-y-8">
              <CinematicHero />
              <QuickActions />
              <ModernStats />
              <RealtimeActivityFeed />
              <AttendancePanel />
              <AdminAttendancePanel />
              <AdminLeavePanel />
              <CreateEmployeeAccount />
              <PayrollManagement />
              <CalendarSystem />
            </div>
          </PageTransition>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#081120] to-black text-white flex overflow-hidden relative">

      {/* FLOATING BACKGROUND */}
      <FloatingBackground />

      {/* SIDEBAR */}
      <ModernSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* CONTENT */}
      <div className="flex-1 p-4 lg:p-10 overflow-y-auto relative z-10 pb-[120px] lg:pb-10">

        {/* TOPBAR */}
        <GlassTopbar handleLogout={handleLogout} />

        {/* PAGE */}
        <div className="mt-8">
          {renderSection()}
        </div>

      </div>

      {/* MOBILE BAR */}
      <MobileBottomBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

    </div>
  );
}