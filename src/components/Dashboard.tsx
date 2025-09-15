import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertTriangle, BarChart3 } from "lucide-react";

// Mock data for demonstration
const MOCK_STATS = {
  total: 15420,
  completed: 8765,
  pending: 4821,
  inProgress: 1834
};

const STATE_DATA = [
  { state: "Maharashtra", total: 2341, completed: 1456, pending: 652, inProgress: 233 },
  { state: "Uttar Pradesh", total: 1987, completed: 1123, pending: 578, inProgress: 286 },
  { state: "Karnataka", total: 1654, completed: 987, pending: 445, inProgress: 222 },
  { state: "Gujarat", total: 1432, completed: 876, pending: 398, inProgress: 158 },
  { state: "Tamil Nadu", total: 1298, completed: 789, pending: 356, inProgress: 153 },
  { state: "West Bengal", total: 1156, completed: 698, pending: 312, inProgress: 146 },
  { state: "Rajasthan", total: 1087, completed: 645, pending: 298, inProgress: 144 },
  { state: "Andhra Pradesh", total: 987, completed: 598, pending: 267, inProgress: 122 },
  { state: "Telangana", total: 876, completed: 534, pending: 234, inProgress: 108 },
  { state: "Bihar", total: 789, completed: 456, pending: 223, inProgress: 110 },
];

const ISSUE_TYPES_STATS = [
  { type: "Road Potholes", completed: 2145, pending: 876, icon: "🕳️" },
  { type: "Garbage Management", completed: 1987, pending: 654, icon: "🗑️" },
  { type: "Streetlight Issues", completed: 1654, pending: 532, icon: "💡" },
  { type: "Water Management", completed: 1432, pending: 498, icon: "💧" },
  { type: "Traffic Issues", completed: 1547, pending: 461, icon: "🚦" },
];

const Dashboard = () => {
  const completionRate = Math.round((MOCK_STATS.completed / MOCK_STATS.total) * 100);

  return (
    <section id="dashboard" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            National Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the progress of civic issues across Indian states
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{MOCK_STATS.total.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Across all states</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-civic-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-civic-green">{MOCK_STATS.completed.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{completionRate}% completion rate</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Clock className="h-4 w-4 text-civic-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-civic-orange">{MOCK_STATS.inProgress.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Being resolved</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <AlertTriangle className="h-4 w-4 text-civic-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-civic-red">{MOCK_STATS.pending.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Awaiting action</p>
            </CardContent>
          </Card>
        </div>

        {/* State-wise Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle>State-wise Progress</CardTitle>
              <CardDescription>Issues completion status by state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {STATE_DATA.map((state) => {
                  const completionRate = Math.round((state.completed / state.total) * 100);
                  return (
                    <div key={state.state} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{state.state}</span>
                        <span className="text-sm text-muted-foreground">{completionRate}%</span>
                      </div>
                      <Progress value={completionRate} className="h-2" />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Total: {state.total}</span>
                        <div className="flex gap-4">
                          <span className="text-civic-green">✓ {state.completed}</span>
                          <span className="text-civic-orange">⏳ {state.inProgress}</span>
                          <span className="text-civic-red">⚠ {state.pending}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle>Issue Categories</CardTitle>
              <CardDescription>Breakdown by issue type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ISSUE_TYPES_STATS.map((issue) => (
                  <div key={issue.type} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{issue.icon}</span>
                      <div>
                        <div className="font-medium text-foreground">{issue.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {issue.completed + issue.pending} total issues
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-civic-green border-civic-green">
                        ✓ {issue.completed}
                      </Badge>
                      <Badge variant="outline" className="text-civic-red border-civic-red">
                        ⚠ {issue.pending}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <Card className="bg-gradient-success/10 border-civic-green/20 shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-civic-green">Success Stories</CardTitle>
            <CardDescription>Real impact from citizen reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-civic-green mb-2">2,340</div>
                <div className="text-sm text-muted-foreground">Potholes Fixed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-civic-green mb-2">1,876</div>
                <div className="text-sm text-muted-foreground">Streetlights Repaired</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-civic-green mb-2">987</div>
                <div className="text-sm text-muted-foreground">Waste Issues Resolved</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;