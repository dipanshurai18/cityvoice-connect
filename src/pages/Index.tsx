import Hero from "@/components/Hero";
import IssueReportForm from "@/components/IssueReportForm";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <IssueReportForm />
      <Dashboard />
    </div>
  );
};

export default Index;
