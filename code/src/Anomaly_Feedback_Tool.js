import { useState } from "react";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const anomalies = [
  { id: 1, date: "2024-04-30", account: 1619205, reason: "Large Balance Difference", status: "Pending" },
  { id: 2, date: "2024-03-31", account: 1619206, reason: "Unexpected Credit/Debit Mismatch", status: "Pending" }
];

export default function AnomalyFeedback() {
  const [data, setData] = useState(anomalies);

  const handleFeedback = (id, feedback) => {
    setData(prevData => prevData.map(item => item.id === id ? { ...item, status: feedback } : item));
  };

  return (
    <Card className="p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Anomaly Feedback Tool</h2>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Account</th>
            <th>Reason</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data.map(anomaly => (
            <tr key={anomaly.id}>
              <td>{anomaly.date}</td>
              <td>{anomaly.account}</td>
              <td>{anomaly.reason}</td>
              <td>
                {anomaly.status === "Pending" ? (
                  <>
                    <Button onClick={() => handleFeedback(anomaly.id, "False Positive")} className="mr-2">False Positive</Button>
                    <Button onClick={() => handleFeedback(anomaly.id, "False Negative")} variant="destructive">False Negative</Button>
                  </>
                ) : (
                  <span className="text-green-500">{anomaly.status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}
