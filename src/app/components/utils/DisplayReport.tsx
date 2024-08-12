import styles from "./DisplayReport.module.css";

type ReportData = {
  date: string;
  Goffering: number;
  Coffering: number;
  tithe: number;
  Soffering: number;
  Toffering: number;
  FFoffering: number;
  partnership: number;
};

type DisplayReportProps = {
  SubmittedReport: ReportData | null;
};

const DisplayReport = ({ SubmittedReport }: DisplayReportProps) => {
  if (!SubmittedReport) {
    return <div className={styles.displayText}>No report submitted</div>;
  }
  const totalOfferings =
    SubmittedReport.Goffering +
    SubmittedReport.Coffering +
    SubmittedReport.tithe +
    SubmittedReport.Soffering +
    SubmittedReport.Toffering +
    SubmittedReport.FFoffering +
    SubmittedReport.partnership;
  return (
    <div className={styles.displayReport}>
      <li>Service Date: N{SubmittedReport.date}</li>
      <li>General Offering: N{SubmittedReport.Goffering}</li>
      <li>Children Offering: N{SubmittedReport.Coffering}</li>
      <li>Tithe: N{SubmittedReport.tithe}</li>
      <li>Seed Offering: N{SubmittedReport.Soffering}</li>
      <li>Thanksgiving Offering: N{SubmittedReport.Toffering}</li>
      <li>First Fruit: N{SubmittedReport.FFoffering}</li>
      <li>Partnership: N{SubmittedReport.partnership}</li>
      <li>Total: N{totalOfferings}</li>
    </div>
  );
};

export default DisplayReport;
